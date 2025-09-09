# One Stop Advisor

## Overview
One Stop Advisor is a professional Flask web application that provides comprehensive advisory services. The application features a modern, responsive design with multiple service pages and contact functionality.

## Project Structure
```
onestopadvisor/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── templates/            # HTML templates
│   ├── base.html         # Base template with navigation
│   ├── index.html        # Homepage
│   ├── about.html        # About page
│   ├── services.html     # Services page
│   └── contact.html      # Contact page with form
├── static/               # Static assets
│   ├── css/
│   │   └── style.css     # Custom CSS styles
│   └── js/
│       └── main.js       # JavaScript functionality
└── replit.md            # This documentation file
```

## Features
- Responsive web design using Bootstrap 5
- Multi-page navigation (Home, About, Services, Contact)
- Professional landing page with hero section
- Services showcase with card layouts
- Contact form with JavaScript handling
- Modern UI/UX design

## Technology Stack
- **Backend**: Flask (Python web framework)
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Bootstrap 5 for responsive design
- **Icons**: Font Awesome for professional icons
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
- **2025-09-09**: Initial project setup and implementation
  - Created complete Flask application structure
  - Implemented responsive design with Bootstrap
  - Added contact form functionality
  - Configured development and production workflows
  - Set up deployment configuration

## User Preferences
- Clean, professional design
- Responsive mobile-first approach
- Modern web standards compliance

## Project Architecture
- **MVC Pattern**: Flask routes handle requests, templates render views
- **Static Assets**: Organized in dedicated directories
- **Responsive Design**: Mobile-first Bootstrap implementation
- **Contact Form**: AJAX-powered form submission
- **Production Ready**: Configured with Gunicorn for deployment

## Future Enhancements
- Database integration for contact form submissions
- User authentication system
- Admin panel for content management
- Blog/news section
- Service booking system