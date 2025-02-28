document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ticket-form');
  
  form?.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const github = document.getElementById('github').value.trim();

      if (validateForm(name, email, github)) {
          // Store data and redirect
          localStorage.setItem('name', name);
          localStorage.setItem('email', email);
          localStorage.setItem('github', github);
          window.location.href = 'ticket.html';
      }
  });

  function validateForm(name, email, github) {
      if (!name || !email || !github) {
          alert('Please fill out all fields.');
          return false;
      }
      if (!validateEmail(email)) {
          alert('Invalid email address.');
          return false;
      }
      return true;
  }

  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});
