# README.md

## 🏮 Firefly Lantern

A warm, enchanting paper lantern with a living firefly trapped inside — flickering, glowing, and fluttering within its translucent paper shell. This animated component captures the nostalgic magic of summer evenings, where a single glowing insect illuminates a handcrafted lantern with its gentle pulse.

---

## ✨ Features

- **Multi-layered paper lantern** – Three translucent shell layers with subtle pulsing and swaying, creating a realistic paper texture and depth
- **Living firefly inside** – A fully animated firefly with glowing abdomen, fluttering wings, and erratic flight path within the lantern
- **Natural movement** – The lantern swings gently on its string, while the firefly floats freely inside with organic, unpredictable motion
- **Glowing atmosphere** – Warm amber light radiates from within, casting a soft glow on the surrounding environment
- **Floating dust particles** – Subtle dust motes drift through the scene, adding depth and ambiance
- **Interactive controls** – Adjust **Firefly Speed** and **Glow Intensity** in real time
- **Reset button** – Restart all animations with a single click
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="lantern-container">
  <div class="lantern-scene">
    <!-- Hanging string -->
    <div class="string"></div>

    <!-- Main lantern -->
    <div class="lantern">
      <!-- Paper shell layers -->
      <div class="shell shell-outer"></div>
      <div class="shell shell-middle"></div>
      <div class="shell shell-inner"></div>

      <!-- Bamboo frame ribs -->
      <div class="rib rib-1"></div>
      <div class="rib rib-2"></div>
      <div class="rib rib-3"></div>
      <div class="rib rib-4"></div>
      <div class="rib rib-5"></div>

      <!-- Top and bottom caps -->
      <div class="cap top-cap"></div>
      <div class="cap bottom-cap"></div>

      <!-- The firefly inside -->
      <div class="firefly">
        <div class="firefly-body"></div>
        <div class="firefly-glow"></div>
        <div class="firefly-wing wing-left"></div>
        <div class="firefly-wing wing-right"></div>
      </div>

      <!-- Internal glow -->
      <div class="internal-glow"></div>

      <!-- Ambient light -->
      <div class="lantern-light"></div>
    </div>

    <!-- Dust particles -->
    <div class="dust-particle p1"></div>
    <div class="dust-particle p2"></div>
    <!-- ... -->
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically wires up animations and controls — no configuration needed.

🎨 Customization
CSS Variables
Variable	Default	Description
--swing-duration	4s	Duration of the lantern's gentle swing
--firefly-duration	5s	Duration of the firefly's flight path
--blink-duration	0.6s	Speed of the firefly's glow blink
--wing-duration	0.15s	Speed of wing flapping
--shell-outer-duration	2s	Pulse speed of outer shell
--shell-middle-duration	2.6s	Pulse speed of middle shell
--shell-inner-duration	3.2s	Pulse speed of inner shell
--dust-duration	8s+	Float speed of each dust particle
--shell-brightness	80%+	Brightness of paper shells
--glow-scale	1	Scale multiplier for internal glow
JavaScript Configuration
js
// In script.js — adjustable constants
const SPEED_MULTIPLIER = 1;      // Base speed (overridden by slider)
const INTENSITY_MULTIPLIER = 1;  // Base intensity (overridden by slider)
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .lantern, .shell-outer, .firefly, .firefly-wing, .internal-glow, and .dust-particle are intuitive and descriptive

Animation‑first — Every visual element is driven by CSS @keyframes with smooth easing curves. The firefly's complex flight path, the lantern's gentle swing, and the layered shell pulses all run entirely in CSS

Declarative & customizable — All timing, scale, opacity, and brightness values are exposed via CSS custom properties, making them easy to tweak without touching JavaScript

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Atmospheric & immersive — Demonstrates the power of layered CSS animations for creating rich, warm, nostalgic environments

Performance‑conscious — Uses GPU-accelerated properties (transform, opacity, filter) for smooth 60fps performance

📁 File Structure
text
submissions/firefly-lantern/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file