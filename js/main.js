// Scroll Hide/Show Navbar - esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  let prevScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  if (!navbar) return; // Protege contra errores si el elemento no existe

  window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;

    // Detectar dirección del scroll
    if (prevScrollPos > currentScrollPos) {
      // Scrolling hacia arriba - mostrar navbar
      navbar.style.transform = "translateY(0)";

      // Agregar fondo oscuro si no está en el top
      if (currentScrollPos > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    } else {
      // Scrolling hacia abajo - ocultar navbar
      navbar.style.transform = "translateY(-100%)";
    }

    prevScrollPos = currentScrollPos;
  }, { passive: true });
});

