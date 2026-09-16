# Neumorphic Testimonial — accessibility integration

Documentation guide for the **Neumorphic Testimonial** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the neumorphic testimonial: cite with proper name, aria-label, focus-visible on any link, reduced-motion.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<blockquote class="ease-testi"><p class="ease-testi__text">A wonderful experience.</p><footer class="ease-testi__foot"><span class="ease-testi__avatar" role="img" aria-label="Avatar for Jane Doe">JD</span><cite class="ease-testi__cite">Jane Doe, CEO</cite></footer></blockquote>
```

## CSS class naming conventions
- `.ease-neumorphic-testimonial-a11y` — root container
- `.ease-neumorphic-testimonial-a11y__<element>` — BEM-style child elements
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

Closes #81589
