# README.md

## 👁️ Third Eye Opening

A mystical animated visualization of an eye opening with radiant light. This component captures the spiritual awakening of the third eye — as the eye slowly opens, revealing a luminous iris and pupil, surrounded by glowing energy rays, pulsing light, and floating particles that symbolize the activation of inner vision and higher consciousness.

---

## ✨ Features

- **Animated eye opening** – Smooth, organic eye lid opening and closing
- **Luminous iris** – A glowing iris with intricate patterns and pulsing light
- **Radiant pupil** – A deep, mystical pupil with inner glow
- **Glowing energy rays** – 12 radial light rays emanating from the eye
- **Iris glow** – A soft, pulsing glow around the iris
- **Eye glow** – A radiant aura surrounding the eye
- **Third eye glow** – A expansive, pulsing aura of spiritual energy
- **Energy particles** – 20 floating particles of mystical light
- **Interactive controls** – Open, close, light intensity, and reset
- **Click to toggle** – Click on the eye to open or close it
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="te-container">
  <div class="te-scene">
    <!-- Third Eye -->
    <div class="third-eye">
      <!-- Outer eye -->
      <div class="eye-outer">
        <!-- Eye lids -->
        <div class="eye-lid upper-lid"></div>
        <div class="eye-lid lower-lid"></div>

        <div class="eye-white"></div>

        <!-- Iris -->
        <div class="iris">
          <!-- 8 iris patterns -->
          <div class="iris-pattern ip1"></div>
          <div class="iris-pattern ip2"></div>
          <!-- ... up to ip8 -->

          <!-- Pupil -->
          <div class="pupil">
            <div class="pupil-glow"></div>
          </div>

          <div class="iris-glow"></div>
        </div>

        <div class="eye-glow"></div>

        <!-- 12 light rays -->
        <div class="light-ray lr1"></div>
        <div class="light-ray lr2"></div>
        <!-- ... up to lr12 -->
      </div>

      <div class="third-eye-glow"></div>

      <!-- 20 energy particles -->
      <div class="energy-particle ep1"></div>
      <div class="energy-particle ep2"></div>
      <!-- ... up to ep20 -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages eye opening, glowing, particles, controls, and interactions.

🎮 Controls
Open Eye – Open the third eye with mystical light

Close Eye – Close the third eye gently

Light Intensity – Control the brightness of all glowing elements (0.3× to 2×)

Reset – Reset to the closed state

Click on Eye – Toggle open/close

🎨 Customization
CSS Variables
Variable	Default	Description
--eye-glow-size	150px	Size of the eye glow
--eye-glow-intensity	0.4	Intensity of the eye glow
--te-glow-size	250px	Size of the third eye glow
--te-glow-intensity	0.3	Intensity of the third eye glow
--iris-glow-intensity	0.5	Intensity of the iris glow
--ray-opacity	0.15	Opacity of light rays
--ray-length	40px	Length of light rays
--energy-size	2px	Size of energy particles
--energy-opacity	0.4	Opacity of energy particles
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .third-eye, .upper-lid, .lower-lid, .eye-white, .iris, .iris-pattern, .pupil, .pupil-glow, .iris-glow, .eye-glow, .third-eye-glow, .light-ray, and .energy-particle are intuitive and descriptive

Animation‑first — Lids open and close with CSS, the iris pulses with CSS, rays pulse with CSS, and particles drift with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Spiritual & mystical — Perfect for meditation, mindfulness, and spiritual awakening applications

Performance‑conscious — Uses GPU-accelerated transforms for smooth animations

📁 File Structure
text
submissions/third-eye-opening/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file