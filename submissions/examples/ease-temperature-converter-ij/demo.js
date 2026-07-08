const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');
const fill = document.getElementById('thermometerFill');
const bulb = document.querySelector('.tc-thermometer-bulb');
const display = document.getElementById('displayValue');

function update(from) {
  const c = parseFloat(celsius.value);
  const f = parseFloat(fahrenheit.value);
  const k = parseFloat(kelvin.value);

  if (from !== 'celsius') {
    const next = (f - 32) * 5 / 9;
    if (!isNaN(next) && isFinite(next)) celsius.value = Math.round(next * 100) / 100;
  }
  if (from !== 'fahrenheit') {
    const next = c * 9 / 5 + 32;
    if (!isNaN(next) && isFinite(next)) fahrenheit.value = Math.round(next * 100) / 100;
  }
  if (from !== 'kelvin') {
    const next = c + 273.15;
    if (!isNaN(next) && isFinite(next)) kelvin.value = Math.round(next * 100) / 100;
  }

  const val = parseFloat(celsius.value) || 0;
  const pct = Math.max(0, Math.min(100, ((val + 50) / 150) * 100));
  fill.style.height = pct + '%';
  bulb.style.background = pct < 40 ? 'var(--tc-cold-color)' : pct > 70 ? 'var(--tc-hot-color)' : '#fbbf24';

  const displayEl = display;
  displayEl.classList.remove('slide-in');
  displayEl.classList.add('slide-out');
  requestAnimationFrame(() => {
    displayEl.textContent = Math.round(val) + ' °C';
    displayEl.classList.remove('slide-out');
    displayEl.classList.add('slide-in');
  });
}

celsius.addEventListener('input', () => update('celsius'));
fahrenheit.addEventListener('input', () => update('fahrenheit'));
kelvin.addEventListener('input', () => update('kelvin'));

document.querySelectorAll('.tc-presets button').forEach(btn => {
  btn.addEventListener('click', () => {
    celsius.value = btn.dataset.c;
    fahrenheit.value = btn.dataset.f;
    kelvin.value = btn.dataset.k;
    update('celsius');
  });
});

update('celsius');
