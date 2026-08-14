# 🖌️ Oil Pastel – Thick, Textured Strokes

> An interactive oil pastel drawing tool with thick, textured strokes, 12 colors, and 4 texture modes (Smooth, Textured, Rough, Impasto).

---

## 📖 Description

The **Oil Pastel** component creates an authentic oil pastel drawing experience with thick, textured strokes. Built with vanilla HTML, CSS, and JavaScript, it features 12 colors, 4 texture modes, and responsive canvas-based rendering.

### 🎯 Core Features

- **Thick textured strokes** – oil pastel-like strokes with depth and texture
- **12 colors** – vibrant color palette for creative expression
- **4 texture modes** – Smooth, Textured, Rough, Impasto
- **Canvas rendering** – smooth, responsive drawing experience
- **Stroke counter** – tracks number of strokes drawn
- **Color selection** – click color swatches to change color
- **Interactive controls** – buttons, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🎨 Color Palette

| Color | Hex | Color | Hex |
|-------|-----|-------|-----|
| Red | #ef4444 | Orange | #f97316 |
| Yellow | #fbbf24 | Green | #22c55e |
| Blue | #3b82f6 | Purple | #8b5cf6 |
| Pink | #ec4899 | Gold | #f59e0b |
| Emerald | #10b981 | Indigo | #6366f1 |
| Rose | #f472b6 | Teal | #14b8a6 |

### 🎨 Texture Modes

| Mode | Description |
|------|-------------|
| **Smooth** | Clean, smooth oil pastel strokes |
| **Textured** | Added texture and variation |
| **Rough** | Rough, irregular strokes with offsets |
| **Impasto** | Thick, layered application |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Click and drag to draw |
| **Touch** | Drag on mobile to draw |
| **Buttons** | Toggle Texture, Clear |
| **Keyboard** | `T` – Texture · `C` – Clear |

### ✨ Drawing Experience

When drawing:
1. **Stroke appears** – thick pastel stroke follows cursor
2. **Texture applies** – selected texture mode affects stroke
3. **Color applies** – active color used for stroke
4. **Counter updates** – stroke count increments
5. **Status updates** – shows drawing state

### 💡 Why Use This Component?

- Perfect for creative tools, drawing apps, or artistic interfaces
- Authentic oil pastel feel with textured strokes
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, textures, stroke behavior)
- Accessible with keyboard controls for power users
- 4 texture modes add variety and artistic expression

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, event handling, color manipulation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic strokes** – natural, varied stroke rendering
- **Texture variety** – 4 distinct texture modes
- **Visual feedback** – status updates, color selection, counter
- **Artistic atmosphere** – rich colors and textures
- **Human-readable classes** – `.color-swatch`, `.stroke-info`, `.oilpastel-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Colors | `.color-swatch` elements | 12 colors |
| Texture modes | `textures` array | 4 modes |
| Stroke size | `size` variable | 8-12px |
| Texture variations | `drawStroke()` | Multiple |
| Canvas background | `redrawStrokes()` | Radial gradient |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Blank canvas with color palette |
| **Drawing** | Thick strokes appear with texture |
| **Color Change** | Active color updates |
| **Texture Change** | Stroke texture changes |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for creative tools, drawing apps, and artistic experiences.