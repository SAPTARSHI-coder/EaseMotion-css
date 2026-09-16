# 🌙 Moon Gazing – Moon Phase Changes with Interaction

> An interactive moon gazing component where the moon phase changes with interaction, featuring 8 lunar phases, glow control (0-100%), and a cycling animation.

---

## 📖 Description

The **Moon Gazing** component creates a serene moon gazing experience where the moon phase changes through all 8 lunar phases with interactive controls. Built with vanilla HTML, CSS, and JavaScript, it features 8 moon phases, glow control (0-100%), and a cycling animation.

### 🎯 Core Features

- **8 moon phases** – New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon, Waning Gibbous, Last Quarter, Waning Crescent
- **Phase control** – adjust phase from 0-100% with slider
- **Glow control** – adjust moon glow from 0-100%
- **Cycle animation** – auto-cycle through all phases
- **Moon details** – craters, highlights, and realistic texture
- **Night sky** – stars and twinkling effects
- **Interactive controls** – sliders, buttons, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🌙 Moon Phases

| Phase | Icon | Range |
|-------|------|-------|
| New Moon | 🌑 | 0-5% |
| Waxing Crescent | 🌒 | 5-20% |
| First Quarter | 🌓 | 20-35% |
| Waxing Gibbous | 🌔 | 35-50% |
| Full Moon | 🌕 | 50-55% |
| Waning Gibbous | 🌖 | 55-70% |
| Last Quarter | 🌗 | 70-85% |
| Waning Crescent | 🌘 | 85-100% |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Sliders** | Adjust Phase (0-100%) and Glow (0-100%) |
| **Buttons** | Cycle, Reset |
| **Keyboard** | `Space` – Cycle · `R` – Reset |

### ✨ Moon Gazing Experience

When interacting:
1. **Phase changes** – moon phase updates with slider
2. **Glow applies** – controls moon glow intensity
3. **Cycle mode** – auto-cycles through phases
4. **Stars twinkle** – background stars add atmosphere
5. **Status updates** – shows current phase

### 💡 Why Use This Component?

- Perfect for meditation apps, spiritual tools, or calming interfaces
- Serene moon gazing experience with phase changes
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, phases, glow behavior)
- 8 moon phases for variety
- Glow control for atmosphere

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, animation system

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Realistic moon** – craters, highlights, and shadows
- **Phase transitions** – smooth shadow movement
- **Visual feedback** – status updates, counter, controls
- **Serene atmosphere** – night sky and gentle glow
- **Human-readable classes** – `.moon-controls`, `.moon-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Moon phases | `phases` array | 8 phases |
| Phase range | `phaseSlider` | 0-100% |
| Glow range | `glowSlider` | 0-100% |
| Moon radius | `radius` formula | 30% of canvas |
| Crater count | `craters` array | 8 craters |

### 📸 Preview

| State | Visual |
|-------|--------|
| **New Moon** | Dark moon, barely visible |
| **Crescent** | Thin crescent shape |
| **Quarter** | Half illuminated |
| **Full Moon** | Fully bright, glowing |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for meditation apps, spiritual tools, and calming interfaces.