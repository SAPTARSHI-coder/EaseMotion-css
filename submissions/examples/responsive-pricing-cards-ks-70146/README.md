# Responsive Pricing Cards

## Overview

A responsive pricing-card layout featuring three realistic plan tiers, built entirely with pure HTML and CSS. The component is designed for the EaseMotion CSS showcase, providing a modern, developer-friendly interface that stacks gracefully on mobile devices.

## Features

- Pure HTML/CSS
- Three realistic pricing plans (Starter, Professional, and Enterprise)
- Featured "Most Popular" plan visually highlighted
- Responsive CSS Grid layout
- Cards stack vertically into a single column on mobile and tablet displays
- Subtle hover interactions and elevation changes
- Keyboard accessibility with visible focus rings
- Focus-visible states for Call-To-Action (CTA) buttons
- Reduced-motion support (`prefers-reduced-motion`)
- CSS custom properties (variables) with basic dark mode support
- No JavaScript
- No external dependencies, libraries, or fonts

## Usage

The component is structured using standard HTML5 semantic elements and CSS Grid. 

```html
<div class="pricing-grid">
    <!-- Standard Card -->
    <article class="pricing-card">
        <!-- Content -->
    </article>

    <!-- Featured Card -->
    <article class="pricing-card pricing-card--featured">
        <div class="popular-badge">Most Popular</div>
        <!-- Content -->
    </article>
</div>
```

To modify or add plans, simply edit the `<article class="pricing-card">` nodes. The CSS Grid layout is pre-configured to adapt automatically.

## CSS Custom Properties

| Variable | Purpose |
|----------|---------|
| `--page-bg` | Page background color |
| `--surface` | Default card background surface |
| `--surface-featured` | Featured card background surface |
| `--text-primary` | Primary heading and text color |
| `--text-secondary` | Secondary text (descriptions, lists) |
| `--border` | Standard card border |
| `--border-featured` | Featured card highlighted border |
| `--accent` | Primary accent color (icons, links) |
| `--accent-hover` | Hover state for accent colors |
| `--accent-strong` | Active state accent color |
| `--button-bg` | Default button background |
| `--button-text` | Default button text color |
| `--radius` | Component border radius |
| `--shadow` | Base card elevation |
| `--shadow-featured` | Featured card elevation |
| `--transition` | Universal transition timing |

## Responsive Behavior

- **Desktop ( > 900px )**: Cards appear in a three-column horizontal layout using CSS Grid (`grid-template-columns: repeat(3, minmax(0, 1fr))`). The featured card utilizes `transform: scale(1.05)` to subtly pop out from the others.
- **Tablet & Mobile ( <= 900px )**: Cards adapt to the available width by stacking vertically in a single column (`grid-template-columns: 1fr`) restricted to a reasonable `max-width`. The scale transformation on the featured card is removed to prevent horizontal overflow and layout clipping.

## Accessibility

- **Semantic Markup**: Employs `<section>`, `<article>`, `<header>`, and proper heading hierarchies (`<h1>`, `<h2>`). The feature lists use standard `<ul>` and `<li>` elements rather than arbitrary `<div>`s.
- **Featured Plan Validation**: The "Most Popular" plan incorporates a clear text badge and a thicker border, ensuring the featured status is communicated effectively regardless of color perception.
- **Keyboard Focus**: CTA links provide a high-contrast `outline` when focused with the keyboard via `:focus-visible`.
- **Reduced Motion**: Disables elevation hover effects and transform scaling when the user's OS requests reduced motion.
