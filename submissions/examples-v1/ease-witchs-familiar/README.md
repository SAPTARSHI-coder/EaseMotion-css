# README.md

## 🐈‍⬛ Witch's Familiar

A mystical animated black cat with glowing eyes. This component captures the enchanting presence of a witch's familiar — featuring a detailed black cat with a moonlit silhouette, glowing eyes that pulse with magical energy, a swaying tail, twinkling stars, drifting fog, and floating magic particles.

---

## ✨ Features

- **Detailed black cat** – Body, head, ears, whiskers, paws, and tail
- **Glowing eyes** – Eyes glow with warm magical light
- **Eye blink** – Natural blinking animation
- **Tail sway** – Gentle swaying motion
- **Cat glow** – Soft aura around the cat
- **Magic particles** – 12 floating particles
- **Moon and stars** – Atmospheric background
- **Drifting fog** – Subtle fog layers
- **Interactive controls** – Glow, reset, speed, and intensity
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="wf-container">
  <div class="wf-scene">
    <!-- Moon -->
    <div class="moon">
      <div class="moon-glow"></div>
    </div>

    <!-- Stars -->
    <div class="star st1"></div>
    <!-- ... up to st12 -->

    <!-- Fog -->
    <div class="fog fog-1"></div>
    <div class="fog fog-2"></div>
    <div class="fog fog-3"></div>

    <!-- Black Cat -->
    <div class="cat">
      <div class="cat-body">
        <div class="body-shape"></div>
        <div class="tail">
          <div class="tail-segment ts1"></div>
          <!-- ... up to ts4 -->
        </div>
        <div class="head">
          <div class="head-shape"></div>
          <div class="ear ear-left">
            <div class="ear-inner"></div>
          </div>
          <div class="ear ear-right">
            <div class="ear-inner"></div>
          </div>
          <div class="eye eye-left">
            <div class="eye-glow"></div>
            <div class="pupil"></div>
          </div>
          <div class="eye eye-right">
            <div class="eye-glow"></div>
            <div class="pupil"></div>
          </div>
          <div class="nose"></div>
          <!-- 6 whiskers -->
          <div class="whisker w-left-1"></div>
          <!-- ... -->
          <div class="mouth"></div>
        </div>
        <!-- 4 paws -->
        <div class="paw paw-front-left"></div>
        <!-- ... -->
      </div>
      <div class="cat-glow"></div>
      <!-- 12 magic particles -->
      <div class="magic-particle mp1"></div>
      <!-- ... up to mp12 -->
    </div>

    <div class="ambient-glow"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages eye glow, blinking, tail sway, particles, controls, and interactions.

🎮 Controls
Glow Eyes – Toggle the magical eye glow

Reset – Reset to the default state

Eye Glow Speed – Adjust the speed of animations (0.3× to 3×)

Glow Intensity – Control the brightness of glows (0.3× to 2×)

Click on Cat – Click the cat to toggle glow

🎨 Customization
CSS Variables
Variable	Default	Description
--blink-duration	0.15s	Duration of eye blink
--tail-duration	1.5s	Duration of tail sway
--eye-glow-intensity	0.3	Intensity of eye glow
--eye-glow-size	30px	Size of eye glow
--cat-glow-intensity	0.08	Intensity of cat glow
--cat-glow-size	200px	Size of cat glow
--ambient-intensity	0.05	Intensity of ambient glow
--ambient-size	300px	Size of ambient glow
--particle-duration	3s+	Duration of particle float
--particle-intensity	0.15	Intensity of particles
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .cat, .head, .eye, .tail, .paw, .whisker, .cat-glow, and .magic-particle are intuitive and descriptive

Animation‑first — Eyes blink with CSS, tail sways with CSS, particles float with CSS, and glows pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Mystical & enchanting — Captures the magical presence of a witch's familiar

Performance‑conscious — Uses GPU-accelerated transforms for smooth animations and particle movement

📁 File Structure
text
submissions/witchs-familiar/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md 