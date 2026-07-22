# README.md

## 🌉 Bridge Swing

A dramatic animated visualization of a suspension bridge swaying in the wind. This component captures the graceful, rhythmic motion of a bridge responding to gusty winds — with swaying towers, curving cables, a swinging road deck, and wind particles that bring the scene to life.

---

## ✨ Features

- **Swaying bridge** – The entire bridge sways with organic, rhythmic motion
- **Tower sway** – Left and right towers sway independently with staggered timing
- **Main cables** – Suspension cables curve and swing with the wind
- **Road deck** – The road surface swings with gentle, sweeping motion
- **Vertical suspenders** – 21 suspender cables with independent sway
- **Lamp posts** – 15 lamp posts swaying with the bridge
- **Wind particles** – 15 particles visualizing the wind flow
- **Clouds** – 4 drifting clouds for atmospheric depth
- **Water** – A subtle water surface below the bridge
- **Interactive controls** – Wind speed, sway intensity, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="bridge-container">
  <div class="bridge-scene">
    <!-- Sky & Clouds -->
    <div class="sky"></div>
    <div class="cloud c1"></div>
    <!-- ... up to c4 -->

    <!-- Water -->
    <div class="water"></div>

    <!-- Bridge -->
    <div class="bridge">
      <!-- Left tower -->
      <div class="tower tower-left">
        <div class="tower-base"></div>
        <div class="tower-column tc1"></div>
        <div class="tower-column tc2"></div>
        <div class="tower-top"></div>
        <!-- Tower details -->
      </div>

      <!-- Right tower -->
      <div class="tower tower-right">
        <!-- Similar structure -->
      </div>

      <!-- Main cables -->
      <div class="cable cable-left"></div>
      <div class="cable cable-right"></div>

      <!-- Road deck -->
      <div class="road-deck"></div>

      <!-- 21 suspenders -->
      <div class="suspender s1"></div>
      <!-- ... up to s21 -->

      <!-- 15 lamp posts -->
      <div class="lamp lp1"></div>
      <!-- ... up to lp15 -->

      <!-- 15 wind particles -->
      <div class="wind-particle wp1"></div>
      <!-- ... up to wp15 -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages sway, wind particles, controls, and interactions.

🎮 Controls
Wind Speed – Adjust the speed of all sway animations (0.3× to 3×)

Sway Intensity – Control the amplitude of the bridge's swing (0.3× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset the bridge to its initial position

🎨 Customization
CSS Variables
Variable	Default	Description
--bridge-duration	3s	Duration of bridge sway
--sway-amount	1.5deg	Amplitude of bridge sway
--tower-duration	2.5s+	Duration of tower sway
--tower-sway	0.8deg	Amplitude of tower sway
--cable-duration	2.8s+	Duration of cable sway
--cable-sway	2px	Amplitude of cable sway
--road-duration	2.5s	Duration of road deck sway
--road-sway	2px	Amplitude of road deck sway
--suspend-duration	1.5s+	Duration of suspender sway
--suspend-sway	3px	Amplitude of suspender sway
--lamp-duration	2s+	Duration of lamp sway
--cloud-duration	20s+	Duration of cloud drift
--wind-duration	2s+	Duration of wind particles
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .bridge, .tower, .cable, .road-deck, .suspender, .lamp, and .wind-particle are intuitive and descriptive

Animation‑first — The bridge sways with CSS, towers sway with CSS, cables sway with CSS, and wind particles blow with CSS — all driven by the animation engine

Declarative & customizable — All timing, amplitude, and size values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Architectural & dramatic — Captures the dramatic beauty of suspension bridges responding to wind

Performance‑conscious — Uses GPU-accelerated transforms for smooth swaying and wind effects

📁 File Structure
text
submissions/bridge-swing/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
