# 🖋️ Ink Wash – Ink Spreads and Blends

> An interactive ink wash component where ink spreads and blends like traditional ink painting, with adjustable wetness and multiple colors.

---

## 📖 Description

The **Ink Wash** component creates a traditional ink painting experience where ink spreads and blends organically across the canvas. Built with vanilla HTML, CSS, and JavaScript, it features adjustable wetness (1-10), 8 colors, particle-based ink spreading, and canvas rendering.

### 🎯 Core Features

- **Ink spreading** – ink particles spread organically with fluid motion
- **Adjustable wetness** – control ink spread from dry (1) to very wet (10)
- **8 colors** – dark ink, grays, blue, purple, pink, green
- **Particle system** – ink particles with life cycle and blending
- **Real-time spreading** – ink continues to spread after drawing
- **Stroke counter** – tracks number of strokes drawn
- **Interactive controls** – wetness slider, color picker, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🎨 Color Palette

| Color | Hex | Description |
|-------|-----|-------------|
| Dark Ink | #1a1a2e | Deep black-blue ink |
| Gray | #2d3748 | Dark gray ink |
| Light Gray | #4a5568 | Medium gray ink |
| Silver | #6b7280 | Light gray ink |
| Blue | #3b82f6 | Blue ink |
| Purple | #8b5cf6 | Purple ink |
| Pink | #ec4899 | Pink ink |
| Green | #22c55e | Green ink |

### 💧 Wetness Levels

| Level | Effect |
|-------|--------|
| 1-3 | Dry, controlled spreading |
| 4-6 | Moderate spreading |
| 7-8 | Wet, spreading ink |
| 9-10 | Very wet, wide spreading |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Click and drag to draw |
| **Touch** | Drag on mobile to draw |
| **Slider** | Adjust wetness (1-10) |
| **Buttons** | Color selection |
| **Keyboard** | `C` – Clear |

### ✨ Ink Experience

When drawing:
1. **Ink appears** – particles form along the stroke
2. **Ink spreads** – particles expand outward
3. **Ink blends** – particles overlap and blend
4. **Wetness applies** – wetness affects spread radius
5. **Counter updates** – stroke count increments
6. **Status updates** – shows drawing state

### 💡 Why Use This Component?

- Perfect for artistic interfaces, creative tools, or traditional art simulations
- Authentic ink wash feel with organic spreading
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, wetness, spread behavior)
- Accessible with keyboard controls for power users
- Adjustable wetness for different ink styles

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, particle system, requestAnimationFrame

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic spreading** – ink particles expand fluidly
- **Particle blending** – overlapping particles create depth
- **Wetness control** – adjustable spreading behavior
- **Visual feedback** – status updates, counter, color selection
- **Artistic atmosphere** – traditional ink painting feel
- **Human-readable classes** – `.ink-controls`, `.color-btn`, `.ink-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Colors | `.color-btn` elements | 8 colors |
| Wetness range | `wetnessSlider` | 1-10 |
| Particle count | `createInkSpread()` | 20-30 |
| Spread speed | `particle.speed` | 0.01-0.03 |
| Particle size | `particle.size` | 2-20px |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Blank canvas with controls |
| **Drawing** | Ink spreads along stroke |
| **Spreading** | Ink expands organically |
| **Wet** | Wide ink spread with blending |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for artistic interfaces, creative tools, and traditional art experiences.