

  document.addEventListener('DOMContentLoaded', () => {
    const registerFormContainer = document.getElementById('registerFormContainer');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const showLoginLink = document.getElementById('showLoginLink');
    const showRegisterLink = document.getElementById('showRegisterLink');

    showLoginLink.addEventListener('click', (e) => {
      e.preventDefault();
      registerFormContainer.classList.add('d-none');
      loginFormContainer.classList.remove('d-none');
      AOS.refresh();
    });

    showRegisterLink.addEventListener('click', (e) => {
      e.preventDefault();
      loginFormContainer.classList.add('d-none');
      registerFormContainer.classList.remove('d-none');
      AOS.refresh();
    });

    // Handle form submissions
    document.getElementById('registerForm').addEventListener('submit', function(event) {
      event.preventDefault(); 
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('registerEmail').value.trim();
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const termsChecked = document.getElementById('termsCheck').checked;
      const messageDiv = document.getElementById('registerMessage');

      messageDiv.textContent = '';
      messageDiv.className = 'text-center mb-3 fw-bold';

      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        messageDiv.textContent = 'Please fill out all fields.';
        messageDiv.classList.add('text-danger');
        return;
      }
      if (password !== confirmPassword) {
        messageDiv.textContent = 'Passwords do not match.';
        messageDiv.classList.add('text-danger');
        return;
      }
      if (!termsChecked) {
        messageDiv.textContent = 'You must accept the terms and conditions.';
        messageDiv.classList.add('text-danger');
        return;
      }
      messageDiv.textContent = 'Account created successfully!';
      messageDiv.classList.add('text-success');
      setTimeout(() => {
        document.getElementById('registerForm').reset();
        messageDiv.textContent = '';
      }, 2000);
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); 
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      const messageDiv = document.getElementById('loginMessage');

      messageDiv.textContent = '';
      messageDiv.className = 'text-center mb-3 fw-bold';

      if (!email || !password) {
        messageDiv.textContent = 'Please enter your email and password.';
        messageDiv.classList.add('text-danger');
        return;
      }
      // In a real app, you would validate credentials on a server.
      messageDiv.textContent = 'Login successful!';
      messageDiv.classList.add('text-success');
      setTimeout(() => {
        document.getElementById('loginForm').reset();
        messageDiv.textContent = '';
      }, 2000);
    });
  });

