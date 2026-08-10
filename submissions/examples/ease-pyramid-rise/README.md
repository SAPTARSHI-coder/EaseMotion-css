# 🔺 Pyramid Rise – Rises from Flat Surface

> An interactive 3D pyramid component that rises from a flat surface with smooth animation, 4 faces, and golden ratio proportions.

---

## 📖 Description

The **Pyramid Rise** component creates a dramatic 3D pyramid that emerges from a flat surface with smooth animation. Built with vanilla HTML, CSS, and JavaScript, it features 4 faces with icons, golden ratio proportions, and multiple interaction methods.

### 🎯 Core Features

- **3D pyramid** – 4 faces with golden ratio proportions rising from flat
- **Smooth rise animation** – interpolated rise from 0% to 100%
- **4 unique faces** – Front (🏛️), Back (✨), Left (🌅), Right (🌟) with icons
- **Rise indicator** – visual bar showing current rise percentage
- **Interactive controls** – rise, lower, reset buttons
- **Multiple interactions** – buttons, click on display, keyboard shortcuts
- **Smooth 60fps** – requestAnimationFrame with interpolation
- **Responsive design** – adapts to different screen sizes

### 🎨 Pyramid Faces

| Face | Icon | Color | Description |
|------|------|-------|-------------|
| Front | 🏛️ | #6366f1 | Primary face |
| Back | ✨ | #818cf8 | Opposite face |
| Left | 🌅 | #a78bfa | Left side face |
| Right | 🌟 | #c4b5fd | Right side face |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Click** | Click on display to toggle rise/lower |
| **Buttons** | Rise!, Lower, Reset |
| **Keyboard** | `Space` – Toggle · `R` – Rise · `L` – Lower · `X` – Reset |

### ✨ Rise Experience

When interacting:
1. **Smooth rise** – pyramid emerges from flat surface with 0.08 interpolation
2. **Face reveal** – each face reveals with slight delay for dramatic effect
3. **Base glow** – base shadow expands and glows as pyramid rises
4. **Status updates** – shows "Emerging...", "Rising...", or "Fully raised!"
5. **Indicator fills** – progress bar shows rise percentage in real-time

### 💡 Why Use This Component?

- Perfect for 3D showcases, architectural demos, or dramatic reveals
- Engaging emergence effect makes interactions feel cinematic
- Self-contained – no external dependencies or frameworks
- Easy to customize (size, colors, speed, face content)
- Accessible with keyboard controls for power users
- Golden ratio proportions create aesthetic appeal

### 🛠️ Technologies Used

- **HTML5** – semantic structure
- **CSS3** – 3D transforms, gradients, perspective, border triangles
- **JavaScript (ES6)** – DOM manipulation, requestAnimationFrame, interpolation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **3D transforms** – pyramid faces with `rotateY` and `scaleY` for 3D emergence
- **Smooth interpolation** – 0.08 lerp for fluid, natural motion
- **Dramatic reveal** – faces reveal with staggered timing for cinematic effect
- **Interactive feedback** – status updates, indicator bar, glow effects
- **Golden ratio** – proportional pyramid design
- **Human-readable classes** – `.pyramid`, `.pyramid-face`, `.face-front`, `.btn-rise`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Max height | `height` variable | 180px |
| Interpolation speed | `updatePyramid()` lerp | 0.08 |
| Face delay | `delay` in loop | 0.05s |
| Base size | `width` in CSS | 140px |
| Face colors | CSS `border-color` | Blue/purple gradient |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Flat (0%)** | Pyramid flat on surface, faces invisible |
| **Emerging (20-50%)** | Faces begin to reveal, base glows |
| **Rising (50-80%)** | Pyramid taking shape, indicator filling |
| **Fully Risen (100%)** | Full pyramid with glow, faces visible |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for 3D showcases, dramatic reveals, and immersive experiences.