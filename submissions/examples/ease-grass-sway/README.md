# 🌿 Grass Sway – Grass Blades Sway in Wind Direction

> An interactive grass sway component where grass blades sway in wind direction with 4 seasons (Spring, Summer, Autumn, Winter), wind control (0-100%), and density control (1-10).

---

## 📖 Description

The **Grass Sway** component creates an immersive grass sway experience where grass blades sway in wind direction with realistic physics. Built with vanilla HTML, CSS, and JavaScript, it features 4 seasons (Spring, Summer, Autumn, Winter), wind control (0-100%), and density control (1-10) for a calming nature experience.

### 🎯 Core Features

- **Grass sway** – grass blades sway with wind direction
- **4 seasons** – Spring, Summer, Autumn, Winter with unique colors
- **Wind control** – adjust wind from 0-100%
- **Density control** – adjust grass density from 1-10
- **Realistic physics** – blades bend and sway organically
- **Blade counter** – tracks number of grass blades
- **Interactive controls** – sliders, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🌿 Seasons

| Season | Color | Description |
|--------|-------|-------------|
| **Spring** | Green | Fresh green grass |
| **Summer** | Dark Green | Lush summer grass |
| **Autumn** | Orange | Golden autumn grass |
| **Winter** | Gray | Pale winter grass |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Sliders** | Adjust Wind (0-100%) and Density (1-10) |
| **Button** | Reset (cycles seasons) |
| **Keyboard** | `R` – Reset |

### ✨ Grass Experience

When interacting:
1. **Grass sways** – blades bend with wind direction
2. **Wind applies** – controls sway intensity
3. **Density applies** – controls blade count
4. **Seasons change** – colors shift on reset
5. **Status updates** – shows current state

### 💡 Why Use This Component?

- Perfect for nature scenes, meditation apps, or calming interfaces
- Realistic grass sway with wind physics
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, wind behavior, density)
- 4 seasons for variety
- Wind and density controls for customization

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, physics simulation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic motion** – grass sways naturally
- **Seasonal colors** – dynamic color changes
- **Visual feedback** – status updates, counter, controls
- **Calming atmosphere** – nature-inspired visuals
- **Human-readable classes** – `.grass-controls`, `.grass-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Seasons | `seasons` array | 4 seasons |
| Wind range | `windSlider` | 0-100% |
| Density range | `densitySlider` | 1-10 |
| Blade count | `generateGrass()` | 100-280 |
| Blade height | `height` | 20-60px |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Calm** | Grass standing still |
| **Breeze** | Gentle swaying |
| **Windy** | Strong bending |
| **Season Change** | Colors shift |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for nature scenes, meditation apps, and calming interfaces.