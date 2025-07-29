console.log('Navbar On');

const NAVBAR = document.createElement('navbar');
NAVBAR.id = 'NAVBAR';
document.body.appendChild(NAVBAR);

const BTN_HOME = document.createElement('button');
NAVBAR.appendChild(BTN_HOME);

const ICO_HOME = document.createElement('img');
ICO_HOME.src = '../assets/home.svg'
BTN_HOME.appendChild(ICO_HOME);

const BTN_COURSES = document.createElement('button');
NAVBAR.appendChild(BTN_COURSES);

const ICO_COURSES = document.createElement('img');
ICO_COURSES.src = '../assets/courses.svg'
BTN_COURSES.appendChild(ICO_COURSES);