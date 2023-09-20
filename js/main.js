'use strict';

// Wait for the DOM content to be fully loaded
window.addEventListener('DOMContentLoaded', () => {
  // Select necessary elements
  const body = document.querySelector('.body'),
    popup = body.querySelector('.popup'),
    more = body.querySelector('.more');

  // Toggle the popup when the 'more' button is clicked
  more.addEventListener('click', () => {
    popup.classList.toggle('popup_active');
    body.classList.toggle('body_popup-open');
  });

  // Close the popup when clicking on the overlay
  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay')) {
      popup.classList.remove('popup_active');
      body.classList.remove('body_popup-open');
    }
  });
});
