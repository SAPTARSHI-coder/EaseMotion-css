# ⚪ Sphere Roll – Rolls Across Surface

> An interactive 3D sphere component that rolls across a surface with smooth physics, 3 directions, and drag support.

---

## 📖 Description

The **Sphere Roll** component creates a realistic 3D sphere that rolls across a surface with smooth physics and rotation. Built with vanilla HTML, CSS, and JavaScript, it features 3 rolling directions (Right, Left, Bounce), drag support, and real-time position tracking.

### 🎯 Core Features

- **3D sphere** – realistic sphere with highlights, glow, and rotation
- **Smooth rolling** – 0.06 interpolation for fluid physics
- **3 directions** – Right (➡️), Left (⬅️), Bounce (↔️)
- **Drag support** – click and drag the sphere to position it
- **Real-time tracking** – position indicator with percentage
- **Rotation physics** – sphere rotates based on movement
- **Interactive controls** – buttons, drag, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🎮 Directions

| Direction | Icon | Behavior |
|-----------|------|----------|
| **Right** | ➡️ | Rolls to the right edge |
| **Left** | ⬅️ | Rolls to the left edge |
| **Bounce** | ↔️ | Bounces between edges |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Drag** | Click and drag sphere to position |
| **Click** | Click on display to roll |
| **Buttons** | Roll!, Toggle Direction, Reset Position |
| **Keyboard** | `Space` – Roll · `D` – Direction · `R` – Reset |

### ✨ Rolling Experience

When interacting:
1. **Smooth rolling** – sphere moves with 0.06 interpolation for fluid motion
2. **Rotation** – sphere rotates based on movement direction and distance
3. **Position tracking** – dot and percentage show current position
4. **Edge detection** – status updates when reaching edges
5. **Glow effect** – sphere glow intensifies with position
6. **Drag support** – precise positioning with mouse/touch

### 💡 Why Use This Component?

- Perfect for physics demos, games, or interactive showcases
- Realistic rolling effect with 3D appearance
- Self-contained – no external dependencies or frameworks
- Easy to customize (size, colors, speed, directions)
- Accessible with keyboard controls for power users
- Drag support for precise positioning

### 🛠️ Technologies Used

- **HTML5** – semantic structure
- **CSS3** – gradients, radial gradients, shadows
- **JavaScript (ES6)** – DOM manipulation, requestAnimationFrame, event handling

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Smooth interpolation** – 0.06 lerp for fluid, natural motion
- **3D appearance** – radial gradients and highlights create realistic sphere
- **Rotation physics** – sphere rotates based on movement
- **Interactive feedback** – position indicator, status updates, glow effects
- **Multiple input methods** – drag, click, buttons, keyboard
- **Visual tracking** – position dot and percentage in real-time
- **Human-readable classes** – `.sphere`, `.surface`, `.position-dot`, `.btn-roll`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Sphere size | CSS `width`/`height` | 60px |
| Interpolation speed | `updateSphere()` lerp | 0.06 |
| Roll distance | `rollSphere()` | 40% |
| Rotation speed | `rotationX` increment | 3x movement |
| Directions | `directions` object | 3 |
| Colors | CSS gradients | Blue/Purple |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Center** | Sphere in middle, subtle glow |
| **Rolling** | Sphere moves, rotates, position updates |
| **Edge** | Sphere at edge, "At the edge!" status |
| **Dragging** | Sphere follows cursor/finger |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for physics demos, games, and interactive experiences.