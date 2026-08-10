# README.md

## 🃏 Tarot Card Flip

A mystical tarot card flip animation with a glowing back. This component captures the magic and mystery of tarot readings — featuring a beautifully designed tarot card with intricate front artwork, a glowing patterned back, smooth 3D flip animation, particle effects, and interactive controls.

---

## ✨ Features

- **3D flip animation** – Smooth card flip with perspective
- **Card front** – Detailed tarot card design with number, title, and art
- **Card back** – Glowing patterned back with mystical circles
- **Glow effect** – Pulsing glow on flip with intensity control
- **Particle burst** – Particles scatter on flip
- **Floating animation** – Subtle card float when facing front
- **Interactive controls** – Flip, reset, speed, and intensity
- **Click to flip** – Click on the card to flip it
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="tc-container">
  <div class="tc-scene">
    <!-- Tarot Card -->
    <div class="tarot-card" id="tarotCard">
      <div class="card-inner">
        <!-- Front -->
        <div class="card-front">
          <div class="card-border">
            <div class="card-corner ctl"></div>
            <div class="card-corner ctr"></div>
            <div class="card-corner cbl"></div>
            <div class="card-corner cbr"></div>
          </div>
          <div class="card-number">VII</div>
          <div class="card-title">THE CHARIOT</div>
          <div class="card-art">
            <!-- Art elements -->
          </div>
          <div class="card-suit">♈</div>
          <div class="card-bottom">VII · THE CHARIOT</div>
        </div>

        <!-- Back -->
        <div class="card-back">
          <div class="back-pattern">
            <div class="back-circle"></div>
            <!-- ... -->
            <div class="back-center"></div>
          </div>
          <div class="back-glow"></div>
        </div>
      </div>
    </div>

    <div class="card-glow" id="cardGlow"></div>

    <!-- Particles -->
    <div class="particle p1"></div>
    <!-- ... -->
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages flip animation, glow effects, particles, controls, and interactions.

🎮 Controls
Flip Card – Flip the card front/back

Reset – Reset to front-facing position

Flip Speed – Adjust the speed of the flip (0.3× to 3×)

Glow Intensity – Control the brightness of the glow (0.3× to 2×)

Click on Card – Click the card to flip it

🎨 Customization
CSS Variables
Variable	Default	Description
--flip-duration	0.8s	Duration of the flip animation
--glow-intensity	0.15	Intensity of the card glow
--glow-size	300px	Size of the card glow
--particle-duration	3s+	Duration of particle float
--particle-delay	0s+	Stagger delay for particles
--particle-opacity	0.15	Opacity of particles
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .tarot-card, .card-front, .card-back, .card-border, .card-art, .back-pattern, .card-glow, and .particle are intuitive and descriptive

Animation‑first — The card flips with CSS 3D transforms, glows pulse with CSS, and particles float with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Mystical & magical — Captures the mystery and beauty of tarot cards

Performance‑conscious — Uses GPU-accelerated 3D transforms for smooth flipping

📁 File Structure
text
submissions/tarot-card-flip/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md