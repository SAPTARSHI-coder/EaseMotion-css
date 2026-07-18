# README.md

## 🌵 Succulent Opening

A beautiful animated succulent with petals that open and close in a graceful, organic dance. This component captures the mesmerizing movement of a succulent plant as its layered petals unfurl outward to reveal a glowing center, then slowly close back into a tight rosette — mimicking the natural rhythm of these remarkable plants.

---

## ✨ Features

- **Layered petal system** – 18 petals arranged in 3 layers (outer, middle, inner)
- **Opening and closing animation** – Smooth, organic petal movement with staggered timing
- **Glowing center** – A radiant center that brightens when the succulent opens
- **Dew drops** – Shimmering dew droplets on the petals
- **Ambient glow** – A soft, pulsing glow that intensifies when open
- **Interactive controls** – Open, close, speed, size, and reset
- **Click to toggle** – Click on the succulent to open or close it
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="succulent-container">
  <div class="succulent-scene">
    <!-- Soil -->
    <div class="soil"></div>

    <!-- Succulent -->
    <div class="succulent">
      <!-- 6 outer petals -->
      <div class="petal outer-petal op1"></div>
      <div class="petal outer-petal op2"></div>
      <div class="petal outer-petal op3"></div>
      <div class="petal outer-petal op4"></div>
      <div class="petal outer-petal op5"></div>
      <div class="petal outer-petal op6"></div>

      <!-- 6 middle petals -->
      <div class="petal middle-petal mp1"></div>
      <div class="petal middle-petal mp2"></div>
      <div class="petal middle-petal mp3"></div>
      <div class="petal middle-petal mp4"></div>
      <div class="petal middle-petal mp5"></div>
      <div class="petal middle-petal mp6"></div>

      <!-- 6 inner petals -->
      <div class="petal inner-petal ip1"></div>
      <div class="petal inner-petal ip2"></div>
      <div class="petal inner-petal ip3"></div>
      <div class="petal inner-petal ip4"></div>
      <div class="petal inner-petal ip5"></div>
      <div class="petal inner-petal ip6"></div>

      <!-- Center -->
      <div class="center">
        <div class="center-glow"></div>
      </div>

      <!-- Succulent glow -->
      <div class="succulent-glow"></div>

      <!-- Dew drops -->
      <div class="dew dew-1"></div>
      <div class="dew dew-2"></div>
      <div class="dew dew-3"></div>
      <div class="dew dew-4"></div>
    </div>

    <!-- Ambient particles -->
    <div class="particle p1"></div>
    <div class="particle p2"></div>
    <div class="particle p3"></div>
    <div class="particle p4"></div>
    <div class="particle p5"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages petal animations, controls, and interactions.

🎮 Controls
Open – Opens the succulent, unfurling all petals

Close – Closes the succulent, folding petals back

Speed – Adjust the animation speed (0.3× to 3×)

Petal Size – Control the overall size of the succulent (0.5× to 1.5×)

Reset – Reset to the closed state

Click on Succulent – Toggle open/close

🎨 Customization
CSS Variables
Variable	Default	Description
--petal-duration	1.5s	Duration of petal animation
--petal-delay	0s+	Stagger delay for each petal
--succulent-scale	1	Overall size multiplier
--glow-duration	1.5s	Duration of center glow pulse
--succulent-glow-duration	2.5s	Duration of succulent glow pulse
--dew-duration	2s+	Duration of dew shimmer
--particle-duration	5s+	Duration of particle float
Petal Customization
You can customize petal colors by modifying the background gradients:

css
.outer-petal {
  background: radial-gradient(ellipse at 40% 30%,
    rgba(120, 200, 100, 0.35) 0%,
    rgba(80, 170, 60, 0.25) 30%,
    rgba(60, 140, 40, 0.15) 60%,
    rgba(40, 100, 30, 0.08) 80%,
    rgba(30, 70, 20, 0.04) 100%
  );
}
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .outer-petal, .middle-petal, .inner-petal, .center, .dew, and .succulent-glow are intuitive and descriptive

Animation‑first — Petals open and close with CSS keyframes, the center glows with CSS animations, and dew drops shimmer with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Interactive — Open/close buttons, speed control, size control, and click-to-toggle

Performance‑conscious — Uses GPU-accelerated transforms for smooth petal animations

📁 File Structure
text
submissions/succulent-opening/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
