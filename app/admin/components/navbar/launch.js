console.log('Launch On');

document.addEventListener('DOMContentLoaded', function () {
  const ROUTER = document.getElementById('VIEW');
  const views = document.querySelectorAll('.views');
  const buttons = document.querySelectorAll('button[data-view]');

  // Mostrar vista inicial
  showView('home');

  // Agregar event listeners a los botones
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const viewId = this.getAttribute('data-view');
      showView(viewId);
    });
  });

  function showView(viewId) {
    // Ocultar todas las vistas
    views.forEach((view) => {
      view.classList.remove('active');
    });

    // Mostrar la vista seleccionada
    const activeView = document.getElementById(viewId);
    if (activeView) {
      activeView.classList.add('active');

      // Limpiar el router outlet y agregar la vista activa
      ROUTER.innerHTML = '';
      ROUTER.appendChild(activeView.cloneNode(true));
    }
  }

  // Opcional: Manejar cambios en la URL
  window.addEventListener('popstate', function () {
    const viewId = window.location.hash.substring(1) || 'home';
    showView(viewId);
  });
});