# README.md

## 🕳️ Black Hole Accretion

A mesmerizing animated visualization of matter spiraling into a black hole. This component captures the dramatic cosmic phenomenon of accretion — as gas, dust, and debris are pulled into the black hole's gravitational grip, forming a glowing accretion disk that spirals inward toward the event horizon.

---

## ✨ Features

- **Accretion disk** – 40 particles orbiting the black hole in a flattened disk
- **Spiral infall** – Particles gradually spiral inward toward the event horizon
- **Event horizon** – A dark, pulsing sphere representing the point of no return
- **Photon ring** – A glowing ring of light orbiting the black hole
- **Matter stream** – Incoming particles spiraling from the outer edge
- **Gravitational lensing glow** – A subtle glow simulating light distortion
- **Accretion glow** – A pulsing glow from the heated infalling matter
- **Background stars** – Twinkling stars for cosmic depth
- **Interactive controls** – Accretion speed, particle density, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="bh-container">
  <div class="bh-scene">
    <!-- Background stars -->
    <div class="star s1"></div>
    <!-- ... up to s12 -->

    <!-- Black Hole -->
    <div class="black-hole">
      <!-- Event horizon -->
      <div class="event-horizon"></div>

      <!-- Inner shadow -->
      <div class="inner-shadow"></div>

      <!-- Photon ring -->
      <div class="photon-ring"></div>

      <!-- Accretion disk (40 particles) -->
      <div class="accretion-disk">
        <div class="disk-particle dp1"></div>
        <!-- ... up to dp40 -->
      </div>

      <!-- Gravitational lensing glow -->
      <div class="lensing-glow"></div>

      <!-- Accretion glow -->
      <div class="accretion-glow"></div>
    </div>

    <!-- Matter stream -->
    <div class="matter-stream">
      <div class="stream-particle sp1"></div>
      <!-- ... up to sp12 -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages particle orbits, controls, and interactions.

🎮 Controls
Accretion Speed – Adjust the speed of particle orbits and infall (0.3× to 3×)

Particle Density – Control the size and opacity of particles (0.5× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset particle positions

🎨 Customization
CSS Variables
Variable	Default	Description
--orbit-duration	4s+	Duration of particle orbits
--orbit-delay	0s+	Stagger delay for particles
--stream-duration	3s+	Duration of stream particles
--photon-duration	3s	Duration of photon ring rotation
--glow-duration	2s	Duration of accretion glow pulse
--lensing-duration	4s	Duration of lensing glow pulse
--horizon-duration	3.5s	Duration of event horizon pulse
--particle-size	3px	Size of disk particles
--particle-opacity	0.6	Opacity of disk particles
--ring-size	180px	Size of the photon ring
--glow-size	250px	Size of the accretion glow
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .event-horizon, .photon-ring, .disk-particle, .accretion-glow, .matter-stream, and .lensing-glow are intuitive and descriptive

Animation‑first — Particles orbit with CSS animations, the photon ring rotates, and glows pulse — all driven by CSS keyframes

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Educational & cosmic — Demonstrates the physics of black hole accretion in an engaging, visual way

Performance‑conscious — Uses GPU-accelerated transforms for smooth particle animation

📁 File Structure
text
submissions/black-hole-accretion/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file