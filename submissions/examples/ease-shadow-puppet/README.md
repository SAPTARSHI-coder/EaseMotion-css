# 🎭 Shadow Puppet – Shadows Transform Based on Cursor Position

An interactive shadow puppet experience where shadows transform and move based on cursor position. Move your cursor to control the shadow's position, scale, and opacity—creating a dynamic, responsive shadow play with multiple puppet shapes. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Interactive shadow puppets** – Shadows respond to cursor movement
- **5 puppet shapes** – Bird, Dog, Cat, Rabbit, Hand
- **Dynamic shadow control** – Position, size, softness, and opacity
- **Light simulation** – Light source follows cursor with beam effect
- **Adjustable parameters** – Shadow size (50-200%), softness (0-100%), light distance (50-200%)
- **Light toggle** – Turn light on/off with smooth transitions
- **Keyboard shortcuts** – ←/→ (Change puppet), T (Toggle Light), R (Reset)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the shadow puppet:
   - **Move your cursor** over the stage to control the shadow
   - Click **Prev** or **Next** to change puppet shapes
   - Click **Toggle Light** to turn light on/off
   - Click **Reset** to return to default settings
   - Click the **stage** to toggle light
3. Adjust the sliders:
   - **Shadow Size** – Size of the shadow (50-200%)
   - **Shadow Softness** – Blur/softness of the shadow (0-100%)
   - **Light Distance** – How far the light source is (50-200%)
4. Use **keyboard shortcuts**:
   - `←` – Previous puppet
   - `→` – Next puppet
   - `T` – Toggle light
   - `R` – Reset

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, stage design, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **Cursor tracking** – Mouse position controls shadow position and scale
- **Shadow rendering** – CSS clip-path shapes with dynamic transforms
- **Light simulation** – Light source follows cursor with beam effect
- **Shadow properties** – Size, softness, and opacity adjust dynamically
- **Animation loop** – Uses `requestAnimationFrame` for smooth updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Shadow Size | Size of shadow (50-200%) | 100% |
| Shadow Softness | Blur amount (0-100%) | 50% |
| Light Distance | Light source distance (50-200%) | 100% |
| Shapes | 5 puppet shapes | Bird, Dog, Cat, Rabbit, Hand |

### Adding New Puppet Shapes

```css
/* Add a new shape class */
.shape-dragon .shadow-dragon {
  position: absolute;
  top: 20%;
  left: 25%;
  width: 50%;
  height: 60%;
  background: radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.6), rgba(0,0,0,0.2));
  clip-path: polygon(/* your shape points */);
  transition: all 0.05s linear;
  will-change: transform, opacity;
}