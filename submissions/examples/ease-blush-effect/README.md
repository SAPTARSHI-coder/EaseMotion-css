# 😊 Blush Effect – Turns Pink and Shy on Hover

An adorable, interactive blush effect where a cute character turns pink and shy when you hover over it—creating a heartwarming, playful experience with particle hearts, sparkles, and expressive face changes. Watch as the character blushes, shrinks shyly, and sparkles with delight. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Adorable blush reaction** – Character turns pink and shy on hover
- **Expressive faces** – Changes from 👀 to 😊 to 🥺 to 😳
- **Particle effects** – Heart and circle particles burst on blush
- **Sparkle effects** – Glowing sparkles appear when blushing
- **Floating hearts** – Hearts orbit around the character when shy
- **Adjustable parameters** – Shyness level (0-100%), blush speed (1-10×), blush color (0-360°)
- **Interactive controls** – Pause, Reset, and Shy buttons
- **Keyboard shortcuts** – Space (Pause), R (Reset), S (Shy)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. **Hover** over the character to make it blush.
3. Interact with the controls:
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click **Shy** for an instant blush burst
   - Click the **canvas** to trigger a blush
4. Adjust the sliders:
   - **Shyness Level** – How much the character blushes (0-100%)
   - **Blush Speed** – How fast the blush appears (1-10×)
   - **Blush Color** – Hue of the blush (0-360°)
5. Use **keyboard shortcuts**:
   - `Space` – Pause/Resume
   - `R` – Reset
   - `S` – Shy burst

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Blush system** – Smooth intensity transition on hover
- **Face expressions** – Changes based on blush intensity (5 states)
- **Particle system** – Heart and circle particles burst on blush
- **Sparkle effects** – Glowing sparkles float around the character
- **Floating hearts** – Hearts orbit when blushing
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Shyness Level | How much the character blushes (0-100%) | 70% |
| Blush Speed | How fast the blush appears (1-10×) | 5× |
| Blush Color | Hue (0-360°) | 340° (pink) |
| Face States | 5 expressive states | 👀 → 😊 → 🥺 → 😳 → 😍 |

### Modifying Blush Behavior

```javascript
// In updateBlush() function – adjust transition
const diff = targetIntensity - blushIntensity;
blushIntensity += diff * 0.05 * speed; // Change 0.05 for different smoothness

// Face state transitions
if (blushAmount > 0.6) {
  faceEyes.textContent = '😳';
  faceMouth.textContent = '😳';
} else if (blushAmount > 0.3) {
  faceEyes.textContent = '🥺';
  faceMouth.textContent = '☺️';
} // Add more states