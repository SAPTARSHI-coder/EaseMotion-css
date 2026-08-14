# 🎵 Sound Wave – Audio Wave Visualizer Reacts to Interaction

An interactive audio wave visualizer that creates beautiful, dynamic sound waves in response to your cursor movement or clicks. Watch as colorful wave patterns radiate, pulse, and evolve with organic motion, creating a mesmerizing visual representation of sound. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Interactive sound waves** – Waves respond to cursor movement and clicks
- **Dynamic wave patterns** – Circular waves with adjustable amplitude, frequency, and speed
- **Particle effects** – Glowing particles burst from wave interactions
- **Adjustable parameters** – Wave amplitude (0-100%), frequency (1-10×), speed (1-10×), color (0-360°)
- **Play/Pause controls** – Start, pause, toggle, and reset the animation
- **Keyboard shortcuts** – Space (Toggle), P (Play/Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the sound waves:
   - **Move your cursor** over the canvas to create waves
   - **Click** anywhere to generate a wave burst
   - Click **Play** to start/resume animation
   - Click **Pause** to pause animation
   - Click **Toggle** to switch between play and pause
   - Click **Reset** to restore default settings
3. Adjust the sliders:
   - **Wave Amplitude** – Height/intensity of waves (0-100%)
   - **Wave Frequency** – How many wave cycles (1-10×)
   - **Wave Speed** – Animation speed (1-10×)
   - **Color** – Hue of the waves (0-360°)
4. Use **keyboard shortcuts**:
   - `Space` – Toggle play/pause
   - `P` – Play/Pause
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design- `README.md` – you're reading it!

## 🧠 How It Works

- **Wave system** – Circular waves radiate from interaction points
- **Dynamic waves** – Waves evolve with amplitude, frequency, and speed controls
- **Particle effects** – Glowing particles burst from each wave interaction
- **Cursor tracking** – Waves follow cursor movement with organic motion
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Wave Amplitude | Height/intensity (0-100%) | 60% |
| Wave Frequency | Wave cycles (1-10×) | 4× |
| Wave Speed | Animation speed (1-10×) | 5× |
| Color | Hue (0-360°) | 220° (blue) |

### Modifying Wave Behavior

```javascript
// In generateWave() function – adjust wave parameters
const numPoints = 80; // Number of points in wave
const count = 20 + Math.floor(amplitude * 30); // Particle count

// In drawWave() function – adjust wave rendering
ctx.lineWidth = 2 + 4 * waveData.amplitude * life; // Wave thickness
const nodeSize = 2 + 3 * waveData.amplitude * life; // Node size