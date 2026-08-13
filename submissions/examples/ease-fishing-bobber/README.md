# Fishing Bobber · Bobber Bobs on Water Surface 🎣

An interactive fishing bobber simulation floating on water surface with bobbing animation, expanding ripples, gentle waves, and splash effects. Click or press Space to make the bobber dip and create ripples!

## Features

- 🎣 **Realistic Bobber** – Detailed bobber with red top and white bottom
- 🌊 **Bobbing Animation** – Smooth dip and rise on interaction
- 💧 **Ripple Effects** – Expanding ripples on water surface
- ✨ **Splash Particles** – Water droplets burst on interaction
- 🎮 **Speed Control** – Adjust animation speed (1-10)
- ⏸️ **Pause/Resume** – Toggle animation with button or Space key
- 🔄 **Reset** – Reset bobber and clear ripples
- 🌅 **Lake Environment** – Sky, water, waves, and reflections

## How to Use

1. **Click** on the canvas or press **Space** to make the bobber dip
2. Watch ripples expand across the water surface
3. See splash particles burst from the bobber
4. Press **PAUSE** to pause/resume animation
5. Adjust **Speed** slider to control animation pace
6. Press **RESET** or **R** to reset

## Controls

| Action | Method |
|--------|--------|
| Make Bobber Dip | Click canvas / Space |
| Pause/Resume | Click button |
| Reset | Click reset / R key |
| Speed | Drag slider (1-10) |

## Visual Features

| Feature | Description |
|---------|-------------|
| Bobber | Red top with white bottom, detailed shading |
| Ripples | Expanding concentric circles with glow |
| Splash | 15-25 water particles with physics |
| Fishing Line | Dashed line with gentle sway |
| Water Waves | Animated wave surface with reflections |
| Environment | Sky gradient with water reflections |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Bobber Animation:** Sinusoidal bobbing with smooth interpolation
- **Ripple Physics:** Expanding circles with life decay and fading opacity
- **Splash Particles:** Physics-based with gravity, velocity, and life decay
- **Water Surface:** Animated waves with multiple sine functions
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Bobber Size:** Modify `this.radius = 18`
- **Bob Amount:** Adjust `bobAmount` and `bobTarget`
- **Ripple Count:** Change ripple creation in `addRipple()`
- **Splash Particles:** Modify particle count in `triggerBob()`
- **Water Waves:** Adjust wave amplitude and frequency
- **Colors:** Modify gradient colors in bobber drawing

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Watch the bobber dip and create ripples on the water!*