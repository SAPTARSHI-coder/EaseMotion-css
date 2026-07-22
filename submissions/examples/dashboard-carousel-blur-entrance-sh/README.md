# Dashboard Carousel — Blur Entrance

A pure CSS (zero JavaScript) carousel with a smooth blur-entrance transition, styled for dashboard/analytics interfaces.

## What does this do?
A metric carousel (Revenue / Active Users / Churn Rate) that transitions between slides using a blur + scale + fade "blur-entrance" effect. Built entirely with the CSS radio-input technique — no JavaScript required.

## How is it used?
Open `demo.html`. Click the dots below the card, or Tab to them and use Arrow keys, to switch between slides — each transition blurs out the old slide and blurs in the new one.

Customize timing, easing, or scale via CSS custom properties:
```css
.ease-dc-card {
  --ease-dc-duration: 0.5s;
  --ease-dc-easing: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-dc-scale: 0.94;
}
```

## Why is it useful?
Zero-JS animated carousels are lightweight, performant, and framework-agnostic — ideal for dashboards and analytics widgets where a JS carousel library would be overkill. Exposed CSS custom properties let developers tune the feel without editing core styles, and `prefers-reduced-motion` is respected. Fits EaseMotion's animation-first, no-dependency philosophy.
