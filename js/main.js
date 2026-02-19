const carousels = document.querySelectorAll('.carousel');

let autoRotation = 0;
let mouseEnabled = true; // 🔓 mouse activo por defecto

/* 🔄 ROTACIÓN AUTOMÁTICA */
function animate() {
  autoRotation += 0.3;

  carousels.forEach((carousel, index) => {
    carousel.style.setProperty(
      '--auto-rotate',
      `${autoRotation * (index + 1) * 0.3}deg`
    );
  });

  requestAnimationFrame(animate);
}
animate();

/* 🖱️ ROTACIÓN CON MOUSE */
document.addEventListener('mousemove', (e) => {
  if (!mouseEnabled) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * -30;

  carousels.forEach((carousel) => {
    carousel.style.setProperty('--mouse-x', `${x}deg`);
    carousel.style.setProperty('--mouse-y', `${y}deg`);
  });
});

/* ⌨️ CONTROL POR TECLAS */
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'm') {
    mouseEnabled = true;
    console.log('🖱️ Rotación con mouse ACTIVADA');
  }

  if (e.key.toLowerCase() === 'n') {
    mouseEnabled = false;

    // Resetea suavemente la rotación del mouse
    carousels.forEach((carousel) => {
      carousel.style.setProperty('--mouse-x', `0deg`);
      carousel.style.setProperty('--mouse-y', `0deg`);
    });

    console.log('🚫 Rotación con mouse DESACTIVADA');
  }
});
