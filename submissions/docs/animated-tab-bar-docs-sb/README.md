# Animated Tab Bar

Documentation demonstrating how to use the **Animated Tab Bar** component.

## Overview
A tab bar with an animated sliding indicator that moves under the active tab.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-atab" role="tablist"><button class="ease-atab__tab is-active" role="tab" aria-selected="true">A</button><button class="ease-atab__tab" role="tab" aria-selected="false">B</button><button class="ease-atab__tab" role="tab" aria-selected="false">C</button></div>
```

## CSS class naming conventions
- `.ease-animated-tab-bar` — root container
- `.ease-animated-tab-bar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-atab-accent: #6366f1;
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

Closes #78583
