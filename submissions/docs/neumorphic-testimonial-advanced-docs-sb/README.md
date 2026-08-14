# Neumorphic Testimonial — advanced styling

Documentation guide for the **Neumorphic Testimonial** component, focused on **advanced styling**.

## Overview
Advanced styling for the neumorphic testimonial: an inset quote block, raised avatar, and a quote mark.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<blockquote class="ease-testi"><span class="ease-testi__quote" aria-hidden="true">“</span><p class="ease-testi__text">A wonderful experience.</p><footer class="ease-testi__foot"><span class="ease-testi__avatar" role="img" aria-label="Avatar">JD</span><cite class="ease-testi__cite">Jane Doe</cite></footer></blockquote>
```

## CSS class naming conventions
- `.ease-neumorphic-testimonial-advanced` — root container
- `.ease-neumorphic-testimonial-advanced__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-neu-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-pressed`, `aria-expanded`, `aria-selected`, `role`, and `aria-controls` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For accordions/dropdowns, Escape closes and returns focus to the trigger.

Closes #81587
