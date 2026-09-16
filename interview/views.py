from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.utils import timezone
from django.http import JsonResponse
from .models import Question, InterviewSession, SessionQuestion
from .ai_engine import calculate_score, get_performance_level
import random

def home(request):
    return render(request, 'interview/home.html')

@login_required
def dashboard(request):
    completed = InterviewSession.objects.filter(user=request.user, status='completed').order_by('-started_at')
    sessions = InterviewSession.objects.filter(user=request.user).order_by('-started_at')[:10]
    avg_score = 0
    if completed.exists():
        avg_score = round(sum(s.score for s in completed) / completed.count(), 1)
    level, emoji = get_performance_level(avg_score)
    context = {
        'sessions': sessions,
        'total_sessions': completed.count(),
        'avg_score': avg_score,
        'level': level,
        'emoji': emoji,
        'profile': request.user.profile,
    }
    return render(request, 'interview/dashboard.html', context)

@login_required
def start_interview(request):
    if request.method == 'POST':
        domain = request.POST.get('domain', request.user.profile.domain)
        difficulty = request.POST.get('difficulty', 'medium')
        num_questions = int(request.POST.get('num_questions', 5))

        questions = list(Question.objects.filter(domain=domain, difficulty=difficulty))
        if len(questions) < num_questions:
            questions += list(Question.objects.filter(domain=domain).exclude(difficulty=difficulty))
        if not questions:
            questions = list(Question.objects.all())
        if not questions:
            messages.error(request, 'No questions available. Please contact admin.')
            return redirect('dashboard')

        random.shuffle(questions)
        selected = questions[:num_questions]

        session = InterviewSession.objects.create(
            user=request.user,
            domain=domain,
            difficulty=difficulty,
            total_questions=len(selected),
        )
        for i, q in enumerate(selected):
            SessionQuestion.objects.create(session=session, question=q, order=i)

        return redirect('interview_question', session_id=session.id)

    domains = Question.objects.values_list('domain', flat=True).distinct()
    return render(request, 'interview/start.html', {'domains': domains})

@login_required
def interview_question(request, session_id):
    session = get_object_or_404(InterviewSession, id=session_id, user=request.user)
    if session.status == 'completed':
        return redirect('interview_result', session_id=session.id)

    sq_list = list(session.session_questions.all())
    idx = session.current_question_index

    if idx >= len(sq_list):
        return redirect('complete_interview', session_id=session.id)

    current_sq = sq_list[idx]

    if request.method == 'POST':
        answer = request.POST.get('answer', '').strip()
        time_taken = int(request.POST.get('time_taken', 0))
        score, feedback = calculate_score(current_sq.question, answer)

        current_sq.user_answer = answer
        current_sq.score = score
        current_sq.feedback = feedback
        current_sq.time_taken_seconds = time_taken
        current_sq.answered_at = timezone.now()
        current_sq.save()

        session.current_question_index += 1
        session.save()

        if session.current_question_index >= session.total_questions:
            return redirect('complete_interview', session_id=session.id)

        return redirect('interview_question', session_id=session.id)

    context = {
        'session': session,
        'sq': current_sq,
        'question_number': idx + 1,
        'total': session.total_questions,
        'progress': session.get_progress_percent(),
    }
    return render(request, 'interview/question.html', context)

@login_required
def complete_interview(request, session_id):
    session = get_object_or_404(InterviewSession, id=session_id, user=request.user)
    if session.status != 'completed':
        answered = session.session_questions.filter(score__isnull=False)
        if answered.exists():
            avg = sum(sq.score for sq in answered) / answered.count()
            session.score = round(avg, 1)
        session.status = 'completed'
        session.completed_at = timezone.now()
        session.save()
        # Update user profile stats
        profile = request.user.profile
        profile.total_sessions += 1
        all_sessions = InterviewSession.objects.filter(user=request.user, status='completed')
        profile.avg_score = round(sum(s.score for s in all_sessions) / all_sessions.count(), 1)
        profile.save()
    return redirect('interview_result', session_id=session.id)

@login_required
def interview_result(request, session_id):
    session = get_object_or_404(InterviewSession, id=session_id, user=request.user)
    sq_list = session.session_questions.all()
    level, emoji = get_performance_level(session.score)
    context = {
        'session': session,
        'sq_list': sq_list,
        'level': level,
        'emoji': emoji,
    }
    return render(request, 'interview/result.html', context)

@login_required
def history(request):
    sessions = InterviewSession.objects.filter(user=request.user, status='completed').order_by('-completed_at')
    return render(request, 'interview/history.html', {'sessions': sessions})

def about(request):
    return render(request, 'interview/about.html')
