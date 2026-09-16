# 🪨 Petrify Effect – Turns to Stone Gradually

> An interactive petrification effect where a subject gradually turns to stone with cracking, color changes, and particle effects.

---

## 📖 Description

The **Petrify Effect** component creates a dramatic transformation where a living subject gradually turns to stone with smooth color transitions, appearing cracks, and stone particle effects. Built with vanilla HTML, CSS, and JavaScript, it features smooth interpolation, crack overlays, and interactive controls.

### 🎯 Core Features

- **Gradual petrification** – smooth transition from living to stone (0-100%)
- **Color transformation** – warm gold tones shift to gray stone colors
- **Crack overlay** – 8 stone cracks appear progressively during petrification
- **Stone particles** – particles fall during the petrification process
- **Subject transformation** – icon changes from 🧝 to 🗿 when fully petrified
- **Status updates** – "Living" → "Turning to stone..." → "Petrifying..." → "Petrified"
- **Interactive controls** – buttons, click on display, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Click** | Click on display to toggle petrify/reverse |
| **Buttons** | Petrify, Reverse, Reset |
| **Keyboard** | `Space` – Toggle · `P` – Petrify · `R` – Reverse · `X` – Reset |

### ✨ Petrification Experience

When petrifying:
1. **Color shifts** – subject transitions from gold (#fbbf24) to stone gray (#3D3526)
2. **Cracks appear** – 8 cracks progressively reveal with opacity and thickness
3. **Particles fall** – stone particles spawn during the process
4. **Icon changes** – 🧝 (elf) transforms to 🗿 (stone statue)
5. **Status updates** – shows current petrification stage
6. **Scale and rotate** – subject slightly shrinks and rotates
7. **Glow fades** – golden glow diminishes as stone takes over

### 💡 Why Use This Component?

- Perfect for fantasy games, RPGs, or magical transformation effects
- Dramatic visual transformation with smooth animation
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, speed, cracks, particles)
- Accessible with keyboard controls for power users
- Gradual effect creates tension and visual interest

### 🛠️ Technologies Used

- **HTML5** – semantic structure with SVG cracks
- **CSS3** – animations, gradients, transforms, SVG
- **JavaScript (ES6)** – DOM manipulation, requestAnimationFrame, interpolation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Smooth interpolation** – 0.04 lerp for fluid, natural transitions
- **Visual storytelling** – subject transforms from living to stone
- **Layered effects** – color changes, cracks, particles work together
- **Interactive feedback** – status updates, button states, glow effects
- **Progressive disclosure** – cracks and particles reveal gradually
- **Human-readable classes** – `.subject`, `.crack`, `.stone-particle`, `.btn-petrify`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Interpolation speed | `updatePetrify()` lerp | 0.04 |
| Color stages | `stoneColors` object | 6 stages |
| Crack count | SVG paths | 8 cracks |
| Particle spawn rate | `if (Math.random() < petrify * 0.3)` | 30% chance |
| Subject size | CSS `width`/`height` | 160px |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Living (0%)** | Golden glow, warm colors, no cracks |
| **Petrifying (20-60%)** | Colors shifting, cracks appearing, particles falling |
| **Petrifying (60-90%)** | Mostly stone, many cracks, icon changing |
| **Petrified (100%)** | Full stone, all cracks visible, 🗿 icon |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for fantasy games, RPGs, and magical transformation effects.