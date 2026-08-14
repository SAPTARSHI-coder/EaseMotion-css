# Retro Pixel Hero Section

Documentation demonstrating how to use the **Retro Pixel Hero Section** component.

## Overview
accessibility integration

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
Accessibility guide for the retro pixel hero section: prefers-reduced-motion disables CRT flicker, focusable CTA with visible outline.
```

## CSS class naming conventions
- `.ease-retro-pixel-hero-a11y` — root container
- `.ease-retro-pixel-hero-a11y__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  .ease-rhero { padding: 3rem; text-align: center; background: #0f172a; color: #22d3ee; font-family: monospace; }
.ease-rhero__title { font-size: 3rem; letter-spacing: 0.1em; }
.ease-rhero__btn { margin-top: 1rem; padding: 0.6rem 1.2rem; border: 2px solid #22d3ee; background: transparent; color: #22d3ee; font-family: monospace; cursor: pointer; }
.ease-rhero__btn:focus-visible { outline: 3px solid Highlight; outline-offset: 2px; }: #6366f1;
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

Closes #81546
