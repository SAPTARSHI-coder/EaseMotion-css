# 💎 Crystal Lattice – Crystalline Structure Grows Outward

An interactive crystal lattice simulation where a beautiful crystalline structure grows outward from the center, creating a mesmerizing, organic crystal formation with glowing facets, shimmering highlights, and branching growth patterns. Click or use controls to watch the crystal lattice expand and branch into complex geometric formations. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Organic crystal growth** – Crystals grow outward with branching patterns
- **Branching structure** – Each crystal can spawn child crystals
- **Glowing crystals** – Faceted crystals with shimmer and sparkle effects
- **Adjustable parameters** – Growth speed (1-10×), crystal size (10-50px), density (10-100%), color (0-360°)
- **Pause controls** – Pause/resume the growth animation
- **Keyboard shortcuts** – G (Grow), C (Clear), Space (Pause), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the crystal lattice:
   - Click **Grow** to start/resume growth
   - Click **Clear** to remove all crystals
   - Click **Pause** to pause/resume animation
   - Click **Reset** to restore default settings
   - Click the **canvas** to grow crystals
3. Adjust the sliders:
   - **Growth Speed** – How fast crystals grow (1-10×)
   - **Crystal Size** – Size of crystals (10-50px)
   - **Density** – Initial crystal density (10-100%)
   - **Color** – Crystal hue (0-360°)
4. Use **keyboard shortcuts**:
   - `G` – Grow
   - `C` – Clear
   - `Space` – Pause/Resume
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Crystal system** – Each crystal has size, hue, growth, rotation, and children
- **Branching growth** – Crystals spawn child crystals with varying angles and sizes
- **Rendering** – Faceted crystals with gradients, glow, and sparkle effects
- **Growth animation** – Crystals grow and shimmer over time
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Growth Speed | How fast crystals grow (1-10×) | 5× |
| Crystal Size | Size of crystals (10-50px) | 25px |
| Density | Initial crystal density (10-100%) | 60% |
| Color | Crystal hue (0-360°) | 220° |

### Modifying Crystal Behavior

```javascript
// In the Crystal class constructor
this.growthSpeed = 0.02 + Math.random() * 0.04; // Growth speed range
this.childChance = 0.3; // Chance to spawn children
this.maxChildren = 4 + Math.floor(Math.random() * 4); // Max children

// In the update method – adjust branching
const numChildren = 1 + Math.floor(Math.random() * this.maxChildren * 0.5);
// Change 0.5 for different branching intensity