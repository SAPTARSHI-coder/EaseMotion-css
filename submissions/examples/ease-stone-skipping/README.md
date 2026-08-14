# 🪨 Stone Skipping – Stones Skip on Water Surface

> An interactive stone skipping component where stones skip across the water surface with realistic physics, ripples, splashes, and 3-8 skips per throw.

---

## 📖 Description

The **Stone Skipping** component creates a realistic stone skipping experience where stones bounce across the water surface with physics-based motion. Built with vanilla HTML, CSS, and JavaScript, it features power and angle controls, ripple effects, splash particles, and interactive controls.

### 🎯 Core Features

- **Stone skipping** – stones bounce across water with realistic physics
- **Power control** – adjust power from 1-10 affecting skip count and speed
- **Angle control** – adjust angle from 1-10 affecting trajectory
- **Ripples** – expanding rings on each skip
- **Splash particles** – water splashes on impact
- **Skip counter** – tracks total skips
- **Interactive controls** – click water, buttons, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 💪 Controls

| Control | Range | Effect |
|---------|-------|--------|
| **Power** | 1-10 | Affects skip count (3-8) and speed |
| **Angle** | 1-10 | Affects trajectory angle |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Click** | Click on water to skip a stone |
| **Buttons** | Skip Stone, Reset |
| **Keyboard** | `Space` – Skip · `R` – Reset |

### ✨ Skipping Experience

When skipping:
1. **Stone launches** – stone flies across the water
2. **Skips** – stone bounces 3-8 times
3. **Ripples** – rings expand on each skip
4. **Splashes** – water particles burst on impact
5. **Counter updates** – total skips increments
6. **Status updates** – shows skip count

### 💡 Why Use This Component?

- Perfect for games, interactive experiences, or physics demos
- Realistic stone skipping with satisfying effects
- Self-contained – no external dependencies or frameworks
- Easy to customize (physics, effects, controls)
- Power and angle controls for strategic play

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, physics simulation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Realistic physics** – gravity, bounce, and trajectory
- **Particle effects** – splashes and ripples
- **Visual feedback** – status updates, counter, controls
- **Interactive experience** – satisfying skipping mechanics
- **Human-readable classes** – `.stone-controls`, `.stone-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Power range | `powerSlider` | 1-10 |
| Angle range | `angleSlider` | 1-10 |
| Skip count | `maxSkips` | 3-8 |
| Ripple count | `createRipple()` | 1 per skip |
| Splash particles | `createSplash()` | 8-16 |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Calm water surface |