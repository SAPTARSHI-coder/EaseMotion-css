# README.md

## 🌿 Ivy Climbing

A mesmerizing animated ivy plant climbing up a wall with curling tendrils and unfurling leaves. This component captures the beautiful, organic growth of climbing ivy as it spreads across a brick wall — each vine reaching upward, tendrils curling as they search for purchase, and leaves unfurling one by one in a natural, rhythmic sequence.

---

## ✨ Features

- **Climbing vine growth** – Multiple vines climb the wall with staggered, organic timing
- **Curling tendrils** – Delicate tendrils curl and spiral as they reach for the wall
- **Unfurling leaves** – Ivy leaves appear and unfurl with natural rotation
- **Detailed brick wall** – Realistic brick pattern with mortar lines
- **Multiple vine paths** – 5 independent vines spreading across the wall
- **Growth glow** – A soft pulsing glow that intensifies with growth
- **Interactive controls** – Adjust growth speed, vine density, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="ivy-container">
  <div class="ivy-scene">
    <!-- Wall -->
    <div class="wall"></div>
    <div class="brick-pattern"></div>

    <!-- Ivy plant -->
    <div class="ivy-base">
      <!-- Vine 1 -->
      <div class="vine vine-1">
        <div class="vine-stem stem-1"></div>
        <div class="tendril tendril-1a"></div>
        <div class="tendril tendril-1b"></div>
        <div class="tendril tendril-1c"></div>
        <div class="leaf ivy-leaf l1a"></div>
        <div class="leaf ivy-leaf l1b"></div>
        <div class="leaf ivy-leaf l1c"></div>
        <div class="leaf ivy-leaf l1d"></div>
        <div class="leaf ivy-leaf l1e"></div>
      </div>
      <!-- Vine 2 -->
      <div class="vine vine-2">
        <!-- ... similar structure -->
      </div>
      <!-- Vine 3, 4, 5 ... -->
    </div>

    <!-- Growth glow -->
    <div class="growth-glow"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages growth animation, controls, and interactions.

🎮 Controls
Growth Speed – Adjust how fast the ivy grows (0.3× to 3×)

Vine Density – Control the size and thickness of vines and leaves (0.5× to 2×)

Pause/Play – Pause or resume the growth animation

Reset Growth – Reset the ivy to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--vine-duration	1.5s	Duration of each vine's growth
--vine-delay	0s+	Delay before each vine starts growing
--stem-duration	1.8s	Duration of stem growth
--stem-thickness	2px	Thickness of vine stems
--tendril-duration	0.8s	Duration of tendril curling
--tendril-thickness	1.5px	Thickness of tendrils
--leaf-duration	0.6s	Duration of leaf unfurling
--leaf-size	14px	Size of ivy leaves
--leaf-opacity	0.6	Opacity of leaves
--glow-duration	2.5s	Duration of growth glow pulse
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .vine, .vine-stem, .tendril, .ivy-leaf, .wall, and .brick-pattern are intuitive and descriptive

Animation‑first — Vines grow with CSS transforms, tendrils curl with CSS keyframes, and leaves unfurl with CSS transforms and rotations

Declarative & customizable — All timing, size, and thickness values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Visually immersive — The brick wall, curling tendrils, and unfurling leaves create a rich, living scene

Performance‑conscious — Uses GPU-accelerated transforms for smooth animations

📁 File Structure
text
submissions/ivy-climbing/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file