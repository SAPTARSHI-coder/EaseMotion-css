# 🌱 Succulent Grow – Succulent Plumps Up on Interaction

> An interactive succulent component where the plant plumps up when watered with 4 types (Echeveria, Jade, Aloe, Haworthia), water control (0-100%), and particle effects.

---

## 📖 Description

The **Succulent Grow** component creates an interactive succulent experience where the plant plumps up when watered. Built with vanilla HTML, CSS, and JavaScript, it features 4 succulent types (Echeveria, Jade, Aloe, Haworthia), water control (0-100%), and water particle effects for a satisfying gardening experience.

### 🎯 Core Features

- **Succulent growth** – plant plumps up when watered
- **4 types** – Echeveria, Jade, Aloe, Haworthia with unique petal shapes
- **Water control** – adjust water from 0-100%
- **Water particles** – splash effects when watering
- **Plumpness display** – shows current plumpness level
- **Interactive controls** – slider, buttons, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🌱 Succulent Types

| Type | Icon | Petal Shape | Colors |
|------|------|-------------|--------|
| **Echeveria** | 🌿 | Round | Green shades |
| **Jade** | 🪴 | Oval | Jade green |
| **Aloe** | 🌵 | Pointed | Aloe green |
| **Haworthia** | ⭐ | Star | Purple shades |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Slider** | Adjust Water (0-100%) |
| **Buttons** | Water, Reset |
| **Keyboard** | `Space` or `W` – Water · `R` – Reset |

### ✨ Succulent Experience

When watering:
1. **Succulent plumps** – plant grows and fills out
2. **Water particles** – splash effects appear
3. **Plumpness increases** – level updates
4. **Type applies** – changes succulent shape
5. **Status updates** – shows current state

### 💡 Why Use This Component?

- Perfect for gardening apps, plant simulators, or calming interfaces
- Satisfying succulent growth with water effects
- Self-contained – no external dependencies or frameworks
- Easy to customize (types, colors, growth behavior)
- 4 types for variety
- Water control for customization

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, particle system

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Smooth growth** – plumpness transitions smoothly
- **Particle effects** – water splash particles
- **Visual feedback** – status updates, plumpness display, controls
- **Calming atmosphere** – plant growth and water effects
- **Human-readable classes** – `.succulent-controls`, `.type-btn`, `.succulent-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Types | `succulentTypes` object | 4 types |
| Water range | `waterSlider` | 0-100% |
| Particle count | `createWaterBurst()` | 30 |
| Growth speed | `lerp` | 0.06 |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Dry** | Small, shriveled succulent |
| **Watering** | Splash effects |
| **Plump** | Full, healthy succulent |
| **Type Change** | Shape and colors shift |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for gardening apps, plant simulators, and calming interfaces.