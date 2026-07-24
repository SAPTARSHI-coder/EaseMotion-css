# README.md

## 🗿 Sculpture Rotating

A mesmerizing animated 3D sculpture rotating with changing light. This component captures the beauty of abstract sculpture — featuring a geometric form with multiple faces, a pedestal and base, dynamic light spots that shift colors, a soft pulsing glow, and floating particles that create a museum-like atmosphere.

---

## ✨ Features

- **3D rotating sculpture** – Continuous rotation with slight tilt
- **Geometric forms** – Three interconnected geometric shapes (main, upper, lower)
- **Form faces** – Multiple faces on each form for 3D depth
- **Connecting elements** – 8 connectors between forms with pulsing animation
- **Dynamic lighting** – 4 light spots with shifting colors
- **Sculpture glow** – A soft pulsing aura around the sculpture
- **Pedestal and base** – Detailed support structure
- **Shadow** – A soft shadow beneath the sculpture
- **Floating particles** – 8 particles for atmospheric depth
- **Interactive controls** – Rotation speed, light intensity, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="sr-container">
  <div class="sr-scene">
    <!-- Sculpture -->
    <div class="sculpture-container">
      <div class="sculpture">
        <!-- Base -->
        <div class="base">
          <div class="base-top"></div>
          <div class="base-body"></div>
        </div>

        <!-- Pedestal -->
        <div class="pedestal"></div>

        <!-- Sculpture body -->
        <div class="sculpture-body">
          <!-- Main form (8 faces) -->
          <div class="form main-form">
            <div class="form-face f1"></div>
            <!-- ... up to f8 -->
          </div>

          <!-- Upper form (8 faces) -->
          <div class="form upper-form">
            <div class="form-face uf1"></div>
            <!-- ... up to uf8 -->
          </div>

          <!-- Lower form (8 faces) -->
          <div class="form lower-form">
            <div class="form-face lf1"></div>
            <!-- ... up to lf8 -->
          </div>

          <!-- 8 connectors -->
          <div class="connector c1"></div>
          <!-- ... up to c8 -->
        </div>

        <!-- Sculpture glow -->
        <div class="sculpture-glow"></div>

        <!-- 4 light spots -->
        <div class="light-spot ls1"></div>
        <div class="light-spot ls2"></div>
        <div class="light-spot ls3"></div>
        <div class="light-spot ls4"></div>

        <!-- Shadow -->
        <div class="shadow"></div>
      </div>
    </div>

    <!-- 8 particles -->
    <div class="particle p1"></div>
    <div class="particle p2"></div>
    <!-- ... up to p8 -->
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages rotation, lighting, particles, controls, and interactions.

🎮 Controls
Rotation Speed – Adjust the speed of the sculpture's rotation (0.3× to 3×)

Light Intensity – Control the brightness of all light effects (0.3× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset the sculpture to its starting position

🎨 Customization
CSS Variables
Variable	Default	Description
--rotation-duration	12s	Duration of one full rotation
--form-duration	2s+	Duration of form pulse
--conn-duration	1.5s+	Duration of connector pulse
--glow-duration	3s	Duration of glow pulse
--glow-opacity	0.15	Opacity of sculpture glow
--glow-size	300px	Size of sculpture glow
--spot-duration	2.5s+	Duration of light spot movement
--spot-opacity	0.1	Opacity of light spots
--spot-size	80px	Size of light spots
--particle-duration	5s+	Duration of particle float
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .sculpture, .base, .pedestal, .form, .form-face, .connector, .sculpture-glow, .light-spot, .shadow, and .particle are intuitive and descriptive

Animation‑first — The sculpture rotates with CSS, forms pulse with CSS, connectors pulse with CSS, light spots move with CSS, and particles float with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Artistic & sophisticated — Captures the beauty of modern abstract sculpture

Performance‑conscious — Uses GPU-accelerated transforms for smooth rotation and animation

📁 File Structure
text
submissions/sculpture-rotating/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file