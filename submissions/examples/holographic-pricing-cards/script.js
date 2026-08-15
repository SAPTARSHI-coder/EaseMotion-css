/**
 * Holographic 3D Pricing Cards - Ultimate Engine
 * Features:
 * 1. Momentum-based 3D physics using Lerp.
 * 2. Interactive Canvas Particle Network.
 * 3. Dynamic Billing Toggle.
 * 4. Expandable Feature Accordions.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Momentum-Based 3D Physics (Lerp)
       ========================================================================== */
    const cards = document.querySelectorAll('.card-wrapper');
    
    // Lerp function for smooth momentum
    const lerp = (start, end, factor) => start + (end - start) * factor;

    cards.forEach(wrapper => {
        const card = wrapper.querySelector('.holographic-card');
        
        // Target rotation values based on mouse position
        let targetX = 0;
        let targetY = 0;
        
        // Current rotation values (these will ease towards target)
        let currentX = 0;
        let currentY = 0;
        
        let isHovered = false;

        wrapper.addEventListener('mousemove', (e) => {
            isHovered = true;
            const rect = wrapper.getBoundingClientRect();
            
            // Mouse position relative to card
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update CSS variables for glare/foil spotlight instantly
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            // Normalize for tilt
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const normalizedX = (x - centerX) / centerX;
            const normalizedY = (y - centerY) / centerY;

            // Set targets (max 4 degrees tilt)
            targetY = normalizedX * 4; 
            targetX = -normalizedY * 4;
        });

        wrapper.addEventListener('mouseleave', () => {
            isHovered = false;
            // Target returns to flat
            targetX = 0;
            targetY = 0;
            card.style.setProperty('--mouse-x', `50%`);
            card.style.setProperty('--mouse-y', `50%`);
        });

        // Animation loop for momentum
        const updatePhysics = () => {
            // Smoothly interpolate current value towards target value
            currentX = lerp(currentX, targetX, 0.1);
            currentY = lerp(currentY, targetY, 0.1);

            // Apply transform
            card.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
            
            requestAnimationFrame(updatePhysics);
        };
        
        updatePhysics();
    });

    /* ==========================================================================
       2. Dynamic Billing Toggle
       ========================================================================== */
    const toggleSwitch = document.getElementById('billing-toggle');
    const labelMonthly = document.getElementById('label-monthly');
    const labelAnnually = document.getElementById('label-annually');
    const priceElements = document.querySelectorAll('.price-amount');
    
    let isAnnual = false;

    toggleSwitch.addEventListener('click', () => {
        isAnnual = !isAnnual;
        
        // Update UI styling
        if (isAnnual) {
            toggleSwitch.classList.add('annually');
            labelAnnually.classList.add('active');
            labelMonthly.classList.remove('active');
        } else {
            toggleSwitch.classList.remove('annually');
            labelAnnually.classList.remove('active');
            labelMonthly.classList.add('active');
        }

        // Animate numbers
        priceElements.forEach(el => {
            // Fade out down
            el.classList.add('changing');
            
            setTimeout(() => {
                // Update value while invisible
                el.innerText = isAnnual ? el.getAttribute('data-annual') : el.getAttribute('data-monthly');
                // Remove class to fade back in
                el.classList.remove('changing');
            }, 300);
        });
    });

    /* ==========================================================================
       3. Expandable Feature Accordions
       ========================================================================== */
    const accordions = document.querySelectorAll('.feature-accordion');
    
    accordions.forEach(acc => {
        const toggleBtn = acc.querySelector('.accordion-toggle');
        const content = acc.querySelector('.accordion-content');
        const chevron = acc.querySelector('.chevron');
        
        toggleBtn.addEventListener('click', () => {
            const isExpanded = content.classList.contains('expanded');
            
            if (isExpanded) {
                // Collapse
                content.style.maxHeight = '0px';
                content.classList.remove('expanded');
                toggleBtn.classList.remove('expanded');
                chevron.style.transform = 'rotate(0deg)';
            } else {
                // Expand
                content.style.maxHeight = content.scrollHeight + 'px';
                content.classList.add('expanded');
                toggleBtn.classList.add('expanded');
                chevron.style.transform = 'rotate(180deg)';
            }
        });
    });

    /* ==========================================================================
       4. Interactive Canvas Particle Network
       ========================================================================== */
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    // Resize canvas
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 1.5 + 0.5;
        }

        update(mouseX, mouseY) {
            // Move
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off walls
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

            // Dodge mouse
            if (mouseX && mouseY) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    this.x -= dx * 0.05;
                    this.y -= dy * 0.05;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fill();
        }
    }

    // Initialize particles
    const particles = [];
    const particleCount = window.innerWidth < 800 ? 40 : 100;
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Track mouse for canvas
    let mouseX = null;
    let mouseY = null;
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    window.addEventListener('mouseout', () => {
        mouseX = null;
        mouseY = null;
    });

    // Animation Loop
    const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw
        particles.forEach(p => {
            p.update(mouseX, mouseY);
            p.draw();
        });

        // Draw connecting lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - dist/1200})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animateParticles);
    };
    
    animateParticles();

});
