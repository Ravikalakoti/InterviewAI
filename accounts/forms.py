from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import UserProfile, DOMAIN_CHOICES


class RegisterForm(UserCreationForm):

    email = forms.EmailField(required=True)

    first_name = forms.CharField(
        max_length=50,
        required=True
    )

    last_name = forms.CharField(
        max_length=50,
        required=True
    )

    domain = forms.ChoiceField(
        choices=DOMAIN_CHOICES
    )

    experience_years = forms.IntegerField(
        min_value=0,
        max_value=50,
        initial=0
    )

    class Meta:
        model = User
        fields = [
            'first_name',
            'last_name',
            'email',
            'password1',
            'password2',
        ]

    def clean_email(self):
        email = self.cleaned_data['email'].strip().lower()

        if User.objects.filter(email__iexact=email).exists():
            raise forms.ValidationError(
                'An account with this email already exists.'
            )

        return email

    def save(self, commit=True):
        user = super().save(commit=False)

        email = self.cleaned_data['email']

        # Use email as Django username as well
        user.username = email
        user.email = email

        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']

        if commit:
            user.save()

            UserProfile.objects.update_or_create(
                user=user,
                defaults={
                    'domain': self.cleaned_data['domain'],
                    'experience_years': self.cleaned_data['experience_years'],
                }
            )

        return user


class ProfileUpdateForm(forms.ModelForm):

    class Meta:
        model = UserProfile
        fields = [
            'domain',
            'experience_years',
            'bio'
        ]
