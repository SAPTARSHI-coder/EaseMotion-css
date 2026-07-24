# README.md

## 🌌 Dark Matter Visualization

A mesmerizing animated visualization of dark matter bending light through gravitational lensing. This component captures the mysterious and invisible nature of dark matter — the elusive substance that makes up most of the universe's mass but emits no light — by showing its gravitational effects on the fabric of spacetime and the light that travels through it.

---

## ✨ Features

- **Dark matter halo** – 8 layers of invisible matter with pulsing glow
- **Gravitational lensing grid** – A distortion grid showing spacetime curvature
- **Einstein rings** – 4 rings of bent light around the dark matter halo
- **Light rays bending** – 8 light rays curving around the mass concentration
- **Lensing glow** – A soft glow from the gravitational lensing effect
- **Dark matter particles** – 12 particles representing invisible dark matter
- **Mass indicator** – A visual hint of the hidden mass
- **Background stars** – 20 twinkling stars for cosmic depth
- **Interactive controls** – Lensing strength, halo density, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="dm-container">
  <div class="dm-scene">
    <!-- Background stars -->
    <div class="star s1"></div>
    <!-- ... up to s20 -->

    <!-- Dark matter halo -->
    <div class="dm-halo">
      <div class="halo-layer h1"></div>
      <!-- ... up to h8 -->
    </div>

    <!-- Lensing grid -->
    <div class="lensing-grid">
      <div class="grid-line lh1"></div>
      <!-- ... up to lh8 -->
      <div class="grid-line lv1"></div>
      <!-- ... up to lv8 -->
    </div>

    <!-- Einstein rings -->
    <div class="einstein-ring er1"></div>
    <div class="einstein-ring er2"></div>
    <div class="einstein-ring er3"></div>
    <div class="einstein-ring er4"></div>

    <!-- Light rays -->
    <div class="light-ray lr1"></div>
    <!-- ... up to lr8 -->

    <div class="lensing-glow"></div>

    <!-- Dark matter particles -->
    <div class="dm-particle dp1"></div>
    <!-- ... up to dp12 -->

    <div class="mass-indicator"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages halo pulsation, grid distortion, ring pulsing, light ray bending, controls, and interactions.

🎮 Controls
Lensing Strength – Adjust the intensity of gravitational lensing (0.3× to 2×)

Halo Density – Control the density of the dark matter halo (0.5× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset the visualization to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--halo-opacity	0.05+	Opacity of halo layers
--halo-size	100px+	Size of each halo layer
--ring-size	30px+	Size of Einstein rings
--ring-opacity	0.3	Opacity of Einstein rings
--ray-bend	30deg	Bending angle of light rays
--ray-opacity	0.15	Opacity of light rays
--glow-size	250px	Size of lensing glow
--glow-intensity	0.3	Intensity of lensing glow
--dm-size	3px	Size of dark matter particles
--dm-opacity	0.4	Opacity of dark matter particles
--indicator-size	80px	Size of mass indicator
--indicator-opacity	0.15	Opacity of mass indicator
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .dm-halo, .halo-layer, .lensing-grid, .einstein-ring, .light-ray, .lensing-glow, and .dm-particle are intuitive and descriptive

Animation‑first — Halo layers pulse with CSS, Einstein rings pulse with CSS, light rays bend with CSS, and particles drift with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Educational & cosmic — Demonstrates the concept of dark matter and gravitational lensing in an engaging, visual way

Performance‑conscious — Uses GPU-accelerated transforms for smooth grid distortion and particle animation

📁 File Structure
text
submissions/dark-matter-visualization/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file