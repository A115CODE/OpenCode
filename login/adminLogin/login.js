console.log('AdminForm on');
import supabase from '../../app/db.js';

document.getElementById('ADMIN_FORM').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert('Error al iniciar sesion: ' + error.message);
    console.error(error);
  } else {
    alert('Inicop de sesion exitoso');
    window.location.href = 'ruta ak app';
  }
});
