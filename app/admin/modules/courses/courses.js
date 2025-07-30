console.log('Courses On');

const VISTA_COURSES = document.getElementById('VIEW');

const COURSES = document.createElement('h1');
COURSES.textContent = 'COURSES Is On!';
COURSES.classList.add('views');
COURSES.id = 'COURSES';
document.getElementById('VIEWS_CONTAINER').appendChild(COURSES);
