# Animated Slider

Documentation demonstrating how to use the **Animated Slider** component.

## Overview
A range slider with an animated fill and a thumb that scales on focus/drag.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<input type="range" class="ease-slider" min="0" max="100" value="60" aria-label="Volume" />
```

## CSS class naming conventions
- `.ease-animated-slider` — root container
- `.ease-animated-slider__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-slider-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-describedby`, `aria-current`, and `role` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For tooltips, Escape dismisses and returns focus to the trigger.

Closes #79792
