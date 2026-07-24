# README.md

## 🏖️ Kinetic Sand

A mesmerizing animated visualization of sand forming and reshaping patterns. This component captures the hypnotic, organic movement of kinetic sand — with individual sand particles flowing into intricate patterns like spirals, waves, circles, hearts, and stars, then scattering and reforming in an endless cycle of creation.

---

## ✨ Features

- **60 sand particles** – Individual particles with organic movement
- **5 patterns** – Spiral, Wave, Circle, Heart, and Star formations
- **Flow animation** – Particles smoothly transition into patterns
- **Scatter effect** – Particles scatter and redistribute
- **Sand glow** – A soft pulsing glow behind the sand
- **Pattern label** – Shows the current pattern name
- **Interactive controls** – Form pattern, scatter, speed, density, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="ks-container">
  <div class="ks-scene">
    <div class="sand-container">
      <!-- 60 sand particles -->
      <div class="sand-particle sp1"></div>
      <div class="sand-particle sp2"></div>
      <!-- ... up to sp60 -->
      
      <div class="sand-glow"></div>
    </div>
    
    <div class="pattern-label">⏳ Forming...</div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages particle positions, pattern formation, scattering, controls, and interactions.

🎮 Controls
Form Pattern – Cycle through and form the next pattern

Scatter – Scatter all particles randomly

Pattern Speed – Adjust the speed of pattern formation (0.3× to 3×)

Sand Density – Control the size and opacity of particles (0.5× to 2×)

Reset – Reset to scattered state

🎨 Customization
CSS Variables
Variable	Default	Description
--sand-size	3px	Size of sand particles
--sand-opacity	0.6	Opacity of sand particles
--glow-intensity	0.15	Intensity of sand glow
Patterns
The component includes 5 built-in patterns:

Spiral – Particles form a spiral shape

Wave – Particles form a wave pattern

Circle – Particles form a circle

Heart – Particles form a heart shape

Star – Particles form a star shape

Adding New Patterns
To add a new pattern, extend the patterns array in JavaScript:

js
const patterns = [
  // ... existing patterns
  () => {
    const positions = [];
    // Calculate positions for your pattern
    for (let i = 0; i < 60; i++) {
      const x = /* calculate x position */;
      const y = /* calculate y position */;
      positions.push({ x, y });
    }
    return positions;
  }
];
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .sand-particle, .sand-container, .sand-glow, and .pattern-label are intuitive and descriptive

Animation‑first — Particles transition with CSS, the glow pulses with CSS, and the label fades with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Hypnotic & organic — Captures the mesmerizing movement of kinetic sand

Performance‑conscious — Uses CSS transitions for smooth particle movement with GPU acceleration

📁 File Structure
text
submissions/kinetic-sand/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md