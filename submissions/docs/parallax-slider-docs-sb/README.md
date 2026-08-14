# Parallax Slider

Documentation demonstrating how to use the **Parallax Slider** component.

## Overview
A range slider whose thumb has a parallax shadow that trails its movement.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<input type="range" class="ease-pslider" min="0" max="100" value="50" aria-label="Parallax slider" />
```

## CSS class naming conventions
- `.ease-parallax-slider` — root container
- `.ease-parallax-slider__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-pslider-accent: #6366f1;
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

Closes #78747
