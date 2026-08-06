# README.md

## 🗺️ Minimap Fog

An interactive minimap with fog of war clearing animation. This component captures the exploration experience of strategy games — featuring a detailed minimap with terrain, a dynamic fog overlay, player movement, a reveal radius, clearing animations, and a real-time fog percentage counter.

---

## ✨ Features

- **Fog of war** – Dynamic fog overlay covering unexplored areas
- **Exploration system** – Player moves and clears fog in radius
- **Reveal radius** – Visual indicator of the player's field of view
- **Cleared areas** – Terrain revealed with smooth animation
- **Player indicator** – Animated player dot with pulsing ring
- **Trail markers** – Trail of dots following the player's path
- **Fog particles** – Atmospheric fog particle drift
- **Fog percentage** – Real-time counter of remaining fog
- **Terrain features** – Decorative terrain on the minimap
- **Interactive controls** – Explore, clear all, reset, and speed control
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="mf-container">
  <div class="mf-scene">
    <!-- Minimap -->
    <div class="minimap">
      <div class="minimap-bg"></div>

      <!-- Terrain features -->
      <div class="terrain terrain-1"></div>
      <!-- ... up to terrain-8 -->

      <!-- Fog overlay -->
      <div class="fog-overlay">
        <!-- 20 fog particles -->
        <div class="fog-particle fp1"></div>
        <!-- ... up to fp20 -->
      </div>

      <!-- Cleared areas -->
      <div class="cleared-area ca1"></div>
      <!-- ... up to ca5 -->

      <!-- Player indicator -->
      <div class="player-indicator">
        <div class="player-dot"></div>
        <div class="player-ring"></div>
      </div>

      <div class="reveal-radius"></div>

      <!-- 20 trail dots -->
      <div class="trail t1"></div>
      <!-- ... up to t20 -->

      <div class="minimap-border">
        <div class="border-corner bc-tl"></div>
        <div class="border-corner bc-tr"></div>
        <div class="border-corner bc-bl"></div>
        <div class="border-corner bc-br"></div>
      </div>

      <div class="fog-percentage">
        <span id="fogPercent">100</span>%
      </div>
    </div>

    <!-- Controls -->
    <div class="minimap-controls">
      <button id="exploreBtn">🔦 Explore</button>
      <button id="clearBtn">☀️ Clear All</button>
      <button id="resetBtn">🌫️ Reset Fog</button>
      <label>Speed <input type="range" id="speedControl" /></label>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages exploration, fog clearing, player movement, trail markers, controls, and interactions.

🎮 Controls
Explore – Move the player to a random position and clear fog

Clear All – Reveal the entire minimap instantly

Reset Fog – Reset the fog to 100%

Speed – Adjust the speed of exploration (0.3× to 3×)

🎨 Customization
CSS Variables
Variable	Default	Description
--fog-duration	3s+	Duration of fog particle drift
--fog-delay	0s+	Stagger delay for fog particles
--ring-duration	1.5s	Duration of player ring pulse
--radius-duration	0.8s	Duration of reveal radius pulse
--clear-duration	0.6s+	Duration of clear area reveal
--clear-delay	0s+	Stagger delay for cleared areas
Game Settings
js
// In script.js - adjustable constants
const REVEAL_RADIUS = 15;        // Radius of fog clearing
const EXPLORE_DURATION = 1500;   // Duration of player movement (ms)
const FOG_PARTICLES = 20;        // Number of fog particles
const TRAIL_DOTS = 20;           // Number of trail markers
const CLEARED_AREAS = 5;         // Number of cleared area indicators
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .fog-overlay, .fog-particle, .cleared-area, .player-indicator, .trail, .minimap-border, and .fog-percentage are intuitive and descriptive

Animation‑first — Fog drifts with CSS, cleared areas reveal with CSS, the player ring pulses with CSS, and the radius pulses with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Game-like & immersive — Captures the exploration experience of strategy games

Performance‑conscious — Uses GPU-accelerated transforms for smooth fog drift and player movement

📁 File Structure
text
submissions/minimap-fog/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md