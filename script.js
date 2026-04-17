document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica de Pestañas de Servicios ---
    const botones = document.querySelectorAll('.service-card-v2');
    const contenidos = document.querySelectorAll('.tab-content-v2');

    if (botones.length > 0) {
        botones.forEach(boton => {
            boton.addEventListener('click', () => {
                const servicioId = boton.getAttribute('data-servicio');

                // Quitar activo de botones
                botones.forEach(b => b.classList.remove('activo'));
                boton.classList.add('activo');

                // Ocultar todos los contenidos
                contenidos.forEach(c => {
                    c.style.display = 'none';
                    c.classList.remove('activo');
                });

                // Mostrar el seleccionado
                const target = document.getElementById(servicioId);
                if (target) {
                    target.style.display = 'block';
                    setTimeout(() => target.classList.add('activo'), 10);
                }
            });
        });
    }

    // --- Lógica del Menú Hamburguesa ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // Cambiar el icono (opcional: de barras a X)
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Cerrar el menú al hacer clic en un enlace (importante para UX)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
});