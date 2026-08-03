# README.md

## ⭐ XP Level Up

A dynamic XP bar with level up celebration and star explosion. This component captures the satisfying moment of leveling up — featuring a smooth XP bar, animated level counter, a dramatic level up overlay, 30 exploding star particles, a flash burst, and a pulsing glow that makes every level feel like a celebration.

---

## ✨ Features

- **Smooth XP bar** – Fluid fill with color shift on level up
- **Level system** – Progressive XP requirements with increasing difficulty
- **Level up celebration** – Dramatic overlay with animated text
- **Star explosion** – 30 particles bursting from the center
- **Flash burst** – Bright flash on level up
- **Glow pulse** – Expansive glow animation
- **XP counter** – Real-time progress display
- **Interactive controls** – Gain XP, reset, and XP gain slider
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="lu-container">
  <div class="lu-scene">
    <!-- XP Bar -->
    <div class="xp-container">
      <div class="xp-bar-bg"></div>
      <div class="xp-fill">
        <div class="xp-glow"></div>
      </div>

      <!-- XP text -->
      <div class="xp-text">
        <span class="xp-level">Lv. <span id="levelDisplay">1</span></span>
        <span class="xp-progress"><span id="xpDisplay">0</span> / <span id="xpMaxDisplay">100</span> XP</span>
      </div>

      <!-- Level up overlay -->
      <div class="level-up-overlay">
        <div class="level-up-text">✨ LEVEL UP! ✨</div>
        <div class="level-up-sub">+1</div>
      </div>

      <!-- 30 star particles -->
      <div class="star-particle sp1"></div>
      <!-- ... up to sp30 -->

      <!-- Flash overlay -->
      <div class="flash-overlay"></div>

      <!-- Level glow -->
      <div class="level-glow"></div>
    </div>

    <!-- Controls -->
    <div class="xp-controls">
      <button id="gainXpBtn">⚡ Gain XP</button>
      <button id="resetXpBtn">⟳ Reset</button>
      <label>
        XP Gain
        <input type="range" id="xpGainControl" min="5" max="50" step="1" value="25" />
      </label>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages XP progression, leveling, star particles, controls, and interactions.

🎮 Controls
Gain XP – Add XP to the bar (amount controlled by slider)

Reset – Reset XP and level to 1

XP Gain – Adjust the amount of XP gained per click (5–50)

🎨 Customization
CSS Variables
Variable	Default	Description
--xp-color	hsl(0, 80%, 60%)	Color of the XP bar
--xp-glow	hsl(0, 80%, 60%, 0.3)	Glow color of the XP bar
--glow-pulse	1	Pulse multiplier for glow
Level System
js
// XP formula for each level
function getXpForLevel(level) {
  return Math.floor(100 * Math.pow(1.15, level - 1));
}
Star Particles
30 particles with varied:

Sizes (3-6px)

Colors (gold, orange, purple, blue, red)

Burst directions and distances

🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .xp-fill, .xp-text, .level-up-overlay, .star-particle, .flash-overlay, and .level-glow are intuitive and descriptive

Animation‑first — The XP bar fills with CSS, stars explode with CSS, flash bursts with CSS, and glow expands with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Gaming & rewarding — Captures the satisfying moment of leveling up

Performance‑conscious — Uses GPU-accelerated transforms for smooth animations and particle bursts

📁 File Structure
text
submissions/xp-level-up/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md