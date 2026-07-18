# README.md

## 🌌 Galaxy Collision

A dramatic animated visualization of two galaxies merging with their stars. This component captures the breathtaking cosmic dance of galactic collision — as two spiral galaxies approach, their stars interact, spiral arms distort, and tidal tails form in a spectacular display of cosmic evolution.

---

## ✨ Features

- **Two spiral galaxies** – A blue/white galaxy and a gold/red galaxy
- **Galactic approach** – Galaxies move toward each other and merge
- **Spiral arms** – Each galaxy has 4 rotating spiral arms
- **60 star particles** – Stars distributed in spiral patterns with twinkling animation
- **Galactic centers** – Bright glowing cores for each galaxy
- **Collision glow** – A pulsing glow that intensifies during the merger
- **Tidal tails** – Streams of stars pulled out by gravitational interaction
- **Galaxy glows** – Soft atmospheric glows around each galaxy
- **Background stars** – Twinkling stars for cosmic depth
- **Interactive controls** – Collision speed, star density, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="gc-container">
  <div class="gc-scene">
    <!-- Background stars -->
    <div class="star s1"></div>
    <!-- ... up to s12 -->

    <!-- Galaxy 1 (blue/white) -->
    <div class="galaxy galaxy-1">
      <div class="galaxy-glow g1-glow"></div>
      <div class="spiral-arm arm1-1"></div>
      <div class="spiral-arm arm1-2"></div>
      <div class="spiral-arm arm1-3"></div>
      <div class="spiral-arm arm1-4"></div>
      <!-- 30 star particles -->
      <div class="star-particle gp1"></div>
      <!-- ... up to gp30 -->
      <div class="galaxy-center gc1-center"></div>
    </div>

    <!-- Galaxy 2 (gold/red) -->
    <div class="galaxy galaxy-2">
      <!-- Similar structure -->
    </div>

    <!-- Collision glow -->
    <div class="collision-glow"></div>

    <!-- Tidal tails -->
    <div class="tidal-tail tail-1"></div>
    <div class="tidal-tail tail-2"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages galaxy movement, collision progression, controls, and interactions.

🎮 Controls
Collision Speed – Adjust the speed of the galaxy merger (0.3× to 3×)

Star Density – Control the size and brightness of stars (0.5× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset galaxies to their starting positions

🎨 Customization
CSS Variables
Variable	Default	Description
--galaxy-orbit	6s	Duration of galaxy orbital motion
--spiral-duration	4s+	Duration of spiral arm rotation
--star-twinkle	1.5s+	Duration of star twinkling
--glow-pulse	3s+	Duration of galaxy glow pulse
--collision-duration	2s	Duration of collision glow pulse
--tail-duration	4s+	Duration of tidal tail sway
--star-size	2px	Size of star particles
--star-opacity	0.6	Opacity of star particles
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .galaxy, .spiral-arm, .star-particle, .galaxy-center, .collision-glow, and .tidal-tail are intuitive and descriptive

Animation‑first — Galaxies move with JavaScript-driven transforms, spiral arms rotate with CSS, stars twinkle with CSS, and glows pulse with CSS — all working together seamlessly

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Educational & cosmic — Demonstrates galaxy collision dynamics in an engaging, visual way

Performance‑conscious — Uses GPU-accelerated transforms for smooth galaxy movement and star animation

📁 File Structure
text
submissions/galaxy-collision/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file