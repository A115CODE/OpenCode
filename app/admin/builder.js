console.log('Builder On');

function BUILDER_SCRIPT(SRC) {
  const SCRIPT = document.createElement('script');
  SCRIPT.src = SRC;
  SCRIPT.async = false; // 👈 clave para mantener el orden
  document.body.appendChild(SCRIPT);
}
function BUILDER_CSS(URL) {
  const CSS = document.createElement('link');
  CSS.rel = 'stylesheet';
  CSS.href = URL;
  document.head.appendChild(CSS);
}
// Modules
  // Home
BUILDER_SCRIPT('./modules/home/home.js');
  // Courses
BUILDER_SCRIPT('./modules/courses/courses.js');
BUILDER_CSS('./modules/courses/courses.css');

// Components
  // NavBar
  BUILDER_SCRIPT('./components/navbar/navbar.js');
  BUILDER_CSS('./components/navbar/navbar.css');