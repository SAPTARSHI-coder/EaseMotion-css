# README.md

## 🧙 Cauldron Stir

A magical animated cauldron with brew stirring. This component captures the enchanting art of potion-making — featuring a detailed cauldron with bubbling brew, a stirring spoon that circles the mixture, rising steam, magic sparks, a warm glow, and dancing fire beneath the cauldron.

---

## ✨ Features

- **Detailed cauldron** – Body, rim, inner, feet, and handles
- **Bubbling brew** – 12 bubbles rising through the liquid
- **Stirring spoon** – Spoon stirs the brew in a circular motion
- **Rising steam** – 8 steam particles
- **Magic sparks** – 10 sparkling particles
- **Dancing fire** – 5 fire particles beneath the cauldron
- **Glowing effects** – Cauldron and ambient glow
- **Interactive controls** – Stir, reset, speed, and intensity
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="cs-container">
  <div class="cs-scene">
    <!-- Cauldron -->
    <div class="cauldron">
      <div class="cauldron-body">
        <div class="cauldron-rim"></div>
        <div class="cauldron-inner"></div>

        <!-- Brew liquid -->
        <div class="brew-liquid">
          <div class="brew-surface"></div>
          <div class="brew-color"></div>
          <!-- 12 bubbles -->
          <div class="brew-bubble bb1"></div>
          <!-- ... up to bb12 -->
        </div>

        <!-- Spoon -->
        <div class="spoon">
          <div class="spoon-handle"></div>
          <div class="spoon-head"></div>
        </div>

        <!-- Feet -->
        <div class="foot foot-left"></div>
        <div class="foot foot-right"></div>
        <div class="foot foot-back"></div>

        <!-- Handles -->
        <div class="handle handle-left"></div>
        <div class="handle handle-right"></div>
      </div>

      <!-- 8 steam particles -->
      <div class="steam s1"></div>
      <!-- ... up to s8 -->

      <!-- 10 sparks -->
      <div class="spark sk1"></div>
      <!-- ... up to sk10 -->

      <div class="cauldron-glow"></div>

      <!-- 5 fire particles -->
      <div class="fire fire-1"></div>
      <!-- ... up to fire-5 -->
    </div>

    <div class="ambient-glow"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages stirring, bubbles, steam, sparks, controls, and interactions.

🎮 Controls
Stir Brew – Start/stop the stirring animation

Reset – Reset to the default state

Stir Speed – Adjust the speed of stirring (0.3× to 3×)

Magic Intensity – Control the brightness of glows and effects (0.3× to 2×)

Click on Cauldron – Click the cauldron to start stirring

🎨 Customization
CSS Variables
Variable	Default	Description
--stir-duration	1.5s	Duration of one stir cycle
--bubble-duration	1.2s+	Duration of bubble rise
--steam-duration	2s+	Duration of steam rise
--spark-duration	0.8s+	Duration of spark burst
--fire-duration	0.6s+	Duration of fire flicker
--glow-intensity	0.15	Intensity of cauldron glow
--glow-size	200px	Size of cauldron glow
--ambient-intensity	0.05	Intensity of ambient glow
--brew-color	#6a4acc	Color of the brew
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .cauldron, .spoon, .brew-liquid, .brew-bubble, .steam, .spark, .fire, and .cauldron-glow are intuitive and descriptive

Animation‑first — The spoon stirs with CSS, bubbles rise with CSS, steam flows with CSS, sparks burst with CSS, and fire flickers with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Magical & enchanting — Captures the wonder of potion-making and alchemy

Performance‑conscious — Uses GPU-accelerated transforms for smooth animations

📁 File Structure
text
submissions/cauldron-stir/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
