console.log('Builder On');

function BUILDER_SCRIPT(SRC) {
  const SCRIPT = document.createElement('script');
  SCRIPT.src = SRC;
  document.body.appendChild(SCRIPT);
}
function BUILDER_CSS(URL) {
  const CSS = document.createElement('link');
  CSS.rel = 'stylesheet';
  CSS.href = URL;
  document.head.appendChild(CSS);
}

// Components
  // NavBar
BUILDER_SCRIPT('./components/navbar/navbar.js');

BUILDER_CSS('./components/navbar/navbar.css');
  // View
BUILDER_SCRIPT('./components/view/view.js');

// Modules
  // Home
BUILDER_SCRIPT('./modules/home/home.js');
  // Courses
BUILDER_SCRIPT('./modules/courses/courses.js');


BUILDER_SCRIPT('./components/navbar/launch.js');