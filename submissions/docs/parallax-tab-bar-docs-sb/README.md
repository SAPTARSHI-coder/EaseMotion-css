# Parallax Tab Bar

Documentation demonstrating how to use the **Parallax Tab Bar** component.

## Overview
A tab bar where the active tab lifts in 3D (parallax) with an aria-selected state.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<div class="ease-ptab" role="tablist"><button class="ease-ptab__tab is-active" role="tab" aria-selected="true">A</button><button class="ease-ptab__tab" role="tab" aria-selected="false">B</button></div>
```

## CSS class naming conventions
- `.ease-parallax-tab-bar` — root container
- `.ease-parallax-tab-bar__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-ptab-accent: #6366f1;
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

Closes #79842
