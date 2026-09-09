# Fidget Spinner · Spins with Momentum 🌀

An interactive fidget spinner with realistic spinning physics, momentum, and satisfying rotation. Click to spin and watch it gradually slow down with realistic friction!

## Features

- 🌀 **Realistic Physics** – Angular momentum with friction
- 🔄 **Spin Animation** – Click to spin with random power
- 🎚️ **Speed Control** – Adjust spin speed (1-10)
- 🎚️ **Friction Control** – Adjust friction (1-10)
- 📊 **RPM Display** – Real-time RPM readout
- 🔄 **Spin Counter** – Tracks full rotations
- ⏸️ **Pause/Resume** – Toggle animation
- ⏹️ **Stop** – Instant stop
- 🔄 **Reset** – Reset spinner
- 🎨 **3 Colored Arms** – Colorful design

## How to Use

1. Click **SPIN** or press **Space** to spin the fidget spinner
2. Watch it spin with realistic momentum
3. Adjust **Speed** for spin power
4. Adjust **Friction** for how long it spins
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
| Friction | Friction slider |

## Visual Features

| Feature | Description |
|---------|-------------|
| 3 Arms | Colored arms with rounded ends |
| Center Bearing | Detailed center with rings |
| Glow Effect | Speed-dependent glow |
| RPM Display | Real-time speed readout |
| Spin Counter | Tracks full rotations |

## Physics Parameters

| Parameter | Description | Range |
|-----------|-------------|-------|
| Velocity | Angular velocity | 0-12 rad/s |
| Friction | Deceleration factor | 0.992-0.997 |
| Power | Spin strength | 3-7 units |
| Max RPM | Maximum speed | ~114 RPM |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Physics:** Angular momentum with friction
- **Rendering:** Canvas with smooth rotation
- **Controls:** Real-time parameter adjustment
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Colors:** Modify `COLORS` array
- **Arm Length:** Adjust `armLength` (70)
- **Center Radius:** Modify `centerRadius` (25)
- **Physics:** Change friction range
- **Spin Power:** Adjust power range (3-7)

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Requires Canvas roundRect support (polyfill included)

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Spin the fidget spinner and watch the momentum!*