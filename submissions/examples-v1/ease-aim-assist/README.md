# README.md

## 🎯 Aim Assist

An animated target reticle with tracking and lock-on functionality. This component captures the feel of a tactical aiming system — featuring a detailed reticle with crosshairs, tracking indicators, a moving target, lock-on animation, and HUD status indicators that create an immersive, game-like experience.

---

## ✨ Features

- **Detailed reticle** – Outer ring, inner ring, crosshairs, center dot, and corner brackets
- **Target tracking** – A moving target follows a figure-8 path
- **Lock-on system** – Progressive lock with visual feedback
- **Tracking indicators** – 8 indicators around the reticle
- **Lock ring** – Expanding ring animation on lock
- **Reticle glow** – Pulsing glow with lock color change
- **Track lines** – Dynamic tracking lines
- **HUD status** – Real-time status and lock percentage
- **Interactive controls** – Track, lock, speed, intensity, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="aa-container">
  <div class="aa-scene">
    <!-- Background grid -->
    <div class="bg-grid"></div>

    <!-- Reticle -->
    <div class="reticle">
      <div class="outer-ring"></div>
      <div class="inner-ring"></div>
      
      <!-- Crosshairs -->
      <div class="crosshair crosshair-top"></div>
      <div class="crosshair crosshair-bottom"></div>
      <div class="crosshair crosshair-left"></div>
      <div class="crosshair crosshair-right"></div>
      
      <!-- Center dot -->
      <div class="center-dot">
        <div class="dot-pulse"></div>
      </div>
      
      <!-- Corner brackets -->
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>
      
      <!-- 8 tracking indicators -->
      <div class="tracking-indicator ti-1"></div>
      <!-- ... up to ti-8 -->
      
      <!-- Lock ring -->
      <div class="lock-ring"></div>
      
      <!-- Reticle glow -->
      <div class="reticle-glow"></div>
      
      <!-- Target -->
      <div class="target">
        <div class="target-body"></div>
        <div class="target-inner"></div>
        <div class="target-pulse"></div>
      </div>
      
      <!-- 4 track lines -->
      <div class="track-line tl-1"></div>
      <!-- ... up to tl-4 -->
    </div>
    
    <!-- HUD info -->
    <div class="hud-info">
      <div class="hud-status">⚡ Acquiring Target...</div>
      <div class="hud-lock">🔒 Lock: <span id="lockStatus">0%</span></div>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages tracking, locking, target movement, controls, and interactions.

🎮 Controls
Track Target – Start tracking the moving target

Lock On – Lock onto the target

Tracking Speed – Adjust the speed of tracking (0.3× to 3×)

Reticle Intensity – Control the brightness of the reticle (0.3× to 2×)

Reset – Reset to the idle state

🎨 Customization
CSS Variables
Variable	Default	Description
--ring-duration	2s	Duration of outer ring pulse
--ring-intensity	0.2	Intensity of outer ring
--crosshair-intensity	0.4	Intensity of crosshairs
--corner-intensity	0.3	Intensity of corners
--indicator-duration	0.8s+	Duration of indicator pulse
--glow-duration	2s	Duration of glow pulse
--glow-intensity	0.15	Intensity of glow
--lock-duration	1.5s	Duration of lock animation
--target-duration	4s	Duration of target movement
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .reticle, .outer-ring, .inner-ring, .crosshair, .center-dot, .lock-ring, .reticle-glow, .target, .tracking-indicator, and .hud-info are intuitive and descriptive

Animation‑first — The reticle pulses with CSS, indicators flash with CSS, the target moves with CSS, and the lock ring expands with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Tactical & immersive — Captures the feel of a high-tech aiming system

Performance‑conscious — Uses GPU-accelerated transforms for smooth animations

📁 File Structure
text
submissions/aim-assist/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md 