# README.md

## ❤️ Health Bar Morph

A dynamic health bar with a liquid fill effect. This component captures the fluid, responsive feel of a game-style health system — featuring a liquid-filled bar with wave animations, bubbles, damage and heal effects, a glowing frame, and real-time health value display.

---

## ✨ Features

- **Liquid fill effect** – A fluid, organic health bar fill
- **Wave animations** – 3 layers of moving waves on the surface
- **Rising bubbles** – 10 bubbles floating through the liquid
- **Smooth transitions** – Health changes with elastic easing
- **Damage effect** – Red flash and color shift on damage
- **Heal effect** – Green glow and color shift on healing
- **Health counter** – Animated number display
- **Status icon** – Heart icon with state changes
- **Interactive controls** – Damage, heal, reset, and speed
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="hb-container">
  <div class="hb-scene">
    <!-- Health bar -->
    <div class="health-bar-container">
      <div class="health-bar-bg"></div>

      <!-- Liquid fill -->
      <div class="liquid-fill">
        <!-- 3 waves -->
        <div class="wave wave-1"></div>
        <div class="wave wave-2"></div>
        <div class="wave wave-3"></div>

        <div class="liquid-glow"></div>

        <!-- 10 bubbles -->
        <div class="bubble b1"></div>
        <!-- ... up to b10 -->

        <div class="highlight"></div>
      </div>

      <!-- Frame -->
      <div class="health-bar-frame">
        <div class="frame-corner fc-tl"></div>
        <div class="frame-corner fc-tr"></div>
        <div class="frame-corner fc-bl"></div>
        <div class="frame-corner fc-br"></div>
        <div class="frame-edge fe-top"></div>
        <div class="frame-edge fe-bottom"></div>
        <div class="frame-edge fe-left"></div>
        <div class="frame-edge fe-right"></div>
      </div>

      <!-- Health text -->
      <div class="health-text">
        <span class="health-value" id="healthValue">100</span>
        <span class="health-label">HP</span>
      </div>

      <!-- Status icon -->
      <div class="status-icon">❤️</div>

      <!-- Damage flash -->
      <div class="damage-flash"></div>

      <!-- Heal glow -->
      <div class="heal-glow"></div>
    </div>

    <!-- Controls -->
    <div class="health-controls">
      <button id="damageBtn">💥 Damage</button>
      <button id="healBtn">💚 Heal</button>
      <button id="resetBtn">⟳ Reset</button>
      <label>Speed <input type="range" id="speedControl" /></label>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages health updates, liquid transitions, effects, controls, and interactions.

🎮 Controls
Damage – Reduce health by 25 with flash effect

Heal – Increase health by 25 with glow effect

Reset – Restore health to maximum

Fill Speed – Adjust the speed of animations (0.3× to 3×)

🎨 Customization
CSS Variables
Variable	Default	Description
--liquid-color	#ff6b6b	Color of the liquid fill
--wave-duration	2s+	Duration of wave movement
--wave-delay	0s+	Stagger delay for waves
--bubble-duration	3s+	Duration of bubble rise
--bubble-delay	0s+	Stagger delay for bubbles
--highlight-duration	1.5s	Duration of highlight shimmer
--flash-duration	0.3s	Duration of damage flash
--heal-duration	0.8s	Duration of heal glow
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .liquid-fill, .wave, .bubble, .highlight, .damage-flash, and .heal-glow are intuitive and descriptive

Animation‑first — Waves move with CSS, bubbles rise with CSS, and effects flash with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Gaming & dynamic — Captures the feel of a responsive game health system

Performance‑conscious — Uses GPU-accelerated transforms for smooth liquid and wave animations

📁 File Structure
text
submissions/health-bar-morph/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md