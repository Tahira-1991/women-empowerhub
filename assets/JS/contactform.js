AOS.init({ duration: 700, once: true });

function showConfirmation() {
    const modalElement = document.getElementById('confirmationModal');
    const confirmationModal = new bootstrap.Modal(modalElement);
    document.querySelector('form').reset();
    confirmationModal.show();
}