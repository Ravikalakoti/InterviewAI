from django.contrib import admin
from .models import Question, InterviewSession, SessionQuestion

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ['domain', 'category', 'difficulty', 'text']
    list_filter = ['domain', 'category', 'difficulty']
    search_fields = ['text']

@admin.register(InterviewSession)
class SessionAdmin(admin.ModelAdmin):
    list_display = ['user', 'domain', 'difficulty', 'score', 'status', 'started_at']

@admin.register(SessionQuestion)
class SessionQuestionAdmin(admin.ModelAdmin):
    list_display = ['session', 'order', 'score']
