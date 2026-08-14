# Nested Reveal · Layers Peel Back to Reveal 🧅

An interactive nested reveal where layers peel back to reveal hidden content beneath. Click layers to peel them away and discover what's underneath!

## Features

- 🧅 **Nested Layers** – 5-8 layers stacked on top of each other
- 🔄 **Peel Animation** – Smooth peeling effect with translation and rotation
- 🎨 **Unique Content** – Each layer has different colors and shapes
- 🎯 **Click Interaction** – Click layers to peel them back
- ✨ **Floating Layers** – Peeled layers float away
- 🎉 **Completion** – All layers revealed message
- 🔄 **Reset** – Generate new layers
- ⏸️ **Pause/Resume** – Toggle animation
- 📱 **Touch Support** – Works on mobile devices

## How to Use

1. **Click** on any layer to peel it back
2. Watch the layer peel away with a smooth animation
3. Reveal the layer beneath with different content
4. Continue peeling layers to reveal everything
5. When all layers are peeled, a completion message appears
6. Press **RESET** for a new set of layers
7. Press **Space** or click **PAUSE** to pause/resume animation

## Controls

| Action | Method |
|--------|--------|
| Peel Layer | Click layer |
| Reset Layers | Reset button / R key |
| Pause/Resume | Space / Pause button |

## Visual Features

| Feature | Description |
|---------|-------------|
| Nested Layers | 5-8 layers with different sizes |
| Peel Animation | Smooth translation and rotation |
| Unique Content | Each layer has different colors and shapes |
| Floating Effect | Peeled layers drift away |
| Depth Shadow | Shadows between layers |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Layers:** 5-8 layers with nested sizes
- **Peel Animation:** Progressive translation and rotation
- **Layer Content:** Generated images with colors and shapes
- **Interaction:** Click-based layer peeling
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Layer Count:** Modify `numLayers` range (5-8)
- **Layer Size:** Adjust size calculation
- **Peel Speed:** Change `speed` in update method (0.04)
- **Colors:** Modify hue ranges in `generateLayerImage()`
- **Animation:** Adjust translation and rotation values

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Peel back layers to reveal what's hidden beneath!*