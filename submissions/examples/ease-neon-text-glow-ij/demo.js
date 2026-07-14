(function () {
  const textEl = document.getElementById('neonText');
  const powerToggle = document.getElementById('powerToggle');
  const flickerToggle = document.getElementById('flickerToggle');
  const speedSlider = document.getElementById('speedSlider');
  const speedValue = document.getElementById('speedValue');
  const colorBtns = document.querySelectorAll('.ntg-color-btn');
  const presetBtns = document.querySelectorAll('.ntg-preset-btn');

  const colors = {
    pink:   { c1: '#ff2d95', c2: '#ff6eb4' },
    cyan:   { c1: '#00f3ff', c2: '#66f0ff' },
    blue:   { c1: '#4d7eff', c2: '#8ab4ff' },
    green:  { c1: '#39ff14', c2: '#7aff5e' },
    yellow: { c1: '#ffe600', c2: '#fff066' },
    purple: { c1: '#bf40bf', c2: '#d98cd9' },
    red:    { c1: '#ff1744', c2: '#ff6b7a' }
  };

  function setColor(name) {
    const c = colors[name];
    if (!c) return;
    document.documentElement.style.setProperty('--ntg-glow-color-1', c.c1);
    document.documentElement.style.setProperty('--ntg-glow-color-2', c.c2);
    colorBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.color === name));
  }

  function setSpeed(val) {
    speedValue.textContent = val;
    document.documentElement.style.setProperty('--ntg-duration', val + 's');
  }

  function updateGlow() {
    textEl.classList.toggle('off', !powerToggle.checked);
    textEl.classList.toggle('flicker', flickerToggle.checked && powerToggle.checked);
    if (!powerToggle.checked) {
      flickerToggle.checked = false;
    }
  }

  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => setColor(btn.dataset.color));
  });

  powerToggle.addEventListener('change', updateGlow);
  flickerToggle.addEventListener('change', updateGlow);

  speedSlider.addEventListener('input', () => setSpeed(speedSlider.value));

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      textEl.textContent = btn.dataset.phrase;
    });
  });

  setColor('pink');
  setSpeed('1.0');
})();
