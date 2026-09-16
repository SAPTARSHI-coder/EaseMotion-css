# 3D Tab Bar

Documentation demonstrating how to use the **3D Tab Bar** component.

## Overview
A 3D tab bar with perspective lift on the active tab and depth shadow.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-3dtabs" role="tablist"><button class="ease-3dtabs__tab is-active" role="tab" aria-selected="true">Home</button><button class="ease-3dtabs__tab" role="tab" aria-selected="false">About</button></div>
```

## CSS class naming conventions
- `.ease-3d-tab-bar-2` — root container
- `.ease-3d-tab-bar-2__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-3dtabs-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-describedby`, `aria-valuenow`, `role`, and `aria-selected` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #78600
