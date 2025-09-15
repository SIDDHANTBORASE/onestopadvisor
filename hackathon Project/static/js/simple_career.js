// Career & Education Advisor - Simple JavaScript Version

// Career data
const careerData = {
    science: {
        name: 'Science',
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
        courses: [
            { name: 'B.Tech', duration: '4 years', jobs: ['Software Engineer', 'Civil Engineer', 'Mechanical Engineer'] },
            { name: 'MBBS', duration: '5.5 years', jobs: ['Doctor', 'Surgeon', 'Medical Officer'] },
            { name: 'B.Sc', duration: '3 years', jobs: ['Lab Technician', 'Research Assistant', 'Quality Analyst'] }
        ],
        careers: ['Engineer', 'Doctor', 'Researcher', 'Data Scientist', 'Pharmacist']
    },
    commerce: {
        name: 'Commerce',
        subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
        courses: [
            { name: 'B.Com', duration: '3 years', jobs: ['Accountant', 'Tax Consultant', 'Bank Officer'] },
            { name: 'BBA', duration: '3 years', jobs: ['Business Manager', 'HR Executive', 'Marketing Executive'] }
        ],
        careers: ['Chartered Accountant', 'Business Analyst', 'Banker', 'Entrepreneur', 'Financial Advisor']
    },
    arts: {
        name: 'Arts/Humanities',
        subjects: ['History', 'Geography', 'Political Science', 'Psychology', 'Literature'],
        courses: [
            { name: 'B.A.', duration: '3 years', jobs: ['Teacher', 'Content Writer', 'Government Officer'] }
        ],
        careers: ['Civil Servant', 'Journalist', 'Teacher', 'Lawyer', 'Social Worker']
    }
};

// Government colleges data
const collegesData = [
    { name: 'Government Engineering College', location: 'Mumbai', courses: ['B.Tech'], cutoff: 85 },
    { name: 'Government Medical College', location: 'Delhi', courses: ['MBBS'], cutoff: 95 },
    { name: 'Government Commerce College', location: 'Bangalore', courses: ['B.Com', 'BBA'], cutoff: 75 },
    { name: 'Government Arts College', location: 'Chennai', courses: ['B.A.'], cutoff: 70 },
    { name: 'Government Science College', location: 'Pune', courses: ['B.Sc'], cutoff: 80 }
];

// Timeline events
const timelineEvents = [
    { date: '2025-03-15', event: 'Engineering Entrance Exam Registration Opens' },
    { date: '2025-04-10', event: 'Medical Entrance Exam Registration Deadline' },
    { date: '2025-05-20', event: 'Commerce College Admissions Begin' },
    { date: '2025-06-15', event: 'Arts Stream Counseling Starts' }
];

// Handle aptitude test submission
document.addEventListener('DOMContentLoaded', function() {
    const aptitudeForm = document.getElementById('aptitudeForm');
    
    if (aptitudeForm) {
        aptitudeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Count answers for each stream
            const formData = new FormData(aptitudeForm);
            let scores = { science: 0, commerce: 0, arts: 0 };
            
            for (let [key, value] of formData.entries()) {
                if (value.includes('science') || value.includes('math') || value.includes('technical') || 
                    value.includes('innovation') || value.includes('scientist')) {
                    scores.science++;
                } else if (value.includes('business') || value.includes('finance') || value.includes('success') || 
                          value.includes('economics') || value.includes('manager')) {
                    scores.commerce++;
                } else {
                    scores.arts++;
                }
            }
            
            // Find recommended stream
            let recommendedStream = Object.keys(scores).reduce((a, b) => 
                scores[a] > scores[b] ? a : b
            );
            
            // Save results to localStorage
            localStorage.setItem('aptitudeResult', JSON.stringify({
                recommended_stream: recommendedStream,
                scores: scores,
                stream_info: careerData[recommendedStream]
            }));
            
            // Redirect to results page
            window.location.href = 'simple_results.html';
        });
    }
    
    // Load and display results
    const resultsContent = document.getElementById('resultsContent');
    if (resultsContent) {
        const savedResult = localStorage.getItem('aptitudeResult');
        
        if (savedResult) {
            const result = JSON.parse(savedResult);
            const streamData = result.stream_info;
            
            resultsContent.innerHTML = `
                <div class="alert alert-success">
                    <h4 class="alert-heading"><i class="fas fa-trophy me-2"></i>Congratulations!</h4>
                    <p class="mb-0">Based on your responses, we've identified your ideal career path. Here are your personalized recommendations:</p>
                </div>

                <div class="card mb-4">
                    <div class="card-header bg-primary text-white">
                        <h4 class="mb-0"><i class="fas fa-star me-2"></i>Recommended Stream: ${streamData.name}</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h5>Key Subjects:</h5>
                                <ul class="list-unstyled">
                                    ${streamData.subjects.map(subject => 
                                        `<li><i class="fas fa-check text-success me-2"></i>${subject}</li>`
                                    ).join('')}
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h5>Career Opportunities:</h5>
                                <ul class="list-unstyled">
                                    ${streamData.careers.map(career => 
                                        `<li><i class="fas fa-briefcase text-primary me-2"></i>${career}</li>`
                                    ).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-header">
                        <h4 class="mb-0"><i class="fas fa-graduation-cap me-2"></i>Recommended Courses</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            ${streamData.courses.map(course => `
                                <div class="col-md-6 mb-3">
                                    <div class="border rounded p-3">
                                        <h5 class="text-primary">${course.name}</h5>
                                        <p><strong>Duration:</strong> ${course.duration}</p>
                                        <p><strong>Career Options:</strong></p>
                                        <ul class="small">
                                            ${course.jobs.map(job => `<li>${job}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="card-header">
                        <h4 class="mb-0"><i class="fas fa-chart-bar me-2"></i>Your Interest Profile</h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            ${Object.entries(result.scores).map(([stream, score]) => `
                                <div class="col-md-4 mb-3">
                                    <h6>${stream.charAt(0).toUpperCase() + stream.slice(1)}</h6>
                                    <div class="progress">
                                        <div class="progress-bar ${stream === result.recommended_stream ? 'bg-success' : 'bg-secondary'}" 
                                             role="progressbar" style="width: ${(score * 20)}%">
                                            ${score}/5
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            resultsContent.innerHTML = `
                <div class="alert alert-warning">
                    <h4>No Results Found</h4>
                    <p>You need to take the aptitude test first to see your personalized recommendations.</p>
                    <a href="simple_aptitude.html" class="btn btn-primary">Take Aptitude Test</a>
                </div>
            `;
        }
    }
    
    // Contact form handling (if present)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});