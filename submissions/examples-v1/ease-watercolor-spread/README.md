# README.md

## 🎨 Watercolor Spread

A mesmerizing animated visualization of watercolor bleeding on paper. This component captures the organic, fluid beauty of watercolor painting — with color washes spreading outward, blobs bleeding into each other, droplets falling, and a soft glow that brings the artwork to life.

---

## ✨ Features

- **Watercolor washes** – 6 washes spreading on paper
- **Blob bleeding** – 10 blobs per wash bleeding outward
- **Droplet effects** – 8 water droplets falling and spreading
- **Color selection** – Choose from 8 vibrant colors
- **Watercolor glow** – A soft pulsing glow behind the artwork
- **Paper texture** – Realistic paper grain texture
- **Brush** – An animated brush for artistic feel
- **Interactive controls** – Spread, add color, speed, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="ws-container">
  <div class="ws-scene">
    <!-- Paper -->
    <div class="paper">
      <div class="paper-texture"></div>

      <!-- 6 washes -->
      <div class="wash wash-1">
        <div class="wash-blob"></div>
        <!-- ... 10 blobs per wash -->
      </div>
      <!-- ... up to wash-6 -->

      <!-- 8 droplets -->
      <div class="droplet d1"></div>
      <!-- ... up to d8 -->

      <div class="watercolor-glow"></div>
    </div>

    <!-- Brush -->
    <div class="brush">
      <div class="brush-handle"></div>
      <div class="brush-ferrule"></div>
      <div class="brush-bristles"></div>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages spreading, color addition, controls, and interactions.

🎮 Controls
Spread Watercolor – Trigger the color wash spread animation

Add Color – Add a new color blob to an existing wash

Spread Speed – Adjust the speed of spreading (0.3× to 3×)

Color – Choose from 8 colors (Red, Yellow, Blue, Green, Purple, Orange, Pink, Cyan)

Reset – Reset the paper to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--wash-duration	3s+	Duration of wash spread
--wash-delay	0s+	Stagger delay for washes
--blob-duration	2s+	Duration of blob bleed
--blob-delay	0s+	Stagger delay for blobs
--blob-opacity	0.3	Opacity of blobs
--blob-scale	0.8	Scale of blobs
--droplet-duration	1.5s+	Duration of droplet fall
--glow-duration	2.5s	Duration of glow pulse
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .wash, .wash-blob, .droplet, .watercolor-glow, and .brush are intuitive and descriptive

Animation‑first — Washes spread with CSS, blobs bleed with CSS, droplets fall with CSS, and glows pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Artistic & fluid — Captures the organic, flowing beauty of watercolor painting

Performance‑conscious — Uses GPU-accelerated transforms for smooth spread animations

📁 File Structure
text
submissions/watercolor-spread/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
