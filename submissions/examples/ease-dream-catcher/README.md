# README.md

## 🪶 Dream Catcher

A beautifully animated dream catcher with flowing webs and feathers. This component captures the ethereal beauty of a traditional dream catcher — featuring a delicate web of radial strands and concentric rings, glowing beads, swaying feathers, and a soft, pulsing aura that creates a peaceful, dreamy atmosphere.

---

## ✨ Features

- **Elegant dream catcher** – Traditional design with hoop, web, and feathers
- **Flowing web strands** – 12 radial strands with pulsing animation
- **Concentric web rings** – 6 rings with staggered pulsing
- **Glowing beads** – 8 beads on the web with shimmering glow
- **Swaying feathers** – 4 feathers with gentle swaying motion
- **Hanging loop** – A small loop at the top
- **Soft glow** – A pulsing aura around the entire dream catcher
- **Floating particles** – 12 particles drifting dreamily
- **Interactive controls** – Sway speed, glow intensity, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="dc-container">
  <div class="dc-scene">
    <!-- Dream Catcher -->
    <div class="dream-catcher">
      <!-- Hoops -->
      <div class="hoop"></div>
      <div class="inner-hoop"></div>

      <!-- 12 web strands -->
      <div class="web-strand w1"></div>
      <div class="web-strand w2"></div>
      <!-- ... up to w12 -->

      <!-- 6 web rings -->
      <div class="web-ring r1"></div>
      <div class="web-ring r2"></div>
      <!-- ... up to r6 -->

      <div class="web-center"></div>

      <!-- 8 beads -->
      <div class="bead b1"></div>
      <div class="bead b2"></div>
      <!-- ... up to b8 -->

      <!-- 4 feathers -->
      <div class="feather feather-1">
        <div class="feather-shaft"></div>
        <div class="feather-barbs"></div>
        <div class="feather-glow"></div>
      </div>
      <!-- ... up to feather-4 -->

      <div class="hanging-loop"></div>
      <div class="dc-glow"></div>

      <!-- 12 particles -->
      <div class="d-particle dp1"></div>
      <div class="d-particle dp2"></div>
      <!-- ... up to dp12 -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages swaying, pulsing, particle drifting, controls, and interactions.

🎮 Controls
Sway Speed – Adjust the speed of swaying and pulsing (0.3× to 3×)

Glow Intensity – Control the brightness of glows and particles (0.3× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset the dream catcher to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--sway-duration	4s	Duration of dream catcher sway
--feather-duration	3s+	Duration of feather sway
--feather-delay	0s+	Stagger delay for feathers
--web-duration	2s+	Duration of web ring pulse
--strand-duration	1.5s+	Duration of strand pulse
--bead-duration	2s+	Duration of bead glow
--glow-duration	3s	Duration of glow pulse
--glow-opacity	0.15	Opacity of dream catcher glow
--glow-size	300px	Size of dream catcher glow
--particle-duration	6s+	Duration of particle float
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .hoop, .inner-hoop, .web-strand, .web-ring, .web-center, .bead, .feather, .feather-shaft, .feather-barbs, and .dc-glow are intuitive and descriptive

Animation‑first — The dream catcher sways with CSS, feathers sway with CSS, web rings pulse with CSS, strands pulse with CSS, beads glow with CSS, and particles float with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Spiritual & calming — Perfect for meditation, mindfulness, and dream-themed applications

Performance‑conscious — Uses GPU-accelerated transforms for smooth swaying and animation

📁 File Structure
text
submissions/dream-catcher/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
