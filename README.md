# 🧠 AI Interview Simulator — Django Full Stack

An AI-style interview simulation platform built with Django.

No external AI API is required — the application uses a built-in NLP-style scoring engine to evaluate interview answers based on keyword coverage, structure, clarity, and specificity.

## 🌐 Live Demo

**Live Application:** [InterviewAI](https://interviewai-w527.onrender.com/)

> Note: The free Render instance may take a few seconds to wake up after inactivity.

---

## ✨ Features

* ✅ User Registration & Login
* ✅ Domain & Experience-based User Profiles
* ✅ 5+ Career Domains:

  * Software Development
  * Data Science
  * Product Management
  * Marketing
  * HR
* ✅ 3 Difficulty Levels:

  * Easy
  * Medium
  * Hard
* ✅ Built-in AI-style Scoring Engine
* ✅ Keyword Coverage Analysis
* ✅ Answer Structure & Clarity Analysis
* ✅ Specificity & Example Detection
* ✅ Instant Feedback
* ✅ Ideal Answer Guidance
* ✅ Interview Session History
* ✅ Progress Tracking
* ✅ Performance Dashboard
* ✅ Django Admin Panel for Managing Questions
* ✅ Responsive Frontend

---

## 🛠️ Tech Stack

* **Backend:** Python, Django
* **Database:** SQLite
* **Frontend:** HTML, CSS, JavaScript
* **Authentication:** Django Authentication
* **Static Files:** WhiteNoise
* **Deployment:** Render
* **Application Server:** Gunicorn

---

## 🚀 Setup

### 1. Clone the Repository

```bash
git clone git@github.com:Ravikalakoti/InterviewAI.git
cd InterviewAI
```

### 2. Create a Virtual Environment

```bash
python -m venv env
```

Activate the virtual environment:

**macOS / Linux:**

```bash
source env/bin/activate
```

**Windows:**

```bash
env\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run Database Migrations

```bash
python manage.py migrate
```

### 5. Load Sample Interview Questions

```bash
python manage.py loaddata interview/fixtures/questions.json
```

### 6. Start the Development Server

```bash
python manage.py runserver
```

Open the application:

```text
http://127.0.0.1:8000/
```

---

## 🔐 Admin Panel

The Django Admin Panel is available at:

```text
http://127.0.0.1:8000/admin/
```

Create an administrator account using:

```bash
python manage.py createsuperuser
```

After logging in, interview questions can be managed from:

**Admin → Questions**

New questions can be added without modifying the application code.

---

## 📊 Scoring Algorithm

The scoring engine is implemented in:

```text
interview/ai_engine.py
```

Each interview answer is evaluated using multiple factors.

### 1. Keyword Coverage — 40%

Checks whether the answer contains relevant domain-specific keywords.

### 2. Answer Length & Structure — 20%

Evaluates whether the answer has an appropriate length and basic structure.

### 3. Clarity Indicators — 20%

Checks for structure and transition words that improve answer clarity.

### 4. Specificity — 20%

Looks for concrete examples, numbers, metrics, and specific details.

### Score

Each question receives a score from **0–10**.

The final interview score is calculated using the average score across the completed questions.

---

## 📁 Project Structure

```text
InterviewAI/
├── core/                    # Django project settings & URLs
├── accounts/                # Authentication & user profiles
├── interview/               # Interview logic & scoring
│   ├── ai_engine.py         # Built-in scoring engine
│   ├── fixtures/            # Sample interview questions
│   └── models.py            # Interview models
├── templates/               # HTML templates
├── static/
│   └── css/                 # Application styling
├── build.sh                 # Render deployment build script
├── manage.py
├── requirements.txt
└── README.md
```

---

## ☁️ Deployment

The application is deployed using **Render**.

### Build Command

```bash
pip install -r requirements.txt && ./build.sh
```

### Start Command

```bash
gunicorn core.wsgi:application
```

### Build Script

The `build.sh` script performs static file collection and database migrations:

```bash
#!/usr/bin/env bash
set -o errexit

python manage.py collectstatic --no-input
python manage.py migrate
```

### Static Files

Django static files are collected using:

```bash
python manage.py collectstatic --no-input
```

**WhiteNoise** is used to serve static files in production.

---

## 🤝 Contributing

Contributions are welcome!

Please follow the workflow below when contributing to the project.

### 1. Fork the Repository

Create your own fork of the project.

### 2. Clone Your Fork

```bash
git clone <your-fork-url>
cd InterviewAI
```

### 3. Create a Feature Branch

Create a separate branch for your feature or bug fix.

```bash
git checkout -b feature/your-feature-name
```

For example:

```bash
git checkout -b feature/improve-scoring
```

### 4. Make Your Changes

Develop and test your changes locally.

### 5. Commit Your Changes

```bash
git add .
git commit -m "Improve interview scoring"
```

### 6. Push Your Feature Branch

```bash
git push origin feature/improve-scoring
```

### 7. Create a Pull Request

Open a **Pull Request from your feature branch to the project's `develop` branch**.

Example:

```text
feature/improve-scoring → develop
```

Please include:

* What you changed
* Why the change was needed
* Testing details
* Screenshots, if applicable

### 8. Review & Merge

The contribution will be reviewed before being merged into `develop`.

The `develop` branch is used for development and testing.

Once changes have been tested and are ready for production, they can be merged:

```text
develop → main
```

The `main` branch represents the stable production version of the application.

---

## 🔄 Branching Strategy

The project follows a simple feature-based Git workflow:

```text
feature/*
    ↓
   dev
    ↓
   main
    ↓
 Render
```

* **`feature/*`** — Individual features and bug fixes
* **`dev`** — Development and testing
* **`main`** — Stable production branch

Contributors should create their own feature branch and submit a Pull Request to `dev`.

---

## 👨‍💻 Author

**Ravi Singh Kalakoti**

Django / Python Backend Developer

GitHub: [Ravikalakoti](https://github.com/Ravikalakoti)
