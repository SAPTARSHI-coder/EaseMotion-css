# Hula Hoop · Hula Hoop Spins Around 🔄

An interactive hula hoop simulation with realistic spinning physics, rotation, and hip motion. Spin the hoop and watch it rotate around the character!

## Features

- 🔄 **Realistic Spin** – Hoop spins with physics
- 🎚️ **Speed Control** – Adjust spin speed (1-10)
- 🎚️ **Size Control** – Adjust hoop size (3-10)
- 🦴 **Hip Motion** – Character moves with hoop
- 📊 **Spin Counter** – Tracks rotations
- ⏸️ **Pause/Resume** – Toggle animation
- ⏹️ **Stop** – Instant stop
- 🔄 **Reset** – Reset hoop

## How to Use

1. Click **SPIN** or press **Space** to start the hula hoop
2. Watch it spin around the character
3. Adjust **Speed** for spin velocity
4. Adjust **Size** for hoop diameter
5. Click **STOP** or press **S** to stop instantly
6. Press **RESET** or **R** to reset
7. Press **PAUSE** or **P** to pause/resume animation

## Controls

| Action | Method |
|--------|--------|
| Spin | Spin button / Space |
| Stop | Stop button / S key |
| Reset | Reset button / R key |
| Pause/Resume | Pause button / P key |
| Speed | Speed slider |
| Size | Size slider |

## Visual Features

| Feature | Description |
|---------|-------------|
| Hoop | 3D hoop with tilt and glow |
| Character | Animated figure with hip motion |
| Spin Effect | Rotating hoop with physics |
| Glow | Speed-dependent glow |
| Status | Real-time indicators |

## Physics Parameters

| Parameter | Description | Range |
|-----------|-------------|-------|
| Speed | Spin velocity | 0.65-2.0 |
| Size | Hoop diameter | 3-10 |
| Deceleration | Friction | 0.999 |
| Hip Motion | Character sway | 0.15 rad |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Physics:** Angular velocity with friction
- **Rendering:** 3D hoop with tilt and glow
- **Character:** Animated with hip motion
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Speed Range:** Modify slider range (1-10)
- **Size Range:** Modify slider range (3-10)
- **Hoop Radius:** Adjust base radius (65 + size * 4)
- **Colors:** Adjust hoop and character colors

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Spin the hula hoop and watch it go!*