# 🌈 RGB Split – Red, Green, Blue Channels Separate and Merge

> An interactive RGB split component where red, green, and blue color channels separate and merge with split control (0-100%) and angle control (0-360°).

---

## 📖 Description

The **RGB Split** component creates a dynamic RGB split effect where red, green, and blue color channels separate and merge with interactive controls. Built with vanilla HTML, CSS, and JavaScript, it features split control (0-100%), angle control (0-360°), and particle effects for a glitchy, futuristic experience.

### 🎯 Core Features

- **RGB split** – red, green, blue channels separate and merge
- **Split control** – adjust split from 0-100%
- **Angle control** – adjust split angle from 0-360°
- **Channel visualization** – each channel displayed with glow
- **Particle effects** – 100 RGB particles
- **Channel status** – shows current state (Merged, Splitting, Split)
- **Interactive controls** – sliders, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🌈 RGB Channels

| Channel | Color | Description |
|---------|-------|-------------|
| **Red** | 🔴 | Red channel with glow |
| **Green** | 🟢 | Green channel with glow |
| **Blue** | 🔵 | Blue channel with glow |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Sliders** | Adjust Split (0-100%) and Angle (0-360°) |
| **Keyboard** | `R` – Reset |

### ✨ RGB Experience

When interacting:
1. **Channels separate** – RGB channels move apart
2. **Split applies** – controls channel separation
3. **Angle applies** – controls separation direction
4. **Particles glow** – RGB particles scatter
5. **Status updates** – shows current state

### 💡 Why Use This Component?

- Perfect for glitch effects, futuristic interfaces, or creative coding
- Dynamic RGB split with interactive controls
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, split behavior, particles)
- Split and angle controls for customization

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, particle system

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Dynamic separation** – channels move organically
- **Particle effects** – RGB particles with glow
- **Visual feedback** – status updates, channel indicators
- **Glitch atmosphere** – futuristic RGB split effect
- **Human-readable classes** – `.rgb-controls`, `.rgb-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Split range | `splitSlider` | 0-100% |
| Angle range | `angleSlider` | 0-360° |
| Particle count | `generateParticles()` | 100 |
| Channel colors | `colors` object | RGB |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Merged** | Single combined channel |
| **Splitting** | Channels separate |
| **Split** | Fully separated channels |
| **Angle Change** | Split direction changes |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for glitch effects, futuristic interfaces, and creative coding.