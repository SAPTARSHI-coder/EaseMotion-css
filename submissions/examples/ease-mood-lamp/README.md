# 💡 Mood Lamp – Color Changes Based on Interaction Intensity

> An interactive mood lamp component where color and intensity change based on proximity or touch, featuring 5 moods (Calm, Energy, Warm, Cool, Romantic), smooth color transitions, and ambient particle effects.

---

## 📖 Description

The **Mood Lamp** component creates an interactive mood lighting experience where color and intensity change based on interaction proximity. Built with vanilla HTML, CSS, and JavaScript, it features 5 moods (Calm, Energy, Warm, Cool, Romantic), smooth color transitions, and ambient particle effects for an immersive experience.

### 🎯 Core Features

- **Mood lamp** – color and intensity change with interaction proximity
- **5 moods** – Calm (😌), Energy (⚡), Warm (🔥), Cool (❄️), Romantic (💕)
- **Intensity control** – lamp brightens with proximity to cursor/touch
- **Smooth transitions** – colors transition smoothly between shades
- **Ambient particles** – 50 floating light particles
- **Interactive controls** – mood buttons, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 💡 Moods

| Mood | Icon | Colors | Description |
|------|------|--------|-------------|
| **Calm** | 😌 | Blue/Purple | Serene and peaceful |
| **Energy** | ⚡ | Gold/Yellow | Bright and vibrant |
| **Warm** | 🔥 | Orange/Red | Cozy and comforting |
| **Cool** | ❄️ | Blue/Cyan | Fresh and calming |
| **Romantic** | 💕 | Pink/Rose | Soft and dreamy |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Hover near lamp to increase intensity |
| **Touch** | Drag finger near lamp to increase intensity |
| **Buttons** | Mood selection |
| **Keyboard** | `R` – Reset |

### ✨ Mood Experience

When interacting:
1. **Lamp brightens** – intensity increases with proximity
2. **Color shifts** – color changes through mood palette
3. **Particles glow** – ambient particles brighten
4. **Mood applies** – changes color scheme
5. **Status updates** – shows current mood and intensity

### 💡 Why Use This Component?

- Perfect for mood lighting apps, ambient interfaces, or interactive experiences
- Soothing mood lamp with color transitions
- Self-contained – no external dependencies or frameworks
- Easy to customize (moods, colors, intensity behavior)
- 5 moods for variety
- Proximity-based interaction

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, particle system

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Smooth transitions** – colors transition smoothly (0.05 interpolation)
- **Particle effects** – ambient light particles
- **Visual feedback** – status updates, intensity display
- **Ambient atmosphere** – soft lighting and glow effects
- **Human-readable classes** – `.mood-controls`, `.mood-btn`, `.mood-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Moods | `moods` object | 5 moods |
| Intensity range | `targetIntensity` | 0-1 |
| Particle count | `generateParticles()` | 50 |
| Transition speed | `lerp` | 0.05 |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Lamp dim, waiting |
| **Hover** | Lamp brightens, color shifts |
| **Full Intensity** | Lamp fully lit, vibrant color |
| **Mood Change** | Color palette updates |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for mood lighting apps, ambient interfaces, and interactive experiences.