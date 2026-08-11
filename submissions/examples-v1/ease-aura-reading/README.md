# README.md

## 🟣 Aura Reading

A mesmerizing animated visualization of a colorful aura around a silhouette. This component captures the ethereal energy field that surrounds every living being — featuring multiple layers of glowing, pulsing aura in violet, blue, green, and pink, a dark silhouette at the center, seven chakra points with shifting colors, drifting energy particles, and flowing energy lines.

---

## ✨ Features

- **Multi-layered aura** – 4 layers of glowing aura in different colors
- **Pulsing glow** – Each aura layer pulses with its own rhythm
- **Silhouette** – A dark human silhouette at the center
- **Chakra points** – 7 chakras with shifting rainbow colors
- **Energy particles** – 20 particles drifting through the aura
- **Flow lines** – 6 flowing energy lines around the aura
- **Aura labels** – Labels for different aura layers (Spiritual, Emotional, Physical, Core)
- **Interactive controls** – Aura intensity, pulse speed, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="ar-container">
  <div class="ar-scene">
    <!-- Aura -->
    <div class="aura">
      <!-- 4 aura layers -->
      <div class="aura-layer al-1">
        <div class="aura-glow ag-1"></div>
      </div>
      <div class="aura-layer al-2">
        <div class="aura-glow ag-2"></div>
      </div>
      <div class="aura-layer al-3">
        <div class="aura-glow ag-3"></div>
      </div>
      <div class="aura-layer al-4">
        <div class="aura-glow ag-4"></div>
      </div>

      <!-- Silhouette -->
      <div class="silhouette">
        <svg viewBox="0 0 200 300">
          <!-- SVG paths for head, neck, shoulders, body -->
        </svg>
      </div>

      <!-- 7 chakras -->
      <div class="chakra chakra-1"></div>
      <div class="chakra chakra-2"></div>
      <!-- ... up to chakra-7 -->

      <!-- 4 aura labels -->
      <div class="aura-label label-1">Spiritual</div>
      <div class="aura-label label-2">Emotional</div>
      <div class="aura-label label-3">Physical</div>
      <div class="aura-label label-4">Core</div>

      <!-- 20 energy particles -->
      <div class="aura-particle ap1"></div>
      <div class="aura-particle ap2"></div>
      <!-- ... up to ap20 -->

      <!-- 6 flow lines -->
      <div class="flow-line fl-1"></div>
      <div class="flow-line fl-2"></div>
      <!-- ... up to fl-6 -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages aura pulsing, chakra shifting, particles, controls, and interactions.

🎮 Controls
Aura Intensity – Adjust the brightness of all aura elements (0.3× to 2×)

Pulse Speed – Adjust the speed of all pulsing animations (0.3× to 3×)

Pause/Play – Pause or resume the animation

Reset – Reset the aura to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--aura-duration	2s+	Duration of aura layer pulse
--aura-delay	0s+	Stagger delay for aura layers
--aura-opacity	0.2+	Opacity of aura layers
--aura-scale	1	Scale of aura layers
--glow-duration	2.5s+	Duration of aura glow pulse
--glow-opacity	0.15+	Opacity of aura glows
--chakra-duration	1.5s+	Duration of chakra pulse
--chakra-size	6px	Size of chakras
--chakra-opacity	0.4	Opacity of chakras
--particle-duration	4s+	Duration of particle float
--particle-size	2px	Size of particles
--flow-duration	3s+	Duration of flow line pulse
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .aura, .aura-layer, .aura-glow, .silhouette, .chakra, .aura-particle, .flow-line, and .aura-label are intuitive and descriptive

Animation‑first — Aura layers pulse with CSS, glows pulse with CSS, chakras pulse with CSS, particles drift with CSS, and flow lines pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Spiritual & energetic — Perfect for aura readings, energy healing, and spiritual wellness applications

Performance‑conscious — Uses GPU-accelerated transforms for smooth pulsing and particle animation

📁 File Structure
text
submissions/aura-reading/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
