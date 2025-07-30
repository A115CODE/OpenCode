console.log('Navbar On');

const NAVBAR = document.createElement('navbar');
NAVBAR.id = 'NAVBAR';
document.body.appendChild(NAVBAR);

function BUILDER_BUTTONS(ATTRIBUTE, SRC) {
    const BTN_NAVBAR = document.createElement('button');
    BTN_NAVBAR.setAttribute('data_view', ATTRIBUTE); // Añadir el atributo data-view
    BTN_NAVBAR.classList.add('btns');
    NAVBAR.appendChild(BTN_NAVBAR);

    // ICO
    const ICO_BTN = document.createElement('img');
    ICO_BTN.src = SRC;
    BTN_NAVBAR.appendChild(ICO_BTN);
}

BUILDER_BUTTONS('HOME','../assets/home.svg');
BUILDER_BUTTONS('COURSES','../assets/courses.svg');



console.log('Launch On');

const ROUTER = document.getElementById('VIEW');
if (!ROUTER) {
  console.error('No se encontró el elemento con id="VIEW"');
} else {
  console.log('ROUTER encontrado:', ROUTER);
}

const views = document.querySelectorAll('.views');
console.log('Vistas encontradas:', views.length);

const buttons = document.querySelectorAll('button[data_view]');
console.log('Botones encontrados:', buttons.length);

// Mostrar vista inicial
showView('HOME');

// Agregar event listeners a los botones
buttons.forEach((button) => {
  const viewId = button.getAttribute('data_view');
  console.log('Asignando evento a botón con vista:', viewId);

  button.addEventListener('click', function () {
    console.log('Click en botón:', viewId);
    showView(viewId);
  });
});

function showView(viewId) {
  console.log('Ejecutando showView con:', viewId);

  views.forEach((view) => {
    console.log('Ocultando vista:', view.id);
    view.classList.remove('active');
  });

  const activeView = document.getElementById(viewId);
  if (!activeView) {
    console.error('No se encontró la vista con id:', viewId);
    return;
  }

  activeView.classList.add('active');
  console.log('Mostrando vista activa:', activeView.id);

  if (!ROUTER) {
    console.error('ROUTER es null en showView');
    return;
  }

  ROUTER.innerHTML = ''; // Limpiar el contenido anterior
  ROUTER.appendChild(activeView.cloneNode(true)); // Clonar y mostrar la nueva vista
}
