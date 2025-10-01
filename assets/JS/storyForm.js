// Initialize AOS library
AOS.init({ duration: 700, once: true });

// Wait for DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('storyForm');
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simple validation
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Show modal on successful form submission
        successModal.show();

        // Reset form fields
        form.reset();
    });
});