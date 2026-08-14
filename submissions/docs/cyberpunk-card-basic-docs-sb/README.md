# Cyberpunk Card — basic usage

Documentation guide for the **Cyberpunk Card** component, focused on **basic usage**.

## Overview
Basic usage guide for the cyberpunk card: a dark card with neon borders and glitch accents.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<article class="ease-ccard"><h3 class="ease-ccard__title">NETRUNNER</h3><p class="ease-ccard__text">Cyberpunk card.</p></article>
```

## CSS class naming conventions
- `.ease-cyberpunk-card-basic` — root container
- `.ease-cyberpunk-card-basic__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-ccard-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role` used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus; Enter/Space to activate; Escape closes modals.

Closes #81633
