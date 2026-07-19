# README.md

## 🔥 Combo Counter

A dynamic combo counter with flaming particle effects. This component captures the thrilling feeling of building a combo streak — featuring a glowing combo display with scaling numbers, multiplier tracking, flame particles that burst on each hit, a pulsing glow, ring pulse effects, and satisfying hit/miss feedback.

---

## ✨ Features

- **Combo counter** – Displays current combo count with scaling animation
- **Multiplier tracking** – Increases multiplier at combo milestones (5, 10, 20, 35, 50, 75, 100)
- **Flame particles** – 20 fiery particles burst on each hit
- **Combo glow** – Pulsing glow that intensifies with combo
- **Hit effect** – Flash and ring pulse on successful hit
- **Miss reset** – Reset combo on miss with visual feedback
- **Auto-reset** – Combo resets after 2 seconds of inactivity
- **Interactive controls** – Hit, miss, reset, and speed control
- **Keyboard shortcuts** – Space to hit, M to miss
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="cc-container">
  <div class="cc-scene">
    <div class="combo-counter">
      <div class="combo-display">
        <div class="combo-number" id="comboNumber">0</div>
        <div class="combo-label">COMBO</div>
        <div class="combo-multiplier" id="comboMultiplier">×1</div>
      </div>

      <!-- 20 flame particles -->
      <div class="flame-particle fp1"></div>
      <!-- ... up to fp20 -->

      <div class="combo-glow"></div>
      <div class="hit-effect"></div>
      <div class="ring-pulse"></div>
    </div>

    <!-- Controls -->
    <div class="combo-controls">
      <button id="hitBtn">💥 Hit!</button>
      <button id="missBtn">❌ Miss</button>
      <button id="resetBtn">⟳ Reset</button>
      <label>Speed <input type="range" id="speedControl" /></label>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages combo counting, multiplier tracking, particle effects, controls, and interactions.

🎮 Controls
Hit! – Increase combo with flame burst

Miss – Reset combo (if combo > 0)

Reset – Reset combo to 0

Speed – Adjust the speed of animations (0.3× to 3×)

Spacebar – Quick hit

M key – Quick miss

🎨 Customization
CSS Variables
Variable	Default	Description
--flame-duration	0.8s+	Duration of flame burst
--flame-delay	0s+	Stagger delay for flames
--glow-duration	1.2s	Duration of glow pulse
--ring-duration	0.6s	Duration of ring pulse
--hit-duration	0.3s	Duration of hit flash
Multiplier Milestones
Combo	Multiplier
0-4	×1
5-9	×2
10-19	×3
20-34	×4
35-49	×5
50-74	×6
75-99	×7
100+	×8
Keyboard Shortcuts
Spacebar – Trigger a hit

M – Trigger a miss

🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .combo-counter, .combo-number, .combo-label, .combo-multiplier, .flame-particle, .combo-glow, .hit-effect, and .ring-pulse are intuitive and descriptive

Animation‑first — Flames burst with CSS, numbers scale with CSS, glows pulse with CSS, and rings expand with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Gaming & satisfying — Captures the thrilling feeling of building a combo streak

Performance‑conscious — Uses GPU-accelerated transforms for smooth flame bursts and animations

📁 File Structure
text
submissions/combo-counter/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md