"""
Uses NLP-style keyword matching, answer length analysis, and structured feedback
"""
import re
from difflib import SequenceMatcher

def calculate_score(question, user_answer):
    """
    Score a user's answer out of 10 using multiple heuristics:
    1. Keyword coverage (40%)
    2. Answer length & structure (20%)
    3. Clarity & coherence (20%)
    4. Specificity indicators (20%)
    """
    if not user_answer or len(user_answer.strip()) < 10:
        return 0.0, generate_feedback(question, user_answer, 0, [])

    answer_lower = user_answer.lower()
    score = 0.0

    # 1. Keyword Coverage (40%)
    keywords = question.get_keywords()
    matched_keywords = []
    if keywords:
        for kw in keywords:
            if kw in answer_lower or _fuzzy_match(kw, answer_lower):
                matched_keywords.append(kw)
        keyword_score = (len(matched_keywords) / len(keywords)) * 4.0
    else:
        keyword_score = 2.0  # no keywords defined, give partial credit
    score += keyword_score

    # 2. Length & Structure Score (20%)
    word_count = len(user_answer.split())
    if word_count < 20:
        length_score = 0.5
    elif word_count < 50:
        length_score = 1.0
    elif word_count < 100:
        length_score = 1.5
    elif word_count < 200:
        length_score = 2.0
    else:
        length_score = 1.8  # too long, slight penalty
    score += length_score

    # 3. Clarity indicators (20%)
    clarity_score = 0.0
    structure_indicators = ['first', 'second', 'finally', 'for example', 'such as', 'because',
                            'therefore', 'however', 'additionally', 'in conclusion', 'as a result',
                            'i believe', 'in my experience', 'specifically', 'for instance']
    found = sum(1 for ind in structure_indicators if ind in answer_lower)
    clarity_score = min(2.0, found * 0.5)
    score += clarity_score

    # 4. Specificity - numbers, metrics, named things (20%)
    specificity_score = 0.0
    has_numbers = bool(re.search(r'\b\d+\b', user_answer))
    has_percent = bool(re.search(r'\d+%', user_answer))
    if has_numbers:
        specificity_score += 1.0
    if has_percent:
        specificity_score += 0.5
    # Named examples
    example_words = ['project', 'team', 'company', 'client', 'deadline', 'result', 'achieved', 'improved']
    if any(w in answer_lower for w in example_words):
        specificity_score += 0.5
    score += min(2.0, specificity_score)

    final_score = round(min(10.0, score), 1)
    feedback = generate_feedback(question, user_answer, final_score, matched_keywords)
    return final_score, feedback

def _fuzzy_match(keyword, text):
    words = text.split()
    for word in words:
        ratio = SequenceMatcher(None, keyword, word).ratio()
        if ratio > 0.8:
            return True
    return False

def generate_feedback(question, user_answer, score, matched_keywords):
    feedback_parts = []
    word_count = len(user_answer.split()) if user_answer else 0
    keywords = question.get_keywords()
    missed_keywords = [k for k in keywords if k not in matched_keywords]

    # Score-based overall comment
    if score >= 8:
        feedback_parts.append("✅ Excellent answer! You covered the key points clearly and with good structure.")
    elif score >= 6:
        feedback_parts.append("👍 Good answer. You touched on the main ideas but there's room to elaborate.")
    elif score >= 4:
        feedback_parts.append("⚠️ Decent start, but your answer needs more depth and specific examples.")
    elif score >= 2:
        feedback_parts.append("❌ Your answer was too brief or missed most of the key points.")
    else:
        feedback_parts.append("❌ Please provide a more detailed and relevant answer.")

    # Length feedback
    if word_count < 30:
        feedback_parts.append("📝 Tip: Try to give a more detailed answer (aim for at least 50 words).")
    elif word_count > 250:
        feedback_parts.append("📝 Tip: Try to be more concise. Interviewers prefer focused answers.")

    # Missed keywords
    if missed_keywords:
        feedback_parts.append(f"💡 Key concepts to mention next time: {', '.join(missed_keywords[:4])}.")

    # Ideal answer points
    if question.ideal_answer_points:
        feedback_parts.append(f"\n📋 Ideal answer should cover:\n{question.ideal_answer_points}")

    return "\n".join(feedback_parts)

def get_performance_level(avg_score):
    if avg_score >= 8:
        return "Expert", "🏆"
    elif avg_score >= 6:
        return "Proficient", "⭐"
    elif avg_score >= 4:
        return "Developing", "📈"
    else:
        return "Beginner", "🌱"
