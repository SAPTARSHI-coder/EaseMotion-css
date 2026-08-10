# Flip Time Picker - Startup Aesthetic (Pure CSS)

A highly polished, native-feeling "Drum/Wheel" Time Picker styled for modern Startup and SaaS interfaces. It achieves the tactile, physics-based "flip" and lock mechanism entirely through CSS Scroll Snapping, requiring zero JavaScript to handle the scrolling physics or state locking.

## Features
- 🛞 **Native Physics**: Utilizes `scroll-snap-type: y mandatory` to give the columns a weighty, physical feel that automatically locks onto the nearest time slot.
- 🪞 **Cylindrical Illusion**: Uses a CSS `mask-image` linear gradient to fade out the top and bottom of the picker, creating a 3D cylindrical "flip" illusion.
- 🏢 **Startup Aesthetic**: Pre-configured with clean spacing, soft borders, and high-trust blue accents.
- ⚡ **Zero JavaScript**: No complex event listeners or physics libraries required; relies entirely on the browser's native scroll engine.

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--picker-height` | `150px` | The total visible height of the time picker wheel. |
| `--item-height` | `50px` | The height of a single time slot (determines snap distance). |
| `--highlight-bg` | `#EFF6FF` | The color of the center selection bar. |

## Usage
Simply drop the HTML structure into your project and link the stylesheet. 

**Important Note for Developers:** Because this operates via native scrolling, to extract the chosen time for a backend submission, you would attach a simple scroll event listener in JS to determine which `.picker-item` is currently occupying the center intersection, OR layer invisible radio buttons over the snapping points. This CSS component handles 100% of the UI physics!