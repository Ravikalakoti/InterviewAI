from django.db import models
from django.contrib.auth.models import User

DIFFICULTY_CHOICES = [('easy', 'Easy'), ('medium', 'Medium'), ('hard', 'Hard')]
CATEGORY_CHOICES = [
    ('behavioral', 'Behavioral'),
    ('technical', 'Technical'),
    ('situational', 'Situational'),
    ('hr', 'HR'),
]

class Question(models.Model):
    domain = models.CharField(max_length=50)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)
    text = models.TextField()
    hint = models.TextField(blank=True)
    ideal_keywords = models.TextField(help_text="Comma-separated keywords for scoring", blank=True)
    ideal_answer_points = models.TextField(blank=True, help_text="Bullet points of ideal answer")

    def get_keywords(self):
        return [k.strip().lower() for k in self.ideal_keywords.split(',') if k.strip()]

    def __str__(self):
        return f"[{self.domain}] {self.text[:60]}"

class InterviewSession(models.Model):
    STATUS_CHOICES = [('active', 'Active'), ('completed', 'Completed')]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sessions')
    domain = models.CharField(max_length=50)
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)
    total_questions = models.IntegerField(default=5)
    current_question_index = models.IntegerField(default=0)
    score = models.FloatField(default=0)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    started_at = models.DateTimeField(auto_now_add=True)
    completed_at = models.DateTimeField(null=True, blank=True)

    def get_progress_percent(self):
        if self.total_questions == 0:
            return 0
        return int((self.current_question_index / self.total_questions) * 100)

    def __str__(self):
        return f"{self.user.username} - {self.domain} - {self.status}"

class SessionQuestion(models.Model):
    session = models.ForeignKey(InterviewSession, on_delete=models.CASCADE, related_name='session_questions')
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    order = models.IntegerField()
    user_answer = models.TextField(blank=True)
    score = models.FloatField(null=True, blank=True)
    feedback = models.TextField(blank=True)
    time_taken_seconds = models.IntegerField(default=0)
    answered_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Session {self.session.id} - Q{self.order}"
