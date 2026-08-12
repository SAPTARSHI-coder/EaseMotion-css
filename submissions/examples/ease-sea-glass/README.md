# Sea Glass · Frosted Glass with Ocean Colors 🫧

A serene animation featuring frosted sea glass pieces with ocean colors, translucent layers, and gentle floating motion. Each piece of sea glass has its own unique shape, color palette, and frosted texture, creating a calming coastal atmosphere.

## Features

- 🫧 **Frosted Sea Glass** – Translucent glass pieces with frosted texture
- 🌊 **Ocean Colors** – Blue, seafoam, aqua, teal, and sea green palettes
- ✨ **Gentle Float** – Each piece floats with organic motion
- 🎨 **Unique Shapes** – Irregular organic shapes for each glass piece
- 💎 **Frosted Texture** – Micro-dots and highlights creating frosted effect
- 🌅 **Translucent Glow** – Soft glow with ocean color tints
- 🎮 **Speed Control** – Adjust animation speed (1-10)
- ⏸️ **Pause/Resume** – Toggle animation with button or Space key
- 🔄 **Reset** – Regenerate glass pieces with new colors and positions

## How to Use

1. Watch sea glass pieces float gently in the water
2. See the frosted texture and ocean colors shimmer
3. Press **PAUSE** or **Space** to pause/resume animation
4. Adjust **Speed** slider to control animation pace
5. Press **RESET** or **R** to regenerate with new pieces

## Controls

| Action | Method |
|--------|--------|
| Pause/Resume | Click button / Space |
| Reset | Click reset / R key |
| Speed | Drag slider (1-10) |

## Color Palettes

| Palette | Colors |
|---------|--------|
| Ocean Blue | #4a90d9, #6bb5e8, #2d6ba8, #8ec9e8 |
| Seafoam Green | #5cb8a0, #7ad0b8, #3d9a82, #9adcc8 |
| Aqua | #4db8c8, #70d0d8, #2a8a9a, #8ad0d8 |
| Teal | #3a8a8a, #5aaaaa, #2a6a6a, #7ababa |
| Deep Ocean | #2a5a7a, #4a7a9a, #1a4a6a, #6a9aba |
| Sea Green | #4a9a7a, #6aba9a, #2a7a5a, #8adaba |
| Misty Blue | #6a8aaa, #8aaaCa, #4a6a8a, #aacada |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Glass Pieces:** 12 unique pieces with random shapes and colors
- **Frosted Texture:** Micro-dots and highlights simulating frosted glass
- **Shape Generation:** Irregular organic polygons with 8-14 points
- **Animation:** Gentle floating with rotation and organic motion
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Number of Pieces:** Change `numPieces` variable (currently 12)
- **Piece Size:** Modify `this.size = 15 + Math.random() * 35`
- **Float Speed:** Adjust `floatSpeed` and `floatAmplitude`
- **Colors:** Add or modify palettes in `randomGlassColors()`
- **Shape Points:** Change `numPoints = 8 + Math.floor(Math.random() * 6)`

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Discover the beauty of frosted sea glass!*