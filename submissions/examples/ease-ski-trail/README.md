# ⛷️ Ski Trail – Carve Trails in Snow

> An interactive ski trail component where you carve trails through the snow with 4 scenes (Day, Twilight, Night, Sunset), width control (1-10), and snow spray particle effects.

---

## 📖 Description

The **Ski Trail** component creates an interactive ski trail experience where you carve trails through the snow with realistic effects. Built with vanilla HTML, CSS, and JavaScript, it features 4 scenes (Day, Twilight, Night, Sunset), width control (1-10), and snow spray particle effects for a fun winter experience.

### 🎯 Core Features

- **Ski trails** – carve trails through the snow
- **4 scenes** – Day, Twilight, Night, Sunset
- **Width control** – adjust trail width from 1-10
- **Snow spray** – particle effects when carving
- **Trail counter** – tracks number of trails
- **Interactive controls** – slider, scene buttons, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🏔️ Scenes

| Scene | Icon | Colors | Description |
|-------|------|--------|-------------|
| **Day** | ☀️ | Blue/White | Bright day scene |
| **Twilight** | 🌆 | Purple | Twilight scene |
| **Night** | 🌙 | Dark Blue | Night scene |
| **Sunset** | 🌅 | Red/Orange | Sunset scene |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Click and drag to carve |
| **Touch** | Drag on mobile to carve |
| **Slider** | Adjust Width (1-10) |
| **Keyboard** | `C` – Clear |

### ✨ Ski Trail Experience

When carving:
1. **Trail forms** – carve path through snow
2. **Width applies** – controls trail thickness
3. **Scene applies** – changes background colors
4. **Snow spray** – particles burst from carving
5. **Status updates** – shows current state

### 💡 Why Use This Component?

- Perfect for winter themes, ski games, or interactive experiences
- Fun ski trail carving with realistic effects
- Self-contained – no external dependencies or frameworks
- Easy to customize (scenes, colors, width behavior)
- 4 scenes for variety
- Width control for customization

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, particle system

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic carving** – trails follow cursor naturally
- **Particle effects** – snow spray when carving
- **Visual feedback** – status updates, counter, controls
- **Winter atmosphere** – snow and scenes
- **Human-readable classes** – `.skitrail-controls`, `.scene-btn`, `.skitrail-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Scenes | `scenes` object | 4 scenes |
| Width range | `widthSlider` | 1-10 |
| Trail points | `points` array | 100 max |
| Snow spray | `snowSpray` | 2 per step |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Start** | Smooth snow |
| **Carving** | Trail appears |
| **Spray** | Snow particles |
| **Scene Change** | Colors shift |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for winter themes, ski games, and interactive experiences.