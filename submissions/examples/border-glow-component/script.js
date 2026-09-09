document.addEventListener('DOMContentLoaded', () => {
    const targetCard = document.getElementById('targetCard');
    const toggleGlowBtn = document.getElementById('toggleGlowBtn');
    const cycleColorBtn = document.getElementById('cycleColorBtn');
    const intensitySelect = document.getElementById('intensitySelect');
    const colorDots = document.querySelectorAll('.color-dot');

    const colors = ['blue', 'green', 'red', 'purple', 'gold', 'pink'];
    let currentColorIndex = 0;
    let isGlowEnabled = true;

    function toggleGlow() {
        isGlowEnabled = !isGlowEnabled;
        if (isGlowEnabled) {
            targetCard.classList.add('glow-enabled');
            toggleGlowBtn.textContent = "Toggle Glow: ON (Ctrl+G)";
        } else {
            targetCard.classList.remove('glow-enabled');
            toggleGlowBtn.textContent = "Toggle Glow: OFF (Ctrl+G)";
        }
    }

    function setIntensity(level) {
        let multiplierIndex = 1.5;
        if (level === 'low') multiplierIndex = 0.75;
        if (level === 'high') multiplierIndex = 3.0;

        document.documentElement.style.setProperty('--glow-intensity-multiplier', multiplierIndex);
        intensitySelect.value = level;
    }

    function setColor(colorName) {
        currentColorIndex = colors.indexOf(colorName);
        document.documentElement.style.setProperty('--glow-color', `var(--color-${colorName})`);
        colorDots.forEach(dot => {
            dot.classList.toggle('active', dot.getAttribute('data-color') === colorName);
        });
    }

    function cycleColors() {
        let nextIndex = (currentColorIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    }

    // Event Listeners for UI Controls
    toggleGlowBtn.addEventListener('click', toggleGlow);
    cycleColorBtn.addEventListener('click', cycleColors);
    intensitySelect.addEventListener('change', (e) => setIntensity(e.target.value));

    colorDots.forEach(dot => {
        dot.addEventListener('click', () => setColor(dot.getAttribute('data-color')));
    });

    // Keyboard Shortcuts Interception Logic
    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey) {
            switch (e.key.toLowerCase()) {
                case 'g': 
                    e.preventDefault(); 
                    toggleGlow(); 
                    break;
                case 'c': 
                    e.preventDefault(); 
                    cycleColors(); 
                    break;
                case '1': 
                    e.preventDefault(); 
                    setIntensity('low'); 
                    break;
                case '2': 
                    e.preventDefault(); 
                    setIntensity('medium'); 
                    break;
                case '3': 
                    e.preventDefault(); 
                    setIntensity('high'); 
                    break;
            }
        }
    });
});