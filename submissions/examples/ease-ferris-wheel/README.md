# README.md

## 🎡 Ferris Wheel

A beautifully animated Ferris wheel with rotating cabins. This component captures the joy and wonder of a classic amusement park ride — featuring a detailed wheel with spokes, a glowing hub, and 12 cabins that gently swing as the wheel rotates.

---

## ✨ Features

- **Rotating wheel** – Smooth, continuous rotation animation
- **12 cabins** – Each cabin swings gently as it moves
- **Detailed structure** – Outer and inner rims, 12 spokes, support structure
- **Glowing hub** – A pulsing glow at the center of the wheel
- **Cabin glows** – Each cabin has a subtle pulsing glow
- **Wheel glow** – A soft aura around the entire wheel
- **Clouds** – Drifting clouds for atmospheric depth
- **Interactive controls** – Rotation speed, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="fw-container">
  <div class="fw-scene">
    <!-- Sky and clouds -->
    <div class="sky"></div>
    <div class="cloud c1"></div>
    <div class="cloud c2"></div>
    <div class="cloud c3"></div>

    <!-- Ferris Wheel -->
    <div class="ferris-wheel">
      <!-- Support structure -->
      <div class="support support-left"></div>
      <div class="support support-right"></div>
      <div class="support-base"></div>

      <!-- Main wheel -->
      <div class="wheel">
        <!-- Rims -->
        <div class="rim rim-outer"></div>
        <div class="rim rim-inner"></div>

        <!-- 12 spokes -->
        <div class="spoke s1"></div>
        <!-- ... up to s12 -->

        <!-- Hub -->
        <div class="hub">
          <div class="hub-center"></div>
          <div class="hub-glow"></div>
        </div>

        <!-- 12 cabins -->
        <div class="cabin cabin-1">
          <div class="cabin-body">
            <div class="cabin-window"></div>
            <div class="cabin-roof"></div>
          </div>
          <div class="cabin-glow"></div>
        </div>
        <!-- ... up to cabin-12 -->
      </div>

      <!-- Wheel glow -->
      <div class="wheel-glow"></div>
    </div>

    <!-- Ground -->
    <div class="ground"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages wheel rotation, cabin swinging, controls, and interactions.

🎮 Controls
Rotation Speed – Adjust the speed of the wheel's rotation (0.3× to 3×)

Pause/Play – Pause or resume the animation

Reset – Reset the wheel to its starting position

🎨 Customization
CSS Variables
Variable	Default	Description
--wheel-duration	8s	Duration of one full rotation
--cabin-duration	2s	Duration of cabin swing
--cabin-delay	0s+	Stagger delay for cabins
--hub-duration	2s	Duration of hub glow pulse
--glow-duration	3s	Duration of wheel glow pulse
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .ferris-wheel, .wheel, .rim, .spoke, .hub, .cabin, and .support are intuitive and descriptive

Animation‑first — The wheel rotates with CSS, cabins swing with CSS, the hub glows with CSS, and clouds drift with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Playful & nostalgic — Captures the joy and wonder of a classic amusement park ride

Performance‑conscious — Uses GPU-accelerated transforms for smooth rotation and swinging

📁 File Structure
text
submissions/ferris-wheel/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file