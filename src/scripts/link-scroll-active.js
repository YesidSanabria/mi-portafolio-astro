document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    const highlightNav = () => {
      let currentSection = "";
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
      
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', highlightNav);
    highlightNav();
  });