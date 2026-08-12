# Coral Bloom · Coral Polyps Extend & Retract 🪸

An interactive coral bloom animation featuring coral polyps that extend and retract, swaying in ocean currents with vibrant colors. Create a mesmerizing underwater scene perfect for backgrounds, nature-inspired designs, or calming visual experiences.

## Features

- 🪸 **Coral Polyps** – Individual polyps with extend/retract animation
- 🌊 **Swaying Motion** – Polyps sway gently with ocean currents
- 🎨 **Vibrant Colors** – 8 color variants (red, pink, yellow, blue, green, purple, coral, orange)
- 🌿 **Branching Structure** – Organic coral branches with multiple polyps
- ⏸️ **Pause/Resume** – Toggle animation with button or Space key
- ⚡ **Speed Control** – Slow, Normal, Fast speed settings
- 🔄 **Reset** – Regenerate coral with new colors and positions
- ✨ **Glow Effects** – Soft bioluminescent glow around each polyp
- 🌊 **Ocean Environment** – Deep ocean background with light rays and bubbles

## How to Use

1. Watch coral polyps extend, retract, and sway naturally
2. Press **PAUSE** or **Space** to pause/resume animation
3. Select **Speed** (Slow, Normal, Fast) to control animation pace
4. Press **RESET** or **R** to regenerate coral with new colors
5. Each reset creates unique color combinations and structures

## Controls

| Action | Method |
|--------|--------|
| Pause/Resume | Click button / Space |
| Reset | Click reset / R key |
| Speed | Select Slow, Normal, or Fast |

## Color Variants

| Color | Main | Light | Dark |
|-------|------|-------|------|
| Red | #ff6b6b | #ff9a9a | #cc4444 |
| Pink | #ff9ff3 | #ffb8f5 | #cc66cc |
| Yellow | #feca57 | #ffe08a | #cc9933 |
| Blue | #48dbfb | #8ae5fc | #1a9bbf |
| Green | #1dd1a1 | #5eddb8 | #0f8f6f |
| Purple | #ff6bcd | #ff99dd | #cc4499 |
| Coral | #ff6b6b | #ff9999 | #cc5555 |
| Orange | #ff9f43 | #ffbe76 | #cc7733 |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Polyp Animation:** Sinusoidal extend/retract with individual timing
- **Sway Movement:** Sinusoidal horizontal sway with organic phase variation
- **Tentacles:** Segmented lines with wave motion (5-10 tentacles per polyp)
- **Branch Structure:** Recursive branching with 2-3 levels depth
- **Colors:** 8-color palette with main, light, and dark variants
- **Performance:** 60fps with requestAnimationFrame
- **Background:** Deep ocean gradient with light rays, bubbles, and particles

## Customization

You can easily customize:
- **Number of Polyps:** Modify `numPolyps` in `CoralBranch` constructor
- **Branch Depth:** Change `if (this.depth < 3)` to adjust branching
- **Colors:** Modify `randomColor()` return values
- **Animation Speed:** Adjust `extendSpeed` and `swaySpeed` values
- **Tentacle Count:** Change `tentacleCount` calculation

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Watch coral polyps bloom and sway in the ocean current!*