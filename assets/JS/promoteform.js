AOS.init({
  duration: 700,
  once: true
});

const form = document.querySelector('form');
const submitModal = new bootstrap.Modal(document.getElementById('submitModal'));

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission (for demo purposes)

  // You can add your backend call or AJAX logic here

  submitModal.show(); // Displays the modal

  // Optional: Uncomment the line below to reset the form after submission
  // form.reset();
});