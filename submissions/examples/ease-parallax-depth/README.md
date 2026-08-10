# 🔮 Parallax Depth – Multi-Layer Depth Movement

> An interactive parallax component with 5 layers moving at different depths, 4 movement modes, and smooth 60fps tracking.

---

## 📖 Description

The **Parallax Depth** component creates an immersive multi-layer parallax experience where 5 layers move at different speeds based on cursor position. Built with vanilla HTML, CSS, and JavaScript, it features 4 movement modes (Cursor, Reverse, Radial, Wave), depth-based scaling and rotation, and smooth 60fps tracking.

### 🎯 Core Features

- **5 parallax layers** – each with unique depth values (0.1x, 0.3x, 0.6x, 1.0x, 1.8x)
- **Depth-based movement** – layers move at different speeds based on depth multiplier
- **4 movement modes** – Cursor, Reverse, Radial, Wave
- **Smooth interpolation** – 60fps tracking with easing
- **Depth-based effects** – scaling, rotation, and opacity vary by depth
- **Visual indicators** – color-coded dots showing layer depths
- **Auto-animate mode** – smooth sinusoidal motion for demonstration
- **Touch support** – works on mobile devices
- **Responsive design** – adapts to different screen sizes

### 🎮 Movement Modes

| Mode | Icon | Description |
|------|------|-------------|
| **Cursor** | 🖱️ | Follows cursor movement directly |
| **Reverse** | 🔄 | Moves opposite to cursor direction |
| **Radial** | 🎯 | Radial movement from center |
| **Wave** | 🌊 | Wave pattern motion |

### 🎨 Depth Layers

| Layer | Depth | Emoji | Color | Description |
|-------|-------|-------|-------|-------------|
| 1 | 0.1x | 🌌 | #6366f1 | Farthest, slowest movement |
| 2 | 0.3x | 🏔️ | #818cf8 | Subtle movement |
| 3 | 0.6x | 🌳 | #a78bfa | Moderate movement |
| 4 | 1.0x | ✨ | #c4b5fd | Standard movement |
| 5 | 1.8x | 🎯 | #ddd6fe | Closest, fastest movement |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Move mouse over display to see parallax |
| **Touch** | Drag on mobile to move layers |
| **Buttons** | Reset Position, Toggle Mode, Auto Parallax |
| **Keyboard** | `R` – Reset · `M` – Mode · `A` – Auto Parallax |

### ✨ Parallax Experience

When you interact:
1. **Layers move** – each layer moves at different speed based on depth
2. **Scale changes** – layers scale based on depth (0.5x-1.8x)
3. **Rotation** – subtle rotation based on movement
4. **Opacity variation** – deeper layers are more transparent
5. **Smooth tracking** – 60fps with easing interpolation
6. **Status updates** – shows active state

### 💡 Why Use This Component?

- Perfect for immersive backgrounds, storytelling, or interactive showcases
- Multi-layer depth creates realistic parallax effect
- Self-contained – no external dependencies or frameworks
- Easy to customize (layer count, depths, colors, modes)
- Accessible with keyboard controls for power users
- 4 movement modes add variety and different experiences

### 🛠️ Technologies Used

- **HTML5** – semantic structure
- **CSS3** – transforms, gradients, backdrop-filter, animations
- **JavaScript (ES6)** – DOM manipulation, requestAnimationFrame, touch events

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Multi-layer transforms** – translate, scale, rotate for each layer
- **Smooth interpolation** – 60fps tracking with easing (0.08 lerp)
- **Depth-based effects** – scaling, rotation, opacity vary by depth
- **Mode variety** – 4 distinct movement patterns
- **Interactive feedback** – visual indicators, status updates, color coding
- **Human-readable classes** – `.parallax-layer`, `.layer-content`, `.indicator-dot`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Layer count | HTML structure | 5 layers |
| Depth values | `data-depth` attribute | 0.1-1.8 |
| Max offset | `maxOffset` variable | 80px |
| Smoothing | `lerp` value | 0.08 |
| Movement modes | `modes` object | 4 modes |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Default** | 5 layers stacked, centered |
| **Moving** | Layers shift at different speeds |
| **Auto Parallax** | Smooth sinusoidal motion |
| **Mode Change** | Different movement patterns |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for immersive parallax experiences, interactive backgrounds, and showcases.