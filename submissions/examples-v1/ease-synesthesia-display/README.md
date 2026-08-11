# README.md

## 🎵 Synesthesia Display

A mesmerizing animated visualization of sound as colors and shapes. This component captures the phenomenon of synesthesia — where sensory experiences blend together — by translating audio frequencies into a vibrant, dynamic display of colored shapes, pulsing bars, and flowing particles that dance in response to music.

---

## ✨ Features

- **Real-time audio visualization** – Frequencies are translated into visual elements
- **Circular frequency bars** – 16 bars arranged in a ring, pulsing to the beat
- **Geometric shapes** – Circle (bass), Triangle (mid), Square (treble), Diamond (overall)
- **Color waves** – Flowing waves of color across the screen
- **Center glow** – A pulsing glow that responds to music intensity
- **Floating particles** – 12 particles dancing to the audio
- **Audio synthesis** – Built-in audio generator (no external files needed)
- **Interactive controls** – Play, pause, volume, and reset
- **Color legend** – Bass, Mid, Treble color indicators
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript (Web Audio API)

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="syn-container">
  <div class="syn-scene">
    <!-- Visualizer -->
    <div class="visualizer">
      <!-- 16 frequency bars -->
      <div class="freq-bar bar-1"></div>
      <!-- ... up to bar-16 -->

      <!-- 4 shapes -->
      <div class="shape-circle"></div>
      <div class="shape-triangle"></div>
      <div class="shape-square"></div>
      <div class="shape-diamond"></div>

      <!-- 4 color waves -->
      <div class="color-wave cw1"></div>
      <div class="color-wave cw2"></div>
      <div class="color-wave cw3"></div>
      <div class="color-wave cw4"></div>

      <!-- Center glow -->
      <div class="center-glow"></div>

      <!-- 12 particles -->
      <div class="particle p1"></div>
      <!-- ... up to p12 -->
    </div>

    <!-- Audio controls -->
    <div class="audio-controls">
      <button id="playBtn">▶️ Play</button>
      <button id="pauseBtn">⏸️ Pause</button>
      <label>Volume <input type="range" id="volumeControl" /></label>
      <button id="resetBtn">⟳ Reset</button>
    </div>

    <!-- Legend -->
    <div class="legend">
      <span style="color: #ff6b6b;">●</span> Bass
      <span style="color: #ffd93d;">●</span> Mid
      <span style="color: #6bcbff;">●</span> Treble
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages audio synthesis, visualization, controls, and interactions.

🎮 Controls
Play – Start the audio and visualization

Pause – Pause the audio (visuals continue with idle animation)

Volume – Adjust the audio volume

Reset – Reset the visualization to idle state

🎨 Customization
CSS Variables
Variable	Default	Description
Bar colors	HSL-based	Set dynamically by frequency
Shape colors	RGBA-based	Set dynamically by frequency bands
Visual Behavior
Each frequency band maps to specific visual elements:

Bass (low frequencies) → Circle shape, red colors

Mid (medium frequencies) → Triangle shape, yellow colors

Treble (high frequencies) → Square shape, blue colors

Overall → Diamond shape, particle movement

Audio Settings
js
// In script.js - audio generation
const bufferSize = audioContext.sampleRate * 2;
// Mix of frequencies for rich audio spectrum
data[i] = Math.sin(t * 200 * Math.PI * 2) * 0.3 +
          Math.sin(t * 400 * Math.PI * 2) * 0.2 +
          Math.sin(t * 800 * Math.PI * 2) * 0.15 +
          Math.sin(t * 1200 * Math.PI * 2) * 0.1 +
          Math.sin(t * 2400 * Math.PI * 2) * 0.05;
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .visualizer, .freq-bar, .shape-circle, .shape-triangle, .shape-square, .shape-diamond, .color-wave, .center-glow, and .particle are intuitive and descriptive

Animation‑first — Visuals animate in real-time with CSS transitions and JavaScript-driven updates

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — uses Web Audio API for built-in audio synthesis

Educational & sensory — Demonstrates the concept of synesthesia and audio-visual connection

Performance‑conscious — Uses GPU-accelerated transforms for smooth particle animation

📁 File Structure
text
submissions/synesthesia-display/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md      # This file