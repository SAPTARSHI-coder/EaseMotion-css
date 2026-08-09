# README.md

## 🖍️ Oil Pastel Blending

An interactive animated visualization of oil pastel colors blending and smudging. This component captures the organic, tactile beauty of oil pastel art — with layered color strokes, a blending overlay, smudge particles, and pastel sticks that create a rich, artistic experience.

---

## ✨ Features

- **Color strokes** – 20 layered strokes in various colors
- **Blending animation** – Colors blend together with a pulsing overlay
- **Smudge particles** – 20 particles spreading like a finger smudge
- **Pastel sticks** – 6 animated pastel sticks at the bottom
- **Color palette** – 8 color swatches
- **Paper texture** – Realistic paper grain texture
- **Interactive controls** – Blend, smudge, speed, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="op-container">
  <div class="op-scene">
    <!-- Canvas -->
    <div class="canvas">
      <div class="paper-texture"></div>
      
      <!-- 20 color strokes -->
      <div class="color-stroke stroke-1"></div>
      <!-- ... up to stroke-20 -->
      
      <div class="blending-overlay"></div>
      
      <!-- 20 smudge particles -->
      <div class="smudge-particle sp1"></div>
      <!-- ... up to sp20 -->
      
      <!-- 6 pastel sticks -->
      <div class="pastel-stick pastel-1"></div>
      <!-- ... up to pastel-6 -->
    </div>
    
    <!-- Color palette -->
    <div class="palette">
      <div class="palette-color pc1"></div>
      <!-- ... up to pc8 -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages blending, smudging, controls, and interactions.

🎮 Controls
Blend Colors – Trigger the blending animation

Smudge – Trigger the smudge particle effect

Blend Speed – Adjust the speed of all animations (0.3× to 3×)

Reset – Reset the canvas to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--stroke-duration	1.5s+	Duration of stroke appearance
--stroke-delay	0s+	Stagger delay for strokes
--blend-duration	2s	Duration of blending pulse
--smudge-duration	0.8s+	Duration of smudge spread
--smudge-delay	0s+	Stagger delay for smudge particles
--pastel-duration	1.2s+	Duration of pastel animation
Color Palette
The palette includes 8 colors:

Red (#ff6b6b)

Yellow (#ffd93d)

Blue (#6bcbff)

Green (#6bff6b)

Purple (#b88aff)

Orange (#ff8a6a)

Pink (#ff6bff)

Cyan (#6bffff)

🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .color-stroke, .blending-overlay, .smudge-particle, .pastel-stick, and .palette-color are intuitive and descriptive

Animation‑first — Strokes appear with CSS, blending pulses with CSS, smudge particles spread with CSS, and pastel sticks animate with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Artistic & organic — Captures the tactile beauty of oil pastel art

Performance‑conscious — Uses GPU-accelerated transforms for smooth animations

📁 File Structure
text
submissions/oil-pastel-blending/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md