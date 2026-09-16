# Seahorse Swirl · Seahorses Curl & Swirl 🐚

A mesmerizing animation featuring graceful seahorses curling and swirling through ocean currents with bioluminescent glow, segmented bodies, and elegant tail curls. Perfect for underwater themes, nature-inspired designs, or calming visual experiences.

## Features

- 🐚 **Graceful Seahorses** – 4 seahorses with unique colors and movements
- 🌊 **Swirling Motion** – Organic swirl patterns through ocean currents
- 🌀 **Tail Curling** – Elegant tail curl animation with sinusoidal timing
- 🎨 **8 Color Variants** – Red, Pink, Yellow, Blue, Green, Purple, Magenta, Cyan
- ⏸️ **Pause/Resume** – Toggle animation with button or Space key
- ⚡ **Speed Control** – Adjustable speed slider (1-10)
- 🔄 **Reset** – Regenerate seahorses with new colors and positions
- ✨ **Bioluminescent Glow** – Soft glow effects and glowing dots
- 🎯 **Detailed Design** – Segmented bodies, dorsal fins, snouts, and eyes

## How to Use

1. Watch seahorses gracefully swirl through the ocean
2. Press **PAUSE** or **Space** to pause/resume animation
3. Adjust **Speed** slider to control animation pace
4. Press **RESET** or **R** to regenerate with new colors
5. Each reset creates unique color combinations and positions

## Controls

| Action | Method |
|--------|--------|
| Pause/Resume | Click button / Space |
| Reset | Click reset / R key |
| Speed | Drag slider (1-10) |

## Color Variants

| Color | Main | Light | Dark |
|-------|------|-------|------|
| Red | #ff6b6b | #ff9a9a | #cc4444 |
| Pink | #ff9ff3 | #ffb8f5 | #cc66cc |
| Yellow | #feca57 | #ffe08a | #cc9933 |
| Blue | #48dbfb | #8ae5fc | #1a9bbf |
| Green | #1dd1a1 | #5eddb8 | #0f8f6f |
| Purple | #b026ff | #cc66ff | #7711aa |
| Magenta | #ff6bcd | #ff99dd | #cc4499 |
| Cyan | #00d4ff | #66ddff | #0088aa |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Seahorse Anatomy:** Segmented body (12 segments), dorsal fin, snout, eye, tail curl
- **Movement:** Swirl pattern with float oscillation and tail curl animation
- **Tail Curl:** Sinusoidal curl with 0.3-0.7 amplitude range
- **Body Rendering:** Elliptical segments with highlights and glow
- **Bioluminescence:** Glowing dots along body with independent animation
- **Performance:** 60fps with requestAnimationFrame
- **Background:** Deep ocean gradient with light rays and swirling particles

## Customization

You can easily customize:
- **Number of Seahorses:** Change `numSeahorses` variable (currently 4)
- **Colors:** Modify `randomColor()` return values
- **Swirl Radius:** Adjust `swirlRadius` in createSeahorses()
- **Tail Curl Amount:** Modify `curlAmount` (0.3-0.7 range)
- **Size:** Change `this.size = 30 + Math.random() * 20`
- **Speed Range:** Adjust slider min/max attributes

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Watch seahorses gracefully curl and swirl through the ocean!*