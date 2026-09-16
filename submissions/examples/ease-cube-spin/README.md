# 🎲 Cube Spin – 3D Cube Pattern

> An interactive 3D cube component with 6 faces, smooth rotation controls, auto-spin, and 5 color styles.

---

## 📖 Description

The **Cube Spin** component creates an interactive 3D cube experience with 6 labeled faces, smooth rotation controls, auto-spin functionality, and 5 color styles. Built with vanilla HTML, CSS, and JavaScript, it features 3D transforms, face icons, and multiple interaction methods.

### 🎯 Core Features

- **6 unique faces** – Front, Back, Right, Left, Top, Bottom with icons and labels
- **Full 3D rotation** – rotate on X, Y, Z axes with smooth interpolation
- **Interactive controls** – sliders for each axis, mouse/touch drag on cube
- **Auto-spin mode** – continuous rotation with random axis changes
- **5 color styles** – Neon, Fire, Ocean, Forest, Sunset with matching gradients
- **Smooth animation** – 60fps with interpolation for fluid motion
- **Multiple interaction methods** – sliders, drag, buttons, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🎨 Color Styles

| Style | Colors | Description |
|-------|--------|-------------|
| **Neon** | Blue/Purple gradient | Cyberpunk neon look |
| **Fire** | Red/Orange gradient | Warm, intense feel |
| **Ocean** | Blue/Cyan gradient | Cool, calm aesthetic |
| **Forest** | Green gradient | Natural, earthy vibe |
| **Sunset** | Pink/Gold gradient | Warm, vibrant energy |

### 🎮 Cube Faces

| Face | Icon | Label | Description |
|------|------|-------|-------------|
| Front | ⭐ | Front | Primary face |
| Back | 🌙 | Back | Opposite face |
| Right | 🔥 | Right | Right side face |
| Left | 💧 | Left | Left side face |
| Top | ✨ | Top | Top face |
| Bottom | 🌍 | Bottom | Bottom face |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Sliders** | Adjust X, Y, Z rotation individually |
| **Drag** | Click and drag on cube to rotate |
| **Buttons** | Auto Spin, Reset, Toggle Style |
| **Keyboard** | `Space` – Spin · `R` – Reset · `S` – Style |

### ✨ Cube Experience

When interacting:
1. **Smooth rotation** – cube rotates with 0.1 interpolation for fluid motion
2. **Real-time feedback** – sliders update with current rotation values
3. **Auto-spin** – continuous rotation with random axis changes
4. **Style changes** – colors update instantly with new gradients
5. **Drag support** – mouse and touch drag for intuitive control

### 💡 Why Use This Component?

- Perfect for 3D showcases, product displays, or interactive demos
- Engaging 3D interaction with multiple control methods
- Self-contained – no external dependencies or frameworks
- Easy to customize (styles, face content, size, colors)
- Accessible with keyboard controls for power users
- 5 styles add variety and different aesthetics

### 🛠️ Technologies Used

- **HTML5** – semantic structure
- **CSS3** – 3D transforms, gradients, perspective, animations
- **JavaScript (ES6)** – DOM manipulation, requestAnimationFrame, event handling

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **3D transforms** – `rotateX`, `rotateY`, `rotateZ` with `preserve-3d` for realistic 3D
- **Smooth interpolation** – 0.1 lerp for fluid, natural motion
- **Interactive feedback** – sliders, drag, status updates
- **Style variety** – 5 distinct color palettes from one component
- **Auto-animation** – continuous spin with random axis variation
- **Human-readable classes** – `.cube`, `.cube-face`, `.face-front`, `.btn-spin`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Cube size | CSS `width`/`height` | 140px |
| Face distance | `translateZ` value | 70px |
| Interpolation speed | `updateCube()` lerp | 0.1 |
| Auto-spin speed | `animate()` | 60fps |
| Color styles | `styles` object | 5 styles |
| Face content | HTML `.face-icon`/`.face-label` | Icons + labels |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Default** | 3D cube at 30° X, 45° Y rotation |
| **Dragging** | Cube rotates with mouse/touch |
| **Auto Spin** | Continuous smooth rotation |
| **Style Change** | Colors update with new gradients |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for 3D showcases, interactive demos, and immersive experiences.