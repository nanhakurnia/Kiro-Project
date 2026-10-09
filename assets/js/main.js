/* ============================================================
   Main — navbar behavior, mobile menu, active link, scroll spy
   ============================================================ */
(function () {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const links = Array.from(document.querySelectorAll('.nav-link'));

    /* ---------- Navbar background on scroll ---------- */
    function onScroll() {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile menu toggle ---------- */
    function closeMenu() {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    }

    navToggle.addEventListener('click', () => {
        const open = navToggle.classList.toggle('open');
        navLinks.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', String(open));
    });

    navLinks.addEventListener('click', (e) => {
        if (e.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    /* ---------- Scroll spy for active nav link ---------- */
    const sections = links
        .map(l => document.querySelector(l.getAttribute('href')))
        .filter(Boolean);

    if ('IntersectionObserver' in window && sections.length) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = '#' + entry.target.id;
                    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
                }
            });
        }, { threshold: 0.4, rootMargin: '-20% 0px -40% 0px' });

        sections.forEach(s => spy.observe(s));
    }
})();
