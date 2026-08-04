# 🔥 Campfire – Campfire Flickers and Crackles

An interactive campfire simulation with realistic flickering flames, glowing embers, burning logs, and adjustable intensity, wind, and height. Watch the fire dance and crackle with warmth, add logs to fuel the fire, or extinguish and relight it. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic fire simulation** – Flickering flames with organic motion
- **Glowing embers** – Rising sparks with warm glow
- **Burning logs** – Detailed logs with wood grain and glow
- **Adjustable parameters** – Flame intensity (0-100%), wind effect (0-100%), flame height (50-150%)
- **Interactive controls** – Add Log, Extinguish/Relight, Pause, Reset
- **Keyboard shortcuts** – L (Add Log), E (Extinguish/Relight), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the campfire:
   - Click **Add Log** to fuel the fire
   - Click **Extinguish** to put out the fire
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to add a log
3. Adjust the sliders:
   - **Flame Intensity** – How strong the fire burns (0-100%)
   - **Wind Effect** – How much wind affects the flames (0-100%)
   - **Flame Height** – Height of the flames (50-150%)
4. Use **keyboard shortcuts**:
   - `L` – Add a log
   - `E` – Extinguish/Relight
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Flame system** – Each flame has size, height, width, color, and organic motion
- **Fire physics** – Flames flicker with wind, intensity, and height effects
- **Ember system** – Glowing particles rise and fade
- **Log rendering** – Detailed logs with wood grain and burning glow
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Flame Intensity | How strong the fire burns (0-100%) | 70% |
| Wind Effect | How much wind affects flames (0-100%) | 40% |
| Flame Height | Height of flames (50-150%) | 100% |

### Modifying Fire Appearance

```javascript
// In the Flame class – adjust colors
this.hue = 30 + Math.random() * 20; // Orange-red range
this.saturation = 80 + Math.random() * 20;
this.lightness = 50 + Math.random() * 30;

// In draw() method – adjust flame shape
ctx.quadraticCurveTo(this.width * 0.5, -this.height * 0.6, this.width * 0.6, -this.height * 0.1);
// Adjust control points for different flame shapes