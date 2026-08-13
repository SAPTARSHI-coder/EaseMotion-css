# Hover Tooltip with Neumorphism Styling

A responsive CSS-only tooltip component with a soft Neumorphic visual
style, directional placement, subtle motion, and accessible keyboard
interaction.

## Features

- Hover tooltip interaction
- Keyboard focus support
- Five tooltip placements
- Top, right, left, and bottom positioning
- Neumorphic raised surfaces
- Inset and outer shadow effects
- Responsive mobile layout
- Soft component transitions
- Contextual tooltip content
- Semantic buttons
- `aria-describedby` support
- `role="tooltip"`
- `prefers-reduced-motion` support
- No JavaScript
- No external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

Basic structure:

```html
<div class="tooltip-wrap tooltip-wrap--top">
  <button
    class="tooltip-trigger"
    type="button"
    aria-describedby="tooltip-example"
  >
    Hover me
  </button>

  <span
    class="tooltip"
    id="tooltip-example"
    role="tooltip"
  >
    <strong>Helpful information</strong>
    <small>
      Extra context for the current control.
    </small>

    <span
      class="tooltip__arrow"
      aria-hidden="true"
    ></span>
  </span>
</div>