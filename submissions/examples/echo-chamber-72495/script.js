document.addEventListener('DOMContentLoaded', () => {
    const chamber = document.getElementById('chamber');
    const echoCountDisplay = document.getElementById('echo-count');
    const clearBtn = document.getElementById('clear-btn');
    const strengthSlider = document.getElementById('echo-strength');
    
    let activeEchoes = 0;
    const colors = [
        'rgba(59, 130, 246, 0.8)', // blue
        'rgba(139, 92, 246, 0.8)', // purple
        'rgba(14, 165, 233, 0.8)', // sky
        'rgba(45, 212, 191, 0.8)', // teal
    ];

    function createEcho(x, y, isReflection = false, initialOpacity = null) {
        const strength = parseFloat(strengthSlider.value);
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        const ripple = document.createElement('div');
        ripple.classList.add('echo-ripple');
        
        // Calculate dynamic properties
        const duration = 2000 + (11 - strength) * 200; // Faster if stronger
        const maxScale = 5 + (strength * 2); 
        const baseSize = 20; // Base size of the element before scaling
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.width = `${baseSize}px`;
        ripple.style.height = `${baseSize}px`;
        ripple.style.borderColor = color;
        ripple.style.boxShadow = `0 0 15px ${color}`;
        
        // Custom CSS variables for the keyframes
        ripple.style.setProperty('--start-opacity', initialOpacity !== null ? initialOpacity : (0.5 + (strength / 20)));
        ripple.style.setProperty('--end-scale', isReflection ? maxScale * 0.7 : maxScale);
        
        // Apply animation
        ripple.style.animation = `expand-ripple ${duration}ms cubic-bezier(0.1, 0.8, 0.3, 1) forwards`;
        
        chamber.appendChild(ripple);
        
        if (!isReflection) {
            updateEchoCount(1);
        }

        // Boundary reflection logic
        if (!isReflection) {
            const rect = chamber.getBoundingClientRect();
            
            // Calculate distance to closest edge to time the reflection
            const distLeft = x;
            const distRight = rect.width - x;
            const distTop = y;
            const distBottom = rect.height - y;
            
            const closestDist = Math.min(distLeft, distRight, distTop, distBottom);
            
            // Assume the ripple expands at roughly (maxScale * baseSize / 2) pixels over duration
            const maxRadius = (maxScale * baseSize) / 2;
            
            if (closestDist < maxRadius) {
                // It will hit a wall. Estimate time of impact.
                const timeToImpact = (closestDist / maxRadius) * duration;
                
                setTimeout(() => {
                    if (document.body.contains(ripple)) {
                        // Create reflection slightly offset
                        let refX = x;
                        let refY = y;
                        
                        if (closestDist === distLeft) refX = 0;
                        else if (closestDist === distRight) refX = rect.width;
                        else if (closestDist === distTop) refY = 0;
                        else if (closestDist === distBottom) refY = rect.height;
                        
                        createEcho(refX, refY, true, 0.4);
                    }
                }, timeToImpact);
            }
        }

        // Cleanup
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
                if (!isReflection) {
                    updateEchoCount(-1);
                }
            }
        }, duration);
    }

    function updateEchoCount(change) {
        activeEchoes += change;
        if (activeEchoes < 0) activeEchoes = 0;
        echoCountDisplay.textContent = activeEchoes;
    }

    // Event Listeners
    chamber.addEventListener('mousedown', (e) => {
        const rect = chamber.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        createEcho(x, y);
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            const rect = chamber.getBoundingClientRect();
            createEcho(rect.width / 2, rect.height / 2);
        }
    });

    clearBtn.addEventListener('click', () => {
        const ripples = document.querySelectorAll('.echo-ripple');
        ripples.forEach(r => r.parentNode.removeChild(r));
        activeEchoes = 0;
        echoCountDisplay.textContent = '0';
    });
});
