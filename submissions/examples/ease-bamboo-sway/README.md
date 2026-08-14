# 🎋 Bamboo Sway – Bamboo Sways in Breeze

An interactive bamboo grove simulation where bamboo stalks sway gracefully in the breeze with organic, flowing motion, creating a peaceful, nature-inspired visual experience. Watch as bamboo stalks bend and sway with wind gusts, leaves flutter, and the grove comes alive with gentle, hypnotic movement. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Graceful bamboo swaying** – Stalks bend and sway with organic motion
- **Detailed bamboo rendering** – Segmented stalks with nodes, leaves, and 3D shading
- **Wind simulation** – Gentle gusts create natural, varying motion
- **Adjustable parameters** – Wind speed (0-10×), stalk count (3-20), sway amount (0-100%), stalk height (50-100%)
- **Interactive controls** – Add, Clear, Pause, and Reset buttons
- **Keyboard shortcuts** – A (Add), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the bamboo:
   - Click **Add** to add a bamboo stalk
   - Click **Clear** to remove all stalks
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to add a stalk
3. Adjust the sliders:
   - **Wind Speed** – How strong the wind blows (0-10×)
   - **Stalk Count** – Number of bamboo stalks (3-20)
   - **Sway Amount** – How much the bamboo sways (0-100%)
   - **Stalk Height** – Height of the bamboo (50-100%)
4. Use **keyboard shortcuts**:
   - `A` – Add a stalk
   - `C` – Clear all stalks
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Bamboo system** – Each stalk has segments, leaves, and individual sway behavior
- **Wind simulation** – Wind with gusts creates organic, varying motion
- **Sway physics** – Stalks bend more at the top, creating realistic sway
- **Detailed rendering** – Segmented stalks with nodes, 3D shading, and leaves
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Wind Speed | Wind strength (0-10×) | 5× |
| Stalk Count | Number of stalks (3-20) | 8 |
| Sway Amount | Sway intensity (0-100%) | 50% |
| Stalk Height | Height of stalks (50-100%) | 80% |

### Modifying Bamboo Appearance

```javascript
// In the BAMBOO_COLORS array – add or change colors
const BAMBOO_COLORS = [
  '#2d5a1e', '#3a7a28', '#4a8a32', // Greens
  // Add your own colors
];

// In the BambooStalk class – adjust segment count
this.segmentCount = 5 + Math.floor(Math.random() * 8); // Change range

// In the draw method – adjust colors
const grad = ctx.createLinearGradient(-width/2, 0, width/2, 0);
grad.addColorStop(0, this.darkenColor(this.color, 20));
grad.addColorStop(0.3, this.lightenColor(this.color, 20));