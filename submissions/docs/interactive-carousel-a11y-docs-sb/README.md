# Interactive Carousel — accessibility integration

Documentation guide for the **Interactive Carousel** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the interactive carousel: region role, aria-roledescription=carousel, slide labelling, pause-on-focus, and arrow-key navigation.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<section class="ease-carousel" role="region" aria-roledescription="carousel" aria-label="Highlights">
  <div class="ease-carousel__slide" role="group" aria-roledescription="slide" aria-label="1 of 3">A</div>
  <button class="ease-carousel__next" aria-label="Next slide">→</button>
</section>
```

## CSS class naming conventions
- `.ease-interactive-carousel-a11y` — root container
- `.ease-interactive-carousel-a11y__<element>` — BEM-style child elements
- `.ease-interactive-carousel-a11y--<variant>` — appearance modifier classes
- `.is-active`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-carousel-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-current`, `aria-pressed`, `aria-label`, and `role` attributes are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons/chips.
- For popovers/drawers, Escape closes and returns focus to the trigger.

Closes #81563
