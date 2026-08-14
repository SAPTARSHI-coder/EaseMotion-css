# 📄 Origami Unfold – 3D Origami Unfolds

> An interactive 3D origami component that unfolds with smooth animation, 4 paper layers, and elegant transitions.

---

## 📖 Description

The **Origami Unfold** component creates a beautiful 3D origami unfolding experience with 4 paper layers that rotate and translate in 3D space. Built with vanilla HTML, CSS, and JavaScript, it features smooth animations, realistic paper movements, and interactive controls.

### 🎯 Core Features

- **4 paper layers** – Back, Middle, Front, Top with unique positions
- **Smooth unfold animation** – layers rotate and translate with 0.06 interpolation
- **Realistic 3D movement** – each layer moves differently for authentic origami feel
- **Unfold indicator** – progress bar showing unfold percentage
- **Interactive controls** – buttons, click on display, keyboard shortcuts
- **3D perspective** – immersive depth with perspective and transform-style
- **Responsive design** – adapts to different screen sizes

### 📄 Paper Layers

| Layer | Icon | Label | Movement |
|-------|------|-------|----------|
| **Back** | 📄 | Back | Rotates back, translates backward |
| **Middle** | 📄 | Middle | Moderate rotation and translation |
| **Front** | ⭐ | Front | Rotates forward, translates forward |
| **Top** | ✨ | Top | Flips upward, rises highest |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Click** | Click on display to toggle unfold/fold |
| **Buttons** | Unfold, Fold, Reset |
| **Keyboard** | `Space` – Toggle · `U` – Unfold · `F` – Fold · `R` – Reset |

### ✨ Unfold Experience

When unfolding:
1. **Layers rotate** – each layer rotates at different angles (up to 120°)
2. **Layers translate** – layers move in Z-axis at different speeds
3. **Opacity changes** – layers become more visible as they unfold
4. **Scale effect** – layers scale up slightly for dramatic effect
5. **Glow intensifies** – subtle glow increases with unfold progress
6. **Status updates** – shows "Opening...", "Unfolding...", "Fully unfolded!"

### 💡 Why Use This Component?

- Perfect for 3D showcases, storytelling, or interactive presentations
- Beautiful origami effect with realistic paper movement
- Self-contained – no external dependencies or frameworks
- Easy to customize (layers, colors, animation speed)
- Accessible with keyboard controls for power users
- Multiple layers create depth and visual interest

### 🛠️ Technologies Used

- **HTML5** – semantic structure with 4 paper layers
- **CSS3** – 3D transforms, perspective, gradients, backdrop-filter
- **JavaScript (ES6)** – DOM manipulation, requestAnimationFrame, interpolation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **3D transforms** – rotateX/Y and translateZ for realistic paper movement
- **Smooth interpolation** – 0.06 lerp for fluid, natural motion
- **Layer variety** – each layer moves differently for authentic origami
- **Interactive feedback** – status updates, progress indicator, glow effects
- **Perspective depth** – immersive 3D with perspective and preserve-3d
- **Human-readable classes** – `.paper`, `.paper-back`, `.btn-unfold`, `.btn-fold`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Max rotation | `angle` formula | 120° |
| Max translation | `translateZ` formula | 80px |
| Interpolation speed | `updateOrigami()` lerp | 0.06 |
| Layer count | HTML structure | 4 layers |
| Paper colors | CSS gradients | Dark blue/purple |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Folded (0%)** | All layers stacked flat, minimal visibility |
| **Unfolding (40-60%)** | Layers rotate and separate, progress bar fills |
| **Unfolded (100%)** | Fully separated layers, glowing effect |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for 3D showcases, interactive presentations, and elegant animations.