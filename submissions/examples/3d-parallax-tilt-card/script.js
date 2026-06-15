document.querySelectorAll('.ease-tilt-card').forEach(card => {
    const inner = card.querySelector('.ease-tilt-card-inner');
    const maxTilt = parseInt(card.getAttribute('data-tilt-max')) || 15;
    const isReverse = card.classList.contains('ease-tilt-reverse');
    const isFlat = card.classList.contains('ease-tilt-flat');
    
    card.addEventListener('mousemove', (e) => {
        if (isFlat) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        let tiltX = ((y - centerY) / centerY) * maxTilt;
        let tiltY = ((x - centerX) / centerX) * maxTilt;
        
        if (isReverse) {
            tiltX = -tiltX;
            tiltY = -tiltY;
        }
        
        inner.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
        
        const glow = card.querySelector('.ease-tilt-glow');
        if (glow) {
            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;
            glow.style.setProperty('--mouse-x', `${percentX}%`);
            glow.style.setProperty('--mouse-y', `${percentY}%`);
        }
    });
    
    card.addEventListener('mouseleave', () => {
        inner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
});