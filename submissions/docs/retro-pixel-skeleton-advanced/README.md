# Retro Pixel Skeleton – Advanced Styling

This guide demonstrates advanced styling techniques for the Retro Pixel Skeleton component, including CSS custom properties, modifier classes, pixel effects, animations, and accessibility considerations.

## Features

- Advanced pixel-style appearance
- BEM-style class naming
- Modifier classes
- CSS custom property overrides
- Pixelated gradients
- Custom animation
- Responsive styling
- Reduced-motion support
- Accessibility-friendly markup

## Basic Markup

```html
<section
  class="retro-skeleton"
  aria-label="Loading profile"
  aria-busy="true"
>
  <div class="retro-skeleton__avatar" aria-hidden="true"></div>

  <div class="retro-skeleton__content">
    <div
      class="retro-skeleton__line retro-skeleton__line--title"
      aria-hidden="true"
    ></div>

    <div
      class="retro-skeleton__line"
      aria-hidden="true"
    ></div>

    <div
      class="retro-skeleton__line retro-skeleton__line--short"
      aria-hidden="true"
    ></div>
  </div>
</section>