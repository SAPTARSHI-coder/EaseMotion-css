# 🎛️ Audio Visualizer Bar Equalizer (`ease-audio-equalizer`)

An interactive, high-performance Audio Visualizer Bar Equalizer component with dynamic peak decay cap indicators, customizable color theme presets, responsive frequency heights, and dual animation engines (Web Audio API / Spectrum Simulation Engine + Pure CSS Keyframe fallback).

Built with vanilla **HTML5**, **CSS3 (Custom Properties, Keyframes, Flexbox, Transforms)**, and **JavaScript**. Zero external dependencies.

---

## ✨ Features

- **24 Responsive Equalizer Spectrum Bars**: Accurately mapped to acoustic frequency bands ranging from 32Hz (Sub-bass) up to 16kHz (Treble & Air).
- **Dynamic Peak Decay Caps**: Top cap indicators snap instantly to volume spikes and gradually decay under realistic gravity physics.
- **Play/Pause Toggle Transitions**: Interactive play/pause control that smoothly collapses frequency heights to baseline while allowing peak caps to fall naturally.
- **Multiple Theme Color Presets**: Instant zero-reflow theme switching via CSS custom variables (`Neon`, `Cyberpunk`, `Sunset`, `Emerald`).
- **Low Latency & GPU-Accelerated**: Utilizes `transform: scaleY()` with `transform-origin: bottom` and `will-change: transform` to maximize sub-pixel rendering performance without triggering browser layout reflows.
- **Dual Engine Architecture**:
  - **Audio Spectrum Engine**: High-fidelity procedural beat synthesizer and Web Audio API node FFT visualizer loop using `requestAnimationFrame`.
  - **CSS Keyframes Engine**: Lightweight, pure CSS keyframe animation fallback (`@keyframes ease-bar-fluctuate`).
- **Interactive Controls Dashboard**: Adjust volume sensitivity gain, peak gravity decay speed, color theme presets, and animation engine modes in real-time.
- **Live Telemetry Bar**: Displays real-time FPS counter, Peak dB amplitude output, and active frequency bar status.

---

## 📁 Project Structure

```text
submissions/examples/ease-audio-equalizer/
├── demo.html    # Interactive demonstration page with UI controls & spectrum engine
├── style.css    # Responsive styling, themes, glassmorphism, and GPU keyframes
└── README.md    # Component documentation
```

---

## 🚀 How to Use

1. Open `demo.html` in any modern web browser (no local server required).
2. **Play / Pause**: Click the **Pause Audio** / **Play Audio** button to toggle playback.
3. **Switch Themes**: Click any theme pill (**Neon**, **Cyberpunk**, **Sunset**, **Emerald**) to change theme presets dynamically.
4. **Adjust Sensitivity & Peak Decay**: Use the range sliders to tweak visualizer gain and peak cap gravity decay rates.
5. **Engine Modes**: Toggle between **Audio Spectrum** (JS `rAF` simulation/Web Audio API) and **CSS Keyframes** (Pure CSS animation).

---

## 🧠 How It Works

### 1. GPU-Accelerated Height Scaling
Instead of mutating the `height` CSS property (which forces expensive browser repaint and reflow calculations), each equalizer bar uses:
```css
.eq-bar {
  transform-origin: bottom;
  transform: scaleY(val);
  will-change: transform;
}
```
This forces layer composition on the GPU, achieving ultra-low latency and consistent 60 FPS animation even on mobile devices.

### 2. Dynamic Peak Decay Cap Physics
Each spectrum bar maintains both `currentHeight` and `peakPosition`.
- When volume spikes (`currentHeight >= peakPosition`), the peak cap instantly matches `currentHeight` and resets its fall velocity.
- When volume drops, gravity accelerates the peak cap downward until it meets the current bar height or baseline:
```javascript
peakVelocities[i] += gravity;
peakPositions[i] -= peakVelocities[i];
```

### 3. Web Audio API & Custom Frequency Binding
To bind real audio files or live microphone input using Web Audio API:
```javascript
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 64;

const dataArray = new Uint8Array(analyser.frequencyBinCount);

function updateVisualizer() {
  analyser.getByteFrequencyData(dataArray);
  for (let i = 0; i < NUM_BARS; i++) {
    const normHeight = dataArray[i] / 255;
    barElements[i].style.transform = `scaleY(${normHeight})`;
  }
  requestAnimationFrame(updateVisualizer);
}
```

---

## 🎨 Theme Customization

Themes are defined using CSS Custom Properties attached to `[data-theme="..."]`:

```css
[data-theme="neon"] {
  --bg-dark: #090d16;
  --panel-bg: rgba(15, 23, 42, 0.75);
  --bar-gradient: linear-gradient(180deg, #00f2fe 0%, #4facfe 50%, #6b21a8 100%);
  --bar-glow: rgba(0, 242, 254, 0.4);
  --peak-color: #ff007f;
  --peak-glow: 0 0 10px #ff007f;
  --accent-color: #00f2fe;
}
```

You can add a custom theme easily by adding new CSS rules to `style.css` and a corresponding `.theme-pill` button to `demo.html`.

---

## 🖥️ Browser Support

Works seamlessly across all modern browsers:
- Google Chrome / Chromium
- Mozilla Firefox
- Apple Safari (Desktop & iOS)
- Microsoft Edge

---

## 🙌 Why This Fits EaseMotion CSS

- **Performance-First**: Hardware-accelerated transforms avoid layout thrashing.
- **Intuitive Feedback**: Peak decay indicators and reactive spectrum bars bring audio interfaces to life.
- **Theme Flexibility**: Zero-dependency CSS variables make design system integration effortless.
- **Accessibility & Responsiveness**: Adapts smoothly to desktop, tablet, and mobile screens.
