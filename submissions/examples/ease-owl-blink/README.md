# Owl Blink · Large Eyes Blink Slowly 🦉

An interactive owl with large, expressive eyes that blink slowly and track your mouse movement. Click to make the owl blink and turn its head with wise, deliberate motion.

## Features

- 🦉 **Detailed Owl** – Body, head, ear tufts, facial disc, and feathers
- 👁️ **Large Eyes** – Expressive eyes with iris, pupil, and highlights
- 😉 **Slow Blink** – Realistic blinking with smooth animation
- 👀 **Eye Tracking** – Eyes follow mouse/touch movement
- 🔄 **Head Turn** – Random head turns and click-induced turns
- 🎮 **Click Interaction** – Click to trigger blink and head turn
- 🎮 **Speed Control** – Adjust animation speed (1-10)
- ⏸️ **Pause/Resume** – Toggle animation with button
- 🔄 **Reset** – Reset owl to starting position
- 🌙 **Night Environment** – Moon, stars, branch, and fireflies

## How to Use

1. Move your mouse or drag your finger to make the owl's eyes follow you
2. **Click** on the canvas or press **Space** to make the owl blink
3. Each click also triggers a random head turn
4. The owl blinks automatically at random intervals
5. Press **PAUSE** to pause/resume animation
6. Adjust **Speed** slider to control animation pace
7. Press **RESET** or **R** to reset

## Controls

| Action | Method |
|--------|--------|
| Eye Tracking | Move mouse / Touch drag |
| Blink & Head Turn | Click canvas / Space |
| Pause/Resume | Click button |
| Reset | Click reset / R key |
| Speed | Drag slider (1-10) |

## Visual Features

| Feature | Description |
|---------|-------------|
| Eyes | Large with yellow/orange iris and black pupil |
| Blink | Slow, smooth blink animation |
| Eye Tracking | Follows cursor with smooth interpolation |
| Head | Detailed with ear tufts and facial disc |
| Body | Feathered with wing patterns |
| Environment | Night scene with moon, stars, and branch |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Blink System:** Smooth blink with eye open/close animation
- **Eye Tracking:** Smooth eye movement toward cursor (0.05 speed)
- **Head Turn:** Smooth head rotation with random and click triggers
- **Idle Animation:** Subtle sway and feather fluff
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Owl Size:** Modify `this.size = 60`
- **Blink Duration:** Adjust `blinkDuration