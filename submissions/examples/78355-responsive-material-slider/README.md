# Responsive Slider with Material Design Styling

A responsive range slider inspired by Material Design principles.

The component combines a clean track, elevated thumb, floating value
indicator, subtle elevation, and responsive spacing to create a
modern and reusable slider UI.

## Features

- Fully responsive
- Material-inspired styling
- Native HTML range input
- Floating value bubble
- Animated thumb interaction
- Active progress track
- Keyboard focus state
- Responsive example variants
- No external dependencies
- Reduced-motion support

## Files

- `demo.html`
- `style.css`

## Main Slider

```html
<label class="sr-only" for="material-slider">
  Display brightness
</label>

<input
  id="material-slider"
  class="material-slider"
  type="range"
  min="0"
  max="100"
  value="72"
/>