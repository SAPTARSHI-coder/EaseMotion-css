# Mosaic Tile · Tiles Flip to Reveal Image 🎨

An interactive mosaic where tiles flip to reveal a beautiful hidden image. Click tiles to flip them and watch the image emerge!

## Features

- 🎨 **Mosaic Tiles** – Grid of tiles that flip to reveal image
- 🔄 **Flip Animation** – Smooth 3D flip effect
- 🖼️ **Hidden Image** – Beautiful gradient image with shapes
- 🎯 **Interactive** – Click tiles to flip them
- 🎉 **Completion** – Celebration when all tiles are flipped
- 🔄 **Reset** – Generate new mosaic
- ⏸️ **Pause/Resume** – Toggle animation
- 📱 **Touch Support** – Works on mobile devices

## How to Use

1. **Click** on any tile to flip it
2. Watch the tile flip with a 3D effect
3. Continue flipping tiles to reveal the hidden image
4. When all tiles are flipped, the complete image is revealed
5. Press **RESET** for a new mosaic
6. Press **Space** or click **PAUSE** to pause/resume animation

## Controls

| Action | Method |
|--------|--------|
| Flip Tile | Click tile |
| Reset Mosaic | Reset button / R key |
| Pause/Resume | Space / Pause button |

## Visual Features

| Feature | Description |
|---------|-------------|
| Mosaic Tiles | Grid of colored tiles (10×8) |
| Flip Effect | 3D scale-based flip animation |
| Hidden Image | Gradient image with shapes |
| Tile Back | Colored mosaic pattern |
| Glow Effect | Subtle glow on flipped tiles |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Grid Size:** 10×8 tiles (80 total)
- **Image Generation:** Radial gradient with shapes
- **Flip Animation:** Scale-based flip with clipping
- **Tile Colors:** Sampled from image
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Grid Size:** Modify `COLS` and `ROWS`
- **Image:** Change image generation in `generateImage()`
- **Flip Speed:** Adjust `t.flipProgress += 0.04`
- **Tile Colors:** Modify mosaic pattern colors
- **Animation:** Adjust flip timing

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Flip tiles to reveal the hidden mosaic image!*