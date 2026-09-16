# 🖍️ Crayon Texture – Waxy Texture on Interaction

> An interactive crayon drawing tool with waxy texture, pressure control (1-10), 10 vibrant colors, and organic crayon-like strokes.

---

## 📖 Description

The **Crayon Texture** component creates an authentic crayon drawing experience with waxy texture, pressure sensitivity, and organic strokes. Built with vanilla HTML, CSS, and JavaScript, it features 10 colors, pressure control (1-10), and canvas-based rendering for a realistic artistic experience.

### 🎯 Core Features

- **Waxy texture** – organic crayon strokes with irregular shapes and grain
- **10 vibrant colors** – red, orange, yellow, green, blue, purple, pink, gold, teal, rose
- **Pressure control** – adjust pressure from 1-10 affecting stroke thickness and waxiness
- **Organic strokes** – irregular shapes with semi-transparent layering
- **Waxy highlights** – subtle white highlights for authentic crayon look
- **Stroke counter** – tracks number of strokes drawn
- **Interactive controls** – pressure slider, color picker, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🎨 Color Palette

| Color | Hex | Color | Hex |
|-------|-----|-------|-----|
| Red | #ef4444 | Orange | #f97316 |
| Yellow | #fbbf24 | Green | #22c55e |
| Blue | #3b82f6 | Purple | #8b5cf6 |
| Pink | #ec4899 | Gold | #f59e0b |
| Teal | #14b8a6 | Rose | #f472b6 |

### 🖍️ Pressure Levels

| Level | Effect |
|-------|--------|
| 1-3 | Light, thin strokes with subtle texture |
| 4-6 | Medium pressure, balanced texture |
| 7-8 | Heavy pressure, thick waxy strokes |
| 9-10 | Maximum pressure, very thick and waxy |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Click and drag to draw |
| **Touch** | Drag on mobile to draw |
| **Slider** | Adjust pressure (1-10) |
| **Buttons** | Color selection |
| **Keyboard** | `C` – Clear |

### ✨ Crayon Experience

When drawing:
1. **Waxy strokes** – organic shapes with irregular edges
2. **Pressure applies** – affects stroke thickness and waxiness
3. **Color applies** – vibrant crayon color with slight variation
4. **Waxy highlights** – subtle white highlights appear randomly
5. **Counter updates** – stroke count increments
6. **Status updates** – shows drawing state

### 💡 Why Use This Component?

- Perfect for creative tools, children's apps, or artistic interfaces
- Authentic crayon feel with waxy texture
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, pressure, stroke behavior)
- Accessible with keyboard controls for power users
- 10 colors for creative expression

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, event handling, color manipulation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Waxy texture** – organic strokes with grain and highlights
- **Pressure sensitivity** – adjustable stroke thickness
- **Visual feedback** – status updates, counter, color selection
- **Artistic atmosphere** – vibrant colors and waxy texture
- **Human-readable classes** – `.crayon-controls`, `.color-btn`, `.crayon-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Colors | `.color-btn` elements | 10 colors |
| Pressure range | `pressureSlider` | 1-10 |
| Stroke size | `baseSize` formula | 3 + pressure × 1.2 |
| Waxiness | `waxiness` formula | 0.3 + pressure × 0.07 |
| Particle count | `particleCount` | 3 + random × pressure |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Blank canvas with controls |
| **Drawing** | Waxy crayon strokes appear |
| **High Pressure** | Thick, waxy texture |
| **Low Pressure** | Light, subtle strokes |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for creative tools, children's apps, and artistic experiences.