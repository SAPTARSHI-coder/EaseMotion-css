# Finger Painting · Finger Paint with Textures 🖐️

An interactive finger painting tool with realistic textures, color blending, and expressive strokes. Choose from different texture effects and paint with your finger or mouse!

## Features

- 🖐️ **Finger Painting** – Realistic finger paint strokes
- 🎨 **Texture Selection** – Smooth, Rough, Spongy, Smudgy
- 🖌️ **Color Control** – Pick any color
- 📏 **Size Control** – Adjust brush size (5-60px)
- ✨ **Organic Textures** – Each texture has unique patterns
- 🎮 **Speed Control** – Adjust animation speed (1-10)
- ⏸️ **Pause/Resume** – Toggle animation
- 🗑️ **Clear** – Clear canvas
- 🔄 **Reset** – Reset to clean state
- 📱 **Touch Support** – Works on mobile devices

## How to Use

1. **Drag** on the canvas to paint with finger strokes
2. Choose from **Smooth, Rough, Spongy, or Smudgy** textures
3. Use **Color Picker** to change paint color
4. Adjust **Size** slider for brush thickness
5. Press **C** or click **CLEAR** to clear the canvas
6. Press **Space** or click **PAUSE** to pause/resume animation
7. Press **R** or click **RESET** to reset

## Texture Effects

| Texture | Description |
|---------|-------------|
| Smooth | Even, blended strokes with subtle variation |
| Rough | Irregular, textured dots with random spread |
| Spongy | Porous, bubbly texture with organic patterns |
| Smudgy | Smeared, streak-like effect with blending |

## Controls

| Action | Method |
|--------|--------|
| Paint | Drag mouse / Touch drag |
| Change Color | Color picker |
| Change Size | Size slider |
| Change Texture | Texture dropdown |
| Clear | C key / Clear button |
| Pause/Resume | Space / Pause button |
| Reset | R key / Reset button |
| Speed | Speed slider |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Stroke System:** Points-based strokes with texture rendering
- **Textures:** 4 unique texture algorithms with dot patterns
- **Color Variation:** Each dot has slight color variation
- **Size Variation:** Stroke size varies along path
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Brush Size:** Adjust slider range (5-60)
- **Texture Effects:** Modify texture algorithms in drawTexture
- **Color Variation:** Adjust RGB offset values
- **Stroke Density:** Change steps parameter
- **Opacity:** Modify alpha values in textures

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Create textured finger painting masterpieces!*