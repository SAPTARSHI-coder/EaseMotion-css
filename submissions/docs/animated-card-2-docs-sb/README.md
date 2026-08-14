# Animated Card

Documentation demonstrating how to use the **Animated Card** component.

## Overview
A card that fades and rises into view on load, with a hover lift and focus outline.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<article class="ease-acard2" tabindex="0"><div class="ease-acard2__media" aria-hidden="true"></div><div class="ease-acard2__body"><h3>Animated Card</h3><p>Fades in on load.</p></div></article>
```

## CSS class naming conventions
- `.ease-animated-card-2` — root container
- `.ease-animated-card-2__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-acard2-bg: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-describedby`, `role`, and `aria-pressed` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For modals/tooltips, Escape closes and returns focus to the trigger.

Closes #78846
