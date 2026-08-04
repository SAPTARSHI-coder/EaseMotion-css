# 🧊 Ice Crack – Ice Cracks Spread from Interaction Point

An interactive ice crack simulation where beautiful, organic cracks spread outward from your click or touch, creating realistic branching patterns across a frozen surface. Each crack grows with fluid motion, branching into intricate networks with glowing edges, depth effects, and adjustable speed, length, branching, and color. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic ice cracking** – Organic cracks with branching patterns
- **Branching system** – Cracks split into smaller branches
- **Depth layering** – Cracks have varying width and opacity based on depth
- **Glowing effect** – Subtle glow along crack edges
- **Adjustable parameters** – Crack speed (1-10×), length (20-100%), branching (0-100%), ice color (0-360°)
- **Pause controls** – Pause/resume the animation
- **Keyboard shortcuts** – C (Crack), Space (Pause), R (Reset), X (Clear)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the ice:
   - **Click** anywhere on the ice to create a crack
   - Click **Crack** for a random crack
   - Click **Clear** to remove all cracks
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
3. Adjust the sliders:
   - **Crack Speed** – How fast cracks grow (1-10×)
   - **Crack Length** – Maximum crack length (20-100%)
   - **Branching** – How much cracks branch (0-100%)
   - **Ice Color** – Ice hue (0-360°)
4. Use **keyboard shortcuts**:
   - `C` – Create random crack
   - `Space` – Pause/Resume
   - `R` – Reset
   - `X` – Clear cracks

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Crack system** – Each crack grows from a point, branching at angles
- **Branching logic** – Cracks have a chance to branch based on depth and slider
- **Segment-based rendering** – Cracks are drawn as multi-segment lines
- **Depth layering** – Deeper cracks are thinner and more transparent
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Crack Speed | Growth speed (1-10×) | 5× |
| Crack Length | Maximum length (20-100%) | 60% |
| Branching | Branch chance (0-100%) | 50% |
| Ice Color | Ice hue (0-360°) | 200° |

### Modifying Crack Behavior

```javascript
// In the Crack class constructor
this.speed = 0.5 + Math.random() * 1.5; // Speed range
this.width = 0.5 + (1 - depth * 0.3) * 1.5; // Width based on depth
this.maxDepth = 3 + Math.floor(Math.random() * 2); // Max branch depth

// In the update method – adjust branching
const numBranches = 1 + Math.floor(Math.random() * 2); // Branch count
const branchLength = this.length * (0.3 + Math.random() * 0.5); // Branch length