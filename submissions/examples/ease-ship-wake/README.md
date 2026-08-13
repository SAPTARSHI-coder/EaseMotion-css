# Ship Wake · V-shaped Wake Follows Movement 🚢

An interactive ship wake simulation where a V-shaped trail follows your mouse or touch movement across the ocean. Watch as the ship glides through the water leaving a dynamic, expanding wake with particles that fade and disperse - creating a realistic maritime experience.

## Features

- 🚢 **Interactive Ship** – Ship follows your mouse/touch movement
- 🌊 **V-shaped Wake** – Dynamic wake trail expands behind the ship
- ✨ **Particle System** – Hundreds of particles form the wake with physics
- 🎮 **Speed Control** – Adjust wake intensity and particle speed (1-10)
- ⏸️ **Pause/Resume** – Toggle animation with button or Space key
- 🔄 **Reset** – Clear wake and reset ship position
- 🌅 **Ocean Environment** – Atmospheric ocean gradient with reflections
- 📱 **Touch Support** – Works on mobile devices with touch input

## How to Use

1. **Move your mouse** or **drag your finger** on the canvas
2. Watch the ship follow your movement
3. See the V-shaped wake trail form behind the ship
4. Press **PAUSE** or **Space** to pause/resume animation
5. Adjust **Speed** slider to control wake intensity
6. Press **RESET** or **R** to clear wake and reset position

## Controls

| Action | Method |
|--------|--------|
| Move Ship | Move mouse / Touch drag |
| Pause/Resume | Click button / Space |
| Reset | Click reset / R key |
| Wake Intensity | Drag slider (1-10) |

## Visual Elements

| Element | Description |
|---------|-------------|
| Ship | Detailed ship with hull, deck, cabin, and smoke stack |
| Wake | V-shaped particle trail with expanding pattern |
| Particles | 120+ particles with life, decay, and wobble |
| Ocean | Deep blue gradient with light reflections |
| Horizon | Subtle horizon line in the distance |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Ship Movement:** Smooth interpolation toward mouse/touch position
- **Ship Rotation:** Automatic angle calculation based on movement direction
- **Wake Particles:** 120 particles with V-shaped spread, life decay, and wobble
- **Particle Physics:** Velocity, friction, decay, and sinusoidal wobble
- **Speed Control:** Affects particle count, spread, speed, and ship responsiveness
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Particle Count:** Modify `MAX_PARTICLES` (currently 120)
- **Wake Spread:** Adjust `spread` calculation in `createWake()`
- **Ship Speed:** Modify `0.08 * dt` interpolation factor
- **Particle Decay:** Adjust `decay` values in `WakeParticle` constructor
- **Ship Design:** Modify `drawShip()` function

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Navigate the seas and watch your wake trail behind you!*