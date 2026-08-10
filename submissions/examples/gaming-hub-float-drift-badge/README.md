# EaseMotion CSS - Float-Drift Badge

A production-quality UI showcase demonstrating a dynamic CSS float-drift badge effect tailored for a premium esports/competitive gaming dashboard. Built strictly with pure HTML5, modern CSS, and EaseMotion utility classes.

## Features

- **Dynamic Float-Drift Badge**: A gentle, multi-directional continuous animation using CSS `@keyframes` that simulates a 3D drifting/floating effect to highlight featured live events.
- **Premium Cyber Aesthetics**: Integrates deep neon contrasts, `Chakra Petch` futuristic typography, and rich visual hierarchies to match AAA gaming platform standards (e.g., Riot Games, Epic Games).
- **Glassmorphism Styling**: Uses `backdrop-filter` and semi-transparent backgrounds to create stunning overlays and sidebars.
- **Responsive Layout**: A fluid layout utilizing Flexbox and CSS Grid, transitioning smoothly from a side-nav desktop view to a compact mobile interface.
- **Accessible & Inclusive**: Incorporates full semantic HTML, ARIA attributes, distinct `:focus-visible` styling for keyboard navigation, and strong contrast ratios.
- **Reduced Motion Support**: Features a comprehensive `@media (prefers-reduced-motion: reduce)` block that disables the float-drift and background scaling animations for users with motion sensitivities.
- **Zero Dependencies**: Pure HTML and CSS with no JavaScript or external frameworks required.

## Folder Structure

```text
gaming-hub-float-drift-badge/
├── demo.html     # Semantic HTML5 layout featuring the Esports Dashboard
├── style.css     # Modern CSS with custom variables and float-drift animations
└── README.md     # Documentation and overview
```

## How to Run

1. Clone or download this repository.
2. Ensure you have the core `easemotion.css` available at the root level of the repository.
3. Open `submissions/examples/gaming-hub-float-drift-badge/demo.html` in any modern web browser.
4. Observe the smooth float-drift animation on the "LIVE: GRAND FINALS" badge within the featured tournament card.

## EaseMotion Classes Used

This showcase integrates seamlessly with the EaseMotion utility ecosystem for entrance animations:

- `ease-fade-in` - Soft opacity transitions for the float-drift badge to fade in elegantly.
- `ease-slide-up` - Smooth bottom-to-top entry for the tournament cards, creating a cascading load effect.
- `ease-slide-down` - Top-to-bottom entry for the sidebar and topbar headers.
- `ease-delay-100` through `ease-delay-400` - Staggered delays orchestrating a satisfying, sequential load-in cascade across the UI.

## Responsive Behaviour

The dashboard utilizes Flexbox for the overarching application layout. On desktop screens, it provides a persistent left-side navigation panel. When the screen width drops below `900px`, the layout gracefully transitions: the sidebar becomes a top horizontal bar, and the grid scales down to accommodate mobile constraints without horizontal scrolling.

## Accessibility

- **Semantic HTML**: Proper use of `<aside>`, `<main>`, `<header>`, `<nav>`, and `<article>` tags to outline the document structure.
- **ARIA Roles & Attributes**: Implements `role="status"` for the live badge, `aria-label` for icons/buttons, and `aria-hidden="true"` on decorative SVGs.
- **Keyboard Navigation**: Distinct `:focus-visible` outlines using the `var(--accent-primary)` brand color ensure that keyboard users can easily track their tab position.
- **Motion Sensitivities**: A built-in `@media (prefers-reduced-motion: reduce)` seamlessly zeroes out transition durations and stops the infinite `floatDrift` animation to comply with accessibility standards.

## Why it fits EaseMotion CSS

This example demonstrates EaseMotion's core philosophy: high-end UI micro-interactions can be achieved elegantly through CSS alone. By combining standard EaseMotion entrance utilities with a highly customized float-drift animation, it proves that developers can create immersive, esports-grade interfaces without relying on JavaScript libraries.
