# EaseMotion CSS - Glitch-Flicker Tabs

A production-quality UI showcase demonstrating a dynamic CSS glitch-flicker tab navigation system tailored for a premium cyberpunk/esports dashboard. Built strictly with pure HTML5, modern CSS, and EaseMotion utility classes—requiring absolutely no JavaScript.

## Features

- **Dynamic Glitch-Flicker Tabs**: An advanced CSS-only tab system using the radio-button hack (`:checked`), where the active tab displays a high-end chromatic glitch animation and a flickering neon underline via CSS `@keyframes` and `clip-path`.
- **Pure CSS State Management**: Navigating between panels (Live Matches, Leaderboard, Inventory, Team Stats) is handled entirely in CSS, bypassing the need for JavaScript framework state.
- **Cyberpunk Aesthetics**: Incorporates aggressive neon contrasts (`#00f3ff` cyan and `#ff0055` pink), the high-tech `Rajdhani` typeface, and layered frosted glass (`backdrop-filter`) backgrounds to emulate AAA gaming hub environments.
- **Responsive Layout**: A fluid layout utilizing CSS Grid and Flexbox, adapting seamlessly from widescreen desktop command centers to compact mobile interfaces.
- **Accessible & Inclusive**: Fully supports keyboard navigation. Hidden radio inputs securely track focus and project distinct `:focus-visible` styling onto their associated labels using modern `:has()` selector logic. Includes proper ARIA roles (`tablist`, `tab`, `tabpanel`).
- **Reduced Motion Support**: Features a comprehensive `@media (prefers-reduced-motion: reduce)` block that gracefully degrades the glitch animations to static text to accommodate users with motion sensitivities.

## Folder Structure

```text
gaming-hub-glitch-flicker-tabs/
├── demo.html     # Semantic HTML5 layout featuring the Esports Dashboard and Tab System
├── style.css     # Modern CSS handling the glitch logic, glassmorphism, and responsive grids
└── README.md     # Documentation and overview
```

## How to Run

1. Clone or download this repository.
2. Ensure you have the core `easemotion.css` available at the root level of the repository.
3. Open `submissions/examples/gaming-hub-glitch-flicker-tabs/demo.html` in any modern web browser.
4. Click through the navigation tabs to observe the glitch-flicker interaction and panel transitions.
5. Alternatively, use the `Tab` and `Arrow` keys to navigate the interface to verify keyboard accessibility.

## EaseMotion Classes Used

This showcase integrates seamlessly with the EaseMotion utility ecosystem for entrance animations:

- `ease-fade-in` - Soft opacity transitions for the dashboard header.
- `ease-slide-down` - Smooth top-to-bottom entry for the individual navigation tabs.
- `ease-slide-up` - Elegant bottom-to-top entry for the main content panels wrapper.
- `ease-delay-100` through `ease-delay-600` - Staggered delays orchestrating a satisfying, sequential load-in cascade across the UI.

## Responsive Behaviour

The dashboard utilizes CSS Grid for sub-components (like the live match cards, leaderboards, and inventory) to ensure they reflow based on available space (`auto-fit`, `minmax()`). The tab navigation itself is an overflowing flex container that allows horizontal scrolling on mobile, hiding the scrollbar while keeping the content accessible.

## Accessibility

- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<nav>`, and structural ARIA attributes.
- **ARIA Roles & Attributes**: Implements `role="tablist"`, `role="tab"`, and `role="tabpanel"` for the tab architecture. State is communicated to assistive technologies via `aria-controls` and natively through the radio inputs.
- **Keyboard Navigation**: While the radio inputs are visually hidden (`sr-only`), they remain in the focus order. The CSS leverages the `:has()` pseudo-class to project a highly visible `var(--neon-cyan)` outline onto the corresponding `<label>` when its hidden input receives focus.
- **Motion Sensitivities**: A built-in `@media (prefers-reduced-motion: reduce)` disables the complex `clip-path` glitch animations and restores standard text visibility, ensuring compliance with accessibility standards.

## Why it fits EaseMotion CSS

This example perfectly demonstrates EaseMotion's core philosophy: complex, high-end UI micro-interactions can be achieved elegantly through CSS alone. By combining standard EaseMotion entrance utilities with an advanced, custom CSS glitch-flicker effect and native radio-hack state management, it proves that developers can create immersive, AAA-grade interfaces without writing a single line of JavaScript.
