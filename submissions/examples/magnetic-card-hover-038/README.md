# Magnetic Card Hover

A lightweight magnetic-style card interaction with subtle lift, depth, and
directional feedback on hover and keyboard focus.

## What does it do?

The component provides:

- Elevated card interaction.
- Subtle magnetic-style movement.
- Hover interaction.
- Keyboard focus interaction.
- Directional arrow movement.
- Responsive layout.
- Reduced-motion support.
- No JavaScript.
- No external libraries or assets.

## How do I use it?

Add the `ease-magnetic-card` class to an interactive card:

```html
<a class="ease-magnetic-card" href="#">
  <span class="ease-magnetic-card__number">01</span>

  <div class="ease-magnetic-card__content">
    <p class="card-category">Interaction</p>
    <h3>Motion System</h3>
    <p>
      A subtle magnetic treatment for interactive cards.
    </p>
  </div>

  <span class="ease-magnetic-card__arrow" aria-hidden="true">↗</span>
</a>
```