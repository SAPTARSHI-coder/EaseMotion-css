# README.md

## 🌱 Root System Growth

A mesmerizing animated visualization of roots spreading underground, revealing the hidden world beneath the surface. This component captures the fascinating process of root system development — from a single taproot pushing downward to a complex network of secondary and tertiary roots exploring the soil.

---

## ✨ Features

- **Animated root growth** – Roots grow organically from the surface downward
- **Complex root structure** – Taproot, secondary roots, tertiary roots, and fine root hairs
- **Growing root tips** – Glowing tips mark the active growth points
- **Nutrient particles** – Glowing particles scattered through the soil
- **Above-ground plant** – A small plant visible at the surface
- **Soil layers** – Subtle soil stratification for depth
- **Root glow** – A soft pulsing glow that intensifies with growth
- **Interactive controls** – Adjust growth speed, root density, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="root-container">
  <div class="root-scene">
    <!-- Surface -->
    <div class="surface"></div>

    <!-- Soil layers -->
    <div class="soil-layer soil-1"></div>
    <div class="soil-layer soil-2"></div>
    <div class="soil-layer soil-3"></div>

    <!-- Plant above ground -->
    <div class="plant">
      <div class="plant-stem"></div>
      <div class="plant-leaf l1"></div>
      <div class="plant-leaf l2"></div>
      <div class="plant-leaf l3"></div>
    </div>

    <!-- Root system SVG -->
    <svg class="root-svg" viewBox="0 0 400 350">
      <!-- Taproot -->
      <path class="root-path taproot" d="M200,30 L200,120 L195,180 L190,250 L185,310" />
      
      <!-- Secondary roots -->
      <path class="root-path secondary s1" d="M198,80 L160,120 L130,160 L100,200" />
      <!-- ... more secondary roots -->
      
      <!-- Tertiary roots -->
      <path class="root-path tertiary t1" d="M160,120 L140,140 L125,155" />
      <!-- ... more tertiary roots -->
      
      <!-- Root hairs -->
      <path class="root-path hair h1" d="M130,160 L120,170 L112,178" />
      <!-- ... more root hairs -->
      
      <!-- Root tips -->
      <circle class="root-tip tip1" cx="185" cy="310" r="3" />
      <!-- ... more root tips -->
      
      <!-- Nutrients -->
      <circle class="nutrient n1" cx="130" cy="180" r="2" />
      <!-- ... more nutrients -->
    </svg>

    <!-- Root glow -->
    <div class="root-glow"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages root growth animation, controls, and interactions.

🎮 Controls
Growth Speed – Adjust how fast the roots grow (0.3× to 3×)

Root Density – Control the thickness and density of roots (0.5× to 2×)

Pause/Play – Pause or resume the growth animation

Reset Growth – Reset the roots to their initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--root-duration	3s+	Duration of root growth animation
--root-delay	0s+	Delay before each root starts growing
--root-width	1.5px+	Thickness of individual roots
--root-opacity	0.6	Opacity of roots
--tip-duration	0.5s	Duration of root tip appearance
--tip-radius	3	Size of root tips
--nutrient-duration	4s+	Pulse duration of nutrients
--glow-duration	2.5s	Duration of root glow pulse
SVG Path Customization
The root system is defined using SVG paths. You can customize the root structure by modifying the d attributes in the SVG:

svg
<!-- Taproot - main vertical root -->
<path class="root-path taproot" d="M200,30 L200,120 L195,180 L190,250 L185,310" />

<!-- Secondary root - branching from taproot -->
<path class="root-path secondary" d="M198,80 L160,120 L130,160 L100,200" />

<!-- Tertiary root - finer branching -->
<path class="root-path tertiary" d="M160,120 L140,140 L125,155" />

<!-- Root hair - very fine -->
<path class="root-path hair" d="M130,160 L120,170 L112,178" />
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .root-path, .taproot, .secondary, .tertiary, .hair, .root-tip, and .nutrient are intuitive and descriptive

Animation‑first — Root growth is driven by CSS stroke-dashoffset animations, root tips appear with CSS keyframes, and nutrients pulse with CSS animations

Declarative & customizable — All timing and styling values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Educational & scientific — Demonstrates root system architecture in an engaging, interactive way

Performance‑conscious — Uses SVG and CSS animations for efficient rendering

📁 File Structure
text
submissions/root-system-growth/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file