# README.md

## 🦉 Owl's Head Turn

A charming animated owl with a rotating head and big glowing eyes. This component captures the iconic behavior of owls — featuring a detailed owl with a 180-degree head turn, large expressive eyes with soft glow, natural blinking, feather particles, and a moonlit woodland atmosphere.

---

## ✨ Features

- **Rotating head** – 180-degree head turn animation
- **Big glowing eyes** – Large eyes with soft pupil glow
- **Natural blinking** – Eyes blink at random intervals
- **Feather particles** – Drifting particles around the owl
- **Moonlit atmosphere** – Moon, stars, and branch
- **Owl glow** – Soft aura around the owl
- **Interactive controls** – Turn head, reset, speed, and intensity
- **Click to turn** – Click the owl to turn its head
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="ot-container">
  <div class="ot-scene">
    <!-- Moon and stars -->
    <div class="moon">
      <div class="moon-glow"></div>
    </div>
    <div class="star st1"></div>
    <!-- ... up to st10 -->

    <!-- Branch -->
    <div class="branch">
      <div class="branch-1"></div>
      <div class="branch-2"></div>
      <div class="branch-3"></div>
    </div>

    <!-- Owl -->
    <div class="owl">
      <div class="owl-body">
        <div class="body-shape"></div>
        <div class="feather-pattern"></div>
        <div class="belly"></div>

        <div class="foot f-left"></div>
        <div class="foot f-right"></div>

        <div class="wing wing-left"></div>
        <div class="wing wing-right"></div>

        <div class="head" id="owlHead">
          <div class="head-shape"></div>
          <div class="ear-tuft tuft-left"></div>
          <div class="ear-tuft tuft-right"></div>

          <div class="facial-disc disc-left"></div>
          <div class="facial-disc disc-right"></div>

          <div class="eye eye-left">
            <div class="eye-ring"></div>
            <div class="eye-white"></div>
            <div class="pupil">
              <div class="pupil-glow"></div>
            </div>
            <div class="eye-shine"></div>
          </div>
          <div class="eye eye-right">
            <!-- Similar structure -->
          </div>

          <div class="beak"></div>
          <div class="disc-line dl1"></div>
          <!-- ... -->
        </div>
      </div>

      <div class="owl-glow"></div>
      <div class="feather-particle fp1"></div>
      <!-- ... up to fp6 -->
    </div>

    <div class="ambient-glow"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages head turning, blinking, particles, controls, and interactions.

🎮 Controls
Turn Head – Rotate the owl's head 180 degrees

Reset – Reset to the default position

Turn Speed – Adjust the speed of head turning (0.3× to 3×)

Eye Glow – Control the brightness of eye glows (0.3× to 2×)

Click on Owl – Click the owl to turn its head

🎨 Customization
CSS Variables
Variable	Default	Description
--turn-duration	0.8s	Duration of head turn
--blink-duration	0.12s	Duration of eye blink
--pupil-duration	1.5s	Duration of pupil glow pulse
--pupil-intensity	0.3	Intensity of pupil glow
--pupil-size	30px	Size of pupil glow
--owl-glow-intensity	0.08	Intensity of owl glow
--owl-glow-size	200px	Size of owl glow
--ambient-intensity	0.04	Intensity of ambient glow
--ambient-size	250px	Size of ambient glow
--particle-duration	3s+	Duration of particle float
--ring-intensity	0.1	Intensity of eye ring
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .owl, .head, .eye, .pupil, .beak, .wing, .facial-disc, and .ear-tuft are intuitive and descriptive

Animation‑first — The head turns with CSS 3D transforms, eyes blink with CSS, glows pulse with CSS, and particles float with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Charming & whimsical — Captures the iconic, endearing behavior of owls

Performance‑conscious — Uses GPU-accelerated 3D transforms for smooth head turning

📁 File Structure
text
submissions/owls-head-turn/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md