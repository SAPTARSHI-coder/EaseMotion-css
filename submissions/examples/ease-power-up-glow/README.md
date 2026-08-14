# Power-up Glow · Pulsing Glow Effect ⚡

An interactive power-up glow effect featuring pulsing animations, color cycling, magnetic attraction, and satisfying collection mechanics - just like collecting a power-up in a video game!

## Features

- ⚡ **Pulsing Glow** – Animated glow with expand/contract effect
- 🎨 **6 Color Variants** – Red, Blue, Green, Gold, Purple, Cyan
- 🧲 **Magnetic Attraction** – Power-ups subtly move toward mouse cursor
- ✨ **Collection Animation** – Pop and burst effect on click
- 🔔 **Power-up Sound** – Ascending chime with shimmer effect
- 💫 **Particle Burst** – 20+ particles and ring burst on collection
- 🌊 **Floating Animation** – Each power-up floats independently
- 🎮 **Game-like Feel** – Satisfying feedback and visual effects

## How to Use

1. **Hover** over any power-up to see it react and glow brighter
2. **Move your mouse** near power-ups to see magnetic attraction
3. **Click** any power-up to collect it
4. Watch the **particle burst** and **ring explosion** effect
5. Hear the **ascending power-up chime** sound
6. Power-up resets after 2 seconds

## Color Variants

| Color | Icon | Name | Hex |
|-------|------|------|-----|
| Red | ❤️ | Health | #ff2d55 |
| Blue | 💧 | Mana | #00d4ff |
| Green | 🌿 | Nature | #39ff14 |
| Gold | ⭐ | Star | #ffd700 |
| Purple | 🔮 | Mystic | #b026ff |
| Cyan | ⚡ | Speed | #00ffcc |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Glow Effect:** Radial gradients with pulse keyframes
- **Magnetic Attraction:** Mouse tracking with proximity-based displacement
- **Collection:** Click triggers pop animation, particle burst, and sound
- **Particles:** 20 particles + 8 ring particles with fade-out
- **Audio:** Web Audio API with ascending tones (C5, E5, G5, C6) + shimmer
- **Animations:** CSS keyframes for pulse, float, ring, and collect

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Audio requires Web Audio API support (all modern browsers)

## Customization

You can easily customize:
- **Colors:** Modify color values in `data-color` CSS rules
- **Particle count:** Change `particleCount` in `createBurst()`
- **Animation speed:** Adjust `animation-duration` in CSS keyframes
- **Magnetic strength:** Modify `strength` calculation in mousemove handler
- **Sound pitch:** Change frequencies in `playPowerUpSound()`

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Collect power-ups and feel the glow!*