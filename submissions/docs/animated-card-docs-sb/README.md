# Animated Card

Documentation demonstrating how to use the **Animated Card** component.

## Overview
A card that fades and slides in on load with a hover lift and focus outline.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<article class="ease-acard" tabindex="0"><div class="ease-acard__media" aria-hidden="true"></div><div class="ease-acard__body"><h3 class="ease-acard__title">Animated Card</h3><p class="ease-acard__text">Fades in on load.</p></div></article>
```

## CSS class naming conventions
- `.ease-animated-card` — root container
- `.ease-animated-card__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-acard-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, and `role` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #78700
