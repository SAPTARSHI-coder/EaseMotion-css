# Hover Modal

Documentation demonstrating how to use the **Hover Modal** component.

## Overview
A modal-like card that lifts and glows on hover/focus, with a scrim and close button.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-hmodal"><div class="ease-hmodal__card" tabindex="0"><h2 class="ease-hmodal__title">Hover Modal</h2><button class="ease-hmodal__close" aria-label="Close">×</button></div></div>
```

## CSS class naming conventions
- `.ease-hover-modal` — root container
- `.ease-hover-modal__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-hmodal-glow: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-expanded`, `role`, and `aria-roledescription` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #79674
