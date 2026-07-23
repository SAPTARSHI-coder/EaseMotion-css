# README.md

## 🏙️ Glass Tower Reflection

A mesmerizing animated visualization of a skyscraper with changing reflections. This component captures the dynamic beauty of modern glass architecture — with shimmering glass panels, shifting reflections, a moving sun, drifting clouds, and subtle light effects that create a living, breathing cityscape.

---

## ✨ Features

- **Glass tower** – A detailed skyscraper with glass panel grid
- **Changing reflections** – 8 dynamic reflections with shifting colors
- **Glass panels** – 40 individual panels with pulsing animation
- **Moving sun** – A sun that moves across the sky
- **Drifting clouds** – 3 clouds for atmospheric depth
- **Tower glow** – A soft, pulsing glow around the tower
- **Light rays** – 6 rays of light emanating from the tower
- **Ground reflection** – A subtle reflection on the ground below
- **Interactive controls** – Reflection speed, light intensity, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="gt-container">
  <div class="gt-scene">
    <!-- Sky -->
    <div class="sky">
      <div class="sun"></div>
      <div class="cloud c1"></div>
      <div class="cloud c2"></div>
      <div class="cloud c3"></div>
    </div>

    <!-- Glass Tower -->
    <div class="tower">
      <div class="tower-body">
        <!-- 40 glass panels -->
        <div class="glass-panel gp1"></div>
        <!-- ... up to gp40 -->

        <!-- Grid lines -->
        <div class="grid-line gl-h1"></div>
        <!-- ... -->
        <div class="grid-line gl-v1"></div>
        <!-- ... -->
      </div>

      <!-- 8 reflections -->
      <div class="reflection reflection-1"></div>
      <!-- ... up to reflection-8 -->

      <div class="tower-glow"></div>

      <!-- 6 light rays -->
      <div class="light-ray lr1"></div>
      <!-- ... up to lr6 -->
    </div>

    <!-- Ground -->
    <div class="ground"></div>
    <div class="ground-reflection"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages reflections, glass panels, sun movement, controls, and interactions.

🎮 Controls
Reflection Speed – Adjust the speed of reflection changes (0.3× to 3×)

Light Intensity – Control the brightness of all glowing elements (0.3× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset the tower to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--ref-duration	2s+	Duration of reflection animation
--ref-delay	0s+	Stagger delay for reflections
--ref-opacity	0.2	Opacity of reflections
--panel-duration	1.5s+	Duration of glass panel pulse
--panel-brightness	0.3	Brightness of glass panels
--glow-duration	2.5s	Duration of tower glow pulse
--glow-opacity	0.15	Opacity of tower glow
--glow-size	200px	Size of tower glow
--ray-duration	3s+	Duration of light ray pulse
--ray-opacity	0.08	Opacity of light rays
--sun-duration	8s	Duration of sun movement
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .tower, .glass-panel, .grid-line, .reflection, .tower-glow, .light-ray, and .sun are intuitive and descriptive

Animation‑first — Reflections shift with CSS, glass panels pulse with CSS, the sun moves with CSS, and light rays pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Architectural & modern — Captures the dynamic beauty of contemporary glass architecture

Performance‑conscious — Uses GPU-accelerated transforms for smooth reflections and animations

📁 File Structure
text
submissions/glass-tower-reflection/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file