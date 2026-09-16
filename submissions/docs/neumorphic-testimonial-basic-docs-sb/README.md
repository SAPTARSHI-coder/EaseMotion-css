# Neumorphic Testimonial — basic usage

Documentation guide for the **Neumorphic Testimonial** component, focused on **basic usage**.

## Overview
A neumorphic testimonial card with soft inset/outset shadows, a quote, and an attributed author.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<figure class="ease-testimonial">
  <blockquote class="ease-testimonial__quote">"Fantastic work."</blockquote>
  <figcaption class="ease-testimonial__author">— Grace Hopper</figcaption>
</figure>
```

## CSS class naming conventions
- `.ease-{slug}` — root container
- `.ease-{slug}__<element>` — BEM-style child elements
- `.is-active`, `.is-complete`, `.is-up`, `.is-down` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-neu-bg: #6366f1;
  --ease-neu-shadow-light: #6366f1;
  --ease-neu-shadow-dark: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- Decorative icons are hidden from AT with `aria-hidden="true"` or `alt=""`.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For popovers/menus, Escape closes and returns focus to the trigger.

Closes #81586
