# README.md

## 🐍 Basilisk Stare

A mesmerizing animated visualization of snake eyes with hypnotic patterns. This component captures the legendary basilisk's deadly gaze — featuring two glowing snake eyes with hypnotic spiral patterns, vertical slitted pupils, pulsing glows, floating particles, and expanding hypnotic rings that create a transfixing, otherworldly experience.

---

## ✨ Features

- **Two snake eyes** – Left and right eyes with hypnotic patterns
- **Spiral patterns** – 8 rotating concentric spiral rings in each eye
- **Slitted pupils** – Vertical snake pupils with inner glow and dilation
- **Pulsing glows** – Pupil, iris, eye, and central glow layers
- **Hypnotic rings** – 5 expanding concentric rings around the eyes
- **Energy particles** – 12 floating particles around the eyes
- **Subtle eye movement** – Gentle swaying motion
- **Scale details** – Scales surrounding each eye
- **Interactive controls** – Hypnotic speed, glow intensity, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="bs-container">
  <div class="bs-scene">
    <!-- Basilisk Eyes -->
    <div class="basilisk-eyes">
      <!-- Left Eye -->
      <div class="eye eye-left">
        <div class="eye-socket">
          <!-- 6 scales -->
          <div class="scale s1"></div>
          <!-- ... up to s6 -->
          
          <div class="eyelid"></div>
          <div class="sclera"></div>
          
          <div class="iris">
            <!-- 8 spiral rings -->
            <div class="spiral-ring sr1"></div>
            <!-- ... up to sr8 -->
            
            <div class="pupil">
              <div class="pupil-slit"></div>
              <div class="pupil-glow"></div>
            </div>
            
            <div class="iris-glow"></div>
          </div>
          
          <div class="eye-glow"></div>
          
          <!-- 6 hypnotic particles -->
          <div class="hypno-particle hp1"></div>
          <!-- ... up to hp6 -->
        </div>
      </div>
      
      <!-- Right Eye (similar structure) -->
      <div class="eye eye-right">
        <!-- ... -->
      </div>
      
      <!-- Central glow -->
      <div class="central-glow"></div>
      
      <!-- 5 hypnotic rings -->
      <div class="hypno-ring hr1"></div>
      <!-- ... up to hr5 -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages spiral rotation, pupil dilation, particle drift, controls, and interactions.

🎮 Controls
Hypnotic Speed – Adjust the speed of spiral and ring animations (0.3× to 3×)

Glow Intensity – Control the brightness of all glowing elements (0.3× to 2×)

Reset – Reset to the initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--spiral-duration	3s+	Duration of spiral rotation
--spiral-delay	0s+	Stagger delay for spirals
--hypno-duration	4s+	Duration of hypnotic ring pulse
--hypno-delay	0s+	Stagger delay for rings
--particle-duration	2s+	Duration of particle float
--iris-glow-duration	1.5s	Duration of iris glow pulse
--iris-intensity	0.4	Intensity of iris glow
--eye-glow-duration	2.5s	Duration of eye glow pulse
--eye-intensity	0.2	Intensity of eye glow
--central-duration	3s	Duration of central glow pulse
--pupil-duration	0.8s	Duration of pupil glow pulse
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .basilisk-eyes, .eye, .iris, .spiral-ring, .pupil, .pupil-slit, .pupil-glow, .hypno-ring, and .hypno-particle are intuitive and descriptive

Animation‑first — Spirals rotate with CSS, rings pulse with CSS, glows pulse with CSS, and particles float with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Mythical & hypnotic — Captures the legendary basilisk's deadly, transfixing gaze

Performance‑conscious — Uses GPU-accelerated transforms for smooth animations and particle movement

📁 File Structure
text
submissions/basilisk-stare/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md 