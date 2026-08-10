# README.md

## 🟣 Chakra Activation

A mesmerizing animated visualization of chakra wheels spinning with light. This component captures the ancient energy system of the seven chakras — each represented as a luminous, spinning wheel of light with intricate petals, rings, and glowing centers that activate and radiate spiritual energy.

---

## ✨ Features

- **7 chakra wheels** – Crown, Third Eye, Throat, Heart, Solar Plexus, Sacral, and Root
- **Spinning rings** – Each chakra has multiple concentric rings that pulse and rotate
- **Intricate petals** – 12 petals per chakra with pulsing, staggered animation
- **Glowing centers** – A radiant center with pulsing light
- **Energy glows** – Soft, pulsing glows around each chakra
- **Energy lines** – Connecting lines between chakras
- **Chakra labels** – Names for each chakra
- **Interactive controls** – Activate All, Deactivate, Spin Speed, Light Intensity, and Reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="ca-container">
  <div class="ca-scene">
    <!-- Chakra system -->
    <div class="chakra-system">
      <!-- 7 chakras -->
      <div class="chakra-wheel crown">
        <!-- Rings -->
        <div class="chakra-ring cr-1"></div>
        <div class="chakra-ring cr-2"></div>
        <div class="chakra-ring cr-3"></div>
        <div class="chakra-ring cr-4"></div>
        <!-- 12 petals -->
        <div class="chakra-petals cp-1"></div>
        <!-- ... up to cp-12 -->
        <div class="chakra-center"></div>
        <div class="chakra-glow cg-1"></div>
      </div>
      <!-- ... more chakras -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages chakra activation, spinning, pulsing, controls, and interactions.

🎮 Controls
Activate All – Activate all chakras with light

Deactivate – Deactivate all chakras

Spin Speed – Adjust the spinning speed of all chakras (0.3× to 3×)

Light Intensity – Control the brightness of all glows (0.3× to 2×)

Reset – Reset to the inactive state

🎨 Customization
CSS Variables
Variable	Default	Description
--chakra-duration	6s+	Duration of chakra rotation
--chakra-delay	0s+	Stagger delay for chakras
--ring-duration	2s+	Duration of ring pulse
--ring-opacity	0.15	Opacity of rings
--ring-width	1px	Width of ring borders
--petal-duration	1.5s+	Duration of petal pulse
--petal-opacity	0.2	Opacity of petals
--center-duration	1.2s+	Duration of center pulse
--center-size	12px	Size of chakra center
--center-opacity	0.5	Opacity of center
--glow-duration	1.8s+	Duration of glow pulse
--glow-opacity	0.3	Opacity of glow
--glow-size	80px	Size of glow
--line-duration	2.5s+	Duration of energy line pulse
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .chakra-wheel, .chakra-ring, .chakra-petals, .chakra-center, .chakra-glow, and .energy-line are intuitive and descriptive

Animation‑first — Chakras spin with CSS, rings pulse with CSS, petals pulse with CSS, centers pulse with CSS, and energy lines pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Spiritual & energetic — Perfect for meditation, chakra healing, and energy work applications

Performance‑conscious — Uses GPU-accelerated transforms for smooth spinning and pulsing

📁 File Structure
text
submissions/chakra-activation/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
