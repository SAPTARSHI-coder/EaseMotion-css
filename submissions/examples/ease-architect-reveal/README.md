# 📐 Architect Reveal – Blueprint to 3D Model

> An interactive architectural reveal component where a blueprint transforms into a 3D model with smooth animations and staggered block reveals.

---

## 📖 Description

The **Architect Reveal** component creates a dramatic transformation from a blueprint to a 3D architectural model. Built with vanilla HTML, CSS, and JavaScript, it features a blueprint layer with grid lines, a 3D model with 9 building blocks and a roof, and smooth transition animations.

### 🎯 Core Features

- **Blueprint layer** – grid background, architectural styling with lines
- **3D model** – 9 building blocks with staggered reveal and roof
- **Smooth transition** – blueprint fades out as model scales up
- **Staggered block reveal** – each block reveals with 0.05s delay
- **3D rotation** – model rotates in 3D space during reveal
- **Reveal indicator** – progress bar showing reveal percentage
- **Interactive controls** – buttons, click on display, keyboard shortcuts
- **Responsive design** – adapts to different screen sizes

### 🏗️ 3D Model Structure

| Component | Description | Reveal Order |
|-----------|-------------|--------------|
| Block 1-9 | Building blocks forming the structure | Staggered (0-0.4s delay) |
| Roof | Golden triangular roof | Last (0.4s delay) |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Click** | Click on display to toggle reveal |
| **Buttons** | Reveal 3D, Show Blueprint, Reset |
| **Keyboard** | `Space` – Toggle · `R` – Reveal · `B` – Blueprint · `X` – Reset |

### ✨ Reveal Experience

When revealing:
1. **Blueprint fades** – blueprint layer fades out with scale effect
2. **Model scales up** – 3D model scales from 0.5 to 1.0
3. **Blocks stagger** – each block reveals with 0.05s delay
4. **Model rotates** – model rotates 360° on Y-axis
5. **Roof appears** – golden roof reveals last
6. **Glow intensifies** – display glow increases with reveal progress
7. **Status updates** – shows "Blueprint unfolding..." → "Transforming to 3D..." → "3D Model Revealed!"

### 💡 Why Use This Component?

- Perfect for architectural showcases, portfolio pieces, or product reveals
- Dramatic transformation effect with professional appeal
- Self-contained – no external dependencies or frameworks
- Easy to customize (colors, blocks, timing, rotation)
- Accessible with keyboard controls for power users
- Staggered reveal creates cinematic effect

### 🛠️ Technologies Used

- **HTML5** – semantic structure
- **CSS3** – 3D transforms, gradients, grid patterns, animations
- **JavaScript (ES6)** – DOM manipulation, requestAnimationFrame, interpolation

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Smooth interpolation** – 0.06 lerp for fluid, natural transitions
- **Staggered animations** – blocks reveal with delays for cinematic effect
- **3D transforms** – model rotates in 3D space during reveal
- **Interactive feedback** – status updates, progress indicator, glow effects
- **Visual storytelling** – blueprint transforms to 3D model
- **Human-readable classes** – `.blueprint-layer`, `.model-layer`, `.model-block`, `.btn-reveal`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Block count | HTML `.model-block` elements | 9 blocks |
| Stagger delay | `delay` in loop | 0.05s |
| Interpolation speed | `updateReveal()` lerp | 0.06 |
| Model rotation | `rotation` formula | 360° |
| Block colors | CSS gradients | Blue/Purple palette |
| Roof color | CSS gradient | Gold |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Blueprint (0%)** | Blue grid, architectural styling, "BLUEPRINT" text |
| **Transforming (40-60%)** | Blueprint fading, model appearing, blocks staggering |
| **Revealed (100%)** | Full 3D model, golden roof, glowing effect |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for architectural showcases, product reveals, and professional presentations.