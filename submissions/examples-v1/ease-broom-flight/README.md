## 🧹 Broom Flight

A magical animated broomstick flying with a star trail. This component captures the enchanting experience of a witch's flight — featuring a detailed broomstick with bristles, a witch silhouette passenger, a glowing trail of stars, sparkles, and a moonlit sky that brings the magic of flight to life.

---

## ✨ Features

- **Flying broomstick** – Broom flies in an arc path with tilt
- **Witch silhouette** – A witch rides the broom with bobbing motion
- **Star trail** – 20 glowing particles trailing behind the broom
- **Sparkles** – 10 sparkling particles bursting around the broom
- **Broom glow** – A pulsing glow around the broom
- **Moonlit atmosphere** – Moon, stars, and drifting clouds
- **Interactive controls** – Fly, reset, speed, and intensity
- **Click to fly** – Click the broom to start flying
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="bf-container">
  <div class="bf-scene">
    <!-- Sky, stars, moon, clouds -->
    <div class="sky"></div>
    <div class="star s1"></div>
    <!-- ... up to s15 -->
    <div class="moon"></div>
    <div class="cloud c1"></div>
    <!-- ... -->

    <!-- Broomstick -->
    <div class="broom">
      <div class="handle"></div>
      <div class="bristles">
        <div class="bristle b1"></div>
        <!-- ... up to b10 -->
      </div>
      <div class="broom-glow"></div>

      <!-- 20 star trails -->
      <div class="star-trail t1"></div>
      <!-- ... up to t20 -->

      <!-- 10 sparkles -->
      <div class="sparkle sp1"></div>
      <!-- ... up to sp10 -->
    </div>

    <!-- Witch -->
    <div class="witch">
      <div class="witch-body"></div>
      <div class="witch-head"></div>
      <div class="witch-hat">
        <div class="hat-brim"></div>
        <div class="hat-crown"></div>
      </div>
      <div class="witch-hair"></div>
      <div class="witch-cloak"></div>
    </div>

    <div class="ambient-glow"></div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages broom flight, star trails, sparkles, controls, and interactions.

🎮 Controls
Fly – Start/stop the broom flight

Reset – Reset to the ground position

Flight Speed – Adjust the speed of flight (0.3× to 3×)

Trail Intensity – Control the brightness of trails (0.3× to 2×)

Click on Broom – Click the broom to start flying

🎨 Customization
CSS Variables
Variable	Default	Description
--flight-duration	3s	Duration of flight cycle
--bob-duration	0.6s	Duration of witch bob
--trail-duration	0.8s+	Duration of trail twinkle
--trail-intensity	0.4	Intensity of star trails
--trail-size	2px	Size of star trails
--sparkle-duration	1s+	Duration of sparkle burst
--sparkle-intensity	0.3	Intensity of sparkles
--glow-intensity	0.15	Intensity of broom glow
--glow-size	120px	Size of broom glow
--ambient-intensity	0.04	Intensity of ambient glow
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .broom, .handle, .bristles, .star-trail, .sparkle, .witch, and .broom-glow are intuitive and descriptive

Animation‑first — The broom flies with CSS, trails twinkle with CSS, sparkles burst with CSS, and glows pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Magical & enchanting — Captures the wonder of a witch's flight

Performance‑conscious — Uses GPU-accelerated transforms for smooth flight and particle animation

📁 File Structure
text
submissions/broom-flight/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md