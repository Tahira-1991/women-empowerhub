
// JavaScript to render the page and handle clicks
function renderCourseCards() {
    const container = document.getElementById('course-cards-container');
    container.innerHTML = '';
    coursesData.forEach(course => {
      const cardHtml = `
        <div class="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="fade-up" onclick="showCourseDetails(${course.id})">
          <div class="card course-card h-100 shadow-sm">
            <img src="${course.thumbnail}" class="card-img-top object-fit-cover" alt="${course.title}" style="height:200px">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fw-semibold grad-text">${course.title}</h5>
              <p class="card-text text-muted small flex-grow-1">${course.description}</p>
              <div class="d-flex align-items-center mt-3">
                <img src="${course.instructor.img}" alt="${course.instructor.name}" class="rounded-circle me-2 instructor-img">
                <div class="small">
                  <div class="fw-bold">${course.instructor.name}</div>
                  <div class="text-muted">Instructor</div>
                </div>
              </div>
              <div class="d-grid mt-3">
                <button class="btn btn-outline-info btn-sm rounded-pill">View Details</button>
              </div>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += cardHtml;
    });
  }
  
  function showCourseDetails(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    const detailsContainer = document.getElementById('course-details-container');
    const cardsSection = document.getElementById('courses-section');
  
    if (!course) {
      console.error("Course not found!");
      return;
    }
  
    const detailsHtml = `
      <div class="container py-5" data-aos="fade-up">
        <button onclick="hideCourseDetails()" class="btn btn-outline-warning mb-4">
          <i class="bi bi-arrow-left-circle me-2"></i>Back to All Courses
        </button>
  
        <div class="card p-4 shadow-sm">
          <div class="row g-4">
            <div class="col-md-6">
              <img src="${course.thumbnail}" class="img-fluid rounded-3 shadow-sm" alt="${course.title}">
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary mb-2">${course.category}</span>
              <h1 class="fw-bold grad-text mb-3">${course.title}</h1>
              <p class="lead text-muted">${course.fullDescription}</p>
              <div class="d-flex align-items-center mb-4">
                <img src="${course.instructor.img}" alt="${course.instructor.name}" class="rounded-circle me-3" style="width:70px; height:70px; object-fit:cover;">
                <div>
                  <div class="fw-bold fs-5">${course.instructor.name}</div>
                  <div class="text-muted">Instructor</div>
                </div>
              </div>
              <a href="Student form2.html" class="btn btn-gold btn-lg rounded-pill px-4">Enroll Now</a>
            </div>
          </div>
        </div>
  
        <div class="mt-5 p-4 bg-white rounded-3 shadow-sm" data-aos="fade-up">
          <h3 class="fw-bold grad-text mb-4">Course Curriculum</h3>
          <ul class="list-group list-group-flush">
            ${course.lessons.map((lesson, index) => `
              <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <i class="bi bi-play-circle-fill me-2 text-primary"></i>
                  Lesson ${index + 1}: ${lesson.title}
                </div>
                <span class="text-muted small">${lesson.duration}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
    detailsContainer.innerHTML = detailsHtml;
    detailsContainer.style.display = 'block';
    cardsSection.style.display = 'none';
  }
  
  function hideCourseDetails() {
    document.getElementById('course-details-container').style.display = 'none';
    document.getElementById('courses-section').style.display = 'block';
  }
  
  // Initial render when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    renderCourseCards();
    AOS.init({ duration: 700, once: true });
  });
  