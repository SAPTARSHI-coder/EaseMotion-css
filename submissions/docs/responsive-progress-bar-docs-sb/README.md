# Responsive Progress Bar

Documentation demonstrating how to use the **Responsive Progress Bar** component.

## Overview
A progress bar that adapts its height and width on small screens with a value label.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-rprog" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"><div class="ease-rprog__fill"></div><span class="ease-rprog__label">40%</span></div>
```

## CSS class naming conventions
- `.ease-responsive-progress-bar` — root container
- `.ease-responsive-progress-bar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-rprog-accent: #6366f1;
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

Closes #78778
