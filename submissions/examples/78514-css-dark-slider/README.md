# CSS-only Slider with Dark Mode Styling

A responsive range slider component featuring neumorphic surfaces,
gradient progress tracks, custom thumbs, keyboard interaction, and
automatic dark-mode adaptation.

## Features

- CSS-only range sliders
- Native HTML range input
- Responsive layout
- Automatic dark-mode support
- Purple, cyan, and pink slider variants
- Custom slider thumb
- Gradient progress track
- Neumorphic track styling
- Tick markers
- Keyboard accessibility through native range controls
- Visible `:focus-visible` state
- `prefers-reduced-motion` support
- Pure HTML and Vanilla CSS
- No JavaScript or external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

A basic slider can be created with:

```html
<input
  class="slider__input"
  id="volume"
  type="range"
  min="0"
  max="100"
  value="72"
  aria-label="Volume"
/>