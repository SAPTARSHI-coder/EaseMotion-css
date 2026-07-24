# README.md

## 💥 Supernova Explosion

A dramatic, cinematic animated visualization of a supernova explosion — a massive star collapsing and exploding with expanding debris. This component captures the breathtaking power and beauty of one of the universe's most spectacular events, from the initial implosion to the expanding shockwave and dispersing debris.

---

## ✨ Features

- **Dramatic explosion sequence** – Core implosion, brilliant flash, expanding shockwave, and debris dispersal
- **30 expanding debris particles** – Each particle follows its own unique trajectory with varying colors and sizes
- **Shockwave effect** – An expanding ring that radiates outward from the explosion
- **Nebula formation** – A glowing nebula that forms from the expanding debris
- **Afterglow** – A lingering glow that persists after the explosion
- **Background stars** – Twinkling stars for a realistic space backdrop
- **Interactive controls** – Explode button, expansion speed, debris count, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="supernova-container">
  <div class="supernova-scene">
    <!-- Background stars -->
    <div class="star s1"></div>
    <!-- ... up to s15 -->

    <!-- Supernova core -->
    <div class="core"></div>

    <!-- Explosion flash -->
    <div class="flash"></div>

    <!-- Shockwave -->
    <div class="shockwave"></div>

    <!-- 30 debris particles -->
    <div class="debris d1"></div>
    <div class="debris d2"></div>
    <!-- ... up to d30 -->

    <!-- Nebula glow -->
    <div class="nebula"></div>

    <!-- Afterglow -->
    <div class="afterglow"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages explosion animations, controls, and interactions.

🎮 Controls
Explode! – Trigger the supernova explosion

Expansion Speed – Adjust how fast the debris expands (0.3× to 3×)

Debris Count – Control the size and density of debris particles (0.5× to 2×)

Reset – Reset the scene to its initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--core-duration	0.3s	Duration of core implosion
--flash-duration	0.15s	Duration of the explosion flash
--shockwave-duration	2s	Duration of shockwave expansion
--debris-duration	0.8s+	Duration of debris explosion
--debris-delay	0s+	Stagger delay for debris
--nebula-duration	4s	Duration of nebula formation
--afterglow-duration	3s	Duration of afterglow
--core-size	30px	Size of the star core
--debris-size	4px	Size of debris particles
Debris Customization
Each debris particle has its own trajectory, color, and size:

css
.d1 {
  --debris-x: -40px;
  --debris-y: -80px;
  background: #ff6a3a;
  --debris-size: 5px;
}
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .core, .flash, .shockwave, .debris, .nebula, and .afterglow are intuitive and descriptive

Animation‑first — The entire explosion sequence is driven by CSS keyframes with carefully timed animations

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Dramatic & cinematic — The layered effects (flash, shockwave, debris, nebula, afterglow) create a rich, immersive experience

Performance‑conscious — Uses GPU-accelerated transforms for smooth particle animation

📁 File Structure
text
submissions/supernova-explosion/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file