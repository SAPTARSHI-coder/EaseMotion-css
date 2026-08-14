# Retro Pixel Hero Section — advanced styling

Documentation guide for the **Retro Pixel Hero Section** component, focused on **advanced styling**.

## Overview
Advanced styling guide for the retro pixel hero section: pixel font, scanline overlay, and CRT flicker animation.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<header class="ease-hero">
  <h1 class="ease-hero__title">INSERT COIN</h1>
  <p class="ease-hero__subtitle">Press Start to Begin</p>
</header>
```

## CSS class naming conventions
- `.ease-retro-pixel-hero-advanced` — root container
- `.ease-retro-pixel-hero-advanced__<element>` — BEM-style child elements
- `.ease-retro-pixel-hero-advanced--<variant>` — appearance modifier classes
- `.is-active`, `.is-today`, `.is-selected`, `.is-left`, `.is-right` — state modifier classes

## Custom CSS variable overrides
```css
:root {
  --ease-hero-accent: #6366f1;
  --ease-hero-bg: #6366f1;
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

Closes #81545
