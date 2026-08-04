# CSS Scale-Hover Pricing Table for Fintech Dashboard Layouts

An interactive, pure CSS scale-hover pricing table designed specifically for modern Fintech dashboards, cryptocurrency exchanges, and SaaS enterprise platforms.

## Key Features

- **Pure CSS Interactive Billing Switcher:** Seamlessly toggles between monthly and annual billing calculations using CSS radio input state selectors (`:checked ~`) without needing JavaScript.
- **Scale-Hover Elevation Matrix:** Elevates hovered cards with smooth `transform: scale(1.05) translateY(-6px)` and dynamic neon glowing box-shadows.
- **Studio Focus Lighting:** When hovering over the pricing grid, non-selected sibling cards automatically dim (`opacity: 0.65`) and shrink slightly (`scale(0.96)`), directing visual focus to the active plan.
- **Fully Responsive Grid:** Automatically adapts from a 3-column desktop layout down to a clean single-column mobile view.
- **Accessible & Motion-Aware:** Includes ARIA attributes, semantic HTML5 elements (`<article>`, `<header>`, `<footer>`), focus rings, and explicit `@media (prefers-reduced-motion: reduce)` rules.

## CSS Custom Properties

Customize the theme easily using CSS variables exposed on `:root`:

```css
:root {
    --bg-dark: #0a0d14;
    --bg-card: rgba(16, 22, 34, 0.75);
    --primary-blue: #3b82f6;
    --primary-cyan: #06b6d4;
    --accent-purple: #8b5cf6;
    --scale-hover: 1.05;
    --scale-dim: 0.96;
    --shadow-hover: 0 20px 40px -15px rgba(59, 130, 246, 0.3);
}
```

## How to Integrate

1. Include `style.css` inside your HTML page head.
2. Embed the structure from `demo.html` into your application container.
3. Update tier details, feature checklists, and pricing amounts.
