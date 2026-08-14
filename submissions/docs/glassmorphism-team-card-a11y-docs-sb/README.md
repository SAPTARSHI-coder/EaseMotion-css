# Glassmorphism Team Card — accessibility integration

Documentation guide for the **Glassmorphism Team Card** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the glassmorphism team card: role=group, aria-label on avatar, focus-visible and reduced-motion.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<article class="ease-team" role="group" aria-label="Team member Ada"><div class="ease-team__avatar" role="img" aria-label="Avatar for AB">AB</div><h3 class="ease-team__name">Ada Bryn</h3><p class="ease-team__role">Engineer</p><a class="ease-team__link" href="#">Contact</a></article>
```

## CSS class naming conventions
- `.ease-glassmorphism-team-card-a11y` — root container
- `.ease-glassmorphism-team-card-a11y__<element>` — BEM-style child elements
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

Closes #81585
