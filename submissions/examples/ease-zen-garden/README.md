# 🌊 Zen Garden – Draws Raked Patterns in Sand

> An interactive zen garden component where you can rake patterns (Wave, Circle, Spiral, Zigzag, Free Draw) in sand with adjustable size and real-time feedback.

---

## 📖 Description

The **Zen Garden** component creates a peaceful zen garden experience where you can rake patterns in sand. Built with vanilla HTML, CSS, and JavaScript, it features 5 pattern types (Wave, Circle, Spiral, Zigzag, Free Draw), adjustable size (1-10), and realistic sand texture.

### 🎯 Core Features

- **Zen garden** – rake patterns in realistic sand
- **5 patterns** – Wave (🌊), Circle (⭕), Spiral (🌀), Zigzag (⚡), Free Draw (✏️)
- **Size control** – adjustable rake size from 1-10
- **Realistic sand** – sand texture with grains and color gradients
- **Rake counter** – tracks number of rake strokes
- **Interactive controls** – pattern buttons, size slider, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🌊 Patterns

| Pattern | Icon | Description |
|---------|------|-------------|
| **Wave** | 🌊 | Flowing wave patterns |
| **Circle** | ⭕ | Concentric circular marks |
| **Spiral** | 🌀 | Spiral swirling marks |
| **Zigzag** | ⚡ | Zigzag zig-zag marks |
| **Free Draw** | ✏️ | Freeform drawing |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Click and drag to rake |
| **Touch** | Drag on mobile to rake |
| **Buttons** | Pattern selection |
| **Keyboard** | `C` – Clear |

### ✨ Zen Experience

When raking:
1. **Pattern appears** – rake marks form in the sand
2. **Pattern applies** – selected pattern affects rake marks
3. **Size applies** – controls rake mark size
4. **Counter updates** – rake count increments
5. **Status updates** – shows current pattern

### 💡 Why Use This Component?

- Perfect for relaxation apps, mindfulness tools, or creative interfaces
- Peaceful zen garden experience with realistic sand
- Self-contained – no external dependencies or frameworks
- Easy to customize (patterns, colors, size, behavior)
- Accessible with keyboard controls for power users
- 5 patterns for creative expression

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, event handling

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic patterns** – natural rake marks in sand
- **Pattern variety** – 5 distinct rake styles
- **Visual feedback** – status updates, counter, controls
- **Zen atmosphere** – warm sand colors and textures
- **Human-readable classes** – `.zen-controls`, `.pattern-btn`, `.zen-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Patterns | `.pattern-btn` elements | 5 patterns |
| Size range | `sizeSlider` | 1-10 |
| Sand colors | `drawSand()` | Brown/gold palette |
| Texture grains | `drawSand()` | 800 + 400 grains |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Smooth sand with controls |
| **Wave** | Flowing wave patterns |
| **Circle** | Circular rake marks |
| **Spiral** | Spiral patterns |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for relaxation apps, mindfulness tools, and creative experiences.