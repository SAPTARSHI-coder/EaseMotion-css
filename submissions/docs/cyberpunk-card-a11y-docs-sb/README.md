# Cyberpunk Card — accessibility integration

Documentation guide for the **Cyberpunk Card** component, focused on **accessibility integration**.

## Overview
Accessibility guide for the cyberpunk card: role=article, aria-label, focus-visible, reduced-motion disables glitch.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<article class="ease-ccard" role="article" aria-label="Netrunner card" tabindex="0"><h3 class="ease-ccard__title">NETRUNNER</h3><p class="ease-ccard__text">Cyberpunk card.</p></article>
```

## CSS class naming conventions
- `.ease-cyberpunk-card-a11y` — root container
- `.ease-cyberpunk-card-a11y__<element>` — BEM-style child elements
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

Closes #81635
