# README.md

## 🌸 Pollen Drift

A mesmerizing animated visualization of pollen particles floating through sunlit air. This component captures the delicate, hypnotic dance of pollen grains as they drift on invisible currents — each particle following its own unique path, catching the light as it floats through a warm, golden atmosphere.

---

## ✨ Features

- **25 drifting pollen particles** – Each particle follows its own unique, organic path
- **Multiple animation paths** – 3 distinct drifting patterns for natural variety
- **Sunlight rays** – Warm golden rays filtering through the scene
- **Background flower** – A subtle flower in the background as a pollen source
- **Glow overlay** – A soft, pulsing warm glow across the scene
- **Interactive controls** – Adjust drift speed, particle density, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="pollen-container">
  <div class="pollen-scene">
    <!-- Sky -->
    <div class="sky"></div>

    <!-- Sunlight rays -->
    <div class="sun-ray sr-1"></div>
    <div class="sun-ray sr-2"></div>
    <div class="sun-ray sr-3"></div>
    <div class="sun-ray sr-4"></div>

    <!-- Background flower -->
    <div class="flower-bg">
      <div class="flower-stem"></div>
      <div class="flower-head">
        <div class="flower-petal fp1"></div>
        <div class="flower-petal fp2"></div>
        <div class="flower-petal fp3"></div>
        <div class="flower-petal fp4"></div>
        <div class="flower-petal fp5"></div>
        <div class="flower-petal fp6"></div>
        <div class="flower-center"></div>
      </div>
    </div>

    <!-- 25 pollen particles -->
    <div class="pollen p1"></div>
    <div class="pollen p2"></div>
    <!-- ... up to p25 -->

    <!-- Glow overlay -->
    <div class="glow-overlay"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages particle animations, controls, and interactions.

🎮 Controls
Drift Speed – Adjust the speed of pollen drift (0.3× to 3×)

Particle Density – Control the size and opacity of particles (0.5× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset particles to their initial positions

🎨 Customization
CSS Variables
Variable	Default	Description
--pollen-duration	12s+	Duration of each particle's drift path
--pollen-size	3px	Size of pollen particles
--pollen-opacity	0.5	Opacity of pollen particles
--ray-duration	8s+	Duration of sunlight ray pulses
--glow-duration	4s	Duration of glow overlay pulse
Particle Customization
You can add more particles by copying the pattern:

html
<div class="pollen p26"></div>
And adding CSS:

css
.p26 {
  top: 15%;
  left: 45%;
  animation-delay: 0.7s;
  animation-name: pollenDrift1;
}
Path Variations
Three pre-defined drift paths are available:

pollenDrift1 – Wide, sweeping drift

pollenDrift2 – Tight, circular drift

pollenDrift3 – Zigzag drift

🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .pollen, .sun-ray, .flower-bg, .flower-petal, and .glow-overlay are intuitive and descriptive

Animation‑first — Pollen particles drift with CSS keyframes, sunlight rays pulse with CSS, and the glow overlay breathes with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and opacity values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Atmospheric & immersive — The warm glow, sun rays, drifting particles, and background flower create a rich, living scene

Performance‑conscious — Uses CSS animations for particle movement, with minimal JavaScript for controls

📁 File Structure
text
submissions/pollen-drift/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file