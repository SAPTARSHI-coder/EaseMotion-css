# 💉 Tattoo Effect – Appears Like Temporary Tattoo

> An interactive temporary tattoo tool that applies ink to skin with organic spreading, skin texture, fade control (1-10), and 8 colors.

---

## 📖 Description

The **Tattoo Effect** component creates a realistic temporary tattoo experience where ink is applied to skin with organic spreading, skin texture overlay, and adjustable fade. Built with vanilla HTML, CSS, and JavaScript, it features 8 colors, fade control (1-10), and canvas-based rendering.

### 🎯 Core Features

- **Temporary tattoo** – ink applies to skin with organic spreading
- **8 colors** – Dark ink, Gray, Light Gray, Blue, Purple, Pink, Green, Red
- **Fade control** – adjust tattoo fade from 1-10
- **Skin texture** – realistic skin pores and grain
- **Tattoo spreading** – ink bleeds into skin naturally
- **Tattoo counter** – tracks number of tattoos applied
- **Interactive controls** – fade slider, color picker, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🎨 Color Palette

| Color | Hex | Color | Hex |
|-------|-----|-------|-----|
| Dark Ink | #1a1a2e | Gray | #2d3748 |
| Light Gray | #4a5568 | Blue | #3b82f6 |
| Purple | #8b5cf6 | Pink | #ec4899 |
| Green | #22c55e | Red | #ef4444 |

### 💧 Fade Levels

| Level | Effect |
|-------|--------|
| 1-3 | Fresh, bold tattoo |
| 4-6 | Slightly faded, settled |
| 7-8 | Worn, softer appearance |
| 9-10 | Very faded, aged look |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Click and drag to apply tattoo |
| **Touch** | Drag on mobile to apply tattoo |
| **Slider** | Adjust fade (1-10) |
| **Buttons** | Color selection |
| **Keyboard** | `C` – Clear |

### ✨ Tattoo Experience

When applying:
1. **Ink applies** – tattoo ink appears on skin
2. **Spreads** – ink bleeds into skin naturally
3. **Skin texture** – skin pores overlay the tattoo
4. **Fade applies** – controls ink intensity and spread
5. **Counter updates** – tattoo count increments
6. **Status updates** – shows application state

### 💡 Why Use This Component?

- Perfect for creative tools, tattoo design apps, or body art simulators
- Authentic temporary tattoo feel with skin texture
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, fade, spread behavior)
- Accessible with keyboard controls for power users
- 8 colors for creative expression

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, event handling, color manipulation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic spreading** – ink bleeds into skin naturally
- **Skin texture** – pores and grain overlay
- **Visual feedback** – status updates, counter, color selection
- **Artistic atmosphere** – skin-like texture and tattoo feel
- **Human-readable classes** – `.tattoo-controls`, `.color-btn`, `.tattoo-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Colors | `.color-btn` elements | 8 colors |
| Fade range | `fadeSlider` | 1-10 |
| Ink size | `baseSize` | 2 + fade × 0.3 |
| Spread count | `spreadCount` | 2 + fade × 0.3 |
| Skin texture | `drawSkin()` | 600 pores + 300 grain |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Skin texture with controls |
| **Applying** | Tattoo ink appears on skin |
| **Spreading** | Ink bleeds naturally |
| **Faded** | Soft, aged tattoo look |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for creative tools, tattoo design apps, and body art simulators.