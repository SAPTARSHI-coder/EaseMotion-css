# CSS Bounce-Pulse Accordion

A lightweight, responsive accordion component designed for minimalist tech layouts.

The component combines a smooth bounce-style expansion with a subtle pulse glow when an accordion item becomes active.

## Features

- Pure HTML and CSS
- No JavaScript required
- Uses native `<details>` and `<summary>` elements
- Bounce-style opening interaction
- Subtle pulse glow on the active item
- Responsive across desktop, tablet, and mobile
- Keyboard-friendly native controls
- CSS custom properties for easy customization
- `prefers-reduced-motion` support
- No external dependencies

## Usage

Add the `bounce-pulse-accordion` class to a `<details>` element.

```html
<details class="bounce-pulse-accordion">
  <summary class="bounce-pulse-accordion__trigger">
    <span class="trigger-content">
      <strong>Motion System</strong>
      <span>Explore the animation behavior</span>
    </span>
  </summary>

  <div class="bounce-pulse-accordion__content">
    <div class="content-inner">
      <p>
        Your accordion content goes here.
      </p>
    </div>
  </div>
</details>