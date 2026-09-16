# Hummingbird Hover · Hovers and Darts Like Hummingbird 🐦

An interactive hummingbird simulation featuring realistic hovering, darting movements, iridescent colors, wing-beat animation, and flower feeding behavior. Click on flowers to attract the hummingbird and watch it hover, dart, and feed!

## Features

- 🐦 **Realistic Hovering** – Hovers in place with wing-beat animation
- ⚡ **Darting Movement** – Quick darting between flowers and targets
- 🎨 **Iridescent Colors** – Shimmering plumage with color shifts
- 🌸 **Flower Feeding** – Hovers near flowers to collect nectar
- 🪶 **Detailed Anatomy** – Body, wings, tail, beak, and eye
- 🎮 **Speed Control** – Adjust animation speed (1-10)
- ⏸️ **Pause/Resume** – Toggle animation with button
- 🔄 **Reset** – Reset hummingbird and flowers
- 🌿 **Garden Environment** – Lush background with flowers and light rays

## How to Use

1. **Click** on a flower to attract the hummingbird
2. Watch it dart to the flower and hover while feeding
3. The hummingbird will automatically move between random targets
4. Flowers regenerate nectar over time
5. Press **PAUSE** to pause/resume animation
6. Adjust **Speed** slider to control animation pace
7. Press **RESET** or **R** to reset

## Controls

| Action | Method |
|--------|--------|
| Attract to Flower | Click flower |
| Pause/Resume | Click button |
| Reset | Click reset / R key |
| Speed | Drag slider (1-10) |

## Visual Features

| Feature | Description |
|---------|-------------|
| Hovering | Wing-beat animation with hover oscillation |
| Darting | Quick, dart-like movement between targets |
| Iridescence | Color-shifting plumage with shimmer |
| Wings | Animated wings with beat effect |
| Flowers | 8 flowers with nectar and petal animation |
| Trail | Motion trail behind hummingbird |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Movement System:** Hover oscillation + dart interpolation + smooth tracking
- **Wing Animation:** Sinusoidal wing-beat with angle and speed
- **Flower System:** Nectar regeneration, petal animation, attraction
- **Trail:** Motion trail with fading opacity
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Bird Size:** Modify `this.size = 25`
- **Hover Speed:** Adjust `hoverSpeed` and `hoverAmplitude`
- **Dart Speed:** Modify `dartSpeed` (0.15)
- **Wing Speed:** Adjust `wingSpeed` (0.3)
- **Flower Count:** Add/remove positions in `createFlowers()`
- **Colors:** Adjust HSL values and `baseHue`

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Watch the hummingbird hover, dart, and feed!*