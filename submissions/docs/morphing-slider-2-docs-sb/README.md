# Morphing Slider

Documentation demonstrating how to use the **Morphing Slider** component.

## Overview
A range slider whose thumb morphs between shapes as it moves and scales on focus.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<input type="range" class="ease-mslider2" min="0" max="100" value="50" aria-label="Morphing slider" />
```

## CSS class naming conventions
- `.ease-morphing-slider-2` — root container
- `.ease-morphing-slider-2__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-mslider2-accent: #6366f1;
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

Closes #79680
