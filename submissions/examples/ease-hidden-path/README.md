# Hidden Path · Path Appears as You Move 🗺️

An interactive hidden path that reveals itself as you move your cursor across the canvas. Explore and discover a winding path that emerges from the darkness!

## Features

- 🗺️ **Hidden Path** – A winding path hidden in darkness
- 🪄 **Reveal Effect** – Path appears as you move your cursor
- ✨ **Glowing Trail** – Path glows with blue-gold gradient
- 🎯 **Waypoints** – Glowing dots mark the path
- 🎮 **Size Control** – Adjust reveal radius (10-60px)
- 🎮 **Speed Control** – Adjust reveal speed (1-10)
- ⏸️ **Pause/Resume** – Toggle animation
- 🔄 **Reset** – Generate new path
- 🎉 **Completion** – Message appears when path is fully revealed

## How to Use

1. **Move your mouse** or **drag your finger** on the canvas
2. Watch as the hidden path reveals itself
3. The path glows with a beautiful blue-gold gradient
4. Adjust **Size** slider for reveal radius
5. Adjust **Speed** slider for reveal speed
6. Press **Space** or click **PAUSE** to pause/resume animation
7. Press **R** or click **RESET** to generate a new path

## Controls

| Action | Method |
|--------|--------|
| Reveal Path | Move mouse / Touch drag |
| Adjust Size | Size slider |
| Adjust Speed | Speed slider |
| Pause/Resume | Space / Pause button |
| Reset | R key / Reset button |

## Visual Features

| Feature | Description |
|---------|-------------|
| Hidden Path | Winding path in darkness |
| Reveal Effect | Gradual reveal with glow |
| Color Gradient | Blue to gold along path |
| Waypoints | Glowing dots at path points |
| Cursor Glow | Reveal radius indicator |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Path Generation:** Random winding path (30-50 points)
- **Reveal System:** Proximity-based reveal with intensity
- **Smoothing:** 3-point moving average smoothing
- **Colors:** HSL gradient (200° to 240° hue)
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Path Length:** Modify `numPoints` range (30-50)
- **Reveal Speed:** Adjust speed slider range (1-10)
- **Colors:** Modify hue ranges in draw function
- **Path Width:** Adjust line width calculation
- **Smoothing:** Change windowSize in smoothPath

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Explore and reveal the hidden path!*