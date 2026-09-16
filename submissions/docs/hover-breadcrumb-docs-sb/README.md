# Hover Breadcrumb

Documentation demonstrating how to use the **Hover Breadcrumb** component.

## Overview
A breadcrumb trail with separators that animate on hover and an aria-label for the navigation.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<nav class="ease-breadcrumb" aria-label="Breadcrumb">
  <ol class="ease-breadcrumb__list">
    <li class="ease-breadcrumb__item"><a href="#">Home</a></li>
    <li class="ease-breadcrumb__item"><a href="#">Library</a></li>
    <li class="ease-breadcrumb__item" aria-current="page">Current</li>
  </ol>
</nav>
```

## CSS class naming conventions
- `.ease-hover-breadcrumb` — root container
- `.ease-hover-breadcrumb__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-crumb-accent: #6366f1;
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

Closes #79820
