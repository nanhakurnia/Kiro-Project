/* ============================================================
   Scroll reveal + animated counters (IntersectionObserver)
   ============================================================ */
(function () {
    /* ---------- Reveal on scroll ---------- */
    const revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // small stagger for siblings
                    entry.target.style.transitionDelay = (i * 60) + 'ms';
                    entry.target.classList.add('in-view');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

        revealEls.forEach(el => revealObserver.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('in-view'));
    }

    /* ---------- Animated stat counters ---------- */
    const counters = document.querySelectorAll('.stat-number');

    function animateCounter(el) {
        const target = parseFloat(el.dataset.target) || 0;
        const suffix = el.dataset.suffix || '';
        const duration = 1600;
        const start = performance.now();

        function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const value = Math.round(eased * target);
            el.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => counterObserver.observe(c));
    } else {
        counters.forEach(c => { c.textContent = (c.dataset.target || '') + (c.dataset.suffix || ''); });
    }
})();
