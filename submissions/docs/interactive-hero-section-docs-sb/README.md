# Interactive Hero Section

Documentation demonstrating how to use the **Interactive Hero Section** component.

## Overview
A hero section with a gradient background, a headline that fades in, and CTA buttons with hover glow.

## Files
- `demo.html` — copy-paste HTML markup example
- `style.css` — CSS with class naming conventions and modifier classes
- `README.md` — this guide

## HTML example
```html
<header class="ease-hero">
  <h1 class="ease-hero__title">Build Faster</h1>
  <p class="ease-hero__subtitle">Composable CSS animations for every project.</p>
  <div class="ease-hero__cta">
    <button class="ease-hero__btn">Get Started</button>
    <a class="ease-hero__link" href="#">Docs</a>
  </div>
</header>
```

## CSS class naming conventions
- `.ease-interactive-hero-section` — root container
- `.ease-interactive-hero-section__<element>` — BEM-style child elements
- `.is-active` — state modifier class

## Custom CSS variable overrides
```css
:root {
  --ease-hero-bg: #6366f1;
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

Closes #79788
