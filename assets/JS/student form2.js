const coursesData = [
    { id: 1, title: "Digital Marketing for Beginners" },
    { id: 2, title: "Financial Planning for Startups" },
    { id: 3, title: "E-Commerce Store Setup" },
    { id: 4, title: "Branding and Visual Identity" },
    { id: 5, title: "Mastering Social Media Ads" },
    { id: 6, title: "Product Photography for Beginners" },
    { id: 7, title: "Public Speaking & Pitching" },
    { id: 8, title: "Startup Legal Basics" },
    { id: 9, title: "Customer Service Excellence" },
    { id: 10, title: "Scaling Your Small Business" },
    { id: 11, title: "Building a Personal Brand" },
    { id: 12, title: "Social Media for Business" },
    { id: 13, title: "Email Marketing Mastery" },
    { id: 14, title: "Content Creation Strategy" },
    { id: 15, title: "Time Management for Entrepreneurs" }
];

let currentStep = 1;
const totalSteps = 3;

// Function to display the current form step
function showStep(step) {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
    updateStepIndicators(step);
    updateButtonVisibility(step);
}

// Function to update the visual step indicators
function updateStepIndicators(step) {
    const indicators = document.querySelectorAll('.step-indicator');
    indicators.forEach((indicator, index) => {
        if (index + 1 <= step) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Function to control button visibility
function updateButtonVisibility(step) {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    prevBtn.style.display = step === 1 ? 'none' : 'inline-block';
    nextBtn.style.display = step === totalSteps ? 'none' : 'inline-block';
    submitBtn.style.display = step === totalSteps ? 'inline-block' : 'none';
}

// Function to move to the next step
function nextStep() {
    const currentForm = document.getElementById(`step-${currentStep}`);
    const inputs = currentForm.querySelectorAll('input, select, textarea');
    let allValid = true;
    inputs.forEach(input => {
        if (input.required && !input.value) {
            input.classList.add('is-invalid');
            allValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (allValid) {
        currentStep++;
        showStep(currentStep);
    }
}

// Function to move to the previous step
function prevStep() {
    currentStep--;
    showStep(currentStep);
}

// Function to handle form submission and display the success page
function submitForm() {
    const formCard = document.getElementById('formCard');
    const successPage = document.getElementById('successPage');

    // Hide the form and show the success page
    formCard.style.display = 'none';
    successPage.style.display = 'block';

    // Add the class to change the background
    document.body.classList.add('success-bg');
}

// Function to reset the form and go back to step 1
function resetForm() {
    const formCard = document.getElementById('formCard');
    const successPage = document.getElementById('successPage');

    document.getElementById('enrollmentForm').reset();
    currentStep = 1;
    showStep(currentStep);

    // Hide the success page and show the form
    successPage.style.display = 'none';
    formCard.style.display = 'block';

    // Remove the class to reset the background
    document.body.classList.remove('success-bg');
}

// Function to highlight the active page in the navbar
function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn');
    navLinks.forEach(link => {
        if (link.textContent.trim().toLowerCase() === 'join now') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initial setup on page load
document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep);
    setActiveNavLink();

    const courseSelect = document.getElementById('courseSelect');
    coursesData.forEach(course => {
        const option = document.createElement('option');
        option.value = course.id;
        option.textContent = course.title;
        courseSelect.appendChild(option);
    });
});