# README.md

## 🪴 Venus Flytrap Snap

A dramatic, interactive animation of a Venus flytrap snapping shut on its prey. This animated component captures the thrilling moment when this iconic carnivorous plant detects an insect and clamps its lobes together with lightning speed, complete with trigger hairs, marginal spines, struggling prey, and a pulsing aura.

---

## ✨ Features

- **Realistic snap animation** – The trap snaps shut with rapid, organic motion
- **Interactive controls** – Click the trap or use buttons to snap and open
- **Trigger hairs** – Six sensitive hairs that twitch when the trap snaps
- **Marginal spines (teeth)** – Interlocking teeth that close when the trap shuts
- **Struggling prey** – A fly appears inside the trap and struggles to escape
- **Nectar droplets** – Glowing nectar droplets that tremble during the snap
- **Pulsing aura** – A soft green glow that intensifies when the trap closes
- **Gentle sway** – The entire plant sways naturally in an unseen breeze
- **Speed control** – Adjust the animation speed in real time
- **Reset function** – Return everything to its initial state
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="flytrap-container">
  <div class="flytrap-scene">
    <!-- Ground -->
    <div class="ground"></div>

    <!-- Venus Flytrap -->
    <div class="flytrap">
      <!-- Stem -->
      <div class="stem"></div>

      <!-- Trap -->
      <div class="trap">
        <!-- Left lobe -->
        <div class="lobe lobe-left">
          <div class="lobe-inner"></div>
          <div class="hair hair-1"></div>
          <div class="hair hair-2"></div>
          <div class="hair hair-3"></div>
        </div>

        <!-- Right lobe -->
        <div class="lobe lobe-right">
          <div class="lobe-inner"></div>
          <div class="hair hair-4"></div>
          <div class="hair hair-5"></div>
          <div class="hair hair-6"></div>
        </div>

        <!-- Hinge -->
        <div class="hinge"></div>

        <!-- Teeth -->
        <div class="teeth teeth-left">
          <div class="tooth t1"></div>
          <!-- ... up to t8 -->
        </div>
        <div class="teeth teeth-right">
          <div class="tooth t9"></div>
          <!-- ... up to t16 -->
        </div>

        <!-- Prey -->
        <div class="prey">
          <div class="fly-body"></div>
          <div class="fly-wing fw-left"></div>
          <div class="fly-wing fw-right"></div>
          <div class="fly-eye eye-left"></div>
          <div class="fly-eye eye-right"></div>
        </div>

        <!-- Nectar -->
        <div class="nectar nectar-1"></div>
        <div class="nectar nectar-2"></div>
        <div class="nectar nectar-3"></div>
        <div class="nectar nectar-4"></div>
      </div>

      <!-- Aura -->
      <div class="aura"></div>
    </div>

    <!-- Ambient particles -->
    <div class="ambient-particle ap-1"></div>
    <div class="ambient-particle ap-2"></div>
    <div class="ambient-particle ap-3"></div>
    <div class="ambient-particle ap-4"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically wires up animations, controls, and interaction logic.

🎮 Controls
Snap Shut – Triggers the trap to snap closed instantly

Open Trap – Opens the trap after it has snapped

Click on Trap – Click directly on the trap to snap it shut

Animation Speed – Adjust the speed of all animations (0.5× to 3×)

Reset – Returns everything to the initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--snap-duration	0.15s	Speed of the snap shut animation
--open-duration	1.2s	Speed of the open animation
--sway-duration	4s	Duration of the plant's gentle sway
--struggle-duration	0.3s	Speed of the prey's struggle animation
--hair-duration	0.4s+	Speed of hair swaying
--ambient-duration	10s+	Float duration of ambient particles
--aura-duration	2.5s	Speed of the aura pulse
JavaScript Configuration
js
// In script.js — auto-open timing
const autoOpenDelay = 4000 / speedMultiplier; // Auto-open after 4 seconds
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .trap, .lobe, .hair, .tooth, .prey, .nectar, and .aura are intuitive and descriptive

Animation‑first — The snap, open, struggle, and sway animations are all driven by CSS @keyframes with carefully tuned easing curves

Declarative & customizable — All timing, scale, and opacity values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Interactive & engaging — Users can trigger the snap, open the trap, and control speed in real time

Performance‑conscious — Uses GPU-accelerated properties for smooth 60fps performance

📁 File Structure
text
submissions/venus-flytrap-snap/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
