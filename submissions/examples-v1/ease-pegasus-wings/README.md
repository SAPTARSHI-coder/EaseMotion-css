# README.md

## 🦄 Pegasus Wings

A majestic animated visualization of pegasus wings flapping with star trails. This component captures the ethereal beauty of the mythical winged horse — featuring detailed wings with bones, feather layers, glowing membranes, shimmering star trails, sparkling particles, and a soft celestial glow that brings this legendary creature to life.

---

## ✨ Features

- **Flapping wings** – Left and right wings with organic flap animation
- **Wing bones** – 5 structural bones per wing with flex animation
- **Feather layers** – 5 layers of ethereal feathers per wing
- **Star trails** – 12 glowing trails per wing leaving celestial paths
- **Sparkle particles** – 12 sparkling particles around the wings
- **Glowing membranes** – Ethereal wing membranes with soft glow
- **Central glow** – A warm pulsing glow between the wings
- **Wing glow** – A soft aura enveloping the wings
- **Background stars** – 20 twinkling stars for cosmic depth
- **Interactive controls** – Flap speed, star intensity, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="pw-container">
  <div class="pw-scene">
    <!-- 20 background stars -->
    <div class="star s1"></div>
    <!-- ... up to s20 -->

    <!-- Pegasus Wings -->
    <div class="pegasus-wings">
      <!-- Left Wing -->
      <div class="wing wing-left">
        <!-- 5 wing bones -->
        <div class="wing-bone wb1"></div>
        <!-- ... up to wb5 -->
        
        <div class="wing-membrane"></div>
        
        <!-- 5 feather layers -->
        <div class="feather-layer fl1"></div>
        <!-- ... up to fl5 -->
        
        <!-- 12 star trails -->
        <div class="star-trail st1"></div>
        <!-- ... up to st12 -->
      </div>
      
      <!-- Right Wing -->
      <div class="wing wing-right">
        <!-- Similar structure -->
      </div>
      
      <!-- Central glow -->
      <div class="central-glow"></div>
      
      <!-- Wing glow -->
      <div class="wing-glow"></div>
      
      <!-- 12 sparkles -->
      <div class="sparkle sp1"></div>
      <!-- ... up to sp12 -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages wing flapping, star trails, sparkles, controls, and interactions.

🎮 Controls
Flap Speed – Adjust the speed of wing flapping (0.3× to 3×)

Star Intensity – Control the brightness of stars and trails (0.3× to 2×)

Reset – Reset to the initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--wing-duration	1.2s+	Duration of wing flap
--wing-delay	0s+	Stagger delay for wings
--wing-angle	±10deg	Angle of wing flap
--bone-duration	1s+	Duration of bone flex
--feather-duration	0.8s+	Duration of feather ripple
--trail-duration	0.6s+	Duration of star trail pulse
--trail-intensity	0.3	Intensity of star trails
--sparkle-duration	1.5s+	Duration of sparkle float
--sparkle-intensity	0.4	Intensity of sparkles
--central-duration	2.5s	Duration of central glow pulse
--central-intensity	0.1	Intensity of central glow
--wing-glow-duration	2s	Duration of wing glow pulse
--wing-intensity	0.15	Intensity of wing glow
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .pegasus-wings, .wing, .wing-bone, .wing-membrane, .feather-layer, .star-trail, .sparkle, .central-glow, and .wing-glow are intuitive and descriptive

Animation‑first — Wings flap with CSS, bones flex with CSS, feathers ripple with CSS, trails pulse with CSS, sparkles float with CSS, and glows pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Mythical & majestic — Captures the ethereal beauty of the legendary winged horse

Performance‑conscious — Uses GPU-accelerated transforms for smooth flapping, particle animation, and glow pulsing

📁 File Structure
text
submissions/pegasus-wings/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md