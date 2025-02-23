document.addEventListener('DOMContentLoaded', () => {
    // Animaciones de Scroll (logo y slogan)
    window.addEventListener('scroll', () => {
        const logo = document.querySelector('.logo');
        const slogan = document.querySelector('.slogan');
        const scrollPosition = window.scrollY;

        if (logo) {
            const logoScale = 1 + scrollPosition * 0.001;
            logo.style.transform = `scale(${Math.min(logoScale, 1.5)})`;
        }

        if (slogan) {
            const sloganScale = 1 + scrollPosition * 0.0003;
            const sloganTranslate = scrollPosition * 0.2;
            slogan.style.transform = `translateY(${sloganTranslate}px) scale(${sloganScale})`;
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Menú Hamburguesa
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuItems = document.querySelector('.menu-items');

    hamburgerMenu.addEventListener('click', () => {
        menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
    });

    // Animaciones para proyectos y servicios
    const proyectos = document.querySelectorAll('.proyecto');
    const servicios = document.querySelectorAll('.servicio');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    proyectos.forEach(proyecto => observer.observe(proyecto));
    servicios.forEach(servicio => observer.observe(servicio));
});