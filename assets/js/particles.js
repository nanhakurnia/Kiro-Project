/* ============================================================
   Particles — lightweight floating particle field on canvas
   ============================================================ */
(function () {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext('2d');
    let width, height, particles, raf;
    const COLORS = ['rgba(124,92,255,', 'rgba(25,227,207,', 'rgba(255,106,213,'];

    function size() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function count() {
        return Math.min(90, Math.floor((width * height) / 18000));
    }

    function createParticles() {
        particles = Array.from({ length: count() }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 1.8 + 0.4,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            a: Math.random() * 0.5 + 0.2,
            c: COLORS[Math.floor(Math.random() * COLORS.length)]
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.c + p.a + ')';
            ctx.fill();

            // link nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const dx = p.x - q.x;
                const dy = p.y - q.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = 'rgba(124,92,255,' + (0.08 * (1 - dist / 120)) + ')';
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
        raf = requestAnimationFrame(draw);
    }

    function init() {
        size();
        createParticles();
        cancelAnimationFrame(raf);
        draw();
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(init, 200);
    });

    init();
})();
