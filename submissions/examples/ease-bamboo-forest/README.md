# 🎋 Bamboo Forest – Bamboo Sways and Rustles

> An immersive bamboo forest component where bamboo stalks sway in the wind with organic motion, 6 bamboo styles, and real-time wind and density controls.

---

## 📖 Description

The **Bamboo Forest** component creates an immersive, meditative bamboo grove experience where bamboo stalks sway naturally in the wind with organic motion. Built with vanilla HTML, CSS, and JavaScript, it features 6 bamboo styles (Green, Golden, Black, Tiger, Dragon, Moonlight), wind control (0-10), density control (1-10), and real-time animation.

### 🎯 Core Features

- **Swaying bamboo** – bamboo stalks sway with organic, wind-responsive motion
- **6 bamboo styles** – Green (🎋), Golden (🌾), Black (⚫), Tiger (🐅), Dragon (🐉), Moonlight (🌙)
- **Wind control** – adjust wind intensity from 0-10 affecting sway amplitude
- **Density control** – adjust forest density from 1-10 (8-30 stalks)
- **Realistic leaves** – bamboo leaves rustle and sway with wind
- **Stalk counter** – tracks number of bamboo stalks in the forest
- **Organic motion** – each stalk has unique sway speed and phase
- **Mist effects** – atmospheric mist layers for depth
- **Responsive design** – adapts to different screen sizes

### 🌿 Bamboo Styles

| Style | Color | Description |
|-------|-------|-------------|
| **Green** | 🎋 | Classic green bamboo |
| **Golden** | 🌾 | Warm golden bamboo |
| **Black** | ⚫ | Dark bamboo with light highlights |
| **Tiger** | 🐅 | Golden with striped markings |
| **Dragon** | 🐉 | Deep green with lighter accents |
| **Moonlight** | 🌙 | Cool blue-gray bamboo |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Sliders** | Adjust Wind (0-10) and Density (1-10) |
| **Button** | Reset Forest |
| **Keyboard** | `R` – Reset |

### ✨ Bamboo Experience

When interacting:
1. **Bamboo sways** – stalks move organically with wind
2. **Leaves rustle** – leaves sway and rustle with stalks
3. **Wind applies** – controls sway amplitude
4. **Density applies** – controls number of stalks
5. **Atmosphere** – mist and depth effects create immersion

### 💡 Why Use This Component?

- Perfect for meditation apps, nature experiences, or calming interfaces
- Immersive bamboo forest with organic motion
- Self-contained – no external dependencies or frameworks
- Easy to customize (styles, colors, motion behavior)
- 6 bamboo styles for variety
- Wind and density controls for customization

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, object-oriented design

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic motion** – bamboo sways with natural, wind-responsive physics
- **Atmospheric depth** – mist layers and depth effects
- **Visual feedback** – status updates, stalk counter, controls
- **Natural atmosphere** – green tones and forest ambiance
- **Human-readable classes** – `.bamboo-controls`, `.bamboo-text`, `.control-slider`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Styles | `bambooStyles` array | 6 styles |
| Wind range | `windSlider` | 0-10 |
| Density range | `densitySlider` | 1-10 |
| Stalk count | `generateForest()` | 8-30 |
| Sway speed | `BambooStalk.speed` | 0.5-1.0 |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Peaceful bamboo grove |
| **Swaying** | Bamboo moves with wind |
| **High Wind** | Strong swaying and rustling |
| **Dense Forest** | Many bamboo stalks |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for meditation apps, nature experiences, and calming interfaces.