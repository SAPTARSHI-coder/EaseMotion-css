# 🧊 Glacier Melt – Ice Melts and Reforms

An interactive glacier simulation that visualizes the melting and re-freezing of ice with fluid animations, realistic water droplets, and dynamic visual effects. Watch as the glacier gradually melts into water, forming drips and a pool at the base, then re-freezes back into solid ice—all controlled with buttons, sliders, or keyboard shortcuts. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic glacier simulation** – Ice melts and reforms with smooth, fluid animation
- **Dynamic visual effects** – Jagged ice edges, crevasses, meltwater drips, water pool with ripples
- **Water droplet system** – Droplets fall and splash as the glacier melts
- **Melt level control** – Slider provides precise control from 0% (frozen) to 100% (melted)
- **Speed control** – Adjust animation speed (1× – 10×)
- **Multiple control methods** – Melt/Freeze/Toggle/Reset buttons, slider, keyboard shortcuts
- **Real-time feedback** – Ice status, melt percentage, ice/water percentage stats, drop counter
- **Keyboard shortcuts** – M (Melt), F (Freeze), T (Toggle), R (Reset)
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the glacier:
   - Click **Melt** to increase melting
   - Click **Freeze** to re-freeze the glacier
   - Click **Toggle** to switch between melting and freezing
   - Click **Reset** to return to fully frozen state
   - Drag the **Melt Level** slider for precise control
   - Drag the **Speed** slider to adjust animation speed
   - Click the canvas to toggle between melting and freezing
3. Use **keyboard shortcuts**:
   - `M` – Melt the glacier
   - `F` – Freeze the glacier
   - `T` – Toggle between melt and freeze
   - `R` – Reset to frozen
4. Watch water droplets fall, splashes form, and the glacier change appearance in real-time.

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Glacier rendering** – The glacier is drawn as a jagged polygon with dynamic top edge that responds to melt level
- **Melt simulation** – Melt progress (0-100%) smoothly interpolates with speed control
- **Water droplet system** – Droplets spawn from the glacier base when melting, fall with physics, and create splashes
- **Visual effects** – Ice color shifts from bright blue to dark blue as it melts; cracks and crevasses appear; water pool grows
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Melt Progress | Current melt level (0-100%) | 0% |
| Speed | Animation speed multiplier | 5× (1-10) |
| Max Drops | Maximum water droplets | 50 |
| Glacier Width | Width of glacier as % of canvas | 70% |
| Glacier Height | Height of glacier as % of canvas | 85% |

### Modifying Glacier Appearance

```javascript
// Change glacier colors in drawGlacier()
const iceGradient = ctx.createLinearGradient(0, topY, 0, bottomY);
iceGradient.addColorStop(0, `rgba(${iceColor + 20}, ${iceColor + 40}, 255, ${0.95 - meltFactor * 0.3})`);
// Adjust color values for different ice shades