console.log('Navbar On');

const NAVBAR = document.createElement('navbar');
NAVBAR.id = 'NAVBAR';
document.body.appendChild(NAVBAR);

function BUILDER_SCRIPT(SRC) {
    const BTN_NAVBAR = document.createElement('button');
    BTN_NAVBAR.setAttribute('data-view', 'contact'); // Añadir el atributo data-view
    BTN_NAVBAR.classList.add('btns');
    NAVBAR.appendChild(BTN_NAVBAR);

    // ICO
    const ICO_COURSES = document.createElement('img');
    ICO_COURSES.src = '../assets/courses.svg'
    BTN_NAVBAR.appendChild(ICO_COURSES);
}