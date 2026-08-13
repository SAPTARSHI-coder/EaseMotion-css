# Sponge Dab · Texture from Sponge Dabbing 🧽

An interactive sponge dabbing tool with realistic porous texture, paint absorption, and dabbing effects. Drag to create textured, sponge-like paint patterns!

## Features

- 🧽 **Realistic Sponge Texture** – Porous, irregular dabbing effect
- 🎨 **Color Control** – Pick any color
- 📏 **Size Control** – Adjust sponge size (10-80px)
- 📊 **Density Control** – Adjust pore density (1-10)
- ✨ **Organic Pores** – Each dab has unique pore pattern
- 🎮 **Speed Control** – Adjust animation speed (1-10)
- ⏸️ **Pause/Resume** – Toggle animation
- 🗑️ **Clear** – Clear canvas
- 🔄 **Reset** – Reset to clean state
- 📱 **Touch Support** – Works on mobile devices

## How to Use

1. **Drag** on the canvas to dab with sponge texture
2. Use **Color Picker** to change paint color
3. Adjust **Size** slider for sponge size
4. Adjust **Density** slider for pore density
5. Press **C** or click **CLEAR** to clear the canvas
6. Press **Space** or click **PAUSE** to pause/resume animation
7. Press **R** or click **RESET** to reset

## Controls

| Action | Method |
|--------|--------|
| Dab | Drag mouse / Touch drag |
| Change Color | Color picker |
| Change Size | Size slider |
| Change Density | Density slider |
| Clear | C key / Clear button |
| Pause/Resume | Space / Pause button |
| Reset | R key / Reset button |
| Speed | Speed slider |

## Visual Features

| Feature | Description |
|---------|-------------|
| Sponge Pores | Irregular porous texture |
| Dab Shape | Organic, irregular circles |
| Edge Texture | Spongy edge effects |
| Color Variation | Each pore has slight variation |
| Density Control | Adjustable pore count |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Dab System:** Individual dab objects with pore patterns
- **Pore Generation:** 20-100 pores per dab with random distribution
- **Pore Animation:** Pores pulse gently over time
- **Color Variation:** Each pore has slight RGB variation (±30)
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Sponge Size:** Adjust slider range (10-80)
- **Density:** Modify slider range (1-10)
- **Pore Count:** Adjust `numPores = 20 + density * 8`
- **Pore Size:** Modify size range (2-4 + density * 0.5)
- **Color Variation:** Adjust RGB offset values

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Create textured sponge dab masterpieces!*