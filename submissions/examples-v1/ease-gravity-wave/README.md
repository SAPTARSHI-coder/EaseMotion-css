# README.md

## 🌊 Gravity Wave

A mesmerizing animated visualization of ripples in spacetime. This component captures the elegant, awe-inspiring phenomenon of gravitational waves — ripples in the fabric of spacetime caused by some of the most violent and energetic processes in the universe, such as merging black holes and neutron stars.

---

## ✨ Features

- **Expanding wave rings** – 10 concentric rings rippling outward from the source
- **Spacetime grid** – A distortion grid showing the fabric of spacetime
- **Grid nodes** – Pulsing nodes that track the wave's passage
- **Wave center** – A pulsing source of the gravitational wave
- **Wave particles** – Particles ejected by the wave
- **Mass objects** – Massive bodies generating the waves
- **Wave glow** – A soft pulsing glow from the wave source
- **Background stars** – Twinkling stars for cosmic depth
- **Interactive controls** – Wave speed, wave amplitude, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="gw-container">
  <div class="gw-scene">
    <!-- Background stars -->
    <div class="star s1"></div>
    <!-- ... up to s12 -->

    <!-- Spacetime grid -->
    <div class="spacetime-grid">
      <!-- 12 horizontal grid lines -->
      <div class="grid-line h1"></div>
      <!-- ... up to h12 -->
      <!-- 12 vertical grid lines -->
      <div class="grid-line v1"></div>
      <!-- ... up to v12 -->
      <!-- 24 grid nodes -->
      <div class="grid-node n1"></div>
      <!-- ... up to n24 -->
    </div>

    <!-- 10 wave rings -->
    <div class="wave-ring wr1"></div>
    <!-- ... up to wr10 -->

    <div class="wave-center"></div>
    <div class="wave-glow"></div>

    <!-- 12 wave particles -->
    <div class="wave-particle wp1"></div>
    <!-- ... up to wp12 -->

    <!-- 3 mass objects -->
    <div class="mass mass-1"></div>
    <div class="mass mass-2"></div>
    <div class="mass mass-3"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages wave rings, grid distortion, particle ejection, controls, and interactions.

🎮 Controls
Wave Speed – Adjust the speed of wave propagation (0.3× to 3×)

Wave Amplitude – Control the intensity of the wave (0.3× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset the wave to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--ring-duration	1.5s	Duration of ring expansion
--ring-size	20px+	Size of each wave ring
--ring-opacity	0.3	Opacity of wave rings
--ring-border	1.5px	Border width of rings
--center-duration	0.8s	Duration of center pulse
--center-size	16px	Size of wave center
--glow-duration	1.2s	Duration of wave glow
--glow-size	200px	Size of wave glow
--particle-duration	1.2s+	Duration of particle ejection
--grid-duration	2s+	Duration of grid distortion
--node-duration	1.8s+	Duration of node pulse
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .wave-ring, .wave-center, .wave-glow, .wave-particle, .spacetime-grid, .grid-line, and .grid-node are intuitive and descriptive

Animation‑first — Wave rings expand with CSS, grid lines distort with CSS, nodes pulse with CSS, and particles eject with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Educational & cosmic — Demonstrates the concept of gravitational waves in an engaging, visual way

Performance‑conscious — Uses GPU-accelerated transforms for smooth ring expansion and grid distortion

📁 File Structure
text
submissions/gravity-wave/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file