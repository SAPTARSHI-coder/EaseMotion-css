# Stencil Art · Stencil Reveals Pattern 🎨

An interactive stencil art tool where patterns are revealed through spray paint effects. Drag to spray and watch the hidden stencil pattern emerge!

## Features

- 🎨 **Stencil Pattern** – Hidden pattern revealed through spray
- 🖌️ **Spray Painting** – Drag to spray paint on the stencil
- 🎭 **Pattern Reveal** – Watch the pattern emerge as you spray
- 🎯 **Color Control** – Choose any spray color
- 📏 **Size Control** – Adjust spray size (10-80px)
- ✨ **Interactive Reveal** – Pattern reveals gradually with spray intensity
- 🎮 **Speed Control** – Adjust animation speed (1-10)
- 🔄 **Reset** – Reset to hidden pattern
- 🗑️ **Clear** – Clear revealed pattern
- 📱 **Touch Support** – Works on mobile devices

## How to Use

1. **Drag** on the canvas to spray paint
2. Watch the hidden stencil pattern emerge
3. Use **Color Picker** to change spray color
4. Adjust **Size** slider for spray radius
5. Click **REVEAL PATTERN** to instantly reveal the full pattern
6. Press **C** or click **CLEAR** to clear revealed pattern
7. Press **X** or click **RESET** to reset to hidden state

## Controls

| Action | Method |
|--------|--------|
| Spray | Drag mouse / Touch drag |
| Change Color | Color picker |
| Change Size | Size slider |
| Reveal Pattern | Reveal Pattern button / R key |
| Clear | C key / Clear button |
| Reset | X key / Reset button |
| Speed | Speed slider |

## Visual Features

| Feature | Description |
|---------|-------------|
| Stencil Pattern | Hidden pattern revealed through spray |
| Spray Paint | Particles reveal pattern with intensity |
| Color Control | Full color customization |
| Size Control | Adjustable spray radius |
| Pixel Grid | 30×30 pixel grid for stencil effect |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Stencil Grid:** 30×30 pixel grid with pattern
- **Spray System:** Spray reveals pattern with intensity
- **Pattern Reveal:** Gradual reveal based on spray density
- **Color Control:** Full color customization
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Pattern:** Modify the `PATTERN` array
- **Grid Size:** Adjust `GRID_COLS` and `GRID_ROWS`
- **Cell Size:** Modify `CELL_SIZE` (20px)
- **Spray Size:** Adjust slider range (10-80)
- **Reveal Intensity:** Modify threshold in sprayStencil function

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Reveal hidden patterns with stencil art!*