# README.md

## 💎 Crystal Grid

A mystical animated crystal grid with energy lines. This component captures the sacred geometry and energy work of crystal grids — featuring a central crystal with glowing facets, 8 outer crystals arranged in a circle, pulsing energy lines radiating outward, and floating energy particles that flow along the grid lines.

---

## ✨ Features

- **Central crystal** – A glowing crystal with multiple facets and pulse animation
- **8 outer crystals** – Arranged in a circle with floating animation
- **Energy lines** – Concentric rings and diagonal lines with pulse animation
- **Energy particles** – 16 particles flowing along the grid
- **Crystal glow** – Pulsing glow around each crystal
- **Center pulse** – Expanding energy wave from the center
- **Interactive controls** – Energy flow speed, crystal glow intensity, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="cg-container">
  <div class="cg-scene">
    <!-- Crystal Grid -->
    <div class="crystal-grid">
      <!-- Center crystal -->
      <div class="crystal center-crystal">
        <div class="crystal-body">
          <div class="crystal-facet f1"></div>
          <!-- ... up to f6 -->
        </div>
        <div class="crystal-glow"></div>
        <div class="crystal-pulse"></div>
      </div>

      <!-- 8 outer crystals -->
      <div class="crystal outer-crystal oc1"></div>
      <!-- ... up to oc8 -->

      <!-- 12 energy lines -->
      <div class="energy-line el1"></div>
      <!-- ... up to el12 -->

      <!-- 16 energy particles -->
      <div class="energy-particle ep1"></div>
      <!-- ... up to ep16 -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages energy flow, crystal glows, particles, controls, and interactions.

🎮 Controls
Energy Flow – Adjust the speed of energy animations (0.3× to 3×)

Crystal Glow – Control the brightness of crystal glows (0.3× to 2×)

Reset – Reset the grid to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--pulse-duration	2s	Duration of center pulse
--crystal-duration	1.5s+	Duration of crystal float
--crystal-delay	0s+	Stagger delay for crystals
--line-duration	1.2s+	Duration of energy line pulse
--line-intensity	0.15	Intensity of energy lines
--particle-duration	2.5s+	Duration of particle drift
--glow-duration	1.8s	Duration of glow pulse
--glow-intensity	0.15	Intensity of crystal glow
--glow-size	40px	Size of crystal glow
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .crystal, .center-crystal, .crystal-body, .crystal-facet, .crystal-glow, .energy-line, and .energy-particle are intuitive and descriptive

Animation‑first — Crystals float with CSS, energy lines pulse with CSS, particles drift with CSS, and glows pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Mystical & sacred — Captures the energy work and sacred geometry of crystal grids

Performance‑conscious — Uses GPU-accelerated transforms for smooth animations and particle drift

📁 File Structure
text
submissions/crystal-grid/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md