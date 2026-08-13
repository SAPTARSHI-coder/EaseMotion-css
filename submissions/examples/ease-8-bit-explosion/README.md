# 8-bit Explosion · Retro Pixel Explosion 💥

A retro 8-bit explosion effect featuring pixel particles, shockwave rings, and classic arcade sound effects. Perfect for retro games, pixel art projects, and nostalgic web experiences!

## Features

- 💥 **Pixel Particles** – 8-bit style square and rectangular particles with physics
- 🔄 **Shockwave Rings** – Expanding pixelated rings in multiple colors
- ✨ **Sparks** – Tiny white sparks for added impact
- 🔊 **Retro Sound** – 8-bit explosion sound with noise burst, boom, and impact
- 🎮 **Size Control** – Adjust explosion intensity (1-5)
- 🖱️ **Interactive** – Click canvas, button, or press Enter/Space
- 🔄 **Reset** – Clear explosion with R key or reset button
- 🎨 **Colorful** – 12-color 8-bit palette with random selection

## How to Use

1. Click **EXPLODE!** button, press **Enter/Space**, or click on the canvas
2. Watch pixel particles burst outward with physics
3. See expanding shockwave rings in multiple colors
4. Hear the retro 8-bit explosion sound
5. Adjust explosion size with the slider (1 = small, 5 = massive)
6. Click **RESET** or press **R** to clear the explosion

## Controls

| Action | Method |
|--------|--------|
| Trigger Explosion | Click button / Enter / Space / Click canvas |
| Reset | Click reset / R key |
| Explosion Size | Drag slider (1-5) |

## Sound Design

The retro explosion sound includes:
- **Noise Burst** – White noise with exponential decay
- **Low Boom** – Square wave from 80-30Hz
- **High Impact** – Sawtooth wave from 200-50Hz

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Particle System:** 30-130 particles with gravity, friction, and decay
- **Shockwaves:** 1-3 expanding rings with pixelated rendering
- **Physics:** Gravity (0.05), friction (0.99), bounce off walls
- **Colors:** 12-color 8-bit palette with random selection
- **Audio:** Web Audio API with oscillator and noise buffer
- **Canvas:** 400x400 with pixelated rendering

## Customization

You can easily customize:
- **Colors:** Modify `COLORS` array with hex values
- **Particle Count:** Change `numParticles` in `createExplosion()`
- **Physics:** Adjust gravity, friction, and speed values
- **Sound:** Modify frequencies and gain values
- **Size Range:** Adjust slider min/max values (1-5)

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Audio requires Web Audio API support (all modern browsers)

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Experience the power of 8-bit explosions!*