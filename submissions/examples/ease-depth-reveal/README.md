# 📐 Depth Reveal – 3D Depth on Interaction

> An interactive 3D depth reveal component with parallax, pop, tilt, and explode effects across 4 depth layers.

---

## 📖 Description

The **Depth Reveal** component creates an immersive 3D depth experience with 4 distinct layers (Background, Midground, Foreground, UI Overlay) that reveal themselves on interaction. Built with vanilla HTML, CSS, and JavaScript, it features 4 effect modes (Parallax, Pop, Tilt, Explode) with smooth animations.

### 🎯 Core Features

- **4 depth layers** – Background, Midground, Foreground, UI Overlay with unique icons
- **4 effect modes** – Parallax, Pop, Tilt, Explode with different depth behaviors
- **Smooth depth transitions** – animated depth changes with requestAnimationFrame
- **Depth indicator** – visual bar showing current depth level
- **Interactive controls** – buttons and keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🎨 Effect Modes

| Mode | Icon | Description | Effect |
|------|------|-------------|--------|
| **Parallax** | 📐 | Smooth parallax depth | Layers move at different speeds |
| **Pop** | 💥 | Layers pop outward | Layers scale and translate in Z |
| **Tilt** | 🔄 | Tilt-based depth | Layers rotate in 3D space |
| **Explode** | 💫 | Layers explode apart | Layers spread outward |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Hover** | Hover over display to reveal depth |
| **Click** | Click display to toggle reveal |
| **Buttons** | Reveal Depth, Toggle Effect, Reset |
| **Keyboard** | `R` – Reveal · `M` – Mode · `Space` – Toggle |

### 🎨 Depth Layers

| Layer | Icon | Label | Description |
|-------|------|-------|-------------|
| **Background** | 🌌 | Background | Farthest layer, subtle movement |
| **Midground** | 🏔️ | Midground | Middle layer, moderate depth |
| **Foreground** | ✨ | Foreground | Close layer, prominent depth |
| **UI Overlay** | 🎯 | UI Overlay | Closest layer, strongest effect |

### ✨ Depth Experience

When you reveal depth:
1. **Layers animate** – each layer moves differently based on mode
2. **Depth indicator fills** – visual bar shows depth progression
3. **Opacity changes** – layers become more vibrant as depth increases
4. **Status updates** – shows current depth state
5. **Smooth transitions** – 60fps animations with requestAnimationFrame

### 💡 Why Use This Component?

- Perfect for 3D interfaces, storytelling, or immersive experiences
- Engaging depth effects make interactions feel dimensional
- Self-contained – no external dependencies or frameworks
- Easy to customize (modes, layers, colors, animation speed)
- Accessible with keyboard controls for power users
- Multiple modes add variety and functionality

### 🛠️ Technologies Used

- **HTML5** – semantic structure
- **CSS3** – 3D transforms, transitions, gradients, backdrop-filter
- **JavaScript (ES6)** – DOM manipulation, requestAnimationFrame, state management

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **3D transforms** – translateX/Y/Z, rotateX/Y, scale for depth
- **Smooth animations** – requestAnimationFrame for 60fps transitions
- **Layered effects** – 4 layers with distinct depth behaviors
- **Interactive feedback** – hover, click, and keyboard interactions
- **Visual indicators** – depth bar shows real-time progression
- **Human-readable classes** – `.depth-layer`, `.depth-active`, `.depth-indicator`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Effect modes | `modes` object | 4 modes |
| Layer count | HTML structure | 4 layers |
| Animation speed | `animateDepth()` | 0.05 per frame |
| Layer transforms | `updateDepth()` | Mode-specific |
| Depth indicator | CSS/HTML | Bar + percentage |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Default** | 4 layered cards stacked, flat appearance |
| **Revealing** | Layers animate with 3D transforms, depth bar fills |
| **Full Depth** | Layers fully separated, vibrant colors, 3D effect |
| **Mode Change** | Transforms switch to new depth behavior |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for 3D interfaces, immersive experiences, and interactive depth effects.