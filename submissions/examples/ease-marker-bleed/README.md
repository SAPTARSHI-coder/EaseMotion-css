# 🖊️ Marker Bleed – Marker Bleeds Through Layers

> An interactive marker drawing tool where ink bleeds through layers with adjustable bleed control (1-10), 8 vibrant colors, and organic marker-like strokes with feathering.

---

## 📖 Description

The **Marker Bleed** component creates an authentic marker drawing experience where ink bleeds through layers with organic spreading, feathering, and depth. Built with vanilla HTML, CSS, and JavaScript, it features 8 vibrant colors, bleed control (1-10), and canvas-based rendering for a realistic artistic experience.

### 🎯 Core Features

- **Marker bleed** – ink spreads and bleeds through layers organically
- **8 vibrant colors** – Red, Orange, Yellow, Green, Blue, Purple, Pink, Teal
- **Bleed control** – adjust bleed from 1-10 affecting spread and depth
- **Organic strokes** – irregular shapes with semi-transparent layering
- **Multi-layer bleed** – primary bleed + secondary deeper bleed for high bleed values
- **Edge feathering** – soft edges for authentic marker feel
- **Marker shine** – subtle highlights for realistic marker look
- **Stroke counter** – tracks number of strokes drawn
- **Interactive controls** – bleed slider, color picker, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🎨 Color Palette

| Color | Hex | Color | Hex |
|-------|-----|-------|-----|
| Red | #ef4444 | Orange | #f97316 |
| Yellow | #fbbf24 | Green | #22c55e |
| Blue | #3b82f6 | Purple | #8b5cf6 |
| Pink | #ec4899 | Teal | #14b8a6 |

### 💧 Bleed Levels

| Level | Effect |
|-------|--------|
| 1-3 | Minimal bleed, controlled strokes |
| 4-6 | Moderate bleed, visible spreading |
| 7-8 | Heavy bleed, significant spreading |
| 9-10 | Maximum bleed, deep layer penetration |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Click and drag to draw |
| **Touch** | Drag on mobile to draw |
| **Slider** | Adjust bleed (1-10) |
| **Buttons** | Color selection |
| **Keyboard** | `C` – Clear |

### ✨ Marker Experience

When drawing:
1. **Main stroke** – bold marker line with slight irregularity
2. **Bleed spreads** – ink bleeds outward from the stroke
3. **Layers build** – multiple bleed layers create depth
4. **Feathering** – soft edges for authentic marker look
5. **Counter updates** – stroke count increments
6. **Status updates** – shows drawing state

### 💡 Why Use This Component?

- Perfect for creative tools, art apps, or children's drawing apps
- Authentic marker feel with bleed through layers
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, bleed, stroke behavior)
- Accessible with keyboard controls for power users
- 8 vibrant colors for creative expression

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, event handling, color manipulation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic bleed** – ink spreads naturally with multiple layers
- **Bleed control** – adjustable spreading behavior
- **Visual feedback** – status updates, counter, color selection
- **Artistic atmosphere** – vibrant colors with organic spreading
- **Human-readable classes** – `.marker-controls`, `.color-btn`, `.marker-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Colors | `.color-btn` elements | 8 colors |
| Bleed range | `bleedSlider` | 1-10 |
| Stroke size | `baseSize` formula | 4 + bleed × 0.6 |
| Bleed count | `bleedCount` | 3 + bleed × 0.7 |
| Bleed factor | `bleedFactor` | 0.2 + bleed × 0.08 |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Blank canvas with controls |
| **Drawing** | Marker stroke with bleed spreading |
| **High Bleed** | Wide spreading through layers |
| **Low Bleed** | Controlled, minimal spread |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for creative tools, art apps, and drawing experiences.