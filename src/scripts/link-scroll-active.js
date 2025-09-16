document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Función para determinar y resaltar el enlace activo
    const highlightNav = () => {
        let currentSectionId = "inicio"; // Por defecto, la sección de inicio está activa

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // La sección activa es la que está más cerca de la parte superior del viewport,
            // pero que aún es visible. Se considera el 25% de la altura de la ventana
            // para una mejor experiencia.
            if (rect.top <= window.innerHeight * 0.25) {
                currentSectionId = section.id;
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            const sectionId = link.getAttribute('href').split('#')[1];
            
            if (sectionId && sectionId === currentSectionId) {
                link.classList.add('active');
            }
        });
    };

    // Función para manejar el clic en los enlaces del menú
    const handleNavClick = (e) => {
        const href = e.target.getAttribute('href');
        const isInternalLink = href.startsWith('/');
        const isAnchorLink = href.includes('#');
        
        // Si el enlace es interno y tiene un ancla (#)
        if (isInternalLink && isAnchorLink) {
            e.preventDefault(); // Previene el comportamiento por defecto de recargar la página

            const [page, targetId] = href.split('#');
            
            // Si el enlace apunta a otra página, redirige primero
            if (page && page !== window.location.pathname) {
                window.location.href = href;
                return;
            }

            // Si es la página actual, realiza el scroll
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Usa scrollIntoView para un desplazamiento suave y preciso.
                // Es la forma moderna y recomendada para este tipo de navegación.
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    // Agrega los event listeners
    links.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Ejecuta la función al cargar la página para establecer el estado inicial
});