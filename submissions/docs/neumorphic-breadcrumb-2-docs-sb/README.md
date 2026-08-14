# Neumorphic Breadcrumb

Documentation demonstrating how to use the **Neumorphic Breadcrumb** component.

## Overview
A neumorphic breadcrumb with soft raised items and separators on a soft surface.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<nav class="ease-nbc2" aria-label="Breadcrumb"><ol class="ease-nbc2__list"><li class="ease-nbc2__item"><a href="#">Home</a></li><li class="ease-nbc2__item"><a href="#">Library</a></li><li class="ease-nbc2__item" aria-current="page">Current</li></ol></nav>
```

## CSS class naming conventions
- `.ease-neumorphic-breadcrumb-2` — root container
- `.ease-neumorphic-breadcrumb-2__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-neu-bg: #6366f1;
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

Closes #79614
