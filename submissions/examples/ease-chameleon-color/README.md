# Chameleon Color · Changes Color to Match Background 🦎

An interactive chameleon that changes color to match its background, with animated eyes, tongue, and smooth color transitions. Move your mouse to guide the chameleon and watch it adapt to its surroundings!

## Features

- 🦎 **Color Adaptation** – Chameleon smoothly changes color to match the background
- 👀 **Animated Eyes** – Eyes move independently with realistic motion
- 👅 **Tongue Attack** – Click to shoot the tongue out
- 🎨 **Smooth Transitions** – Colors transition smoothly with interpolation
- 🎮 **Speed Control** – Adjust animation speed (1-10)
- ⏸️ **Pause/Resume** – Toggle animation with button
- 🔄 **Reset** – Reset chameleon to starting position
- 🌿 **Colorful Environment** – Gradient background with organic shapes

## How to Use

1. **Move your mouse** over the canvas to guide the chameleon
2. Watch the chameleon **change color** to match the background
3. **Click** on the canvas to make the chameleon shoot its tongue
4. Press **PAUSE** to pause/resume animation
5. Adjust **Speed** slider to control animation pace
6. Press **RESET** or **R** to reset

## Controls

| Action | Method |
|--------|--------|
| Move Chameleon | Move mouse / Touch drag |
| Shoot Tongue | Click canvas / Space |
| Pause/Resume | Click button |
| Reset | Click reset / R key |
| Speed | Drag slider (1-10) |

## Visual Features

| Feature | Description |
|---------|-------------|
| Color Adaptation | Smooth RGB interpolation to match background |
| Body | Oval body with gradient and shading |
| Eyes | Animated eyes with independent movement |
| Tongue | Extendable tongue with tip |
| Tail | Curled tail with organic shape |
| Legs | Animated legs with sway |
| Back Ridge | Ridged back with bumps |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Color System:** RGB color matching with smooth interpolation (0.03 speed)
- **Movement:** Smooth tracking with interpolation (0.02 speed)
- **Tongue:** Extendable with smooth animation (0.08 speed)
- **Eye Animation:** Sinusoidal eye movement with phase
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Chameleon Size:** Modify `this.size = 50`
- **Color Speed:** Adjust `this.colorSpeed = 0.03`
- **Move Speed:** Modify `this.moveSpeed = 0.02`
- **Tongue Speed:** Adjust interpolation factor (0.08)
- **Background Colors:** Modify gradient colors in `drawBackground()`

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Watch the chameleon adapt to its surroundings!*