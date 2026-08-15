# Neumorphic Breadcrumb

Documentation demonstrating how to use the **Neumorphic Breadcrumb** component.

## Overview
A neumorphic breadcrumb trail with soft shadows and separators that fade on hover.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<nav class="ease-nbreadcrumb" aria-label="Breadcrumb"><ol class="ease-nbreadcrumb__list"><li class="ease-nbreadcrumb__item"><a href="#">Home</a></li><li class="ease-nbreadcrumb__item"><a href="#">Library</a></li><li class="ease-nbreadcrumb__item" aria-current="page">Current</li></ol></nav>
```

## CSS class naming conventions
- `.ease-neumorphic-breadcrumb` — root container
- `.ease-neumorphic-breadcrumb__<element>` — BEM-style child elements
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
- `aria-label`, `aria-current`, `aria-expanded`, `role`, and `aria-roledescription` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #79623
