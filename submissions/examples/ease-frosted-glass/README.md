# 🪟 Frosted Glass – Becomes Transparent on Interaction

An interactive frosted glass effect that becomes transparent on hover or interaction, with realistic blur, frost patterns, condensation drops, and shine. Hover over the glass to see the background clearly, or use buttons and sliders to control clarity, frost intensity, and glare. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic frosted glass** – Blur effect, frost pattern, condensation drops
- **Interactive transparency** – Hover to see through the glass
- **Smooth transitions** – Fluid animation between frosted and clear states
- **Adjustable parameters** – Clarity (0-100%), frost intensity (0-100%), glare (0-100%)
- **Multiple controls** – Clear, Frost, Toggle, and Reset buttons
- **Keyboard shortcuts** – C (Clear), F (Frost), T (Toggle), R (Reset), Space (Toggle)
- **Visual effects** – Frost pattern, condensation drops, glass shine, label
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the glass:
   - **Hover** over the glass to see through it
   - Click **Clear** to make the glass transparent
   - Click **Frost** to make the glass frosted
   - Click **Toggle** to switch between states
   - Click **Reset** to restore default settings
   - Click the **glass** itself to toggle
3. Adjust the sliders:
   - **Clarity** – Transparency level (0-100%)
   - **Frost Intensity** – Frost pattern strength (0-100%)
   - **Glare** – Glass shine intensity (0-100%)
4. Use **keyboard shortcuts**:
   - `C` – Clear glass
   - `F` – Frost glass
   - `T` – Toggle
   - `R` – Reset
   - `Space` – Toggle

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, glass effects, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Glass rendering** – CSS backdrop-filter with blur creates the frosted effect
- **Frost pattern** – Radial gradients and repeating patterns create realistic frost
- **Condensation** – Random drops with floating animation
- **Transparency** – Opacity and blur adjust based on clarity value
- **Animation loop** – Uses `requestAnimationFrame` for smooth transitions

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Clarity | Transparency level (0-100%) | 0% |
| Frost Intensity | Frost pattern strength (0-100%) | 80% |
| Glare | Glass shine intensity (0-100%) | 30% |
| Condensation Drops | Number of drops | 30-70 |

### Modifying Glass Appearance

```css
/* In style.css – adjust glass colors */
.glass-surface {
  background: rgba(200, 220, 255, 0.15); /* Change color and opacity */
}

/* Adjust frost pattern */
.frost-pattern {
  background: 
    radial-gradient(ellipse at 20% 30%, rgba(255, 255, 255, 0.3), transparent 50%),
    /* Add or modify gradients */
}