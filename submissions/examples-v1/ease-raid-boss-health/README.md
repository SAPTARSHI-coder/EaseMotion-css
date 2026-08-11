# README.md

## 👾 Raid Boss Health

A dramatic boss health bar with phase transitions. This component captures the intensity of raid boss encounters — featuring a segmented health bar with 4 phases, dynamic health fill with color shifts, phase transition effects, damage and heal feedback, a shield indicator, and a boss info display that makes every boss fight feel epic.

---

## ✨ Features

- **Segmented health bar** – 4 visual segments representing phases
- **Phase transitions** – Health changes trigger phase shifts with effects
- **Dynamic health fill** – Smooth transitions with color changes per phase
- **Boss info** – Icon, name, and title display
- **Damage flash** – Red flash on damage taken
- **Heal glow** – Green glow on healing
- **Shield indicator** – Shows shield absorption
- **Phase effects** – Glow and flash on phase change
- **Health particles** – Dynamic particle effect based on health
- **Interactive controls** – Damage, heal, next phase, reset, and speed
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="rb-container">
  <div class="rb-scene">
    <div class="boss-health">
      <!-- Boss info -->
      <div class="boss-info">
        <div class="boss-icon">👾</div>
        <div class="boss-name">Shadow Dragon</div>
        <div class="boss-title">- The Eternal Darkness -</div>
      </div>

      <!-- Health bar -->
      <div class="health-bar-wrapper">
        <!-- 4 phase segments -->
        <div class="health-segments">
          <div class="segment seg-1 active"></div>
          <div class="segment seg-2"></div>
          <div class="segment seg-3"></div>
          <div class="segment seg-4"></div>
        </div>

        <div class="health-fill" id="healthFill">
          <div class="health-fill-inner"></div>
          <div class="health-particles"></div>
        </div>

        <div class="health-border">
          <div class="border-corner bc-tl"></div>
          <div class="border-corner bc-tr"></div>
          <div class="border-corner bc-bl"></div>
          <div class="border-corner bc-br"></div>
        </div>

        <div class="health-text">
          <span class="health-current" id="healthCurrent">100</span>
          <span class="health-separator">/</span>
          <span class="health-max" id="healthMax">100</span>
          <span class="health-percent" id="healthPercent">100%</span>
        </div>

        <div class="phase-indicator">
          <span class="phase-label">Phase</span>
          <span class="phase-number" id="phaseNumber">1</span>
        </div>

        <div class="shield-indicator" id="shieldIndicator">
          <span>🛡️</span>
          <span class="shield-value" id="shieldValue">0</span>
        </div>
      </div>

      <!-- Phase effects -->
      <div class="phase-effects">
        <div class="phase-transition" id="phaseTransition"></div>
        <div class="phase-glows">
          <div class="phase-glow pg-1"></div>
          <div class="phase-glow pg-2"></div>
          <div class="phase-glow pg-3"></div>
          <div class="phase-glow pg-4"></div>
        </div>
      </div>

      <div class="damage-flash" id="damageFlash"></div>
      <div class="heal-glow" id="healGlow"></div>
    </div>

    <!-- Controls -->
    <div class="boss-controls">
      <button id="damageBtn">⚔️ Damage</button>
      <button id="healBtn">💚 Heal</button>
      <button id="phaseBtn">🔄 Next Phase</button>
      <button id="resetBtn">⟳ Reset</button>
      <label>Speed <input type="range" id="speedControl" /></label>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages health, phases, effects, controls, and interactions.

🎮 Controls
Damage – Deal 8-20 damage to the boss

Heal – Restore 5-15 health to the boss

Next Phase – Advance to the next phase

Reset – Reset boss to full health and phase 1

Speed – Adjust animation speed (0.3× to 3×)

🎨 Customization
CSS Variables
Variable	Default	Description
--health-color	#ff4444	Color of the health bar
--health-glow	rgba(255,68,68,0.1)	Glow color of the health bar
--health-duration	0.5s	Duration of health transitions
--phase-duration	1.2s	Duration of phase transition
--flash-duration	0.3s	Duration of damage flash
--heal-duration	0.8s	Duration of heal glow
Phase Colors
Phase	Health Range	Color
1	76-100%	Red (#ff4444)
2	51-75%	Orange (#ff8844)
3	26-50%	Yellow (#ffcc44)
4	0-25%	Cyan (#44ddff)
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .boss-health, .health-fill, .phase-indicator, .phase-transition, .damage-flash, and .shield-indicator are intuitive and descriptive

Animation‑first — Health transitions with CSS, phase flashes with CSS, damage flashes with CSS, and heal glows with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Gaming & dramatic — Captures the intensity of raid boss encounters

Performance‑conscious — Uses GPU-accelerated transforms for smooth health transitions and effects

📁 File Structure
text
submissions/raid-boss-health/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md 