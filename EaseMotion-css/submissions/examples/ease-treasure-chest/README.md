# 📦 Treasure Chest – Sparkle on Click

> An interactive treasure chest with 3D opening animation, sparkle effects, and satisfying visual feedback.

---

## 📖 Description

The **Treasure Chest** component creates an engaging, interactive experience with a 3D chest that opens with a satisfying animation and burst of sparkles. Built with vanilla HTML, CSS, and JavaScript, it features realistic 3D perspective, particle effects, and smooth interactions.

### 🎯 Core Features

- **3D chest design** – realistic perspective with lid, body, locks, and handles
- **Smooth opening animation** – lid rotates open with elastic bounce effect
- **Sparkle burst** – 30-40 golden sparkles explode outward on open
- **Glow effect** – pulsing golden aura appears when chest is open
- **Multiple interaction methods** – click the chest or use buttons
- **Keyboard shortcuts** – `O` to open, `C` to close, `R` to reset
- **Status feedback** – displays current chest state
- **Responsive design** – adapts to different screen sizes

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Click** | Click the chest to toggle open/close |
| **Buttons** | Open Chest, Close Chest, Reset |
| **Keyboard** | `O` – Open · `C` – Close · `R` – Reset |

### ✨ Sparkle System

When the chest opens:
- **30-40 sparkles** burst outward in random directions
- **Golden colors** – various shades of gold and yellow
- **Two shapes** – star-shaped and circular sparkles
- **Random sizes** – 4-12px in diameter
- **Smooth animation** – sparkles fly outward and fade
- **Staggered timing** – sparkles appear in waves for natural effect

### 💡 Why Use This Component?

- Perfect for game interfaces, treasure systems, or reward mechanics
- Engaging visual feedback makes interactions feel magical
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, sparkle count, animation timing)
- Accessible with keyboard controls for power users
- 3D perspective adds depth and realism

### 🛠️ Technologies Used

- **HTML5** – semantic structure
- **CSS3** – 3D transforms, keyframe animations, gradients, transitions
- **JavaScript (ES6)** – DOM manipulation, event handling, particle generation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:
- **3D transforms** – realistic perspective with `perspective` and `rotateX`
- **Elastic easing** – `cubic-bezier(0.34, 1.56, 0.64, 1)` for bouncy lid opening
- **Particle effects** – sparkles with randomized trajectories
- **Glow effects** – pulsing radial gradient for magical feel
- **Interactive feedback** – hover scale, click states, and status updates
- **Human-readable classes** – `.chest`, `.chest-lid`, `.sparkle`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Sparkle count | `createSparkleBurst()` | 30-40 |
| Sparkle size | `createSparkle()` | 4-12px |
| Sparkle colors | `colors` array | Gold/yellow palette |
| Animation duration | `@keyframes sparkle-fly` | 1s |
| Lid open angle | `rotateX(-110deg)` | -110deg |
| Glow pulse | `@keyframes glow-pulse` | 1.5s |

### 📸 Preview

| State | Visual |
|-------|--------|
| Closed | 3D chest with lid closed, golden accents |
| Opening | Lid rotates up with sparkle burst |
| Open | Lid fully open, glow pulsing, status updated |
| Closed via button | Smooth close animation |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for game interfaces, reward systems, and interactive experiences.