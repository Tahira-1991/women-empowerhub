let currentStep = 1;
const totalSteps = 3;

// --- Helper function to validate the current step ---
function validateCurrentStep() {
    const currentForm = document.getElementById(`step-${currentStep}`);
    // Select all required form elements within the current step
    const inputs = currentForm.querySelectorAll('input[required], select[required], textarea[required]');
    let allValid = true;

    inputs.forEach(input => {
        let isValid = true;
        
        // Specific check for the 'required' checkbox
        if (input.type === 'checkbox') {
            if (!input.checked) {
                isValid = false;
            }
        } 
        // General check for other required inputs/selects/textareas
        else if (!input.value || input.value === '') {
            isValid = false;
        }

        if (!isValid) {
            input.classList.add('is-invalid');
            allValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });
    
    // For a cleaner UI experience, you might also consider
    // adding the 'was-validated' class to the form's parent
    // currentForm.closest('form').classList.add('was-validated');

    return allValid;
}


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
    // Only proceed if validation passes
    if (validateCurrentStep()) { 
        currentStep++;
        showStep(currentStep);
    }
}

// Function to move to the previous step
function prevStep() {
    currentStep--;
    showStep(currentStep);
}

// --- Function to handle form submission (NOW WITH VALIDATION) ---
function submitForm() {
    // 1. Run the final validation for Step 3
    if (validateCurrentStep()) {
        const formCard = document.getElementById('formCard');
        const successPage = document.getElementById('successPage');

        // *Perform AJAX/fetch request to a server here if necessary*
        console.log("Form successfully validated and submitted!");

        // 2. Hide the form and show the success page
        formCard.style.display = 'none';
        
        // Using 'flex' to match the success-page display style in your HTML
        successPage.style.display = 'flex'; 

        // 3. Optional: Add the class to change the body background
        document.body.classList.add('success-bg');

    } else {
        // Validation failed, errors are displayed on the form fields
        console.log("Validation failed on final step. Cannot submit.");
    }
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
    // Also remove any remaining invalid indicators
    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid')); 
}

// ... rest of your original setup (DOMContentLoaded, setActiveNavLink, etc.) ...
// Note: You must ensure 'coursesData' is defined in 'assets/Json-Data/school-form-data.js'
document.addEventListener('DOMContentLoaded', () => {
    showStep(currentStep);
    // setActiveNavLink(); // Assuming this works from your layout.js or is defined elsewhere

    const courseSelect = document.getElementById('courseSelect');
    // Check if coursesData exists before trying to use it
    if (typeof coursesData !== 'undefined' && Array.isArray(coursesData)) {
        coursesData.forEach(course => {
            const option = document.createElement('option');
            option.value = course.id;
            option.textContent = course.title;
            courseSelect.appendChild(option);
        });
    } else {
        console.error("coursesData is not defined or not an array. Course dropdown will be empty.");
    }
});