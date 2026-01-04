 /* --- 1. Custom Cursor Follower --- */
        const dot = document.getElementById('cursor-dot');
        const outline = document.getElementById('cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            dot.style.left = `${posX}px`;
            dot.style.top = `${posY}px`;

            // Outline follows with a slight delay
            outline.animate({
                left: `${posX - 20}px`,
                top: `${posY - 20}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effect for interactive elements
        document.querySelectorAll('a, button, input, .project-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                outline.style.transform = "scale(2)";
                outline.style.background = "rgba(255,255,255,0.1)";
            });
            el.addEventListener('mouseleave', () => {
                outline.style.transform = "scale(1)";
                outline.style.background = "transparent";
            });
        });

        /* --- 2. 3D Tilt Interaction --- */
        const tiltCards = document.querySelectorAll('.js-tilt');
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                
                card.style.transform = `perspective(1000px) rotateX(${y * -15}deg) rotateY(${x * 15}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });

        /* --- 3. Magnetic Button Effect --- */
        const magneticElements = document.querySelectorAll('.btn-magnetic, .mag-link');
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            el.addEventListener('mouseleave', () => {
                el.style.transform = `translate(0, 0)`;
            });
        });

        /* --- 4. Intersection Observer (Scroll Reveal) --- */
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
