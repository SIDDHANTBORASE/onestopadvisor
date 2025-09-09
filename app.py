from flask import Flask, render_template, request, jsonify, session, redirect, url_for
import os
import json
import random
from datetime import datetime, timedelta

app = Flask(__name__)
app.secret_key = 'career_advisor_secret_key_2025'

# Sample data for the career advisor
STREAMS = {
    'science': {
        'name': 'Science',
        'subjects': ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
        'careers': ['Engineer', 'Doctor', 'Researcher', 'Data Scientist', 'Pharmacist']
    },
    'commerce': {
        'name': 'Commerce',
        'subjects': ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
        'careers': ['Chartered Accountant', 'Business Analyst', 'Banker', 'Entrepreneur', 'Financial Advisor']
    },
    'arts': {
        'name': 'Arts/Humanities',
        'subjects': ['History', 'Geography', 'Political Science', 'Psychology', 'Literature'],
        'careers': ['Civil Servant', 'Journalist', 'Teacher', 'Lawyer', 'Social Worker']
    }
}

COURSES = {
    'btech': {'name': 'B.Tech', 'duration': '4 years', 'stream': 'science', 'jobs': ['Software Engineer', 'Civil Engineer', 'Mechanical Engineer']},
    'mbbs': {'name': 'MBBS', 'duration': '5.5 years', 'stream': 'science', 'jobs': ['Doctor', 'Surgeon', 'Medical Officer']},
    'bcom': {'name': 'B.Com', 'duration': '3 years', 'stream': 'commerce', 'jobs': ['Accountant', 'Tax Consultant', 'Bank Officer']},
    'bba': {'name': 'BBA', 'duration': '3 years', 'stream': 'commerce', 'jobs': ['Business Manager', 'HR Executive', 'Marketing Executive']},
    'ba': {'name': 'B.A.', 'duration': '3 years', 'stream': 'arts', 'jobs': ['Teacher', 'Content Writer', 'Government Officer']},
    'bsc': {'name': 'B.Sc', 'duration': '3 years', 'stream': 'science', 'jobs': ['Lab Technician', 'Research Assistant', 'Quality Analyst']}
}

GOVT_COLLEGES = [
    {'name': 'Government Engineering College', 'location': 'Mumbai', 'courses': ['btech'], 'cutoff': 85},
    {'name': 'Government Medical College', 'location': 'Delhi', 'courses': ['mbbs'], 'cutoff': 95},
    {'name': 'Government Commerce College', 'location': 'Bangalore', 'courses': ['bcom', 'bba'], 'cutoff': 75},
    {'name': 'Government Arts College', 'location': 'Chennai', 'courses': ['ba'], 'cutoff': 70},
    {'name': 'Government Science College', 'location': 'Pune', 'courses': ['bsc'], 'cutoff': 80}
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/aptitude-test')
def aptitude_test():
    return render_template('aptitude_test.html')

@app.route('/submit-aptitude', methods=['POST'])
def submit_aptitude():
    answers = request.form.to_dict()
    
    # Simple scoring algorithm
    science_score = 0
    commerce_score = 0
    arts_score = 0
    
    for key, value in answers.items():
        if 'science' in value.lower() or 'math' in value.lower() or 'technical' in value.lower():
            science_score += 1
        elif 'business' in value.lower() or 'money' in value.lower() or 'finance' in value.lower():
            commerce_score += 1
        else:
            arts_score += 1
    
    # Determine recommended stream
    scores = {'science': science_score, 'commerce': commerce_score, 'arts': arts_score}
    recommended_stream = max(scores, key=scores.get)
    
    session['aptitude_result'] = {
        'recommended_stream': recommended_stream,
        'scores': scores,
        'stream_info': STREAMS[recommended_stream]
    }
    
    return redirect(url_for('results'))

@app.route('/results')
def results():
    if 'aptitude_result' not in session:
        return redirect(url_for('aptitude_test'))
    
    result = session['aptitude_result']
    recommended_courses = [course for course_id, course in COURSES.items() 
                          if course['stream'] == result['recommended_stream']]
    
    return render_template('results.html', result=result, courses=recommended_courses)

@app.route('/course-explorer')
def course_explorer():
    return render_template('course_explorer.html', courses=COURSES, streams=STREAMS)

@app.route('/college-finder')
def college_finder():
    return render_template('college_finder.html', colleges=GOVT_COLLEGES)

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/timeline')
def timeline():
    # Sample timeline data
    timeline_events = [
        {'date': '2025-03-15', 'event': 'Engineering Entrance Exam Registration Opens'},
        {'date': '2025-04-10', 'event': 'Medical Entrance Exam Registration Deadline'},
        {'date': '2025-05-20', 'event': 'Commerce College Admissions Begin'},
        {'date': '2025-06-15', 'event': 'Arts Stream Counseling Starts'}
    ]
    
    return render_template('timeline.html', events=timeline_events)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        return jsonify({'status': 'success', 'message': 'Thank you for contacting us! We will get back to you soon.'})
    return render_template('contact.html')

if __name__ == '__main__':
    # Bind to all interfaces (0.0.0.0) for Replit compatibility
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)