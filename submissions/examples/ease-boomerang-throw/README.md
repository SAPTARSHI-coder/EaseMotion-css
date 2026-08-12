# Boomerang Throw · Returns on Throw 🪃

An interactive boomerang with realistic throwing and returning physics, curved flight path, and satisfying return animation. Throw the boomerang and watch it come back!

## Features

- 🪃 **Realistic Flight** – Curved path with return
- 🔄 **Auto-Return** – Boomerang returns to hand
- 🎚️ **Speed Control** – Adjust flight speed (1-10)
- 🎚️ **Curve Control** – Adjust flight curve (1-10)
- ✨ **Flight Trail** – Glowing trail effect
- 📊 **Status Display** – Shows flight state
- 🔄 **Throw Counter** – Tracks throws
- ⏸️ **Pause/Resume** – Toggle animation
- 🔄 **Reset** – Reset boomerang

## How to Use

1. Click **THROW** or press **Space** to throw the boomerang
2. Watch it fly in a curved path
3. It automatically returns to your hand
4. Adjust **Speed** for faster/slower flight
5. Adjust **Curve** for tighter/wider loops
6. Press **RESET** or **R** to reset
7. Press **PAUSE** or **P** to pause/resume animation

## Controls

| Action | Method |
|--------|--------|
| Throw | Throw button / Space |
| Reset | Reset button / R key |
| Pause/Resume | Pause button / P key |
| Speed | Speed slider |
| Curve | Curve slider |

## Visual Features

| Feature | Description |
|---------|-------------|
| Boomerang | Detailed boomerang shape |
| Flight Path | Curved trajectory |
| Trail | Glowing motion trail |
| Hand | Iconic hand catch |
| Preview | Path preview before throw |

## Physics Parameters

| Parameter | Description | Range |
|-----------|-------------|-------|
| Speed | Flight velocity | 2-10 |
| Curve | Path curvature | Variable |
| Progress | Flight progress | 0-1 |
| Radius | Flight radius | 100-300px |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Flight Path:** Parametric curve with speed and curve control
- **Return Logic:** Auto-return when progress reaches max
- **Rendering:** Boomerang shape with rotation
- **Trail:** Fading glow trail
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Speed Range:** Modify slider range (1-10)
- **Curve Range:** Modify slider range (1-10)
- **Max Progress:** Adjust maxProgress calculation
- **Boomerang Size:** Modify `size` (30)
- **Colors:** Adjust boomerang gradient colors

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Throw the boomerang and watch it return!*