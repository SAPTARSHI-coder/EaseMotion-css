# Responsive Toggle with Retro Styling

A responsive CSS-only toggle component inspired by vintage arcade
machines, analog control panels, and classic retro interfaces.

## Features

- Responsive toggle switch
- Native checkbox interaction
- Pure HTML and CSS
- No JavaScript
- Retro arcade styling
- Chunky borders
- Hard offset shadows
- ON/OFF states
- Keyboard focus support
- Responsive indicator cards
- Compact toggle variations
- Reduced-motion support
- No external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

The main toggle uses a native checkbox:

```html
<label class="toggle">
  <input
    class="toggle__input"
    type="checkbox"
  />

  <span class="toggle__track">
    <span class="toggle__text toggle__text--off">
      OFF
    </span>

    <span class="toggle__text toggle__text--on">
      ON
    </span>

    <span class="toggle__handle">
      <span class="toggle__handle-line"></span>
      <span class="toggle__handle-line"></span>
      <span class="toggle__handle-line"></span>
    </span>
  </span>
</label>