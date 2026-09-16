# Minimalist Tab Bar — basic usage

Documentation guide for the **Minimalist Tab Bar** component, focused on **basic usage**.

## Overview
Basic usage guide for the minimalist tab bar: a row of tabs with an active state and aria-selected.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-mtab" role="tablist"><button class="ease-mtab__tab is-active" role="tab" aria-selected="true">Overview</button><button class="ease-mtab__tab" role="tab" aria-selected="false">Details</button><button class="ease-mtab__tab" role="tab" aria-selected="false">Reviews</button></div>
```

## CSS class naming conventions
- `.ease-minimalist-tab-bar-basic` — root container
- `.ease-minimalist-tab-bar-basic__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-mtab-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-pressed`, `aria-expanded`, `aria-selected`, `role`, and `aria-controls` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For accordions/dropdowns, Escape closes and returns focus to the trigger.

Closes #81593
