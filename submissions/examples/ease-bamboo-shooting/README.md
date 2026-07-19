# README.md

## 🎋 Bamboo Shooting

A mesmerizing animated bamboo plant growing rapidly with segmented, organic motion. This component captures the remarkable growth of bamboo — one of the fastest-growing plants on Earth — as each segment emerges and unfurls in sequence, creating a hypnotic, rhythmic display of natural growth.

---

## ✨ Features

- **Segmented growth animation** – Each bamboo segment grows individually with staggered timing
- **Detailed bamboo structure** – Segments (culm), nodes (joints), and leaves
- **Leaf unfurling** – Leaves emerge and unfurl as the bamboo grows
- **New shoots** – Secondary bamboo shoots emerge alongside the main culm
- **Growth glow** – A soft pulsing glow that intensifies with growth
- **Floating particles** – Pollen/dust particles drifting through the scene
- **Interactive controls** – Adjust growth speed, height, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="bamboo-container">
  <div class="bamboo-scene">
    <!-- Sky -->
    <div class="sky"></div>

    <!-- Ground -->
    <div class="ground"></div>

    <!-- Bamboo plant -->
    <div class="bamboo-plant">
      <!-- 10 segments with nodes -->
      <div class="segment seg-1">
        <div class="segment-inner"></div>
        <div class="node node-1"></div>
      </div>
      <!-- ... more segments up to seg-10 -->

      <!-- Leaf groups -->
      <div class="leaf-group leaf-group-1">
        <div class="leaf leaf-1"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
      </div>
      <!-- ... more leaf groups -->

      <!-- Shoots -->
      <div class="shoot shoot-1"></div>
      <div class="shoot shoot-2"></div>

      <!-- Growth glow -->
      <div class="growth-glow"></div>
    </div>

    <!-- Particles -->
    <div class="particle p1"></div>
    <!-- ... more particles -->
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages growth animation, controls, and interactions.

🎮 Controls
Growth Speed – Adjust how fast the bamboo grows (0.3× to 3×)

Height – Control the maximum height of the bamboo (0.2× to 1.5×)

Pause/Play – Pause or resume the growth animation

Reset Growth – Reset the bamboo to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--seg-duration	0.6s	Duration of each segment's growth
--seg-delay	0s+	Delay before each segment starts growing
--seg-height	10%+	Height of each segment
--node-duration	0.3s	Duration of node appearance
--leaf-duration	0.8s	Duration of leaf unfurling
--leaf-delay	0s+	Delay before leaves unfurl
--leaf-pos	20%+	Position of leaf groups
--shoot-duration	0.5s	Duration of shoot growth
--glow-duration	2s	Duration of growth glow pulse
--particle-duration	4s+	Duration of particle float
--bamboo-height	1	Overall height multiplier
JavaScript Configuration
js
// In script.js
const speedMultiplier = 1;      // Growth speed (overridden by slider)
const heightMultiplier = 1;     // Height multiplier (overridden by slider)
const progress = 0;             // Current growth progress (0-1)
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .segment, .node, .leaf-group, .leaf, .shoot, and .growth-glow are intuitive and descriptive

Animation‑first — Each segment grows with CSS transforms, nodes appear with CSS animations, leaves unfurl with CSS scaling, and shoots emerge with CSS transforms. JavaScript manages the overall growth progression.

Declarative & customizable — All timing, height, and position values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Educational & natural — Demonstrates bamboo's unique segmented growth pattern in an engaging, interactive way

Performance‑conscious — Uses GPU-accelerated transforms for smooth animations

📁 File Structure
text
submissions/bamboo-shooting/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
