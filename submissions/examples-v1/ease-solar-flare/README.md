# README.md

## ☀️ Solar Flare

A dramatic animated visualization of the Sun erupting with plasma jets. This component captures the breathtaking power and beauty of solar flares — intense bursts of radiation and plasma that erupt from the Sun's surface, sending energetic particles and coronal mass ejections hurtling into space.

---

## ✨ Features

- **Dynamic solar flares** – 8 plasma jets erupting from the Sun's surface
- **Rotating Sun** – The Sun rotates slowly with surface texture
- **Solar corona** – A glowing atmospheric halo around the Sun
- **Coronal loops** – Magnetic field lines arching above the Sun's surface
- **Energetic particles** – Particles ejected from the flares
- **Flare glow** – A pulsing glow that intensifies with eruptions
- **Sun glow** – A soft atmospheric glow around the entire Sun
- **Background stars** – Twinkling stars for cosmic depth
- **Interactive controls** – Eruption speed, flare intensity, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="sf-container">
  <div class="sf-scene">
    <!-- Background stars -->
    <div class="star s1"></div>
    <!-- ... up to s12 -->

    <!-- Sun -->
    <div class="sun">
      <div class="sun-core"></div>
      <div class="sun-surface"></div>
      <div class="corona"></div>

      <!-- Coronal loops -->
      <div class="coronal-loop loop-1"></div>
      <div class="coronal-loop loop-2"></div>
      <div class="coronal-loop loop-3"></div>
      <div class="coronal-loop loop-4"></div>
      <div class="coronal-loop loop-5"></div>

      <!-- 8 solar flares -->
      <div class="flare flare-1"></div>
      <div class="flare flare-2"></div>
      <!-- ... up to flare-8 -->

      <div class="flare-glow"></div>
      <div class="sun-glow"></div>

      <!-- 20 energetic particles -->
      <div class="particle ep1"></div>
      <div class="particle ep2"></div>
      <!-- ... up to ep20 -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages flare eruptions, particle ejection, controls, and interactions.

🎮 Controls
Eruption Speed – Adjust the speed of flare eruptions (0.3× to 3×)

Flare Intensity – Control the brightness and size of flares (0.5× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset the Sun to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--sun-rotation	60s	Duration of Sun rotation
--flare-duration	1.5s+	Duration of flare eruption
--flare-delay	0s+	Stagger delay for flares
--flare-width	3px	Width of flare jets
--flare-height	60px	Height of flare jets
--flare-opacity	0.6	Opacity of flares
--loop-duration	3s+	Duration of coronal loop pulse
--particle-duration	2s+	Duration of particle ejection
--corona-duration	4s	Duration of corona pulse
--glow-duration	1.2s	Duration of flare glow pulse
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .sun, .sun-core, .corona, .flare, .coronal-loop, .particle, and .flare-glow are intuitive and descriptive

Animation‑first — The Sun rotates with CSS, flares erupt with CSS, particles eject with CSS, corona pulses with CSS, and loops pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Educational & cosmic — Demonstrates solar physics (flares, corona, magnetic loops) in an engaging, visual way

Performance‑conscious — Uses GPU-accelerated transforms for smooth rotation and particle animation

📁 File Structure
text
submissions/solar-flare/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file