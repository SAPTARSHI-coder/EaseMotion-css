# Animated Modal

Documentation demonstrating how to use the **Animated Modal** component.

## Overview
A modal dialog that scales+fades in, with a scrim backdrop and a close button.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-amodal-scrim" hidden></div>
<dialog class="ease-amodal" role="dialog" aria-modal="true" aria-labelledby="amt" hidden>
  <h2 id="amt" class="ease-amodal__title">Animated Modal</h2>
  <button class="ease-amodal__close" aria-label="Close">×</button>
</dialog>
```

## CSS class naming conventions
- `.ease-animated-modal` — root container
- `.ease-animated-modal__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-amodal-bg: #6366f1;
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

Closes #78869
