# README.md

## ⚡ Pulsar Beam

A mesmerizing animated visualization of a rotating pulsar with sweeping beams of radiation. This component captures the dramatic cosmic phenomenon of a pulsar — a rapidly rotating neutron star that emits beams of electromagnetic radiation from its magnetic poles, creating a lighthouse-like effect as it spins through space.

---

## ✨ Features

- **Rotating pulsar** – The entire pulsar assembly rotates continuously
- **Dual sweeping beams** – Two beams of radiation extend from opposite poles
- **Beam pulsing** – Beams pulse with rhythmic intensity
- **Neutron star core** – A glowing, pulsing central sphere
- **Magnetic field lines** – Concentric rings representing the pulsar's magnetic field
- **Beam particles** – Particles traveling along the beams with varying speeds
- **Core glow** – A pulsing glow around the neutron star
- **Nebula glow** – A subtle nebula surrounding the pulsar
- **Background stars** – Twinkling stars for cosmic depth
- **Interactive controls** – Rotation speed, beam width, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="pulsar-container">
  <div class="pulsar-scene">
    <!-- Background stars -->
    <div class="star s1"></div>
    <!-- ... up to s15 -->

    <!-- Pulsar -->
    <div class="pulsar">
      <!-- Neutron star core -->
      <div class="core"></div>

      <!-- Core glow -->
      <div class="core-glow"></div>

      <!-- Magnetic field lines -->
      <div class="field-line fl1"></div>
      <div class="field-line fl2"></div>
      <div class="field-line fl3"></div>
      <div class="field-line fl4"></div>

      <!-- Beam 1 (main) -->
      <div class="beam beam-1">
        <div class="beam-core"></div>
        <div class="beam-glow"></div>
        <div class="beam-particles">
          <div class="bp bp1"></div>
          <!-- ... up to bp8 -->
        </div>
      </div>

      <!-- Beam 2 (counter) -->
      <div class="beam beam-2">
        <div class="beam-core"></div>
        <div class="beam-glow"></div>
        <div class="beam-particles">
          <div class="bp bp9"></div>
          <!-- ... up to bp16 -->
        </div>
      </div>

      <!-- Nebula glow -->
      <div class="nebula"></div>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages pulsar rotation, beam pulsing, particle movement, controls, and interactions.

🎮 Controls
Rotation Speed – Adjust the speed of pulsar rotation (0.3× to 3×)

Beam Width – Control the width of the beams (0.5× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset particle positions

🎨 Customization
CSS Variables
Variable	Default	Description
--rotation-duration	2s	Duration of one full rotation
--beam-duration	0.15s	Duration of beam pulse
--beam-width	4px	Width of the beam core
--core-glow-duration	0.8s	Duration of core glow pulse
--field-duration	1.5s+	Duration of field line pulse
--bp-duration	0.5s+	Duration of beam particle travel
--bp-delay	0s+	Stagger delay for particles
--bp-size	3px	Size of beam particles
--core-width	4px	Width of beam core
--glow-width	60px	Width of beam glow
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .pulsar, .core, .beam, .beam-core, .beam-glow, .bp, .field-line, and .nebula are intuitive and descriptive

Animation‑first — The entire pulsar rotates with CSS, beams pulse with CSS, particles travel with CSS, and glows pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Educational & cosmic — Demonstrates the physics of pulsars (rotation, beams, magnetic fields) in an engaging, visual way

Performance‑conscious — Uses GPU-accelerated transforms for smooth rotation and particle animation

📁 File Structure
text
submissions/pulsar-beam/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
