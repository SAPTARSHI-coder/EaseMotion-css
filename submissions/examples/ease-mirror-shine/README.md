# 🪞 Mirror Shine – Mirror Reflects and Shines Dynamically

An interactive mirror that reflects and shines dynamically based on cursor movement, creating a realistic, shimmering mirror surface with dynamic light reflection, sparkles, and adjustable shine intensity, light angle, and reflection clarity. Move your cursor across the mirror to see it shine and reflect light like a real mirror. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Dynamic mirror shine** – Shine follows cursor with realistic reflection
- **Adjustable parameters** – Shine intensity (0-100%), light angle (0-360°), reflection clarity (0-100%)
- **Sparkle effects** – Floating sparkles with burst animation
- **Toggle controls** – Turn mirror on/off
- **Keyboard shortcuts** – T (Toggle), R (Reset), S (Sparkle)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the mirror:
   - **Move your cursor** over the mirror to see it shine
   - Click **Toggle** to turn mirror on/off
   - Click **Reset** to restore default settings
   - Click **Sparkle** for a sparkle burst
   - Click the **mirror** itself to toggle
3. Adjust the sliders:
   - **Shine Intensity** – Brightness of the shine (0-100%)
   - **Light Angle** – Angle of the light source (0-360°)
   - **Reflection Clarity** – How clear the reflection is (0-100%)
4. Use **keyboard shortcuts**:
   - `T` – Toggle mirror
   - `R` – Reset
   - `S` – Sparkle burst

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, mirror design, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **Cursor tracking** – Mirror shine follows cursor position
- **Shine rendering** – Radial gradient with dynamic position and intensity
- **Reflection effect** – Subtle reflection overlay with angle control
- **Sparkle system** – Floating sparkles with animation
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Shine Intensity | Brightness of shine (0-100%) | 80% |
| Light Angle | Angle of light source (0-360°) | 45° |
| Reflection Clarity | Clarity of reflection (0-100%) | 70% |
| Sparkle Count | Number of sparkles | 20-70 |

### Modifying Mirror Appearance

```css
/* In style.css – adjust mirror colors */
.mirror-surface {
  background: linear-gradient(145deg, 
    rgba(200, 220, 255, 0.08), 
    rgba(180, 200, 240, 0.05), 
    rgba(200, 220, 255, 0.07)
  );
}

/* Adjust shine colors */
.mirror-shine {
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(255, 255, 255, 0.4),
    rgba(200, 220, 255, 0.15),
    transparent 60%
  );
}