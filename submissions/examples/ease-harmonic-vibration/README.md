# 〰️ Harmonic Vibration – Vibrates at Harmonic Frequency

An interactive harmonic vibration simulation that visualizes harmonic frequencies with beautiful, rhythmic patterns. Watch as circular and wave patterns vibrate at harmonic frequencies, creating mesmerizing visual representations of sound and vibration. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Harmonic frequency visualization** – Circular and wave patterns vibrate at harmonic frequencies
- **Multiple harmonics** – Visualize up to 8 harmonic overtones
- **Two visualization modes** – Circular (rings) and Wave modes
- **Resonance effect** – Explosive particle burst on resonance
- **Adjustable parameters** – Frequency (1-20×), amplitude (0-100%), harmonics (1-8), color (0-360°)
- **Interactive controls** – Pause, Reset, Wave mode, Resonance
- **Keyboard shortcuts** – Space (Pause), R (Reset), W (Wave), Q (Resonance)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the harmonic vibration:
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click **Wave** to toggle between circular and wave modes
   - Click **Resonance** for an explosive particle burst
   - Click the **canvas** to trigger resonance
3. Adjust the sliders:
   - **Frequency** – Vibration speed (1-20×)
   - **Amplitude** – Vibration intensity (0-100%)
   - **Harmonics** – Number of harmonic overtones (1-8)
   - **Color** – Hue of the visualization (0-360°)
4. Use **keyboard shortcuts**:
   - `Space` – Pause/Resume
   - `R` – Reset
   - `W` – Toggle Wave mode
   - `Q` – Resonance

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Harmonic visualization** – Circular rings and waves vibrate at harmonic frequencies
- **Frequency control** – Adjusts the speed of vibration
- **Amplitude control** – Adjusts the intensity of vibration
- **Harmonics** – Visualizes multiple harmonic overtones
- **Two modes** – Circular (ring-based) and Wave (line-based)
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Frequency | Vibration speed (1-20×) | 5× |
| Amplitude | Vibration intensity (0-100%) | 60% |
| Harmonics | Number of overtones (1-8) | 3 |
| Color | Hue (0-360°) | 220° (blue) |

### Modifying Visualization

```javascript
// In drawCircularMode() – adjust ring parameters
const radius = Math.min(w, h) * 0.3; // Base radius
const ringRadius = radius * (0.3 + hIdx * 0.15); // Ring spacing

// In drawWaveMode() – adjust wave parameters
const waveWidth = w * 0.8; // Wave width
const waveHeight = h * 0.4; // Wave height