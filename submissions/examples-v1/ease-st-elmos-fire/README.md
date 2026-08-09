# README.md

## ⚡ St Elmo's Fire

A dramatic, atmospheric animation depicting St Elmo's Fire — a mesmerizing electrical discharge phenomenon that appears on ship masts and tall structures during thunderstorms. This animated component captures the ethereal blue-violet glow, crackling electrical tendrils, and eerie beauty of this natural wonder, set against a stormy maritime backdrop.

---

## ✨ Features

- **Multiple electrical discharges** – Eight independent discharge streams with varying sizes, positions, and flicker patterns
- **Glowing corona effects** – Four layered corona halos that pulse with ethereal blue light
- **Dynamic spark particles** – Twelve tiny sparks that float upward and fade, mimicking electrical discharge
- **Storm atmosphere** – Drifting storm clouds, falling rain streaks, and random lightning flashes
- **Ship mast sway** – The mast sways gently in the storm winds
- **Interactive controls** – Adjust **Discharge Speed** and **Intensity** in real time
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
<div class="storm-container">
  <div class="storm-scene">
    <!-- Ship mast -->
    <div class="mast">
      <div class="mast-pole"></div>
      <div class="cross-spar"></div>

      <!-- Discharges -->
      <div class="discharge discharge-1"></div>
      <div class="discharge discharge-2"></div>
      <!-- ... up to discharge-8 -->

      <!-- Coronas -->
      <div class="corona corona-1"></div>
      <div class="corona corona-2"></div>
      <div class="corona corona-3"></div>
      <div class="corona corona-4"></div>

      <!-- Halo -->
      <div class="halo"></div>

      <!-- Sparks -->
      <div class="spark spark-1"></div>
      <div class="spark spark-2"></div>
      <!-- ... up to spark-12 -->
    </div>

    <!-- Storm clouds -->
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>

    <!-- Rain -->
    <div class="rain rain-1"></div>
    <div class="rain rain-2"></div>
    <!-- ... up to rain-8 -->

    <!-- Lightning flash -->
    <div class="lightning-flash"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically wires up animations, controls, and random lightning flashes.

🎨 Customization
CSS Variables
Variable	Default	Description
--discharge-duration	0.15s+	Flicker speed of each discharge
--corona-duration	0.8s+	Pulse speed of each corona
--halo-duration	1.2s	Pulse speed of the main halo
--spark-duration	1.2s+	Float duration of each spark
--mast-sway-duration	2.5s	Speed of mast swaying
--cloud-duration	15s+	Drift speed of each cloud
--rain-duration	0.6s+	Fall speed of rain streaks
--discharge-brightness	100%	Brightness of discharges
--halo-intensity	1	Multiplier for halo glow
--flash-intensity	1	Multiplier for lightning flashes
JavaScript Configuration
js
// In script.js — adjustable constants
const SPEED_MULTIPLIER = 1;      // Base speed (overridden by slider)
const INTENSITY_MULTIPLIER = 1;  // Base intensity (overridden by slider)
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .discharge, .corona, .halo, .spark, .cloud, .rain, and .mast are intuitive and descriptive

Animation‑first — Every visual element is driven by CSS @keyframes with smooth easing curves. Discharges flicker, coronas pulse, sparks float, rain falls, clouds drift, and the mast sways — all in CSS

Declarative & customizable — All timing, scale, opacity, and brightness values are exposed via CSS custom properties, making them easy to tweak without touching JavaScript

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Atmospheric & immersive — Demonstrates the power of layered CSS animations for creating dramatic, stormy environments

Performance‑conscious — Uses GPU-accelerated properties (transform, opacity, filter) for smooth 60fps performance

Interactive — Real-time speed and intensity controls with reset functionality

📁 File Structure
text
submissions/st-elmos-fire/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file