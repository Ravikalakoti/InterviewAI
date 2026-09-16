from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import UserProfile, DOMAIN_CHOICES


class RegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)
    first_name = forms.CharField(max_length=50)
    last_name = forms.CharField(max_length=50)
    domain = forms.ChoiceField(choices=DOMAIN_CHOICES)
    experience_years = forms.IntegerField(
        min_value=0,
        max_value=50,
        initial=0
    )

    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'email',
            'password1',
            'password2'
        ]

    def save(self, commit=True):
        user = super().save(commit=False)

        user.email = self.cleaned_data['email']
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
        fields = ['domain', 'experience_years', 'bio']
