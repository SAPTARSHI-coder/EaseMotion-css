# 🍵 Tea Ceremony – Tea Steam Rises Gently

> A peaceful tea ceremony component where steam rises gently from a tea bowl with 4 tea styles (Matcha, Sencha, Hōjicha, Genmaicha) and temperature control.

---

## 📖 Description

The **Tea Ceremony** component creates a calming tea ceremony experience where steam rises gently from a tea bowl. Built with vanilla HTML, CSS, and JavaScript, it features 4 tea styles (Matcha, Sencha, Hōjicha, Genmaicha), temperature control (1-10), and organic steam particle effects.

### 🎯 Core Features

- **Gentle steam** – organic steam particles rise from the tea bowl
- **4 tea styles** – Matcha (🍵), Sencha (🌿), Hōjicha (🔥), Genmaicha (🍚)
- **Temperature control** – adjust temperature from 1-10 affecting steam intensity
- **Tea bowl** – beautifully rendered tea bowl with liquid and reflections
- **Steam counter** – tracks number of steam particles
- **Interactive controls** – style buttons, temperature slider, keyboard shortcuts
- **Calming atmosphere** – warm colors and gentle motion
- **Responsive design** – adapts to different screen sizes

### 🍵 Tea Styles

| Style | Icon | Color | Description |
|-------|------|-------|-------------|
| **Matcha** | 🍵 | Green | Traditional powdered green tea |
| **Sencha** | 🌿 | Light Green | Steeped green tea |
| **Hōjicha** | 🔥 | Brown | Roasted green tea |
| **Genmaicha** | 🍚 | Golden | Green tea with roasted rice |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Sliders** | Adjust Temperature (1-10) |
| **Buttons** | Style selection |
| **Keyboard** | `R` – Reset |

### ✨ Tea Experience

When interacting:
1. **Steam rises** – organic particles rise from the bowl
2. **Temperature applies** – controls steam intensity and speed
3. **Style applies** – changes tea and steam colors
4. **Counter updates** – steam count in real-time
5. **Status updates** – shows current state

### 💡 Why Use This Component?

- Perfect for meditation apps, relaxation tools, or calming interfaces
- Peaceful tea ceremony with gentle steam effects
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, styles, temperature behavior)
- 4 tea styles for variety
- Temperature control for customization

### 🛠️ Technologies Used

- **HTML5** – semantic structure with Canvas
- **CSS3** – gradients, backdrop-filter, transforms
- **JavaScript (ES6)** – Canvas API, requestAnimationFrame, particle system

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Organic motion** – steam rises with gentle, natural movement
- **Particle effects** – soft, glowing steam particles
- **Visual feedback** – status updates, counter, controls
- **Calming atmosphere** – warm colors and gentle motion
- **Human-readable classes** – `.tea-controls`, `.style-btn`, `.tea-text`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Tea styles | `teaStyles` object | 4 styles |
| Temperature range | `tempSlider` | 1-10 |
| Steam speed | `SteamParticle.speed` | 0.2 + temp × 0.06 |
| Steam count | `createSteam()` | 1 + temp × 2 |
| Particle size | `SteamParticle.size` | 2-6px |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Idle** | Tea bowl with gentle steam |
| **Warm** | Moderate steam rising |
| **Hot** | Vigorous steam rising |
| **Style Change** | Tea and steam colors update |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for meditation apps, relaxation tools, and calming interfaces.