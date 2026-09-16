# 📡 Ping Effect – Radar Pulse

> An interactive radar ping component with expanding rings, multiple modes, and dynamic visual feedback.

---

## 📖 Description

The **Ping Effect** component creates a dynamic radar ping experience where clicking triggers expanding concentric rings with pulse animations. Built with vanilla HTML, CSS, and JavaScript, it features multiple ping modes, visual feedback, and interactive controls.

### 🎯 Core Features

- **Radar ping animation** – expanding rings radiate outward from click point
- **Three ping modes** – Standard (1 ring), Double (2 rings), Triple (3 rings)
- **Dynamic positioning** – ping originates from click position
- **Visual feedback** – center dot pulses, icon pops, status updates
- **Ping counter** – tracks total pings
- **Interactive controls** – buttons and keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🎮 Ping Modes

| Mode | Rings | Icon | Color | Description |
|------|-------|------|-------|-------------|
| **Standard** | 1 | 📡 | #6366f1 (Blue) | Single pulse |
| **Double** | 2 | 📡📡 | #8b5cf6 (Purple) | Double pulse |
| **Triple** | 3 | 📡📡📡 | #ec4899 (Pink) | Triple pulse |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Click** | Click anywhere on the radar to ping |
| **Buttons** | Ping!, Toggle Mode, Reset |
| **Keyboard** | `Space` – Ping · `M` – Mode · `R` – Reset |

### ✨ Ping Experience

When you ping:
1. **Ring expansion** – 1-3 rings expand outward from click point
2. **Center pulse** – dot pulses with glow effect
3. **Icon pop** – ping icon appears with bounce animation
4. **Status update** – shows active ping state with mode
5. **Counter increment** – tracks total pings
6. **Color coding** – rings match current mode color

### 💡 Why Use This Component?

- Perfect for radar systems, sonar displays, or location pinging
- Engaging visual feedback makes interactions feel responsive
- Self-contained – no external dependencies or frameworks
- Easy to customize (modes, colors, ring count, animation timing)
- Accessible with keyboard controls for power users
- Multiple modes add variety and functionality

### 🛠️ Technologies Used

- **HTML5** – semantic structure
- **CSS3** – keyframe animations, transitions, gradients, transforms
- **JavaScript (ES6)** – DOM manipulation, event handling, state management

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Radar animations** – `@keyframes ping-expand` creates expanding ring effect
- **Pulse animations** – `@keyframes dot-pulse` for center feedback
- **Pop animations** – `@keyframes icon-pop` for icon appearance
- **Interactive feedback** – status updates, counter, and visual cues
- **Color psychology** – distinct colors for each mode
- **Human-readable classes** – `.ping-ring-effect`, `.ping-center`, `.btn-ping`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Ping modes | `modes` object | 3 modes |
| Rings per mode | `rings` property | 1-3 |
| Animation duration | `@keyframes ping-expand` | 1.5s |
| Ring colors | `color` property | Blue/Purple/Pink |
| Delay between rings | `setTimeout` delay | 300ms |
| Ring size | `baseSize` variable | 200px |
| Dot pulse duration | `@keyframes dot-pulse` | 0.3s |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Ready** | Static radar with concentric rings, centered dot |
| **Pinging** | Rings expand, dot pulses, icon appears |
| **Mode change** | Ring colors update, status shows new mode |
| **Reset** | Counter resets, rings clear, returns to ready |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for radar systems, sonar displays, and interactive ping effects.