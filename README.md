# 🧠 AI Interview Simulator — Django Full Stack

No external AI API required. Built-in scoring engine using NLP-style keyword matching.

## Features
- ✅ User Registration & Login (with domain/experience profile)
- ✅ 5+ Career Domains: Software, Data Science, Product, Marketing, HR
- ✅ 3 difficulty levels: Easy, Medium, Hard
- ✅ AI Scoring Engine (keyword coverage, structure, specificity)
- ✅ Instant feedback with ideal answer guidance
- ✅ Session history & progress tracking
- ✅ Dashboard with performance levels

## Setup

```bash
pip install django
python manage.py migrate
python manage.py loaddata interview/fixtures/questions.json
python manage.py runserver
```

## Admin Panel
URL: http://127.0.0.1:8000/admin/
Username: admin | Password: admin123

Add more questions via Admin → Questions (no code needed!)

## Project Structure
```
interview_simulator/
├── core/              # Django project settings & URLs
├── accounts/          # Login, Register, Profile
├── interview/         # Interview sessions, AI scoring, results
│   ├── ai_engine.py   # Scoring logic (no external API)
│   ├── fixtures/      # Sample questions (15 included)
│   └── models.py      # Question, Session, SessionQuestion
├── templates/         # All HTML templates
└── static/css/        # Dark theme CSS
```

## Scoring Algorithm (ai_engine.py)
1. Keyword Coverage (40%) — matches domain-specific terms
2. Answer Length & Structure (20%) — optimal 50-200 words
3. Clarity Indicators (20%) — structure words, transitions
4. Specificity (20%) — numbers, metrics, examples

Score: 0-10 per question, averaged for session score.
