# ✏️ Pencil Sketch – Reveals Sketchy Line Drawing

> An interactive pencil sketch tool that creates sketchy line drawings with 4 styles (Sketch, Crosshatch, Scribble, Dotted) and adjustable darkness control.

---

## 📖 Description

The **Pencil Sketch** component creates an authentic pencil drawing experience with sketchy line rendering, multiple styles, and adjustable darkness. Built with vanilla HTML, CSS, and JavaScript, it features 4 sketch styles, darkness control (1-10), and canvas-based rendering.

### 🎯 Core Features

- **Sketchy lines** – organic, hand-drawn looking lines
- **4 styles** – Sketch (natural), Crosshatch (textured), Scribble (chaotic), Dotted (pointillist)
- **Darkness control** – adjust line darkness from 1-10
- **Multi-pass rendering** – multiple passes for sketchy effect
- **Line counter** – tracks number of lines drawn
- **Interactive controls** – darkness slider, style buttons, keyboard shortcuts
- **Paper texture** – subtle background grain for authentic feel
- **Responsive design** – adapts to different screen sizes

### ✏️ Sketch Styles

| Style | Icon | Description |
|-------|------|-------------|
| **Sketch** | ✏️ | Natural, hand-drawn sketch lines |
| **Crosshatch** | 🔲 | Textured crosshatch pattern |
| **Scribble** | 🌀 | Chaotic scribble effect |
| **Dotted** | ⏺️ | Pointillist dotted style |

### ✏️ Darkness Levels

| Level | Effect |
|-------|--------|
| 1-3 | Light, subtle lines |
| 4-6 | Medium darkness |
| 7-8 | Dark, prominent lines |
| 9-10 | Very dark, bold lines |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Click and drag to sketch |
| **Touch** | Drag on mobile to sketch |
| **Slider** | Adjust darkness (1-10) |
| **Buttons** | Style selection |
| **Keyboard** | `C` – Clear |

### ✨ Sketch Experience

When drawing:
1. **Line appears** – sketchy line follows cursor
2. **Style applies** – selected style affects line appearance
3. **Darkness applies** – controls line opacity and width
4. **Multi-pass** – multiple passes create sketchy feel
5. **Counter updates** – line count increments
6. **Status updates** – shows drawing state

### 💡 Why Use This Component?

- Perfect for creative tools, drawing apps, or sketch interfaces
- Authentic pencil sketch feel with organic lines
- Self-contained – no external dependencies or frameworks
- Easy to customize (styles, darkness, line behavior)
- Accessible with keyboard controls for power users
- 4 styles for creative variety

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, event handling, multi-pass rendering

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic lines** – sketchy, hand-drawn appearance
- **Style variety** – 4 distinct rendering styles
- **Visual feedback** – status updates, counter, controls
- **Artistic atmosphere** – pencil-like texture and feel
- **Human-readable classes** – `.sketch-controls`, `.style-btn`, `.sketch-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Styles | `.style-btn` elements | 4 styles |
| Darkness range | `darknessSlider` | 1-10 |
| Line opacity | `baseAlpha` | 0.2 + darkness × 0.06 |
| Line width | `lineWidth` | 0.5 + darkness × 0.2 |
| Pass count | `passes` variable | 1-3 |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Blank canvas with controls |
| **Sketch** | Natural sketchy lines |
| **Crosshatch** | Textured crosshatch pattern |
| **Scribble** | Chaotic scribble effect |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for creative tools, drawing apps, and sketch interfaces.