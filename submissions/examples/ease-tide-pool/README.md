# Tide Pool · Water Recedes & Returns 🌊

An interactive tide pool simulation featuring water that recedes and returns with the tide, animated sea creatures, colorful sea anemones, rocks, and a soothing ocean atmosphere. Perfect for nature-inspired designs, calming backgrounds, or educational visualizations.

## Features

- 🌊 **Tide Simulation** – Water level rises and falls in a natural sine wave pattern
- 🐠 **Sea Creatures** – Animated fish swimming in the water
- 🪸 **Sea Anemones** – Colorful anemones with pulsing tentacles
- 🪨 **Rocks** – Natural rock formations along the shore
- ✨ **Water Effects** – Waves, reflections, foam, and transparency
- ⏸️ **Pause/Resume** – Toggle animation with button or Space key
- ⚡ **Speed Control** – Adjustable speed slider (1-10)
- 🔄 **Reset** – Regenerate with new creature positions and colors

## How to Use

1. Watch the tide ebb and flow naturally
2. See sea creatures swim in the water
3. Watch anemones pulse with the current
4. Press **PAUSE** or **Space** to pause/resume animation
5. Adjust **Speed** slider to control animation pace
6. Press **RESET** or **R** to regenerate

## Controls

| Action | Method |
|--------|--------|
| Pause/Resume | Click button / Space |
| Reset | Click reset / R key |
| Speed | Drag slider (1-10) |

## Visual Elements

| Element | Description |
|---------|-------------|
| Water | Gradient with wave surface and reflections |
| Tide | Sine wave cycle (0.3-0.8 water level) |
| Creatures | 8 animated fish with glowing colors |
| Anemones | 6 pulsing anemones with tentacles |
| Rocks | 10 natural rock formations |
| Foam | Edge foam at water line |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Tide Cycle:** Sine wave with 0.3-0.8 range
- **Water Rendering:** Gradient with wave surface and reflections
- **Creatures:** Fish with elliptical bodies, tails, and eyes
- **Anemones:** Tentacle animation with sinusoidal pulse
- **Performance:** 60fps with requestAnimationFrame
- **Background:** Ocean gradient with natural colors

## Customization

You can easily customize:
- **Tide Speed:** Modify `time * 0.02` in water level calculation
- **Water Range:** Adjust `0.3 + Math.sin(time * 0.02) * 0.3 + 0.2`
- **Creature Count:** Change loop in `this.creatures`
- **Anemone Count:** Change loop in `this.anemones`
- **Colors:** Modify HSL values in creature and anemone creation

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Watch the tide ebb and flow with marine life!*