# Gameboy Screen · Pixel Grid 🟩

An authentic Gameboy screen simulation featuring green-tinted display, pixel grid overlay, interactive glow effects, and animated game-like pixel art. Perfect for retro gaming nostalgia.

## Features

- 🟩 **Green Tint** – Authentic Gameboy color palette with 4 shades of green
- 📐 **Pixel Grid** – Overlay grid showing individual pixels (8px resolution)
- 🎮 **Gameboy Style** – Classic interface with "GAME BOY" branding, battery indicator, and contrast slider
- ✨ **Interactive Glare** – Mouse/touch tracking creates dynamic screen reflection
- ⚡ **Animated Display** – Pixel art with subtle movement and flicker effects
- 🎨 **Pixel Art Sprites** – Character and object sprites in classic Gameboy style
- 🔄 **Toggle Animation** – Click or press Spacebar to pause/resume animation
- 📱 **Touch Support** – Works on mobile devices

## How to Use

1. **Move your mouse/finger** over the screen to see interactive glare effect
2. **Click** anywhere on the screen to toggle animation (pause/resume)
3. **Press Spacebar** as keyboard shortcut to toggle animation
4. Watch authentic Gameboy effects including:
   - 4-shade green pixel art
   - Moving scanlines
   - Subtle flicker
   - Interactive screen glare
   - Pixel grid overlay

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and Gameboy effects
- `README.md` – This documentation

## Technical Details

- **Canvas Resolution:** 160×144 pixels (authentic Gameboy resolution)
- **Color Palette:** 4 shades of green (#9bbc0f, #8bac0f, #306230, #0f380f)
- **Pixel Grid:** 8×8 pixel blocks with overlay
- **Animation:** 60fps with sprite-based pixel art
- **Display Size:** 320×320px (scaled up for visibility)
- **Effects:** Green tint, scanlines, glare, vignette shadow

## Authentic Gameboy Features

- **4 Shade Green Palette** – Exact Gameboy color scheme
- **160×144 Resolution** – Original Gameboy screen resolution
- **Pixel Grid** – Authentic pixelated display
- **Retro Branding** – "GAME BOY" header with dot indicators
- **Contrast Control** – Visual slider for retro feel

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers with touch support

## Customization

You can easily customize:
- **Colors:** Modify the `COLORS` array in the JavaScript
- **Sprites:** Edit the sprite arrays in `drawCharacter()` and `drawSimpleSprite()`
- **Scanlines:** Adjust opacity and speed in `.gameboy-scanlines`
- **Animation Speed:** Change `animation-duration` in `.gameboy-scanlines`

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Relive the Gameboy era with authentic green-tinted pixel art simulation*