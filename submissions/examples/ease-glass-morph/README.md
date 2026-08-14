# 🪟 Glass Morph – Glass Morphs Between Opaque and Clear

An interactive glass morph effect where glass smoothly transitions between opaque and clear states with realistic blur, reflection, distortion, and shine effects. Click or use controls to morph the glass from frosted opacity to crystal clarity, with adjustable blur intensity and tint. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Smooth glass morphing** – Transitions between opaque and clear states
- **Realistic glass effects** – Blur, reflection, distortion, shine, and tint
- **Interactive control** – Click to toggle, or use buttons and sliders
- **Adjustable parameters** – Clarity (0-100%), blur intensity (0-100%), glass tint (0-100%)
- **Multiple controls** – Clear, Opaque, Toggle, and Reset buttons
- **Keyboard shortcuts** – C (Clear), O (Opaque), T (Toggle), R (Reset), Space (Toggle)
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the glass:
   - **Click** the glass to toggle between opaque and clear
   - Click **Clear** to make the glass transparent
   - Click **Opaque** to make the glass opaque
   - Click **Toggle** to switch between states
   - Click **Reset** to restore default settings
3. Adjust the sliders:
   - **Clarity** – Transparency level (0-100%)
   - **Blur Intensity** – Amount of blur (0-100%)
   - **Glass Tint** – Color tint intensity (0-100%)
4. Use **keyboard shortcuts**:
   - `C` – Clear glass
   - `O` – Opaque glass
   - `T` – Toggle
   - `R` – Reset
   - `Space` – Toggle

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, glass effects, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Glass rendering** – CSS backdrop-filter with blur creates the glass effect
- **Morphing** – Smooth interpolation between opaque and clear states
- **Glass effects** – Reflection, distortion pattern, shine, and tint
- **Visual feedback** – Status messages, clarity indicator, label changes
- **Animation loop** – Uses `requestAnimationFrame` for smooth transitions

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Clarity | Transparency level (0-100%) | 0% |
| Blur Intensity | Amount of blur (0-100%) | 50% |
| Glass Tint | Color tint intensity (0-100%) | 30% |
| Glass Color | Base glass color | rgba(200, 220, 255, 0.05) |

### Modifying Glass Appearance

```css
/* In style.css – adjust glass colors */
.glass-surface {
  background: rgba(200, 220, 255, 0.05); /* Change color and opacity */
  backdrop-filter: blur(2px);
}

/* Adjust reflection */
.glass-reflection {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 30%,
    transparent 70%,
    rgba(255, 255, 255, 0.03) 100%
  );
}