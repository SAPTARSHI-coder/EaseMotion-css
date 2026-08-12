# 💡 Light Painting – Draw with Light Trails

> An interactive light painting component where you draw glowing light trails with 8 colors, glow control (1-10), and particle effects.

---

## 📖 Description

The **Light Painting** component creates an interactive light painting experience where you draw glowing light trails with vibrant colors. Built with vanilla HTML, CSS, and JavaScript, it features 8 colors, glow control (1-10), and particle effects for a magical drawing experience.

### 🎯 Core Features

- **Light trails** – draw glowing light trails with smooth motion
- **8 colors** – Gold, Pink, Blue, Green, Purple, Orange, Red, Rose
- **Glow control** – adjust glow intensity from 1-10
- **Particle effects** – glowing particles follow the trail
- **Stroke counter** – tracks number of strokes drawn
- **Interactive controls** – color buttons, glow slider, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 💡 Light Colors

| Color | Hex | Description |
|-------|-----|-------------|
| Gold | #fbbf24 | Warm golden light |
| Pink | #f472b6 | Soft pink glow |
| Blue | #60a5fa | Electric blue |
| Green | #34d399 | Neon green |
| Purple | #a78bfa | Mystical purple |
| Orange | #f97316 | Warm orange |
| Red | #ef4444 | Bright red |
| Rose | #ec4899 | Rose pink |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Click and drag to draw |
| **Touch** | Drag on mobile to draw |
| **Buttons** | Color selection |
| **Keyboard** | `C` – Clear |

### ✨ Light Painting Experience

When drawing:
1. **Light trails** – glowing trails follow cursor
2. **Color applies** – selected color used for trails
3. **Glow applies** – controls glow intensity
4. **Particles burst** – glowing particles scatter
5. **Counter updates** – stroke count increments
6. **Status updates** – shows drawing state

### 💡 Why Use This Component?

- Perfect for creative tools, artistic interfaces, or magical experiences
- Beautiful light painting with glowing trails
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, glow behavior, particles)
- 8 colors for creative expression
- Glow control for customization

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, particle system

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Glow effects** – vibrant light trails with glow
- **Particle systems** – glowing particles with trails
- **Visual feedback** – status updates, counter, controls
- **Magical atmosphere** – light and color effects
- **Human-readable classes** – `.lightpaint-controls`, `.color-btn`, `.lightpaint-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Colors | `.color-btn` elements | 8 colors |
| Glow range | `glowSlider` | 1-10 |
| Trail length | `maxLife` | 200 |
| Particle count | `draw()` | 2-5 per frame |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Dark canvas, ready to draw |
| **Drawing** | Glowing light trails |
| **High Glow** | Bright, vibrant trails |
| **Color Change** | Trail color shifts |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for creative tools, artistic interfaces, and magical experiences.