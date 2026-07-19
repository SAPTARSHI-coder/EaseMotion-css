# README.md

## 🧠 Brain Wave Visualization

A mesmerizing animated visualization of EEG-style brain wave patterns. This component captures the rhythmic electrical activity of the human brain — displaying the five major brain wave frequencies (Alpha, Beta, Theta, Delta, and Gamma) as scrolling wave lines overlaid on a brain silhouette, with pulsing activity dots and frequency indicators.

---

## ✨ Features

- **5 brain wave frequencies** – Alpha (8-12 Hz), Beta (13-30 Hz), Theta (4-8 Hz), Delta (0.5-4 Hz), and Gamma (30-100 Hz)
- **Scrolling wave animations** – Each wave scrolls at its characteristic speed
- **Brain silhouette** – A subtle brain outline for anatomical context
- **Wave labels** – Labels identifying each frequency band
- **Activity dots** – Pulsing dots representing neural activity
- **Frequency indicators** – Bars showing relative frequency activity
- **Interactive controls** – Wave speed, wave amplitude, pause, and reset
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="bw-container">
  <div class="bw-scene">
    <!-- Brain silhouette -->
    <div class="brain-silhouette">
      <svg viewBox="0 0 400 400">
        <path class="brain-path" d="..." />
      </svg>
    </div>

    <!-- Wave container -->
    <div class="wave-container">
      <!-- Alpha wave -->
      <div class="wave-line alpha-wave">
        <div class="wave-path"></div>
      </div>
      <!-- Beta wave -->
      <div class="wave-line beta-wave">
        <div class="wave-path"></div>
      </div>
      <!-- Theta wave -->
      <div class="wave-line theta-wave">
        <div class="wave-path"></div>
      </div>
      <!-- Delta wave -->
      <div class="wave-line delta-wave">
        <div class="wave-path"></div>
      </div>
      <!-- Gamma wave -->
      <div class="wave-line gamma-wave">
        <div class="wave-path"></div>
      </div>
    </div>

    <!-- Wave labels -->
    <div class="wave-label alpha-label">α Alpha</div>
    <!-- ... up to gamma-label -->

    <!-- Frequency indicators -->
    <div class="freq-indicator fi-1"></div>
    <!-- ... up to fi-8 -->

    <!-- Activity dots -->
    <div class="activity-dot ad1"></div>
    <!-- ... up to ad12 -->
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages wave scrolling, activity pulsing, controls, and interactions.

🎮 Controls
Wave Speed – Adjust the speed of all brain waves (0.3× to 3×)

Wave Amplitude – Control the amplitude/height of waves (0.3× to 2×)

Pause/Play – Pause or resume the animation

Reset – Reset the visualization

🎨 Customization
CSS Variables
Variable	Default	Description
--wave-duration	2s+	Duration of wave scrolling
--wave-delay	0s+	Stagger delay for each wave
--wave-amplitude	1	Amplitude multiplier
--wave-opacity	0.6	Opacity of wave lines
--dot-duration	1.2s+	Duration of dot pulse
--dot-scale	1	Scale of activity dots
--dot-opacity	0.5	Opacity of activity dots
--freq-duration	0.5s+	Duration of frequency pulse
--brain-duration	3s	Duration of brain pulse
Wave Colors
Each wave has a distinct color:

Alpha: Blue (rgba(100, 200, 255, 0.5))

Beta: Cyan (rgba(100, 255, 200, 0.5))

Theta: Purple (rgba(200, 150, 255, 0.5))

Delta: Red (rgba(255, 150, 150, 0.5))

Gamma: Gold (rgba(255, 200, 100, 0.5))

🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .brain-silhouette, .wave-line, .alpha-wave, .beta-wave, .activity-dot, .wave-label, and .freq-indicator are intuitive and descriptive

Animation‑first — Waves scroll with CSS @keyframes, brain pulses with CSS, activity dots pulse with CSS, and frequency indicators pulse with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Educational & scientific — Demonstrates the different EEG frequency bands in an engaging, visual way

Performance‑conscious — Uses GPU-accelerated transforms for smooth wave scrolling

📁 File Structure
text
submissions/brain-wave-visualization/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file
