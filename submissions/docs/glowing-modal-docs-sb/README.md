# Glowing Modal

Documentation demonstrating how to use the **Glowing Modal** component.

## Overview
A modal dialog with a glowing border, a scrim backdrop, and an Escape-to-close affordance.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-gmodal-scrim" hidden></div>
<dialog class="ease-gmodal" role="dialog" aria-modal="true" aria-labelledby="gt" hidden>
  <h2 id="gt" class="ease-gmodal__title">Glowing Modal</h2>
  <p class="ease-gmodal__body">Content here.</p>
  <button class="ease-gmodal__close" aria-label="Close">×</button>
</dialog>
```

## CSS class naming conventions
- `.ease-glowing-modal` — root container
- `.ease-glowing-modal__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-gmodal-glow: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role`, and `aria-expanded` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For modals, Escape closes and returns focus to the trigger.

Closes #78739
