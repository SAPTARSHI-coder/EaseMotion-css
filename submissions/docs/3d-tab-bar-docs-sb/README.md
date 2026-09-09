# 3D Tab Bar

Documentation demonstrating how to use the **3D Tab Bar** component.

## Overview
A 3D tab bar with a perspective lift on the active tab and connected panels.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-tabs" role="tablist">
  <button class="ease-tabs__tab is-active" role="tab" aria-selected="true">Overview</button>
  <button class="ease-tabs__tab" role="tab" aria-selected="false">Activity</button>
  <button class="ease-tabs__tab" role="tab" aria-selected="false">Settings</button>
</div>
```

## CSS class naming conventions
- `.ease-3d-tab-bar` — root container
- `.ease-3d-tab-bar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-tab-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<a>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `aria-current`, `role`, and `aria-expanded` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.

Closes #79775
