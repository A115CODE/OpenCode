// 1. Configura tu instancia de Supabase
console.log('AdminForm on');
import supabase from '../../app/db.js';

// 2. Captura el evento de envío del formulario
document.getElementById('ADMIN_FORM').addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita que el formulario se envíe normalmente

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // 3. Intenta iniciar sesión
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert('Error al iniciar sesión: ' + error.message);
    console.error(error);
  } else {
    alert('Inicio de sesión exitoso');
    // Redirige a la página principal o dashboard
    window.location.href = '';
  }
});
