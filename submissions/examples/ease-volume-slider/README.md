# 🔊 Volume Slider – Volume Level Visualizes with Animations

An interactive volume slider with dynamic audio visualizations that react to volume changes in real-time. Adjust the volume and watch as beautiful visualizer animations—Bars, Wave, Pulse, and Spectrum—respond to the sound level with fluid, rhythmic motion. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Dynamic volume visualization** – 4 visualizer styles respond to volume changes
- **Real-time feedback** – Volume percentage, bar, and status updates
- **Mute functionality** – Toggle mute with visual feedback
- **Pause/Resume** – Pause the animation at any time
- **Adjustable speed** – Control animation speed (1-10×)
- **4 visualizer styles** – Bars, Wave, Pulse, Spectrum
- **Keyboard shortcuts** – ↑/↓ (Volume), M (Mute), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the volume slider:
   - **Drag the slider** to adjust volume
   - Click **Mute** to toggle mute
   - Click **Reset** to restore default settings
   - Click **Pause** to pause/resume the animation
3. Adjust the sliders:
   - **Volume** – Main volume control (0-100%)
   - **Animation Speed** – Visualizer speed (1-10×)
   - **Visualizer Style** – Bars, Wave, Pulse, Spectrum
4. Use **keyboard shortcuts**:
   - `↑` – Volume up
   - `↓` – Volume down
   - `M` – Mute toggle
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Volume system** – Volume value (0-100%) controls visualization intensity
- **Visualizer styles** – 4 different rendering styles with unique animations
- **Real-time updates** – Volume bar, percentage, and status update instantly
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates
- **Mute functionality** – Sets volume to 0 with visual feedback

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Volume | Volume level (0-100%) | 50% |
| Animation Speed | Visualizer speed (1-10×) | 5× |
| Visualizer Style | Bars, Wave, Pulse, Spectrum | Bars |

### Modifying Visualizer Appearance

```javascript
// In drawBars() – adjust bar parameters
const barWidth = w / visualizerBars.length * 0.8; // Bar width
const maxHeight = h * 0.5; // Max bar height

// In drawWave() – adjust wave parameters
const amplitude = 30 + vol * 80; // Wave amplitude
const frequency = 3 + vol * 5; // Wave frequency

// In drawPulse() – adjust pulse parameters
const maxRadius = Math.min(w, h) * 0.4; // Max pulse radius

// In drawSpectrum() – adjust spectrum parameters
const barCount = 40; // Number of spectrum bars
const maxHeight = h * 0.35; // Max bar height