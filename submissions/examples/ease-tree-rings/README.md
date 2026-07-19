# README.md

## 🪵 Tree Rings

A mesmerizing animated visualization of tree rings with growth patterns. This component captures the beautiful, organic structure of a tree cross-section as each ring appears in sequence — from the center outward — representing years of growth, seasonal changes, and the tree's life story.

---

## ✨ Features

- **20 animated tree rings** – Each ring appears in sequence from center to edge
- **Seasonal growth patterns** – Alternating light and dark rings represent spring and summer growth
- **Center core** – The tree's heartwood appears first
- **Growth glow** – A soft, pulsing glow that intensifies with growth
- **Educational annotations** – Labels marking different growth periods (spring, summer, drought, wet season)
- **Interactive controls** – Adjust growth speed, pause, reset, and toggle labels
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="rings-container">
  <div class="rings-scene">
    <div class="tree-rings">
      <!-- 20 rings -->
      <div class="ring ring-1"></div>
      <div class="ring ring-2"></div>
      <!-- ... up to ring-20 -->

      <!-- Center core -->
      <div class="center-core"></div>

      <!-- Growth glow -->
      <div class="growth-glow"></div>

      <!-- Bark texture -->
      <div class="bark-texture"></div>
    </div>

    <!-- Annotations -->
    <div class="annotation ann-1">
      <span class="ann-label">Spring Growth</span>
      <span class="ann-dot"></span>
    </div>
    <!-- ... more annotations -->
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages ring animations, controls, and interactions.

🎮 Controls
Growth Speed – Slow, Normal, Fast (radio buttons)

Pause/Play – Pause or resume the animation

Reset – Reset rings to the initial state

Labels – Toggle educational annotations on/off

🎨 Customization
CSS Variables
Variable	Default	Description
--ring-duration	2.5s	Duration of each ring's appearance
--ring-delay	0s+	Stagger delay for each ring
--core-duration	1.5s	Duration of center core appearance
--glow-duration	3s	Duration of growth glow pulse
Ring Customization
Each ring is defined with specific size, color, and stroke width:

css
.ring-1 { 
  width: 20px; 
  height: 20px; 
  stroke: rgba(180, 140, 80, 0.3); 
  stroke-width: 4px; 
}
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .ring, .center-core, .growth-glow, .bark-texture, and .annotation are intuitive and descriptive

Animation‑first — Rings are drawn using CSS stroke-dashoffset animations, the center core appears with CSS transforms, and the glow pulses with CSS keyframes — all driven by the animation engine

Declarative & customizable — All timing and appearance values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Educational & scientific — Demonstrates tree ring growth patterns and dendrochronology concepts

Performance‑conscious — Uses SVG-like circle elements with CSS animations for efficient rendering

📁 File Structure
text
submissions/tree-rings/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
