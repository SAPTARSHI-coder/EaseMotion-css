# README.md

## 🌋 Molten Lava Flow

A glowing, organic lava flow animation built with pure CSS + lightweight JavaScript. Dozens of luminous droplets cascade down a dark volcanic surface, each with its own speed, hue, and trajectory — creating a mesmerizing, hypnotic effect reminiscent of real molten lava.

---

## ✨ Features

- **Rich, glowing droplets** – Each drop has a radial gradient, soft glow, and subtle blur for a fiery, molten look.
- **Organic motion** – Drops flow down with a winding, wobbly path, alternating speed and rotation.
- **Dynamic controls** – Adjust **Flow Speed** and **Intensity** in real time via sliders.
- **Reset button** – Staggers the animation for a fresh, rippling restart.
- **Responsive** – Adapts to any screen size while maintaining the lava's dramatic presence.
- **Performance-conscious** – Uses GPU-accelerated transforms and `will-change` for smooth 60fps playback.

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="lava-container">
  <div class="lava-surface">
    <!-- Drops are injected by JavaScript -->
  </div>
  <div class="lava-glow"></div>
</div>
3. Add the JavaScript
The script automatically generates drops, applies animations, and wires up the controls. Just include it at the bottom of your page:

html
<script src="script.js"></script>
Note: The script is fully self-contained — no external dependencies.

🎨 Customization
You can tweak the lava's appearance and behavior by modifying the CSS variables or JavaScript constants.

CSS Variables (in style.css)
Variable	Default	Description
--drop-duration	2.8s	Base speed of each drop (overridden by speed slider)
--drop-delay	0s	Stagger delay per drop
--drop-x	0px	Horizontal drift offset
--hue-shift	0deg	Color variation per drop
--drop-brightness	85%	Brightness of each drop
JavaScript Constants (in script.js)
js
const STREAM_COUNT = 12;          // Number of vertical streams
const DROP_COUNT_PER_STREAM = 18; // Drops per stream
Adjust these to create denser or sparser lava flows.

🧩 Why It Fits EaseMotion CSS
Human‑readable – Classes like .lava-drop, .lava-glow, and .lava-surface are intuitive and self-documenting.

Animation‑first – The core experience is driven entirely by CSS @keyframes, with JavaScript only used for particle generation and real‑time control.

Declarative & customizable – Everything from speed to color to drop count can be adjusted via CSS custom properties or simple config constants.

Self‑contained – No frameworks, no build tools — just drop the files in and it works.

Visually immersive – Demonstrates the expressive power of CSS animations for complex, organic motion.

📁 File Structure
text
submissions/molten-lava-flow/
├── demo.html      # Self-contained demo (open in browser)
├── style.css      # All styles + keyframes
└── README.md      # This file