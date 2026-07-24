# README.md

## 🕯️ Will-o'-the-Wisp

A mysterious, ethereal floating blue flame that drifts through darkness like a ghostly light from folklore. This animated component captures the haunting beauty of a will-o'-the-wisp — a flickering, otherworldly flame that seems to dance and pulse with its own inner life.

---

## ✨ Features

- **Layered flame animation** – Multiple flame layers (core, inner, outer, glow) with independent flicker, sway, and drift motions
- **Organic floating motion** – The wisp drifts slowly through the scene with natural, unpredictable movement
- **Glowing orbs** – Ethereal particles float around the wisp, adding depth and atmosphere
- **Ground mist** – Subtle mist layers drift across the bottom, creating a mystical environment
- **Interactive controls** – Adjust **Float Speed** and **Glow Intensity** in real time
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
<div class="wisp-container">
  <div class="wisp-scene">
    <!-- The main wisp flame -->
    <div class="wisp">
      <div class="flame-core"></div>
      <div class="flame-inner"></div>
      <div class="flame-outer"></div>
      <div class="flame-glow"></div>
      <div class="flame-trail"></div>
    </div>

    <!-- Floating orbs -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    <div class="orb orb-4"></div>
    <div class="orb orb-5"></div>

    <!-- Mist layers -->
    <div class="mist mist-1"></div>
    <div class="mist mist-2"></div>
    <div class="mist mist-3"></div>

    <!-- Ambient glow -->
    <div class="ambient-glow"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically wires up the animations and controls — no configuration needed.

🎨 Customization
CSS Variables
Variable	Default	Description
--wisp-float-duration	6s	Duration of the wisp's floating path
--wisp-pulse-duration	1.2s	Duration of the wisp's pulse/breath
--flame-core-duration	1.6s	Flicker speed of the core flame
--flame-inner-duration	2.2s	Sway speed of the inner flame
--flame-outer-duration	3s	Drift speed of the outer flame
--flame-glow-duration	2.8s	Breath speed of the glow ring
--trail-duration	3.2s	Sway speed of the flame trail
--orb-duration	5s+	Float speed of each orb
--mist-duration	12s+	Drift speed of each mist layer
--core-brightness	100%	Brightness of the core flame
--glow-intensity	1	Intensity multiplier for glow
JavaScript Configuration
js
// In script.js — you can adjust these constants
const SPEED_MULTIPLIER = 1;      // Base speed (overridden by slider)
const INTENSITY_MULTIPLIER = 1;  // Base intensity (overridden by slider)
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .flame-core, .flame-inner, .flame-outer, .orb, and .mist are intuitive and descriptive

Animation‑first — Every visual element is driven by CSS @keyframes with smooth easing curves. JavaScript is used minimally for real‑time controls and glow pulsing

Declarative & customizable — All timing, scale, and opacity values are exposed via CSS custom properties, making them easy to tweak

Self‑contained — No external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Atmospheric & immersive — Demonstrates the power of layered CSS animations for creating rich, moody environments

Performance‑conscious — Uses GPU-accelerated properties (transform, opacity, filter) for smooth 60fps performance

📁 File Structure
text
submissions/will-o-the-wisp/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
