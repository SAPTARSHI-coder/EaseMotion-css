# ⭐ Constellation Connect – Dots Connect to Form Constellations

> An interactive constellation component where stars connect to reveal 5 patterns (Ursa Major, Orion, Cassiopeia, Lyra, Random), with connect control (0-100%) and twinkling star effects.

---

## 📖 Description

The **Constellation Connect** component creates an interactive constellation experience where stars connect to reveal celestial patterns. Built with vanilla HTML, CSS, and JavaScript, it features 5 constellation patterns (Ursa Major, Orion, Cassiopeia, Lyra, Random), connect control (0-100%), and twinkling star effects.

### 🎯 Core Features

- **Constellation patterns** – 5 patterns including Ursa Major, Orion, Cassiopeia, Lyra, and Random
- **Connect control** – adjust connection progress from 0-100%
- **Twinkling stars** – stars pulse with individual brightness
- **Star counter** – tracks number of stars in constellation
- **Interactive controls** – slider, pattern buttons, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### ⭐ Constellations

| Pattern | Icon | Stars | Description |
|---------|------|-------|-------------|
| **Ursa Major** | 🐻 | 9 | Big Dipper constellation |
| **Orion** | 🏹 | 9 | Hunter constellation |
| **Cassiopeia** | 👑 | 5 | Queen constellation |
| **Lyra** | 🎵 | 7 | Lyre constellation |
| **Random** | 🎲 | 8-12 | Random generated pattern |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Slider** | Adjust Connect (0-100%) |
| **Buttons** | Constellation selection |
| **Keyboard** | `R` – Reset |

### ✨ Constellation Experience

When interacting:
1. **Stars appear** – constellation stars light up
2. **Connect applies** – lines form between stars
3. **Stars twinkle** – individual star brightness varies
4. **Pattern changes** – new constellation loads
5. **Status updates** – shows current constellation

### 💡 Why Use This Component?

- Perfect for astronomy apps, educational tools, or cosmic interfaces
- Interactive constellation learning with star connections
- Self-contained – no external dependencies or frameworks
- Easy to customize (patterns, colors, star physics)
- 5 patterns for variety
- Connect control for customization

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, particle system

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic connections** – lines form gradually between stars
- **Particle effects** – twinkling stars with glow
- **Visual feedback** – status updates, counter, controls
- **Cosmic atmosphere** – deep space colors and starfield
- **Human-readable classes** – `.constellation-controls`, `.constellation-btn`, `.constellation-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Constellations | `constellations` object | 4 + random |
| Connect range | `connectSlider` | 0-100% |
| Star count | `constellations` data | 5-12 |
| Star size | `size` | 3-6px |
| Twinkle speed | `twinkleSpeed` | 0.01-0.03 |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Stars in deep space |
| **Connecting** | Lines form between stars |
| **Connected** | Full constellation |
| **Pattern Change** | New stars and connections |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for astronomy apps, educational tools, and cosmic interfaces.