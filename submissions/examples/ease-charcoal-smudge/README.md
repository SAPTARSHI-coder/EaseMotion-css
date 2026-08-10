# ✏️ Charcoal Smudge – Smudges Like Charcoal Drawing

> An interactive charcoal drawing tool with smudge, draw, erase, and blend modes, 4 brush sizes, and realistic charcoal texture.

---

## 📖 Description

The **Charcoal Smudge** component creates an authentic charcoal drawing experience with smudge effects, textured strokes, and blending capabilities. Built with vanilla HTML, CSS, and JavaScript, it features 4 tools (Smudge, Draw, Erase, Blend), 4 brush sizes, and canvas-based rendering.

### 🎯 Core Features

- **4 tools** – Smudge (soft blending), Draw (charcoal strokes), Erase (soft erase), Blend (smooth blending)
- **4 brush sizes** – Small, Medium, Large, Extra Large with varying radius and intensity
- **Realistic charcoal texture** – irregular shapes, grain dots, and subtle warmth
- **Smudge effect** – soft, blended charcoal marks
- **Blend tool** – smooth blending of existing strokes
- **Stroke counter** – tracks number of strokes drawn
- **Interactive toolbar** – tool and size selection
- **Keyboard shortcuts** – quick tool and size switching
- **Responsive design** – adapts to different screen sizes

### 🛠️ Tools

| Tool | Icon | Description |
|------|------|-------------|
| **Smudge** | ✏️ | Soft, blended charcoal smudges |
| **Draw** | 🖊️ | Dark, textured charcoal strokes |
| **Erase** | 🧹 | Soft erasing with feathering |
| **Blend** | 🌀 | Smooth blending of existing marks |

### 📏 Sizes

| Size | Radius | Intensity |
|------|--------|-----------|
| Small | 4px | 0.3 |
| Medium | 8px | 0.5 |
| Large | 14px | 0.7 |
| Extra Large | 20px | 0.9 |

### ⌨️ Keyboard Shortcuts

| Key | Action | Key | Action |
|-----|--------|-----|--------|
| `1` | Smudge | `s` | Small Size |
| `2` | Draw | `m` | Medium Size |
| `3` | Erase | `l` | Large Size |
| `4` | Blend | `x` | Extra Large |
| `c` | Clear Canvas | | |

### ✨ Drawing Experience

When drawing:
1. **Stroke appears** – charcoal mark follows cursor with texture
2. **Tool applies** – selected tool mode affects stroke behavior
3. **Size applies** – brush size determines stroke width
4. **Counter updates** – stroke count increments
5. **Status updates** – shows current tool and state

### 💡 Why Use This Component?

- Perfect for creative tools, drawing apps, or artistic interfaces
- Authentic charcoal feel with smudge and blend capabilities
- Self-contained – no external dependencies or frameworks
- Easy to customize (tools, sizes, colors, behavior)
- Accessible with keyboard shortcuts for power users
- 4 tools and sizes provide variety and control

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, event handling, image manipulation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic strokes** – irregular shapes and grain textures
- **Tool variety** – 4 distinct drawing modes
- **Visual feedback** – status updates, counter, active tool indicators
- **Artistic atmosphere** – charcoal tones and paper texture
- **Human-readable classes** – `.tool-btn`, `.toolbar`, `.charcoal-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Tools | `tools` array | 4 tools |
| Sizes | `sizes` object | 4 sizes |
| Stroke opacity | `alpha` formula | 0.15-0.25 |
| Texture dots | `drawCharcoal()` | 3 dots per stroke |
| Canvas background | `drawBackground()` | Radial gradient |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Blank canvas with toolbar |
| **Smudge** | Soft, blended charcoal marks |
| **Draw** | Dark, textured strokes |
| **Erase** | Soft feathering erase |
| **Blend** | Smooth blending effect |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for creative tools, drawing apps, and artistic experiences.