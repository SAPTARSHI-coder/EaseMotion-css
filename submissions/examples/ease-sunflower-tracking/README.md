# README.md

## 🌻 Sunflower Tracking

A mesmerizing animated sunflower that rotates to follow a virtual sun as it travels across the sky. This component captures the natural phenomenon of heliotropism — the movement of plants toward the sun — with a beautifully detailed sunflower that tracks the sun's position from dawn to dusk.

---

## ✨ Features

- **Realistic sun tracking** – The sunflower head rotates smoothly to follow the virtual sun
- **Dynamic sun movement** – The sun travels in an arc across the sky, changing color from morning to evening
- **Animated sky** – Sky color shifts from bright blue to golden sunset hues
- **Detailed sunflower** – 12 outer petals, 8 inner petals, and a textured center disc
- **Organic motion** – Stem sways, leaves adjust, and petals respond to tracking
- **Flower glow** – A soft glow intensifies when the flower faces the sun
- **Interactive controls** – Adjust sun speed, tracking sensitivity, pause, and reset
- **Sun path indicator** – Visual arc showing the sun's path
- **Grass and ground** – Ambient grass swaying in the breeze
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="sunflower-container">
  <div class="sunflower-scene">
    <!-- Sky -->
    <div class="sky"></div>

    <!-- Virtual Sun -->
    <div class="sun">
      <div class="sun-core"></div>
      <div class="sun-glow"></div>
      <div class="sun-ray ray-1"></div>
      <!-- ... up to ray-8 -->
    </div>

    <!-- Sun path -->
    <div class="sun-path"></div>

    <!-- Sunflower -->
    <div class="sunflower">
      <div class="stem"></div>
      <div class="leaf leaf-1"></div>
      <div class="leaf leaf-2"></div>
      <div class="flower-head">
        <!-- 12 outer petals -->
        <div class="petal p1"></div>
        <!-- ... up to p12 -->
        <!-- 8 inner petals -->
        <div class="petal inner-petal ip1"></div>
        <!-- ... up to ip8 -->
        <div class="center-disc">
          <div class="seed-pattern"></div>
        </div>
        <div class="flower-glow"></div>
      </div>
    </div>

    <!-- Ground -->
    <div class="ground"></div>

    <!-- Grass -->
    <div class="grass g1"></div>
    <!-- ... up to g8 -->
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages sun movement, sunflower tracking, and controls.

🎮 Controls
Sun Speed – Adjust how fast the sun moves across the sky (0.2× to 3×)

Tracking Sensitivity – Control how quickly the sunflower follows the sun (0.3× to 2×)

Pause/Play – Pause or resume the animation

Reset – Return the sun to the morning position

🎨 Customization
CSS Variables
Variable	Default	Description
--sun-color	#FFD700	Color of the sun core
--sun-glow-color	rgba(255,215,0,0.3)	Color of the sun glow
--sun-glow-scale	1	Scale of the sun glow
--petal-sway	0deg	Petal sway offset from tracking
JavaScript Configuration
js
// In script.js
const speedMultiplier = 1;      // Sun speed (overridden by slider)
const sensitivityMultiplier = 1; // Tracking sensitivity (overridden by slider)
const sunAngle = 0;             // Current sun position (0-360 degrees)
const currentAngle = 90;        // Current flower rotation
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .sun, .sunflower, .flower-head, .petal, .stem, and .leaf are intuitive and descriptive

Animation‑first — The sun glow pulses, petals animate, grass sways, and the sky shifts — all driven by CSS @keyframes

Declarative & customizable — Sun color, sky gradient, and petal animations are defined with CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Realistic & educational – Demonstrates heliotropism in an engaging, interactive way

Performance‑conscious — Uses GPU-accelerated transform for smooth tracking

📁 File Structure
text
submissions/sunflower-tracking/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file