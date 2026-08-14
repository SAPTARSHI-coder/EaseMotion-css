# Glassmorphism Team Card — advanced styling

Documentation guide for the **Glassmorphism Team Card** component, focused on **advanced styling**.

## Overview
Advanced styling for the glassmorphism team card: a frosted overlay with a gradient ring avatar and a hover lift.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<article class="ease-team"><div class="ease-team__avatar" role="img" aria-label="Avatar">AB</div><h3 class="ease-team__name">Ada Bryn</h3><p class="ease-team__role">Engineer</p></article>
```

## CSS class naming conventions
- `.ease-glassmorphism-team-card-advanced` — root container
- `.ease-glassmorphism-team-card-advanced__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-team-bg: #6366f1;
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

Closes #81583
