# Cursor Trail / Particle Follow Effect

### 1. What does this do?
This component spawns a beautiful, hardware-accelerated stream of glowing particles that trail behind the user's cursor, fading out as they drift.

### 2. How is it used?
Set up an interaction target area (or target the `body` for global capture) and load the stylesheet:

```html
<div class="trail-area">
  Move mouse here
</div>
```

**Variants:**
- **Themes & Shapes**:
  - `.trail-stars`: Star-shaped particles using high-precision CSS polygon clip-paths.
  - `.trail-bubbles`: Soft hollow floating bubble rings.
  - `.trail-fire`: Warm orange/red embers drifting upward.
  - `.trail-snow`: Falling white snowflakes drifting slowly downward.

**Required Trigger JavaScript (Vanilla):**
Track coordinate offsets and append temporary particles to the viewport body:

```javascript
const trailArea = document.querySelector('.trail-area');
let activeType = 'default'; // default, stars, bubbles, fire, snow
let lastSpawn = 0;
const throttleMs = 20;

trailArea.addEventListener('mousemove', e => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const now = Date.now();
  if (now - lastSpawn < throttleMs) return;
  lastSpawn = now;

  const particle = document.createElement('div');
  particle.className = 'trail-particle';

  if (activeType !== 'default') {
    particle.classList.add(`trail-${activeType}`);
  }

  particle.style.left = `${e.clientX}px`;
  particle.style.top = `${e.clientY}px`;

  document.body.appendChild(particle);

  // Auto clean-up
  particle.addEventListener('animationend', () => {
    particle.remove();
  });
});
```

### 3. Why is it useful?
It provides a highly personal, interactive micro-interaction layer that immediately makes web portfolios, landing pages, and interactive dashboards feel premium. Performance is offloaded entirely to the browser rendering layer by throttling JavaScript calls (e.g. 20ms intervals) and utilizing CSS custom properties for all drift vector shifts (`--trail-drift-x`, `--trail-drift-y`, `--trail-size`). It also integrates with browser accessibility standards by checking `prefers-reduced-motion` media queries and shutting off particle generation when required.
