# 🍂 Falling Leaves – Leaves Fall and Swirl in Wind

An interactive falling leaves simulation where autumn leaves drift, swirl, and dance in the wind with organic motion, realistic physics, and beautiful autumn colors. Click to add leaves, adjust wind speed, fall speed, and swirl amount to create your perfect autumn scene. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic leaf physics** – Leaves fall, swirl, and drift with organic motion
- **3 leaf types** – Oval, Maple, and Oak shapes with autumn colors
- **Wind simulation** – Gusts and swirling motion with adjustable wind speed
- **Trail system** – Leaves leave subtle motion trails
- **Adjustable parameters** – Wind speed (0-10×), leaf count (10-80), fall speed (1-10×), swirl amount (0-100%)
- **Interactive controls** – Add, Clear, Pause, and Reset buttons
- **Auto-respawn** – Leaves respawn at the top when they fall off screen
- **Keyboard shortcuts** – A (Add), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the falling leaves:
   - Click **Add** to add more leaves
   - Click **Clear** to remove all leaves
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to add leaves
3. Adjust the sliders:
   - **Wind Speed** – How strong the wind blows (0-10×)
   - **Leaf Count** – Number of leaves (10-80)
   - **Fall Speed** – How fast leaves fall (1-10×)
   - **Swirl Amount** – How much leaves swirl (0-100%)
4. Use **keyboard shortcuts**:
   - `A` – Add leaves
   - `C` – Clear leaves
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Leaf system** – Each leaf has position, velocity, rotation, size, type, and color
- **Wind simulation** – Wind with gusts creates organic swirling motion
- **Physics** – Leaves fall with gravity, wind drift, and swirling motion
- **3 leaf shapes** – Oval, Maple, and Oak shapes with vein details
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Wind Speed | Wind strength (0-10×) | 5× |
| Leaf Count | Number of leaves (10-80) | 30 |
| Fall Speed | How fast leaves fall (1-10×) | 5× |
| Swirl Amount | Swirl intensity (0-100%) | 50% |

### Modifying Leaf Colors

```javascript
// In the LEAF_COLORS array – add or change colors
const LEAF_COLORS = [
  '#ff6b35', '#ff8c42', '#ffa94d', // Autumn oranges
  '#ffd93d', '#fecb6e', // Yellows
  '#e17055', '#d63031', // Reds
  // Add your own colors
];