# README.md

## 🕉️ Meditation Mandala

A mesmerizing animated mandala with intricate rotating patterns. This component captures the meditative beauty of sacred geometry — featuring multiple layers of petals, geometric shapes, and concentric circles that rotate and pulse in harmony, creating a calming, hypnotic visual experience.

---

## ✨ Features

- **Multiple rotating rings** – 5 rings rotating at different speeds and directions
- **36 petals** – 12 large, 12 medium, and 12 small petals in 3 rings
- **12 geometric shapes** – Diamonds, triangles, squares, and more in 2 rings
- **5 concentric circles** – Pulsing rings with staggered timing
- **Pulsing center** – A glowing core with subtle color shifting
- **Floating particles** – 12 particles drifting around the mandala
- **Mandala glow** – A soft, pulsing aura around the entire mandala
- **Interactive controls** – Rotation speed, pattern intensity, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="mandala-container">
  <div class="mandala-scene">
    <!-- Mandala -->
    <div class="mandala">
      <!-- 3 rings of petals (12 each) -->
      <div class="ring ring-1">
        <div class="petal p1a"></div>
        <!-- ... up to p1l -->
      </div>
      <div class="ring ring-2">
        <div class="petal p2a"></div>
        <!-- ... up to p2l -->
      </div>
      <div class="ring ring-3">
        <div class="petal p3a"></div>
        <!-- ... up to p3l -->
      </div>

      <!-- 2 rings of geometric shapes (6 each) -->
      <div class="ring ring-4">
        <div class="geo-shape gs1"></div>
        <!-- ... up to gs6 -->
      </div>
      <div class="ring ring-5">
        <div class="geo-shape gs7"></div>
        <!-- ... up to gs12 -->
      </div>

      <!-- 5 concentric circles -->
      <div class="circle-ring cr1"></div>
      <div class="circle-ring cr2"></div>
      <div class="circle-ring cr3"></div>
      <div class="circle-ring cr4"></div>
      <div class="circle-ring cr5"></div>

      <!-- Center -->
      <div class="center">
        <div class="center-core"></div>
        <div class="center-glow"></div>
      </div>

      <!-- Mandala glow -->
      <div class="mandala-glow"></div>

      <!-- 12 particles -->
      <div class="m-particle mp1"></div>
      <!-- ... up to mp12 -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages ring rotation, petal pulsing, particle drifting, controls, and interactions.

🎮 Controls
Rotation Speed – Adjust the speed of all rotations (0.3× to 3×)

Pattern Intensity – Control the size and opacity of patterns (0.3× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset the mandala to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--ring-duration	8s+	Duration of ring rotation
--petal-duration	1.5s+	Duration of petal pulse
--petal-delay	0s+	Stagger delay for petals
--petal-opacity	0.4	Opacity of petals
--petal-scale	1	Scale of petals
--geo-opacity	0.3	Opacity of geometric shapes
--geo-size	20px	Size of geometric shapes
--circle-duration	3s+	Duration of circle pulse
--center-duration	1.5s	Duration of center pulse
--mandala-duration	4s	Duration of mandala glow
--particle-duration	5s+	Duration of particle float
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .ring, .petal, .geo-shape, .circle-ring, .center, .center-core, .center-glow, and .mandala-glow are intuitive and descriptive

Animation‑first — Rings rotate with CSS, petals pulse with CSS, circles pulse with CSS, and particles float with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Meditative & spiritual — Perfect for meditation, mindfulness, and relaxation applications

Performance‑conscious — Uses GPU-accelerated transforms for smooth rotation and animation

📁 File Structure
text
submissions/meditation-mandala/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
