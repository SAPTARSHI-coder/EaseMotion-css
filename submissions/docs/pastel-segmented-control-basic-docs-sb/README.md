# Pastel Segmented Control — basic usage

Documentation guide for the **Pastel Segmented Control** component, focused on **basic usage**.

## Overview
Basic usage guide for the pastel segmented control: a row of segments with an active pastel fill and aria-pressed.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-seg" role="group" aria-label="View mode"><button class="ease-seg__opt is-active" aria-pressed="true">List</button><button class="ease-seg__opt" aria-pressed="false">Grid</button></div>
```

## CSS class naming conventions
- `.ease-pastel-segmented-control-basic` — root container
- `.ease-pastel-segmented-control-basic__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-seg-accent: #6366f1;
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

Closes #81600
