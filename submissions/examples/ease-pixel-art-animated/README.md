# README.md

## 🟦 Pixel Art Animated

A retro pixel art sprite with frame-by-frame animation. This component captures the nostalgic charm of classic video game graphics — featuring a pixel art character with multiple animation frames, a pixel grid background, scanline effects, and a retro glow that brings the 8-bit era to life.

---

## ✨ Features

- **Pixel art sprite** – A detailed pixel art character with 3 animation frames
- **Frame-by-frame animation** – Walking animation with 3 frames (standing, left leg up, right leg up)
- **Pixel grid** – A subtle pixel grid background for authentic retro feel
- **Scanline effect** – CRT-style scanlines for vintage display simulation
- **Retro glow** – A soft pulsing glow for nostalgic atmosphere
- **Interactive controls** – Animate, next frame, speed control, pixel size, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="pa-container">
  <div class="pa-scene">
    <div class="pixel-grid"></div>
    
    <div class="pixel-canvas">
      <!-- 8 rows x 16 columns of pixels -->
      <div class="pixel-row row-1">
        <div class="pixel p1"></div>
        <!-- ... up to p16 -->
      </div>
      <!-- ... up to row-8 -->
    </div>
    
    <div class="scanlines"></div>
    <div class="retro-glow"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages pixel colors, frame switching, animation, controls, and interactions.

🎮 Controls
Animate – Start/stop the frame-by-frame animation

Next Frame – Advance to the next animation frame

Animation Speed – Adjust the speed of animation (0.3× to 3×)

Pixel Size – Control the size of individual pixels (0.5× to 2×)

Reset – Reset to the first frame

🎨 Customization
CSS Variables
Variable	Default	Description
--pixel-size	16px	Size of each pixel
--grid-size	16px	Size of grid cells
--scanline-size	16px	Size of scanline pattern
Frame Data
The sprite has 3 animation frames:

Frame 0 – Standing/Resting

Frame 1 – Walking (left leg up)

Frame 2 – Walking (right leg up)

Each frame defines pixel colors using a color palette:

0: transparent

1: red (#ff6b6b)

2: yellow (#ffd93d)

3: blue (#6bcbff)

4: green (#6bff6b)

5: purple (#b88aff)

6: orange (#ff8a6a)

7: pink (#ff6bff)

8: cyan (#6bffff)

🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .pixel-canvas, .pixel-row, .pixel, .pixel-grid, .scanlines, and .retro-glow are intuitive and descriptive

Animation‑first — Pixels animate with CSS, scanlines overlay with CSS, and the retro glow pulses with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Nostalgic & retro — Captures the charm of classic 8-bit video games

Performance‑conscious — Uses CSS transforms and animations for smooth pixel rendering

📁 File Structure
text
submissions/pixel-art-animated/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md