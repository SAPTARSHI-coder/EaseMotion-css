# Gaming Hub Skew-Active Tooltip

## Overview
A high-performance, sci-fi inspired "Skew-Active" tooltip component designed for AAA gaming inventory interfaces. This showcase demonstrates advanced CSS transformations, clipped geometric shapes, and premium glassmorphism effects while strictly utilizing EaseMotion utility classes for mounting animations. It operates entirely without JavaScript.

## Features
- **Skew-Active Architecture**: The tooltip wrapper employs a dramatic structural skew (`transform: skewX(-8deg)`) combined with a custom `clip-path` for an angular, futuristic aesthetic.
- **Counter-Skew Readability**: To preserve perfect legibility, the internal `.tooltip-content` applies an inverse skew (`transform: skewX(8deg)`), a hallmark technique of modern gaming UIs (e.g., Valorant, Apex Legends).
- **Rarity Neon Accents**: Dynamic CSS variables control border highlights, glowing connectors, and text shadows based on item rarity (Common, Rare, Epic, Legendary).
- **Pure CSS Interactions**: All hover reveals and 3D unfold transformations execute via native CSS transitions and pseudo-classes.
- **Zero Dependencies**: 100% pure HTML5 and CSS.

## Folder Structure
```
gaming-hub-skew-active-tooltip/
├── demo.html
├── style.css
└── README.md
```

## How to Run
1. Open `demo.html` in any modern web browser.
2. The demo automatically links to the root `easemotion.css` framework file and runs instantly without a server.

## EaseMotion Classes Used
- `ease-fade-in`: Applies a smooth opacity fade on load for the layout and grid items.
- `ease-slide-up`: Utilized on inventory slots to slide them up into view sequentially.
- `ease-slide-down`: Drops the top navigation bar into view dynamically.
- `ease-delay-*`: Specifically staggered delays (`100`, `200`, `300`, `400`, `500`) are applied across the grid items to create a satisfying, cascading entrance animation typical of premium loadout screens.

## Responsive Behaviour
The inventory utilizes CSS Grid with `auto-fill` and `minmax()` to ensure seamless reflowing across all device sizes. On mobile viewports (`< 768px`), the navigation header stacks cleanly and the tooltip constraints are adjusted to prevent off-screen clipping.

## Accessibility
- **Semantic HTML**: Built using structural tags like `<header>`, `<main>`, `<section>`, and `<nav>`.
- **ARIA Integration**: Includes `aria-haspopup="dialog"`, `aria-label`, and `role="tooltip"` to explicitly identify the popovers for screen readers.
- **Keyboard Navigation**: The inventory slots use `tabindex="0"` and listen to `:focus-within` and `:focus-visible` pseudo-classes to allow full keyboard traversal and tooltip reveals.
- **Reduced Motion Support**: Features a comprehensive `@media (prefers-reduced-motion: reduce)` block that strips all skewing, clipping, and transitions, reverting the tooltips to standard block popovers for users sensitive to motion and complex transformations.

## Why it fits EaseMotion CSS
This showcase proves that developers don't need heavy UI libraries or JavaScript to create highly complex, stylized components. By marrying EaseMotion's robust mounting utilities with advanced native CSS features (transforms, clipping, and custom properties), this tooltip delivers a top-tier, performant experience that fits right into an AAA gaming or futuristic SaaS product.
