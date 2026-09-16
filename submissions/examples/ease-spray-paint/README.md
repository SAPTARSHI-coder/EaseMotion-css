# Spray Paint · Paint Sprays from Cursor 🎨

An interactive spray paint tool with realistic spray particles, color control, adjustable spray size, and density control. Drag to spray paint particles from your cursor with authentic spray effects!

## Features

- 🎨 **Realistic Spray** – Particles spray with natural dispersion
- 🖌️ **Color Control** – Pick any color with color picker
- 📏 **Size Control** – Adjust spray radius (5-80px)
- 📊 **Density Control** – Adjust particle density (1-10)
- ✨ **Splatter Effects** – Occasional larger splatter drops
- 🎮 **Speed Control** – Adjust animation speed (1-10)
- ⏸️ **Pause/Resume** – Toggle animation with Space or button
- 🗑️ **Clear** – Clear canvas with C key or button
- 🔄 **Reset** – Reset to clean state
- 📱 **Touch Support** – Works on mobile devices

## How to Use

1. **Drag** on the canvas to spray paint particles
2. Use the **Color Picker** to change spray color
3. Adjust **Size** slider for spray radius
4. Adjust **Density** slider for particle count
5. Watch particles spray with realistic dispersion
6. Press **C** or click **CLEAR** to clear the canvas
7. Press **Space** or click **PAUSE** to pause/resume animation
8. Press **R** or click **RESET** to reset

## Controls

| Action | Method |
|--------|--------|
| Spray | Drag mouse / Touch drag |
| Change Color | Color picker |
| Change Size | Size slider |
| Change Density | Density slider |
| Clear | C key / Clear button |
| Pause/Resume | Space / Pause button |
| Reset | R key / Reset button |
| Speed | Speed slider |

## Visual Features

| Feature | Description |
|---------|-------------|
| Spray Particles | Small dots with random dispersion |
| Splatter Drops | Occasional larger droplets |
| Particle Life | Particles fade out over time |
| Color Control | Full color customization |
| Size Control | Adjustable spray radius |
| Density Control | Adjustable particle count |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Particle System:** Spray particles with random dispersion
- **Spray Physics:** Particles spread in circular pattern with density
- **Splatter System:** Occasional larger drops with gravity
- **Particle Life:** Particles fade out over time
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Spray Size:** Adjust slider range (5-80)
- **Density:** Modify slider range (1-10)
- **Particle Life:** Adjust decay values
- **Splatter Chance:** Modify `Math.random() < 0.08`
- **Colors:** Change default color picker value

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Create amazing spray paint art!*