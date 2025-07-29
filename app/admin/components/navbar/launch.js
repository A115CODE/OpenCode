// JavaScript
console.log('Launch On');

document.addEventListener('DOMContentLoaded', () => {
    const VIEWS = document.getElementById('VIEW');
    const BUTTON = document.getElementById('BTN_COURSES');
    const COMPONENT = document.getElementById('COURSES');
    
    BUTTON.addEventListener('click', () => {
      VIEWS.innerHTML = ''; // Limpia el contenido anterior si es necesario
      VIEWS.appendChild(COURSES);
      COURSES.style.display = 'block'; // Asegúrate de que sea visible
    });
  });
  