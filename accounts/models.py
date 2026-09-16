from django.db import models
from django.contrib.auth.models import User

DOMAIN_CHOICES = [
    ('software', 'Software Engineering'),
    ('data_science', 'Data Science / ML'),
    ('product', 'Product Management'),
    ('design', 'UI/UX Design'),
    ('marketing', 'Marketing'),
    ('finance', 'Finance / Accounting'),
    ('hr', 'Human Resources'),
    ('sales', 'Sales'),
    ('other', 'Other'),
]

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    domain = models.CharField(max_length=50, choices=DOMAIN_CHOICES, default='software')
    experience_years = models.IntegerField(default=0)
    bio = models.TextField(blank=True)
    total_sessions = models.IntegerField(default=0)
    avg_score = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.domain}"
