# Ladybug Crawl · Ladybug Crawls Along Edge 🐞

An interactive ladybug simulation featuring realistic crawling along edges and paths, with animated legs, antennae, spots, and lifelike movement. Click or press Space to change the ladybug's direction!

## Features

- 🐞 **Realistic Ladybug** – Detailed body with spots, head, eyes, antennae, and legs
- 🚶 **Edge Crawling** – Crawls along leaf edges and paths with smooth movement
- 🦵 **Animated Legs** – Legs move with realistic walking motion
- 📡 **Animated Antennae** – Antennae sway with lifelike movement
- 🎮 **Direction Control** – Click or press Space to reverse direction
- 🎨 **Detailed Design** – Red shell with black spots, shell highlight
- 🎮 **Speed Control** – Adjust animation speed (1-10)
- ⏸️ **Pause/Resume** – Toggle animation with button
- 🔄 **Reset** – Reset ladybug to starting position
- 🌿 **Leaf Environment** – Garden background with leaf veins

## How to Use

1. Watch the ladybug crawl along the edge path
2. **Click** on the canvas or press **Space** to change direction
3. See legs and antennae animate with realistic motion
4. Press **PAUSE** to pause/resume animation
5. Adjust **Speed** slider to control animation pace
6. Press **RESET** or **R** to reset

## Controls

| Action | Method |
|--------|--------|
| Change Direction | Click canvas / Space |
| Pause/Resume | Click button |
| Reset | Click reset / R key |
| Speed | Drag slider (1-10) |

## Visual Features

| Feature | Description |
|---------|-------------|
| Body | Red shell with gradient and wing line |
| Spots | 6 black spots arranged on shell |
| Head | Black head with eyes |
| Antennae | Animated antennae with sway |
| Legs | 6 legs with walking animation |
| Shell Highlight | Subtle highlight for realism |
| Environment | Leaf-themed background with veins |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Path Following:** Edge path with generated variation and bumps
- **Leg Animation:** Sinusoidal leg movement with phase offset
- **Antennae:** Sinusoidal sway with independent phase
- **Movement:** Smooth interpolation along path segments
- **Direction Control:** Reverse path direction on click
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Ladybug Size:** Modify `this.size = 18`
- **Speed:** Adjust `this.speed = 0.8`
- **Leg Speed:** Modify `this.legSpeed = 0.08`
- **Path Points:** Change margin and variation in `generatePath()`
- **Spot Positions:** Modify spots array in draw method

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Watch the ladybug crawl along the edge!*