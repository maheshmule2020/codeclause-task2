// Select elements
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Add event listener for nav toggle button
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// Add event listeners for nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Add form validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Validate name input
  if (nameInput.value === '') {
    nameInput.classList.add('is-invalid');
  } else {
    nameInput.classList.remove('is-invalid');
  }

  // Validate email input
  if (emailInput.value === '') {
    emailInput.classList.add('is-invalid');
  } else if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add('is-invalid');
  } else {
    emailInput.classList.remove('is-invalid');
  }

  // Validate message input
  if (messageInput.value === '') {
    messageInput.classList.add('is-invalid');
  } else {
    messageInput.classList.remove('is-invalid');
    form.reset();
    alert('Thank you for your message!');
  }
});

// Helper function to validate email
function isValidEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
