// Mobile menu toggle
const toggleButton = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');

// Toggle active class to open/close the menu
toggleButton.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click from propagating to the document
  navLinks.classList.toggle('active');
});

// Close the mobile menu if any of the navigation links are clicked
const navLinksItems = document.querySelectorAll('.nav-links a');
navLinksItems.forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active'); // Close menu after clicking a link
    }
  });
});

// Close the mobile menu if clicked anywhere outside the navbar
document.addEventListener('click', (event) => {
  // Close the menu only if clicked outside of navbar
  if (!event.target.closest('.navbar') && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active'); // Close menu if clicked outside
  }
});

// Prevent clicks on the navbar from closing the menu
document.getElementById('navLinks').addEventListener('click', (e) => {
  e.stopPropagation(); // Stop the click from propagating to the document
});
