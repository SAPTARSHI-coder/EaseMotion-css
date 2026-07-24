# README.md

## 🔄 Cooldown Ring

A dynamic ability cooldown ring with swirling fill animation. This component captures the satisfying wait-and-react gameplay of ability cooldowns — featuring a circular cooldown ring with a swirling gradient fill, glowing effects, sparkle particles, ability icon, cooldown timer display, and interactive controls.

---

## ✨ Features

- **Swirling fill** – Conic gradient fill that swirls during cooldown
- **Cooldown timer** – Real-time countdown display
- **Ability activation** – Click to activate with visual feedback
- **Glowing effects** – Pulsing glow when ready, flash on activation
- **Sparkle particles** – 12 particles burst on activation
- **Swirl rings** – 8 rotating concentric rings
- **Speed control** – Adjust cooldown speed (0.3× to 3×)
- **Duration control** – Set cooldown duration (2–10 seconds)
- **Interactive controls** – Activate, reset, speed, and duration
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="cd-container">
  <div class="cd-scene">
    <!-- Cooldown Ring -->
    <div class="cooldown-ring">
      <div class="ring-bg"></div>

      <!-- Swirling fill -->
      <div class="ring-fill">
        <!-- 8 swirl rings -->
        <div class="swirl swirl-1"></div>
        <!-- ... up to swirl-8 -->
      </div>

      <div class="ring-glow"></div>
      <div class="ability-icon">⚡</div>
      <div class="cooldown-text" id="cooldownText">READY</div>

      <!-- 12 sparkle particles -->
      <div class="sparkle s1"></div>
      <!-- ... up to s12 -->
    </div>

    <!-- Controls -->
    <div class="cd-controls">
      <button id="activateBtn">⚡ Activate Ability</button>
      <button id="resetBtn">⟳ Reset</button>
      <label>Speed <input type="range" id="speedControl" /></label>
      <label>Duration <input type="range" id="durationControl" /></label>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages cooldown, fill animation, timer, controls, and interactions.

🎮 Controls
Activate Ability – Trigger the ability and start cooldown

Reset – Reset cooldown to ready state

Speed – Adjust cooldown speed (0.3× to 3×)

Duration – Set cooldown duration (2–10 seconds)

Click on Ring – Click the ring to activate ability

🎨 Customization
CSS Variables
Variable	Default	Description
--swirl-duration	2s+	Duration of swirl rotation
--swirl-delay	0s+	Stagger delay for swirls
--glow-duration	1.5s	Duration of glow flash
--sparkle-duration	0.8s+	Duration of sparkle burst
--sparkle-delay	0s+	Stagger delay for sparkles
Cooldown Settings
Setting	Range	Default
Speed	0.3× – 3×	1×
Duration	2s – 10s	5s
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .cooldown-ring, .ring-bg, .ring-fill, .swirl, .ring-glow, .ability-icon, .cooldown-text, and .sparkle are intuitive and descriptive

Animation‑first — Swirls rotate with CSS, sparkles burst with CSS, glows flash with CSS, and the ring fills with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Gaming & satisfying — Captures the wait-and-react gameplay of ability cooldowns

Performance‑conscious — Uses GPU-accelerated transforms for smooth swirl rotation, sparkle bursts, and glow flashes

📁 File Structure
text
submissions/cooldown-ring/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md