# README.md

## 🪶 Phoenix Feather

A mesmerizing animated visualization of a glowing phoenix feather floating down. This component captures the ethereal beauty of a mythical phoenix feather — with delicate barbs, a glowing shaft, shimmering ember particles, and a soft, pulsing aura that brings this legendary symbol of rebirth to life.

---

## ✨ Features

- **Detailed feather** – Shaft with 24 delicate barbs (12 left, 12 right)
- **Floating animation** – Feather drifts down with gentle sway
- **Glowing shaft** – A pulsing, luminous central shaft
- **Tip glow** – A soft, pulsing glow at the feather's tip
- **Feather aura** – A warm, ethereal glow around the feather
- **Ember particles** – 20 glowing particles drifting from the feather
- **Background stars** – Twinkling stars for cosmic depth
- **Interactive controls** – Float speed, glow intensity, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="pf-container">
  <div class="pf-scene">
    <!-- Background stars -->
    <div class="star s1"></div>
    <!-- ... up to s15 -->

    <!-- Phoenix Feather -->
    <div class="feather-container">
      <div class="feather">
        <!-- Shaft -->
        <div class="shaft"></div>

        <!-- 24 barbs -->
        <div class="barb barb-l1"></div>
        <!-- ... up to barb-r12 -->

        <!-- Tip glow -->
        <div class="tip-glow"></div>

        <!-- Feather aura -->
        <div class="feather-aura"></div>

        <!-- 20 ember particles -->
        <div class="ember ember-1"></div>
        <!-- ... up to ember-20 -->
      </div>
    </div>

    <!-- Glow overlay -->
    <div class="glow-overlay"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages floating, particle drift, glow pulsing, controls, and interactions.

🎮 Controls
Float Speed – Adjust the speed of the feather's float (0.3× to 3×)

Glow Intensity – Control the brightness of all glowing elements (0.3× to 2×)

Reset – Reset the feather to its starting position

🎨 Customization
CSS Variables
Variable	Default	Description
--float-duration	6s	Duration of feather float
--sway-duration	4s	Duration of feather sway
--float-rotation	0deg	Current rotation of feather
--shaft-duration	1.5s	Duration of shaft pulse
--shaft-glow	0.3	Intensity of shaft glow
--barb-duration	1.2s+	Duration of barb appearance
--barb-delay	0s+	Stagger delay for barbs
--tip-duration	1.8s	Duration of tip glow pulse
--tip-opacity	0.4	Opacity of tip glow
--tip-size	60px	Size of tip glow
--aura-duration	3s	Duration of aura pulse
--aura-opacity	0.15	Opacity of feather aura
--aura-size	200px	Size of feather aura
--ember-duration	2.5s+	Duration of ember drift
--ember-opacity	0.3	Opacity of embers
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .feather, .shaft, .barb, .tip-glow, .feather-aura, .ember, and .glow-overlay are intuitive and descriptive

Animation‑first — The feather floats with CSS, barbs appear with CSS, the shaft pulses with CSS, embers drift with CSS, and glows pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Mythical & ethereal — Captures the legendary beauty of the phoenix feather

Performance‑conscious — Uses GPU-accelerated transforms for smooth floating and particle animation

📁 File Structure
text
submissions/phoenix-feather/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md