console.log('Navbar On');

const NAVBAR = document.createElement('navbar');
NAVBAR.id = 'NAVBAR';
document.body.appendChild(NAVBAR);

const BTN_HOME = document.createElement('button');
BTN_HOME.classList.add('btn_home');
NAVBAR.appendChild(BTN_HOME);

const ICO_HOME = document.createElement('img');
ICO_HOME.src = '../assets/home.svg'
BTN_HOME.appendChild(ICO_HOME);