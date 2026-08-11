# ⛏️ Mineral Veins – Metallic Veins Spread Through Rock

> An interactive mineral vein component where metallic veins spread through rock with 5 types (Gold, Silver, Copper, Iron, Crystal), growth control (0-100%), and organic vein branching.

---

## 📖 Description

The **Mineral Veins** component creates an interactive geological experience where metallic veins spread through rock with organic branching. Built with vanilla HTML, CSS, and JavaScript, it features 5 mineral types (Gold, Silver, Copper, Iron, Crystal), growth control (0-100%), and organic vein branching for a satisfying geological experience.

### 🎯 Core Features

- **Mineral veins** – metallic veins spread through rock with organic branching
- **5 mineral types** – Gold, Silver, Copper, Iron, Crystal
- **Growth control** – adjust growth from 0-100%
- **Organic branching** – veins split and branch naturally
- **Vein counter** – tracks number of vein segments
- **Interactive controls** – slider, mineral buttons, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### ⛏️ Mineral Types

| Type | Icon | Colors | Description |
|------|------|--------|-------------|
| **Gold** | 🌟 | Gold/Yellow | Golden mineral veins |
| **Silver** | ⚪ | Silver/White | Silver mineral veins |
| **Copper** | 🟠 | Orange/Brown | Copper mineral veins |
| **Iron** | ⚫ | Gray/Dark | Iron mineral veins |
| **Crystal** | 💎 | Purple/Blue | Crystal mineral veins |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Slider** | Adjust Growth (0-100%) |
| **Buttons** | Grow (+15%), Reset |
| **Keyboard** | `G` – Grow · `R` – Reset |

### ✨ Vein Experience

When growing:
1. **Veins spread** – metallic veins grow through rock
2. **Growth applies** – controls vein density
3. **Mineral applies** – changes vein color
4. **Veins branch** – organic branching patterns
5. **Status updates** – shows current state

### 💡 Why Use This Component?

- Perfect for geology apps, mining games, or natural interfaces
- Organic vein growth with metallic colors
- Self-contained – no external dependencies or frameworks
- Easy to customize (minerals, colors, growth behavior)
- 5 mineral types for variety
- Growth control for customization

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, recursive generation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic growth** – veins spread naturally
- **Branching patterns** – realistic vein networks
- **Visual feedback** – status updates, counter, controls
- **Geological atmosphere** – rock texture and mineral colors
- **Human-readable classes** – `.mineral-controls`, `.mineral-btn`, `.mineral-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Minerals | `minerals` object | 5 types |
| Growth range | `growthSlider` | 0-100% |
| Vein depth | `maxDepth` | 3-5 |
| Branch count | `branches` | 2-4 |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Start** | Few initial veins |
| **Growing** | Veins branching |
| **Full** | Dense vein network |
| **Mineral Change** | Vein colors shift |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for geology apps, mining games, and natural interfaces.