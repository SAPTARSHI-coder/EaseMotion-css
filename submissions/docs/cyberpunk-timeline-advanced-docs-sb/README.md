# Cyberpunk Timeline — advanced styling

Documentation guide for the **Cyberpunk Timeline** component, focused on **advanced styling**.

## Overview
Advanced styling guide for the cyberpunk timeline: glitch text effects, alternating left/right layout, and glowing connectors.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<ol class="ease-timeline ease-timeline--alternate">
  <li class="ease-timeline__item is-left"><time class="ease-timeline__date">2084</time><p class="ease-timeline__text">Release v1</p></li>
  <li class="ease-timeline__item is-right"><time class="ease-timeline__date">2087</time><p class="ease-timeline__text">Release v2</p></li>
</ol>
```

## CSS class naming conventions
- `.ease-cyberpunk-timeline-advanced` — root container
- `.ease-cyberpunk-timeline-advanced__<element>` — BEM-style child elements
- `.ease-cyberpunk-timeline-advanced--<variant>` — appearance modifier classes
- `.is-active`, `.is-today`, `.is-selected`, `.is-left`, `.is-right` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-timeline-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements (`<button>`, `<input>`) where possible.
- `:focus-visible` outlines are provided for keyboard users.
- `aria-label`, `role`, `aria-modal`, `aria-pressed`, and `aria-describedby` are used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus between controls.
- Enter/Space to activate buttons.
- For popovers/drawers, Escape closes and returns focus to the trigger.

Closes #81531
