// JavaScript
console.log('Launch On');

document.addEventListener('DOMContentLoaded', () => {
    const VIEWS = document.getElementById('VIEW');
    const BUTTON = document.getElementById('BTN_COURSES');
    const COMPONENT = document.getElementById('COURSES');
    
    BUTTON.addEventListener('click', () => {
      VIEWS.appendChild(COMPONENT);
      COMPONENT.style.display = 'block'; // Asegúrate de que sea visible
    });
  });
  