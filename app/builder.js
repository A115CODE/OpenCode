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

// APP
BUILDER_SCRIPT('./components/view/view.js');
BUILDER_CSS('./components/view/view.css');
BUILDER_SCRIPT('./components/navbar/navbar.js');
// Modules
BUILDER_SCRIPT('./modules/home/home.js');
BUILDER_CSS('./modules/home/home.css');
