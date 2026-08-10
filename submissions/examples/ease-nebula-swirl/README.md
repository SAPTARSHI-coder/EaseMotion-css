# 🌌 Nebula Swirl – Cosmic Nebula Swirls with Cursor Movement

> An interactive cosmic nebula component where vibrant particles swirl and dance with cursor movement, featuring 4 color palettes, swirl control (0-100%), and density control (1-10).

---

## 📖 Description

The **Nebula Swirl** component creates a mesmerizing cosmic nebula experience where vibrant particles swirl and dance with cursor movement. Built with vanilla HTML, CSS, and JavaScript, it features 4 color palettes (Cosmic, Aurora, Galaxy, Sunset), swirl control (0-100%), density control (1-10), and particle physics for an immersive celestial experience.

### 🎯 Core Features

- **Cosmic nebula** – vibrant particles swirl with cursor movement
- **4 color palettes** – Cosmic (purple/blue/pink), Aurora (green/blue/purple), Galaxy (indigo/pink/gold), Sunset (red/orange/gold)
- **Swirl control** – adjust swirl intensity from 0-100%
- **Density control** – adjust particle density from 1-10 (60-420 particles)
- **Particle physics** – orbit, twinkle, trails, and glow effects
- **Particle counter** – tracks number of particles in real-time
- **Interactive controls** – sliders, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🎨 Color Palettes

| Palette | Colors | Description |
|---------|--------|-------------|
| **Cosmic** | Purple/Blue/Pink/Green | Classic cosmic nebula |
| **Aurora** | Green/Blue/Purple/Pink/Gold | Dancing aurora borealis |
| **Galaxy** | Indigo/Pink/Gold/Green | Deep galaxy colors |
| **Sunset** | Red/Orange/Gold/Pink/Purple | Warm sunset nebula |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Move cursor over display to swirl nebula |
| **Touch** | Drag on mobile to swirl nebula |
| **Sliders** | Adjust Swirl (0-100%) and Density (1-10) |
| **Button** | Reset (cycles palette) |
| **Keyboard** | `R` – Reset (cycles palette) |

### ✨ Nebula Experience

When interacting:
1. **Particles follow** – particles orbit and follow cursor
2. **Swirl applies** – controls orbit radius and speed
3. **Density applies** – controls particle count
4. **Colors shift** – palette cycles on reset
5. **Status updates** – shows interaction state

### 💡 Why Use This Component?

- Perfect for meditation apps, relaxation tools, or calming interfaces
- Mesmerizing cosmic nebula with vibrant colors
- Self-contained – no external dependencies or frameworks
- Easy to customize (palettes, colors, physics)
- 4 color palettes for variety
- Swirl and density controls for customization

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, particle system

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic motion** – particles swirl with natural movement
- **Particle effects** – glowing, twinkling particles with trails
- **Visual feedback** – status updates, counter, controls
- **Cosmic atmosphere** – space colors and starry background
- **Human-readable classes** – `.nebula-controls`, `.nebula-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Palettes | `nebulaPalettes` array | 4 palettes |
| Swirl range | `swirlSlider` | 0-100% |
| Density range | `densitySlider` | 1-10 |
| Particle count | `densitySlider` | 60-420 |
| Particle size | `size` | 1-4px |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Particles orbiting center |
| **Moving** | Particles follow cursor |
| **Swirling** | Enhanced orbit and flow |
| **Palette Change** | Colors shift instantly |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for meditation apps, relaxation tools, and cosmic experiences.