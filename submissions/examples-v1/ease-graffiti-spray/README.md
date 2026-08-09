# README.md

## 🎨 Graffiti Spray

An interactive animated visualization of graffiti being sprayed on a wall. This component captures the urban art experience — with spray particles bursting onto a brick wall, glowing graffiti letters appearing, and a spray can that brings the street art to life.

---

## ✨ Features

- **Spray particle burst** – 50 particles spray onto the wall
- **Graffiti letters** – "ART" appears with animated reveal
- **Color selection** – Choose from 8 vibrant colors
- **Spray can** – A detailed spray can on the wall
- **Graffiti glow** – A pulsing glow behind the artwork
- **Brick wall** – Realistic brick pattern background
- **Interactive controls** – Spray, clear, speed, color, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="gs-container">
  <div class="gs-scene">
    <!-- Wall -->
    <div class="wall">
      <div class="brick-pattern"></div>
      
      <!-- Graffiti canvas -->
      <div class="graffiti-canvas">
        <!-- 50 spray particles -->
        <div class="spray-particle sp1"></div>
        <!-- ... up to sp50 -->
        
        <!-- Graffiti letters -->
        <div class="graffiti-letter letter-a">A</div>
        <div class="graffiti-letter letter-r">R</div>
        <div class="graffiti-letter letter-t">T</div>
        
        <div class="graffiti-glow"></div>
      </div>
      
      <!-- Spray can -->
      <div class="spray-can">
        <div class="can-body"></div>
        <div class="can-cap"></div>
        <div class="can-nozzle"></div>
        <div class="can-label"></div>
      </div>
    </div>
    
    <!-- Ambient particles -->
    <div class="ambient-particle ap1"></div>
    <!-- ... up to ap6 -->
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages spray bursts, letter reveals, color changes, controls, and interactions.

🎮 Controls
Spray! – Burst spray particles onto the wall

Clear – Clear the graffiti from the wall

Spray Speed – Adjust the speed of spray animation (0.3× to 3×)

Color – Choose from 8 colors (Red, Green, Blue, Yellow, Pink, Cyan, Orange, White)

Reset – Reset to the initial state

🎨 Customization
CSS Variables
Variable	Default	Description
--particle-duration	0.5s+	Duration of particle burst
--particle-delay	0s+	Stagger delay for particles
--letter-duration	0.8s+	Duration of letter reveal
--letter-delay	0s+	Stagger delay for letters
--glow-duration	1.5s	Duration of glow pulse
Color Options
Color	Value
Red	#ff4444
Green	#44ff44
Blue	#4444ff
Yellow	#ffff44
Pink	#ff44ff
Cyan	#44ffff
Orange	#ff8844
White	#ffffff
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .graffiti-canvas, .spray-particle, .graffiti-letter, .graffiti-glow, .spray-can, and .brick-pattern are intuitive and descriptive

Animation‑first — Particles burst with CSS, letters reveal with CSS, and glows pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Urban & artistic — Captures the energy and creativity of street art

Performance‑conscious — Uses GPU-accelerated transforms for smooth particle bursts

📁 File Structure
text
submissions/graffiti-spray/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file