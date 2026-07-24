# README.md

## 🖌️ Brush Stroke

An animated brush painting strokes on canvas. This component captures the fluid, expressive beauty of brushwork — with sweeping curves, bold slashes, gentle arcs, and calligraphic flourishes that paint themselves across the canvas in a dynamic, artistic display.

---

## ✨ Features

- **8 brush strokes** – Sweeping curves, bold slashes, gentle arcs, calligraphic flourishes, and more
- **Stroke animation** – Each stroke paints itself from start to finish
- **Splatter particles** – Paint splatters burst from the strokes
- **Multiple colors** – Each stroke has a unique color
- **Brush glow** – A soft pulsing glow behind the strokes
- **Brush icon** – An animated brush at the corner
- **Paper texture** – Realistic paper grain texture
- **Interactive controls** – Paint, stroke speed, stroke width, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="bs-container">
  <div class="bs-scene">
    <!-- Canvas -->
    <div class="canvas">
      <div class="paper-texture"></div>

      <!-- Brush strokes (SVG) -->
      <svg class="stroke-svg" viewBox="0 0 600 300">
        <path class="brush-stroke stroke-1" d="M 50 150 C 150 50, 250 200, 350 100 C 450 0, 500 150, 550 120" />
        <!-- ... more strokes -->
      </svg>

      <!-- 12 splatter particles -->
      <div class="splatter s1"></div>
      <!-- ... up to s12 -->

      <div class="brush-glow"></div>
    </div>

    <!-- Brush icon -->
    <div class="brush-icon">
      <div class="brush-icon-handle"></div>
      <div class="brush-icon-ferrule"></div>
      <div class="brush-icon-bristles"></div>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages stroke painting, splatters, controls, and interactions.

🎮 Controls
Paint Stroke – Trigger the brush stroke animation

Stroke Speed – Adjust the speed of stroke painting (0.3× to 3×)

Stroke Width – Control the width of the brush strokes (0.5× to 2×)

Reset – Reset the canvas to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--stroke-duration	1.5s+	Duration of stroke painting
--stroke-delay	0s+	Stagger delay for strokes
--stroke-width	3px	Width of brush strokes
--splatter-duration	0.6s+	Duration of splatter burst
--splatter-delay	0s+	Stagger delay for splatters
--splatter-size	4px	Size of splatter particles
--glow-duration	1.5s	Duration of glow pulse
--brush-duration	1.2s	Duration of brush animation
Stroke Colors
Each stroke has a unique color:

Stroke 1: Red (#ff6b6b)

Stroke 2: Yellow (#ffd93d)

Stroke 3: Blue (#6bcbff)

Stroke 4: Green (#6bff6b)

Stroke 5: Purple (#b88aff)

Stroke 6: Orange (#ff8a6a)

Stroke 7: Pink (#ff6bff)

🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .brush-stroke, .splatter, .brush-glow, .brush-icon, and .paper-texture are intuitive and descriptive

Animation‑first — Strokes paint with CSS, splatters burst with CSS, and glows pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Artistic & expressive — Captures the fluid beauty of brushwork on canvas

Performance‑conscious — Uses GPU-accelerated transforms for smooth stroke and particle animation

📁 File Structure
text
submissions/brush-stroke/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md