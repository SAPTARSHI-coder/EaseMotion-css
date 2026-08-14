# 🌿 Herb Garden – Aromatic Herbs Release Particles

> An interactive herb garden component where aromatic herbs release colorful particles with 5 herbs (Lavender, Rosemary, Mint, Basil, Thyme), intensity control (0-100%), and particle effects.

---

## 📖 Description

The **Herb Garden** component creates an interactive herb garden experience where aromatic herbs release colorful particles. Built with vanilla HTML, CSS, and JavaScript, it features 5 herbs (Lavender, Rosemary, Mint, Basil, Thyme), intensity control (0-100%), and particle effects for a sensory experience.

### 🎯 Core Features

- **Aromatic herbs** – 5 herbs release particles on interaction
- **5 herbs** – Lavender (💜), Rosemary (🌿), Mint (🍃), Basil (🌱), Thyme (🌸)
- **Intensity control** – adjust intensity from 0-100%
- **Particle effects** – colorful particles with star and circle shapes
- **Aroma level** – shows current particle level
- **Interactive controls** – slider, herb buttons, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🌿 Herbs

| Herb | Icon | Color | Description |
|------|------|-------|-------------|
| **Lavender** | 💜 | Purple | Calming lavender aroma |
| **Rosemary** | 🌿 | Green | Invigorating rosemary scent |
| **Mint** | 🍃 | Teal | Refreshing mint aroma |
| **Basil** | 🌱 | Green | Sweet basil fragrance |
| **Thyme** | 🌸 | Pink | Earthy thyme scent |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Click** | Click on herb to release particles |
| **Buttons** | Release Aroma, Clear |
| **Keyboard** | `Space` or `R` – Release · `C` – Clear |

### ✨ Herb Experience

When interacting:
1. **Particles release** – colorful particles burst from herb
2. **Intensity applies** – controls particle count and speed
3. **Herb applies** – changes particle color
4. **Particles float** – soft, drifting motion
5. **Status updates** – shows current state

### 💡 Why Use This Component?

- Perfect for sensory experiences, aromatherapy apps, or calming interfaces
- Interactive herb garden with colorful particles
- Self-contained – no external dependencies or frameworks
- Easy to customize (herbs, colors, particle behavior)
- 5 herbs for variety
- Intensity control for customization

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, particle system

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Soft motion** – particles drift gently
- **Particle effects** – colorful, glowing particles
- **Visual feedback** – status updates, aroma level, controls
- **Calming atmosphere** – herb garden with soft colors
- **Human-readable classes** – `.herb-controls`, `.herb-btn`, `.herb-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Herbs | `herbData` object | 5 herbs |
| Intensity range | `intensitySlider` | 0-100% |
| Particle count | `releaseAroma()` | 10-30 |
| Particle size | `size` | 2-6px |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Herbs in garden |
| **Releasing** | Particles burst out |
| **Intense** | More particles, faster |
| **Herb Change** | Particle colors shift |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for sensory experiences, aromatherapy apps, and calming interfaces.