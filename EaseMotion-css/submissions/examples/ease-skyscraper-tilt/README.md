# Skyscraper Tilt · Leaning Tower Effect 🏗️

An interactive skyscraper that tilts like the Leaning Tower of Pisa with physics-based leaning, damping, and realistic building details.

## Features

- 🏗️ **Skyscraper** – Detailed building with windows
- 📐 **Tilt Physics** – Realistic leaning with damping
- 🎚️ **Angle Control** – Adjust tilt angle (1-10)
- 🎚️ **Speed Control** – Adjust tilt speed (1-10)
- 🔄 **Tilt Counter** – Tracks number of tilts
- 📊 **Angle Display** – Real-time angle readout
- ⏸️ **Pause/Resume** – Toggle animation
- 🔄 **Reset** – Reset to upright position

## How to Use

1. Click **TILT** or press **Space** to make the building lean
2. Watch it tilt with realistic physics
3. Adjust **Angle** for more/less tilt
4. Adjust **Speed** for tilt speed
5. Press **RESET** or **R** to reset to upright
6. Press **PAUSE** or **P** to pause/resume animation

## Controls

| Action | Method |
|--------|--------|
| Tilt | Tilt button / Space |
| Reset | Reset button / R key |
| Pause/Resume | Pause button / P key |
| Angle | Angle slider |
| Speed | Speed slider |

## Visual Features

| Feature | Description |
|---------|-------------|
| Skyscraper | Detailed building with windows |
| Tilt Effect | Physics-based leaning |
| Windows | Illuminated windows |
| Glow | Top glow when tilted |
| Skyline | Night sky with stars |

## Physics Parameters

| Parameter | Description | Range |
|-----------|-------------|-------|
| Angle | Tilt angle | 0-0.15 rad |
| Speed | Tilt velocity | 0.1× |
| Damping | Motion damping | 0.995 |
| Gravity | Return force | 0.0001 |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Physics:** Velocity-based tilt with damping
- **Rendering:** Canvas-based building with windows
- **Controls:** Real-time parameter adjustment
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Angle Range:** Modify slider range (1-10)
- **Speed:** Adjust damping and gravity
- **Building:** Change building dimensions
- **Colors:** Modify building and window colors
- **Windows:** Adjust window count and size

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Watch the skyscraper lean like the Leaning Tower!*