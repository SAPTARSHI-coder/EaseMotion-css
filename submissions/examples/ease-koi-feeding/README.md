# 🐟 Koi Feeding – Koi Fish Gather When Clicked

> An interactive koi pond component where colorful koi fish gracefully swim and gather when fed, with 8 unique koi colors, realistic swimming physics, and food particle effects.

---

## 📖 Description

The **Koi Feeding** component creates a peaceful koi pond experience where colorful koi fish swim gracefully and gather when fed. Built with vanilla HTML, CSS, and JavaScript, it features 8 unique koi colors, realistic swimming physics, food particle effects, and interactive feeding mechanics.

### 🎯 Core Features

- **8 unique koi** – each with distinct colors (orange, red, gold, white, pink, etc.)
- **Graceful swimming** – realistic fish movement with tail animation
- **Feeding behavior** – koi gather when you click the pond
- **Food particles** – food scatters and attracts nearby koi
- **Feeding indicator** – visual feedback when feeding
- **Koi counter** – tracks number of koi in the pond
- **Interactive controls** – click pond, feed button, keyboard shortcuts
- **Peaceful atmosphere** – water ripples and lily pads
- **Responsive design** – adapts to different screen sizes

### 🐟 Koi Colors

| Color | Body | Description |
|-------|------|-------------|
| Orange | #ff6b35 | Vibrant orange koi |
| Red | #ff3333 | Bright red koi |
| Gold | #ffd700 | Golden koi |
| White | #ffffff | Pure white koi |
| Pink | #ff69b4 | Soft pink koi |
| Coral | #ff4500 | Deep coral koi |
| Amber | #ffa500 | Warm amber koi |
| Rose | #ff1493 | Rose pink koi |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Click** | Click on pond to feed koi |
| **Buttons** | Feed, Reset |
| **Keyboard** | `Space` – Feed · `R` – Reset |

### ✨ Feeding Experience

When feeding:
1. **Food scatters** – food particles appear at click point
2. **Koi gather** – nearby koi swim toward the food
3. **Feeding glow** – koi glow when feeding
4. **Indicator appears** – "🍚 Feeding the koi!" message
5. **Status updates** – shows feeding state

### 💡 Why Use This Component?

- Perfect for relaxation apps, meditation tools, or calming interfaces
- Peaceful koi pond with realistic swimming behavior
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, koi count, behavior)
- Interactive feeding mechanic is engaging and relaxing
- 8 unique koi colors for variety

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, object-oriented design

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Realistic swimming** – koi move with smooth, organic motion
- **Tail animation** – fluid tail wagging for realism
- **Visual feedback** – feeding indicator, status updates, glow effects
- **Peaceful atmosphere** – water effects and gentle motion
- **Human-readable classes** – `.koi-display`, `.feeding-indicator`, `.koi-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Koi colors | `koiColors` array | 8 colors |
| Koi count | `initKoi()` | 8 |
| Koi speed | `KoiFish.speed` | 0.5-1.3 |
| Food particles | `createFood()` | 20 |
| Feed range | `dist < 200` | 200px |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Peaceful pond with swimming koi |
| **Feeding** | Food scatters, koi gather |
| **Eating** | Koi glow and feed |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for relaxation apps, meditation tools, and calming interfaces.