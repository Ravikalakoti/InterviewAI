from django.urls import path
from . import views

urlpatterns = [
    path('start/', views.start_interview, name='start_interview'),
    path('question/<int:session_id>/', views.interview_question, name='interview_question'),
    path('complete/<int:session_id>/', views.complete_interview, name='complete_interview'),
    path('result/<int:session_id>/', views.interview_result, name='interview_result'),
    path('history/', views.history, name='history'),
]
