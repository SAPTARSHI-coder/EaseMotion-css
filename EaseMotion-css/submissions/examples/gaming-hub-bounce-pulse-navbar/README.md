# EaseMotion CSS - Bounce-Pulse Navbar

A production-quality UI showcase demonstrating a dynamic CSS bounce-pulse navbar interaction for a premium esports/gaming dashboard layout. Built strictly with pure HTML5, modern CSS, and EaseMotion utility classes.

## Features

- **Dynamic Bounce-Pulse Effect**: A continuous, smooth, breathing animation (combining `transform` and `box-shadow`) on the active menu item to draw attention seamlessly.
- **Esports & Cyber Aesthetics**: Integrates neon colors, gradients, and `Orbitron` typography to mimic the look of top-tier AAA gaming dashboards.
- **Glassmorphism Header**: A frosted glass sticky navbar providing a beautiful overlay against dark, glowing gradients using `backdrop-filter`.
- **Responsive Layout**: Fluidly adapts to smaller screens. The main navigation converts into a scrollable horizontal flexbox on mobile devices.
- **Accessible & Inclusive**: Incorporates full semantic HTML roles, proper ARIA labels, distinct `:focus-visible` styling for keyboard navigation, and structural contrast.
- **Reduced Motion Support**: Features a comprehensive `@media (prefers-reduced-motion: reduce)` block that disables the bounce-pulse and other transitions for users with motion sensitivities.
- **Zero Dependencies**: Pure HTML and CSS with absolutely no JavaScript or external frameworks required.

## Folder Structure

```text
gaming-hub-bounce-pulse-navbar/
├── demo.html     # Semantic HTML5 layout featuring the Dashboard Navbar
├── style.css     # Modern CSS with custom properties and the bounce-pulse keyframes
└── README.md     # Documentation and overview
```

## How to Run

1. Clone or download this repository.
2. Ensure you have the core `easemotion.css` available at the root level of the repository.
3. Open `submissions/examples/gaming-hub-bounce-pulse-navbar/demo.html` in any modern web browser.
4. Observe the smooth bounce-pulse animation on the active "Tournaments" tab, and navigate using the `Tab` key to verify accessibility features.

## EaseMotion Classes Used

This showcase integrates seamlessly with the EaseMotion utility ecosystem for entrance animations:

- `ease-fade-in` - Soft opacity transitions for the logo, user actions, and page content.
- `ease-slide-down` - Smooth top-to-bottom entry for the entire header and individual navigation items.
- `ease-delay-100` through `ease-delay-600` - Staggered delays orchestrating a satisfying, sequential load-in cascade across the navbar.

## Responsive Behaviour

The header layout utilizes Flexbox to keep elements aligned on desktop. When the screen width drops below `900px`, a media query triggers `flex-wrap` and reorders the navigation to drop below the logo and user profile. The navigation links remain fully accessible through a horizontally scrollable container, maintaining the premium feel on mobile without requiring complex JavaScript hamburger menus.

## Accessibility

- **Semantic HTML**: Utilizes `<header>`, `<nav>`, `<ul>`, `<li>`, and native `<button>` elements.
- **ARIA Roles & Attributes**: Implements `role="menubar"`, `role="menuitem"`, `aria-current="page"`, and explicit `aria-label` attributes for screen readers. Decorative SVG icons use `aria-hidden="true"`.
- **Keyboard Navigation**: Distinct, highly visible `:focus-visible` outlines using the `var(--neon-cyan)` brand color ensure that keyboard users have a seamless experience.
- **Motion Sensitivities**: A built-in `@media (prefers-reduced-motion: reduce)` seamlessly zeroes out all transition durations and completely halts the infinite `bouncePulse` animation.

## Why it fits EaseMotion CSS

This example perfectly demonstrates EaseMotion's philosophy: complex, high-end UI micro-interactions can be achieved elegantly through CSS alone. By combining standard EaseMotion entrance utilities with a custom, tailored bounce-pulse animation, it proves that modern frontend development does not need to rely on heavy JavaScript libraries to produce stunning, production-ready interfaces.
