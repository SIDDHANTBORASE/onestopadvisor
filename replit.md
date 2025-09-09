# Career & Education Advisor

## Overview
Career & Education Advisor is a comprehensive Flask web platform designed to guide students in making informed career decisions after Class 10 or 12. The application addresses the critical gap in career awareness by providing personalized guidance, course-to-career mapping, government college directory, and timeline tracking for admissions.

## Project Structure
```
career-education-advisor/
├── app.py                    # Main Flask application with career guidance logic
├── requirements.txt          # Python dependencies
├── templates/               # HTML templates
│   ├── base.html            # Base template with navigation
│   ├── index.html           # Homepage with platform overview
│   ├── aptitude_test.html   # Aptitude assessment quiz
│   ├── results.html         # Personalized career recommendations
│   ├── course_explorer.html # Course and career path mapping
│   ├── college_finder.html  # Government colleges directory
│   ├── timeline.html        # Admission deadlines and important dates
│   ├── about.html           # About the platform and mission
│   └── contact.html         # Contact page
├── static/                  # Static assets
│   ├── css/
│   │   └── style.css        # Custom CSS styles
│   └── js/
│       └── main.js          # JavaScript functionality
└── replit.md               # This documentation file
```

## Features

### Core Functionality
- **Aptitude Assessment**: Interactive quiz to determine student interests and strengths
- **Personalized Recommendations**: AI-driven suggestions for streams and courses
- **Course-to-Career Mapping**: Visual pathways showing career opportunities for each course
- **Government College Directory**: Location-based search with cut-off requirements
- **Timeline Tracker**: Important admission dates and scholarship deadlines
- **Responsive Design**: Mobile-first approach using Bootstrap 5

### Educational Streams Covered
- **Science**: Engineering, Medical, Research careers
- **Commerce**: Business, Finance, Accounting careers  
- **Arts/Humanities**: Teaching, Civil Services, Social Work careers

### College Information
- Cut-off marks and eligibility criteria
- Course availability and duration
- Facilities information (hostel, library, labs)
- Contact details and application process

## Technology Stack
- **Backend**: Flask (Python web framework) with session management
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Bootstrap 5 for responsive design
- **Icons**: Font Awesome 6.0 for professional icons
- **Assessment Engine**: Custom scoring algorithm for aptitude evaluation
- **Data Storage**: In-memory data structures (can be extended to database)
- **Development**: Python 3.11
- **Production**: Gunicorn WSGI server

## Development Setup
The application is configured to run on Replit with:
- Development server on port 5000
- Auto-restart enabled for development
- All static files properly served

## Deployment Configuration
- Deployment target: Autoscale (for stateless web applications)
- Production server: Gunicorn with optimal settings
- Port binding: 0.0.0.0:5000 for Replit compatibility

## Recent Changes
- **2025-09-09**: Complete transformation from basic advisor to comprehensive career platform
  - Implemented aptitude assessment system with 5-question quiz
  - Built course-to-career mapping for Science, Commerce, and Arts streams
  - Created government college directory with sample institutions
  - Added timeline tracker for admission deadlines and entrance exams
  - Developed personalized recommendation engine
  - Redesigned all UI/UX to focus on student guidance
  - Integrated session management for storing user results

## User Preferences
- Clean, professional design
- Responsive mobile-first approach
- Modern web standards compliance

## Project Architecture

### Application Flow
1. **Student Assessment**: Aptitude test determines interests and strengths
2. **Recommendation Engine**: Scoring algorithm suggests optimal stream
3. **Course Exploration**: Detailed information about available courses
4. **College Discovery**: Location-based search of government institutions
5. **Timeline Planning**: Important dates and deadline tracking

### Technical Implementation
- **Session Management**: User results stored in Flask sessions
- **Scoring Algorithm**: Simple but effective career matching logic
- **Responsive Design**: Mobile-first Bootstrap implementation
- **Data Structures**: Organized dictionaries for streams, courses, and colleges
- **Production Ready**: Configured with Gunicorn for deployment

## Future Enhancements

### Phase 1 (Database Integration)
- PostgreSQL database for storing user profiles and results
- College database with real-time cut-off updates
- Scholarship information and application tracking

### Phase 2 (Advanced Features)
- User authentication and profile management
- Advanced aptitude assessment with psychological profiling
- AI-powered chatbot for instant guidance
- Integration with government education APIs

### Phase 3 (Scalability)
- Mobile application development
- Regional language support
- Offline functionality for areas with poor connectivity
- Partnership with government education departments

### Phase 4 (Analytics)
- Success tracking of recommended paths
- Data analytics for improving recommendations
- Real-time admission updates and notifications
- Integration with e-learning platforms