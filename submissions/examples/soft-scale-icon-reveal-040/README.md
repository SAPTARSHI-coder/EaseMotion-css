# Soft Scale Icon Reveal

A lightweight icon interaction where a supporting icon softly scales and
fades into view when its parent element is hovered or focused.

## What does it do?

The component provides:

- Soft icon scale reveal.
- Opacity transition.
- Hover interaction.
- Keyboard focus interaction.
- Subtle parent lift.
- Responsive layout.
- Reduced-motion support.
- No JavaScript.
- No external libraries or assets.

## How do I use it?

Add the `ease-scale-icon` class to an interactive element:

```html
<a class="ease-scale-icon" href="#">
  <span class="ease-scale-icon__content">
    <span class="action-label">Explore</span>
    <span class="action-description">
      Discover more information.
    </span>
  </span>

  <span class="ease-scale-icon__icon" aria-hidden="true">↗</span>
</a>
```