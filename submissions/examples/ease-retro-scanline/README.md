# Retro Scanline · CRT Effect 📺

An interactive CRT monitor simulation with scanlines, glow effects, and mouse interaction. Features a vintage retro display with moving scanlines, interactive beam tracking, and authentic CRT visual effects.

## Features

- 📺 **CRT Simulation** – Authentic scanlines, vignette, and glare effects
- 🖱️ **Mouse Interaction** – Move your mouse to control the scanline beam
- ✨ **Glow Effects** – Neon-style glow pulses on text and elements
- ⚡ **Speed Toggle** – Click to toggle scanline animation speed
- 🎨 **Retro Aesthetic** – Classic green-on-black terminal style
- 📱 **Touch Support** – Works on mobile devices with touch interaction

## How to Use

1. **Move your mouse/touch** over the screen to control the scanline beam
2. **Click** anywhere on the screen to toggle scanline speed (fast/slow)
3. Watch the authentic CRT effects including:
   - Moving horizontal scanlines
   - Interactive glowing beam
   - Vignette darkening
   - Subtle glare reflection
   - Random flicker effects

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and CRT effects
- `README.md` – This documentation

## Technical Details

- **Canvas Size:** 700×500 pixels (responsive)
- **Scanlines:** Repeating horizontal lines with animation
- **Beam:** Radial gradient following mouse position with pulse animation
- **Vignette:** Radial gradient darkening the edges
- **Glare:** Dynamic reflection based on mouse position
- **Flicker:** Random opacity changes for authentic CRT feel

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers with touch support

## Customization

You can easily customize:
- **Colors:** Change the `#00ff88` values throughout CSS
- **Scanline speed:** Adjust `animation-duration` in `.scanlines`
- **Beam size:** Modify `width` and `height` of `.scanline-beam`
- **Flicker intensity:** Change `Math.random() < 0.02` in the script

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Retro CRT simulation with interactive scanline effects*