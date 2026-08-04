# README.md

## 🚇 Subway Map

An animated subway map with moving trains, pulsing stations, and dynamic line connections. This component captures the rhythm and energy of urban transit — featuring six color-coded subway lines, 35 stations, moving trains, and a clean, modern map design.

---

## ✨ Features

- **6 subway lines** – Red, Blue, Green, Orange, Purple, and Yellow lines
- **35 stations** – Including 5 transfer stations with special indicators
- **Moving trains** – Animated trains traveling along each line
- **Line drawing animation** – Lines draw themselves on load
- **Station pulses** – Stations gently pulse with life
- **Transfer stations** – Special indicators for interchanges
- **Station labels** – Clear station names on the map
- **Line legend** – Color-coded legend for all lines
- **Interactive controls** – Train speed, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="sm-container">
  <div class="sm-scene">
    <div class="bg-grid"></div>

    <svg class="subway-map" viewBox="0 0 600 400">
      <!-- 6 subway lines -->
      <path class="subway-line line-red" d="M 50 200 L 550 200" />
      <path class="subway-line line-blue" d="M 300 50 L 300 350" />
      <!-- ... more lines -->

      <!-- 35 stations -->
      <circle class="station s1" cx="50" cy="200" r="6" />
      <!-- ... more stations -->

      <!-- 5 transfer stations -->
      <circle class="station transfer t1" cx="300" cy="200" r="9" />
      <!-- ... more transfer stations -->

      <!-- Station labels -->
      <text class="station-label" x="50" y="215">A</text>
      <!-- ... more labels -->

      <!-- 6 trains -->
      <circle class="train train-red" r="5">
        <animateMotion dur="6s" repeatCount="indefinite">
          <mpath href="#line-red-path" />
        </animateMotion>
      </circle>
      <!-- ... more trains -->

      <!-- Path definitions -->
      <defs>
        <path id="line-red-path" d="M 50 200 L 550 200" />
        <!-- ... more paths -->
      </defs>
    </svg>

    <!-- Legend -->
    <div class="legend">
      <div class="legend-item"><span class="legend-color red"></span> Red Line</div>
      <!-- ... more legend items -->
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages train movement, station pulsing, controls, and interactions.

🎮 Controls
Train Speed – Adjust the speed of all trains (0.3× to 3×)

Pause/Play – Pause or resume the animation

Reset – Reset trains to their starting positions

🎨 Customization
CSS Variables
Variable	Default	Description
--line-duration	2s+	Duration of line drawing animation
--train-duration	6s+	Duration of train travel (per line)
Station radius	6px	Size of standard stations
Transfer radius	9px	Size of transfer stations
Line Colors
Line	Color	CSS Class
Red	#ff4444	.line-red
Blue	#4488ff	.line-blue
Green	#44dd66	.line-green
Orange	#ff8844	.line-orange
Purple	#aa66ff	.line-purple
Yellow	#ffdd44	.line-yellow
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .subway-line, .station, .transfer, .train, .station-label, and .legend are intuitive and descriptive

Animation‑first — Lines draw with CSS, trains move with SVG animation, stations pulse with CSS, and labels appear with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Urban & dynamic — Captures the rhythm and energy of city transit

Performance‑conscious — Uses SVG and CSS animations for efficient rendering

📁 File Structure
text
submissions/subway-map/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file