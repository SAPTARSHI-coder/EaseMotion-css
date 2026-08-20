# 🌀 Tilt Shift – Perspective Tilt & Shift

> An interactive 3D tilt component with perspective shifting, real-time tracking, and device orientation support.

---

## 📖 Description

The **Tilt Shift** component creates an immersive 3D perspective experience where the content tilts and shifts based on mouse movement, touch, or device orientation. Built with vanilla HTML, CSS, and JavaScript, it features real-time tracking, sensitivity controls, and auto-animation.

### 🎯 Core Features

- **3D perspective tilt** – content rotates in 3D space based on cursor position
- **Shift effect** – content translates in Z-axis for depth
- **Real-time indicators** – visual bars showing tilt X, tilt Y, and shift values
- **Device orientation support** – works with mobile device gyroscope
- **Sensitivity control** – 4 sensitivity levels (Low, Medium, High, Extreme)
- **Auto-animate mode** – smooth sinusoidal motion for demonstration
- **Touch support** – works on mobile devices
- **Responsive design** – adapts to different screen sizes

### 🎮 Sensitivity Modes

| Mode | Multiplier | Description |
|------|------------|-------------|
| **Low** | 0.5 | Subtle tilt effect |
| **Medium** | 1.0 | Balanced tilt effect |
| **High** | 1.8 | Pronounced tilt effect |
| **Extreme** | 3.0 | Dramatic tilt effect |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Mouse** | Move mouse over the display to tilt |
| **Touch** | Drag finger on mobile to tilt |
| **Device** | Tilt your phone/tablet |
| **Buttons** | Reset, Toggle Sensitivity, Auto Animate |
| **Keyboard** | `R` – Reset · `S` – Sensitivity · `A` – Auto Animate |

### ✨ Tilt Experience

When you interact:
1. **Content tilts** – rotates in 3D based on cursor/touch position
2. **Shift effect** – content moves in Z-axis for depth perception
3. **Indicators update** – real-time bars show tilt X, tilt Y, and shift
4. **Glow effect** – display glow intensifies with tilt angle
5. **Status updates** – shows current interaction state

### 💡 Why Use This Component?

- Perfect for interactive cards, product showcases, or immersive UI
- Engaging 3D feedback makes interactions feel responsive
- Self-contained – no external dependencies or frameworks
- Easy to customize (sensitivity, tilt range, colors)
- Accessible with keyboard controls for power users
- Device orientation support for mobile experiences

### 🛠️ Technologies Used

- **HTML5** – semantic structure
- **CSS3** – 3D transforms, gradients, backdrop-filter, animations
- **JavaScript (ES6)** – DOM manipulation, device orientation API, requestAnimationFrame

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **3D transforms** – `rotateX/Y` and `translateZ` create realistic perspective
- **Real-time tracking** – smooth 60fps updates with `requestAnimationFrame`
- **Interactive feedback** – visual indicators, glow effects, status updates
- **Device integration** – leverages device orientation for mobile experiences
- **Smooth animations** – auto-animate mode with sinusoidal motion
- **Human-readable classes** – `.tilt-display`, `.tilt-content`, `.tilt-card`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Max tilt angle | `maxTilt` variable | 25° |
| Max shift distance | `maxShift` variable | 30px |
| Sensitivity levels | `sensitivities` array | 4 levels |
| Auto-animate speed | `animate()` function | 0.02 increment |
| Glow intensity | `updateTilt()` | 40-100px |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Default** | Flat card centered, no tilt |
| **Tilting** | Card rotates in 3D, indicators move |
| **Shifting** | Card translates in Z-axis |
| **Auto Animate** | Smooth sinusoidal motion |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for interactive 3D experiences, product showcases, and immersive interfaces.