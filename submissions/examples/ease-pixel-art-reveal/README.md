# Pixel Art Reveal · Block by Block 🎨

An interactive pixel art reveal animation where artwork appears block by block with satisfying visual and audio feedback. Watch as each pixel is revealed sequentially, creating a delightful "loading" or "drawing" effect.

## Features

- 🎨 **Pixel Art Display** – 32x32 pixel art grid with custom artwork
- ✨ **Block-by-Block Reveal** – Pixels appear one by one in sequence
- 🎵 **Pixel Sounds** – Each pixel plays a subtle musical tone
- 💫 **Sparkle Effects** – Tiny sparkles appear at each reveal position
- ⚡ **Speed Control** – Adjust reveal speed with slider (1-10)
- 📊 **Progress Tracking** – Shows percentage complete during reveal
- 🎉 **Completion Celebration** – Plays triumphant sound when complete
- ⌨️ **Keyboard Shortcuts** – Enter/Space to toggle reveal, R to reset
- 🔄 **Reset Function** – Reset to start over at any time

## How to Use

1. Click **REVEAL ART** button or press **Enter/Space**
2. Watch pixels appear block by block in sequence
3. Hear subtle musical tones with each pixel
4. See sparkle effects at reveal positions
5. Adjust speed with the slider (1 = slowest, 10 = fastest)
6. Click **RESET** or press **R** to start over

## Controls

| Action | Method |
|--------|--------|
| Start/Stop Reveal | Click button / Enter / Space |
| Reset | Click reset / R key |
| Speed | Drag slider |

## Pixel Art

The included pixel art is a 32x32 character design (like a cute creature or icon). The art uses 10 different colors mapped to musical notes for the pixel sounds.

## Sound Design

- Each pixel plays a short sine wave tone (0.08s duration)
- Colors map to different frequencies (C5 to E6 range)
- Completion plays an ascending arpeggio (C5, E5, G5, C6)

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Grid Size:** 32x32 pixels
- **Canvas Size:** 320x320 (scaled up)
- **Pixel Sounds:** Web Audio API with frequency mapping
- **Sparkles:** DOM elements with CSS transitions
- **Speed Control:** Dynamic interval timing (10-60ms per pixel)
- **Colors:** 10-color palette with hex values

## Customization

You can easily customize:
- **Pixel Art:** Modify the `PIXEL_ART` array (32x32 grid)
- **Colors:** Update the `COLORS` array with hex values
- **Speed Range:** Adjust slider min/max values
- **Sound Mapping:** Change frequencies in `playPixelSound()`
- **Sparkle Size:** Modify size in `createSparkle()`

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Audio requires Web Audio API support (all modern browsers)

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Watch pixel art come to life one block at a time!*