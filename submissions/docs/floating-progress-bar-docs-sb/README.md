# Floating Progress Bar

Documentation demonstrating how to use the **Floating Progress Bar** component.

## Overview
A progress bar with a floating percentage label and an animated fill.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-fprog"><div class="ease-fprog__track"><div class="ease-fprog__fill" style="width:65%"></div></div><span class="ease-fprog__label">65%</span></div>
```

## CSS class naming conventions
- `.ease-floating-progress-bar` — root container
- `.ease-floating-progress-bar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-fprog-accent: #6366f1;
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

Closes #78645
