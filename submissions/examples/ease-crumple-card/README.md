# 📄 Crumple Card – Crumples Like Paper

An interactive card that crumples like real paper with realistic physics, dynamic folds, shadow creases, and 3D distortion effects. Click or toggle to watch the card crumple and smooth out with fluid animation—each crumple creates unique fold patterns for endless variety. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic crumple effect** – Dynamic folds, shadow creases, 3D distortion
- **Unique patterns** – Each crumple generates random fold arrangements
- **Smooth animation** – Fluid transitions between smooth and crumpled states
- **Interactive controls** – Crumple, Smooth, Toggle, and Reset buttons
- **Adjustable parameters** – Crumple level (0-100%), animation speed (1-10×)
- **Click interaction** – Click the card to toggle crumple state
- **Double-click** – Reset to smooth
- **Keyboard shortcuts** – C (Crumple), S (Smooth), T (Toggle), R (Reset), Space (Toggle)
- **Real-time feedback** – Crumple status, crumple percentage, status messages
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the card:
   - **Click** the card to toggle crumple state
   - **Double-click** the card to reset
   - Click **Crumple** to crumple the card
   - Click **Smooth** to smooth it out
   - Click **Toggle** to switch between states
   - Click **Reset** to return to smooth
3. Adjust the sliders:
   - **Crumple Level** – 0-100% crumpled
   - **Speed** – Animation speed (1-10×)
4. Use **keyboard shortcuts**:
   - `C` – Crumple
   - `S` – Smooth
   - `T` – Toggle
   - `R` – Reset
   - `Space` – Toggle

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, card design, crumple effects, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **Fold system** – Randomly generated fold elements with varying sizes, angles, and opacities
- **Shadow creases** – Additional shadow layers for depth and realism
- **3D distortion** – Card transforms with scale, rotation, skew, and perspective
- **Smooth interpolation** – Fluid animation between crumple states
- **Regeneration** – New fold patterns generated on each crumple for variety

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Crumple Level | 0-100% crumpled | 0% |
| Speed | Animation speed (1-10×) | 5× |
| Folds | Number of fold elements | 30-50 |
| Shadows | Number of shadow creases | 15-30 |

### Modifying Fold Generation

```javascript
// In createFolds() function
const numFolds = 30 + Math.floor(Math.random() * 20); // Adjust fold count
const foldSize = 10 + Math.random() * 40; // Fold size range
const foldOpacity = 0.1 + Math.random() * 0.3; // Opacity range

// Adjust shadow creases
const numShadows = 15 + Math.floor(Math.random() * 15); // Shadow count