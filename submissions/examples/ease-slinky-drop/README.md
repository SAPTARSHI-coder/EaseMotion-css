# Slinky Drop · Slinky Stretches and Recoils 🌀

An interactive slinky simulation with realistic physics, stretching and recoiling animation, and gravity effects. Watch the slinky drop, stretch, and recoil with natural spring dynamics!

## Features

- 🌀 **Realistic Slinky** – Physics-based slinky simulation
- ⬇️ **Drop Animation** – Click to drop and watch it stretch
- 🎚️ **Stiffness Control** – Adjust spring stiffness (1-10)
- 🎚️ **Gravity Control** – Adjust gravity strength (1-10)
- 📊 **Real-time Feedback** – Height and stretch indicators
- ⏸️ **Pause/Resume** – Toggle animation
- 🔄 **Reset** – Reset slinky to rest position
- 🎨 **Visual Coils** – Animated coil rendering with glow

## How to Use

1. Click **DROP** or press **Space** to drop the slinky
2. Watch the slinky stretch and recoil with realistic physics
3. Adjust **Stiffness** for tighter or looser spring
4. Adjust **Gravity** for faster or slower falling
5. Press **RESET** or **R** to reset to rest position
6. Press **Space** or click **PAUSE** to pause/resume animation

## Controls

| Action | Method |
|--------|--------|
| Drop Slinky | Drop button / Space |
| Reset | Reset button / R key |
| Pause/Resume | Pause button / P key |
| Stiffness | Stiffness slider |
| Gravity | Gravity slider |

## Visual Features

| Feature | Description |
|---------|-------------|
| Slinky Coils | Animated coil rendering |
| Physics | Realistic spring physics |
| Color Coding | Stretch-based color changes |
| Floor Collision | Bounce off the floor |
| Status Info | Height and stretch indicators |

## Physics Parameters

| Parameter | Description | Range |
|-----------|-------------|-------|
| Stiffness | Spring stiffness | 0.2-1.0 |
| Gravity | Gravity strength | 0.1-0.55 |
| Segments | Number of coil segments | 20 |
| Damping | Oscillation damping | 0.92 |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Physics:** Mass-spring system with 20 segments
- **Rendering:** Coil points with glow effects
- **Controls:** Real-time parameter adjustment
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Segments:** Modify `SEGMENTS` count (20)
- **Spring Height:** Adjust start/end Y positions
- **Physics:** Change mass, damping values
- **Colors:** Modify slinky and glow colors

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Drop the slinky and watch it stretch and recoil!*