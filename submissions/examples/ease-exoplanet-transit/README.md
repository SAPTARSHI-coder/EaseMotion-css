# README.md

## 🪐 Exoplanet Transit

A mesmerizing animated visualization of an exoplanet crossing in front of its host star. This component captures the dramatic moment of a planetary transit — when a distant exoplanet passes between its star and the observer, blocking a portion of the star's light and creating a detectable dimming that astronomers use to discover and study worlds beyond our solar system.

---

## ✨ Features

- **Exoplanet transit** – A planet orbits and crosses in front of its star
- **Detailed star** – Glowing core with pulsing rays and atmospheric glow
- **Planet with atmosphere** – Detailed planet body with atmospheric glow
- **Transit shadow** – The planet casts a shadow on the star during transit
- **Orbit ring** – Visual indicator of the planet's orbital path
- **Light curve indicator** – Real-time light curve showing star brightness
- **Transit glow** – A pulsing glow that intensifies during transit
- **Background stars** – Twinkling stars for cosmic depth
- **Interactive controls** – Orbital speed, planet size, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="et-container">
  <div class="et-scene">
    <!-- Background stars -->
    <div class="star s1"></div>
    <!-- ... up to s15 -->

    <!-- Star system -->
    <div class="star-system">
      <div class="star-core"></div>
      <div class="star-glow"></div>
      <div class="star-rays">
        <div class="ray r1"></div>
        <div class="ray r2"></div>
        <div class="ray r3"></div>
        <div class="ray r4"></div>
        <div class="ray r5"></div>
        <div class="ray r6"></div>
        <div class="ray r7"></div>
        <div class="ray r8"></div>
      </div>
      <div class="star-pulse"></div>

      <!-- Exoplanet -->
      <div class="planet">
        <div class="planet-body"></div>
        <div class="planet-atmosphere"></div>
        <div class="planet-shadow"></div>
        <div class="orbit-ring"></div>
      </div>

      <!-- Transit light curve -->
      <div class="light-curve">
        <div class="curve-line"></div>
        <div class="curve-dot"></div>
      </div>
    </div>

    <!-- Transit glow -->
    <div class="transit-glow"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages orbital motion, transit timing, light curve, controls, and interactions.

🎮 Controls
Orbital Speed – Adjust the speed of the planet's orbit (0.3× to 3×)

Planet Size – Control the size of the exoplanet (0.5× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset the transit to the beginning

🎨 Customization
CSS Variables
Variable	Default	Description
--orbit-duration	8s	Duration of one full orbit
--planet-size	30px	Size of the exoplanet
--atmosphere-size	42px	Size of the planet's atmosphere
--shadow-size	48px	Size of the transit shadow
--ring-size	240px	Size of the orbit ring
--star-size	120px	Size of the star core
--pulse-duration	2s	Duration of star pulse
--ray-duration	3s+	Duration of star ray pulse
--transit-duration	1.5s	Duration of transit glow pulse
--curve-duration	8s	Duration of light curve dot
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .star-core, .planet, .planet-body, .planet-atmosphere, .orbit-ring, .light-curve, and .transit-glow are intuitive and descriptive

Animation‑first — The planet orbits with CSS, star pulses with CSS, rays pulse with CSS, and the light curve dot moves with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Educational & scientific — Demonstrates the exoplanet transit method used by astronomers to discover exoplanets

Performance‑conscious — Uses GPU-accelerated transforms for smooth orbital motion

📁 File Structure
text
submissions/exoplanet-transit/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file