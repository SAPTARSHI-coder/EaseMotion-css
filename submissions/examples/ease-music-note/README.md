# 🎵 Music Note – Notes Float Upward When Clicked

An interactive music note generator where colorful musical notes float upward when clicked, creating a playful, melodic visual experience. Watch as notes rise with organic wobble, glowing trails, and vibrant colors, each with its own unique symbol and personality. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Floating music notes** – Notes rise upward with organic wobble and rotation
- **Multiple note symbols** – ♩, ♪, ♫, ♬, 𝄞, 𝄢, and more
- **Glowing effects** – Each note has a glow, trail, and sparkle
- **Adjustable parameters** – Float speed (1-10×), note size (50-150%), note count (1-10), color (0-360°)
- **Interactive controls** – Note, Clear, Pause, and Reset buttons
- **Keyboard shortcuts** – N (Note), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the music notes:
   - **Click** anywhere on the canvas to create notes
   - Click **Note** to create notes at the center
   - Click **Clear** to remove all notes
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
3. Adjust the sliders:
   - **Float Speed** – How fast notes rise (1-10×)
   - **Note Size** – Size of notes (50-150%)
   - **Note Count** – Number of notes per click (1-10)
   - **Color** – Hue of the notes (0-360°)
4. Use **keyboard shortcuts**:
   - `N` – Create notes
   - `C` – Clear notes
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Note system** – Each note has position, velocity, size, symbol, and color
- **Organic motion** – Notes rise with wobble, rotation, and pulse
- **Rendering** – Glowing notes with trails, gradients, and sparkles
- **Color system** – HSL-based colors with dynamic shifting
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Float Speed | How fast notes rise (1-10×) | 5× |
| Note Size | Size of notes (50-150%) | 100% |
| Note Count | Number of notes per click (1-10) | 3 |
| Color | Hue (0-360°) | 0° (red) |

### Modifying Note Appearance

```javascript
// In the MusicNote class – adjust note symbols
const NOTE_SYMBOLS = ['♩', '♪', '♫', '♬', '𝄞', '𝄢', '𝄡', '𝄣', '♪♫', '♩♪'];

// In draw() method – adjust glow and size
this.glowSize = this.size * 3; // Glow radius
this.size = (20 + Math.random() * 30) * (parseInt(sizeSlider.value) / 100);