# 🌬️ Breathing Effect – Expands and Contracts Like Breathing

An interactive breathing effect that expands and contracts with a natural, rhythmic cycle—like a living breath. Watch as the breathing circle inhales and exhales with organic motion, while particles drift outward on each exhale, creating a calming, meditative visual experience. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Natural breathing cycle** – Inhale, hold, exhale, hold rhythm
- **Organic expansion/contraction** – Smooth, easing-based motion
- **Particle effects** – Gentle particles drift on each exhale
- **Adjustable parameters** – Breath speed (1-10×), breath depth (20-100%), hold duration (0-100%), color (0-360°)
- **Interactive controls** – Pause, Reset, and Speed toggle
- **Keyboard shortcuts** – Space (Pause), R (Reset), S (Speed)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the breathing effect:
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click **Speed** to toggle through speed presets (0.5×, 1×, 2×, 3×, 5×)
   - Click the **canvas** to toggle pause
3. Adjust the sliders:
   - **Breath Speed** – How fast the breathing cycle is (1-10×)
   - **Breath Depth** – How deep the breaths are (20-100%)
   - **Hold Duration** – How long the hold phase is (0-100%)
   - **Color** – Hue of the breathing effect (0-360°)
4. Use **keyboard shortcuts**:
   - `Space` – Pause/Resume
   - `R` – Reset
   - `S` – Toggle speed

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Breath cycle** – Four phases: Inhale (expanding), Hold (top), Exhale (contracting), Hold (bottom)
- **Smooth easing** – Ease-in/out for natural breathing feel
- **Particle system** – Gentle particles drift on each exhale
- **Color system** – HSL-based colors with dynamic shifting
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Breath Speed | How fast the breathing cycle is (1-10×) | 5× |
| Breath Depth | How deep the breaths are (20-100%) | 70% |
| Hold Duration | How long the hold phase is (0-100%) | 30% |
| Color | Hue (0-360°) | 220° (blue) |

### Modifying Breath Cycle

```javascript
// In updateBreathing() function – adjust timing
const inhaleTime = 1;
const holdTime = hold * 0.5;
const exhaleTime = 1;
const holdBottomTime = hold * 0.3;
// Change timing values for different breath patterns