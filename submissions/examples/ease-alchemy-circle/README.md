# ⚗️ Alchemy Circle – Glowing Alchemy Circle Spins

> A mystical alchemy circle component with spinning runes, glowing rings, element symbols, and particle effects.

---

## 📖 Description

The **Alchemy Circle** component creates a mystical alchemy circle with spinning rings, glowing runes, element symbols, and particle effects. Built with vanilla HTML, CSS, and JavaScript, it features 8 outer runes, 6 inner runes, 4 element symbols, 4 speed modes, and interactive controls.

### 🎯 Core Features

- **Spinning rings** – 3 concentric rings with glow effects
- **14 runes** – 8 outer Elder Futhark runes + 6 inner runes
- **4 element symbols** – Air (🜁), Fire (🜂), Water (🜄), Earth (🜃)
- **Glow effects** – pulsing glow rings and center glow
- **Particle system** – 40 particles burst on activation
- **4 speed modes** – Slow, Normal, Fast, Hyper
- **Counter** – tracks number of circle activations
- **Interactive controls** – buttons, click on display, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### ⚗️ Circle Elements

| Element | Symbol | Type |
|---------|--------|------|
| Air | 🜁 | Element |
| Fire | 🜂 | Element |
| Water | 🜄 | Element |
| Earth | 🜃 | Element |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Click** | Click on display to activate circle |
| **Buttons** | Activate Circle, Toggle Speed, Reset |
| **Keyboard** | `Space` or `A` – Activate · `S` – Speed · `R` – Reset |

### ✨ Activation Experience

When activating:
1. **Rings glow** – 3 rings pulse with magical light
2. **Runes activate** – 14 runes glow and spin
3. **Elements shine** – 4 element symbols illuminate
4. **Particles burst** – 40 particles scatter
5. **Center glows** – central glow pulses
6. **Counter updates** – activation count increments

### 💡 Why Use This Component?

- Perfect for magical interfaces, fantasy games, or mystical themes
- Engaging alchemy circle with multiple visual layers
- Self-contained – no external dependencies or frameworks
- Easy to customize (runes, symbols, colors, speed)
- Accessible with keyboard controls for power users
- 4 speed modes add variety and control

### 🛠️ Technologies Used

- **HTML5** – semantic structure with SVG
- **CSS3** – animations, gradients, SVG filters, transforms
- **JavaScript (ES6)** – DOM manipulation, setTimeout, particle system

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Continuous animation** – rings spin with stroke-dashoffset
- **Glow effects** – SVG filters and pulsing animations
- **Particle systems** – burst effects on activation
- **Interactive feedback** – status updates, counter, visual effects
- **Mystical atmosphere** – purple/blue/gold color palette
- **Human-readable classes** – `.ring`, `.rune`, `.element-symbol`, `.glow-ring`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Speed modes | `speeds` array | 4 modes |
| Particle count | `createAlchemyParticles()` | 40 |
| Rune symbols | SVG text elements | Elder Futhark |
| Ring sizes | SVG circle radii | 170, 130, 40 |
| Colors | CSS | Purple/blue/gold |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Static circle, dim runes |
| **Active** | Glowing rings, spinning runes |
| **Particles** | Burst effects on activation |
| **Speed Change** | Rotation speed adjusts |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for magical interfaces, fantasy games, and mystical experiences.