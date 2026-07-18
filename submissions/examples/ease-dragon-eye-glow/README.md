# README.md

## 🐉 Dragon Eye Glow

A mesmerizing animated visualization of a dragon eye with a slitted pupil glowing. This component captures the fierce, mystical gaze of a dragon — featuring a detailed eye with scales, a glowing iris with rotating rings, a vertical slitted pupil, pulsating glows, light rays, and floating energy particles that bring this legendary creature to life.

---

## ✨ Features

- **Detailed dragon eye** – Scales, eyelids, sclera, iris, and slitted pupil
- **Glowing iris** – Pulsing iris with 8 rotating rings
- **Slitted pupil** – Vertical pupil with glow and dilation animation
- **Pulsing glows** – Pupil, iris, eye, and ambient glow layers
- **Light rays** – 8 rays emanating from the eye
- **Energy particles** – 12 floating particles around the eye
- **Blood vessels** – Subtle vessels in the sclera
- **Interactive controls** – Glow intensity, pulse speed, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="de-container">
  <div class="de-scene">
    <!-- Dragon Eye -->
    <div class="dragon-eye">
      <div class="eye-socket">
        <!-- 12 scales -->
        <div class="scale scale-1"></div>
        <!-- ... up to scale-12 -->

        <!-- Eyelids -->
        <div class="eyelid upper-lid"></div>
        <div class="eyelid lower-lid"></div>

        <!-- Sclera -->
        <div class="sclera">
          <!-- 6 blood vessels -->
          <div class="vessel v1"></div>
          <!-- ... up to v6 -->
        </div>

        <!-- Iris -->
        <div class="iris">
          <!-- 8 iris rings -->
          <div class="iris-ring ir1"></div>
          <!-- ... up to ir8 -->

          <!-- Pupil -->
          <div class="pupil">
            <div class="pupil-slit"></div>
            <div class="pupil-glow"></div>
          </div>

          <div class="iris-glow"></div>
        </div>

        <div class="eye-glow"></div>
        <div class="ambient-glow"></div>

        <!-- 8 light rays -->
        <div class="light-ray lr1"></div>
        <!-- ... up to lr8 -->

        <!-- 12 energy particles -->
        <div class="energy-particle ep1"></div>
        <!-- ... up to ep12 -->
      </div>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages glows, particles, rings, controls, and interactions.

🎮 Controls
Glow Intensity – Adjust the brightness of all glowing elements (0.3× to 2×)

Pulse Speed – Adjust the speed of all animations (0.3× to 3×)

Reset – Reset to the initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--iris-duration	2s	Duration of iris pulse
--pupil-duration	0.8s	Duration of pupil glow pulse
--pupil-intensity	0.5	Intensity of pupil glow
--pupil-size	60px	Size of pupil glow
--iris-glow-duration	1.5s	Duration of iris glow pulse
--iris-intensity	0.4	Intensity of iris glow
--iris-glow-size	120px	Size of iris glow
--eye-glow-duration	2.5s	Duration of eye glow pulse
--eye-intensity	0.2	Intensity of eye glow
--eye-glow-size	200px	Size of eye glow
--ambient-duration	3s	Duration of ambient glow pulse
--ambient-intensity	0.1	Intensity of ambient glow
--ambient-size	300px	Size of ambient glow
--ray-duration	2s+	Duration of light ray pulse
--particle-duration	2.5s+	Duration of particle float
--slit-width	4px	Width of the pupil slit
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .dragon-eye, .scale, .eyelid, .sclera, .iris, .iris-ring, .pupil, .pupil-slit, .pupil-glow, .iris-glow, .eye-glow, .ambient-glow, .light-ray, and .energy-particle are intuitive and descriptive

Animation‑first — The iris pulses with CSS, rings rotate with CSS, glows pulse with CSS, rays pulse with CSS, and particles float with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Mythical & fierce — Captures the intense, mystical gaze of a dragon

Performance‑conscious — Uses GPU-accelerated transforms for smooth animations and particle movement

📁 File Structure
text
submissions/dragon-eye-glow/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md