/* ============================================================
   Typewriter effect for hero subtitle
   ============================================================ */
(function () {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const phrases = [
        'Guru Produktif Desain Komunikasi Visual',
        'Pendidik Kreatif',
        'Pembimbing Karya Visual',
        'Inspirator Desain Grafis'
    ];

    const TYPE_SPEED = 80;
    const DELETE_SPEED = 40;
    const HOLD = 1600;

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
        el.textContent = phrases[0];
        return;
    }

    function tick() {
        const current = phrases[phraseIndex];

        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        el.textContent = current.slice(0, charIndex);

        let delay = deleting ? DELETE_SPEED : TYPE_SPEED;

        if (!deleting && charIndex === current.length) {
            delay = HOLD;
            deleting = true;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 400;
        }

        setTimeout(tick, delay);
    }

    tick();
})();
