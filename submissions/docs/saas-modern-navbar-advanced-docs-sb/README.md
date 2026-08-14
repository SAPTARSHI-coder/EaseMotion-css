# SaaS Modern Navbar — advanced styling

Documentation guide for the **SaaS Modern Navbar** component, focused on **advanced styling**.

## Overview
Advanced styling for the SaaS modern navbar: a sticky nav with a glass blur, link underline grow, and a gradient CTA.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<nav class="ease-smn"><span class="ease-smn__logo">SaaS</span><div class="ease-smn__links"><a href="#">Product</a><a href="#">Pricing</a></div><button class="ease-smn__cta">Sign up</button></nav>
```

## CSS class naming conventions
- `.ease-saas-modern-navbar-advanced` — root container
- `.ease-saas-modern-navbar-advanced__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-smn-accent: #6366f1;
}
```

## Accessibility
- Interactive controls use native elements where possible.
- `:focus-visible` outlines for keyboard users.
- `aria-label`, `aria-current`, `aria-modal`, `role` used where appropriate.
- `prefers-reduced-motion` disables transitions/animations.

## Keyboard interaction
- Tab to move focus; Enter/Space to activate; Escape closes modals.

Closes #81640
