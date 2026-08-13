# EaseMotion Blur-Entrance Tabs

A production-quality, pure CSS Blur-Entrance Tab component designed for gaming hubs, dashboards, and premium SaaS interfaces. This implementation showcases a cyber-inspired glassmorphism aesthetic strictly utilizing EaseMotion utilities alongside custom transition architectures, completely without JavaScript.

## Features

- **CSS Blur-Entrance Effect**: Seamless, cinematic tab transitions that animate both `filter: blur()` and `transform` properties natively through CSS sibling combinators (`~`), requiring absolutely zero JS.
- **Glassmorphism & Gaming Aesthetics**: Deep translucent backgrounds utilizing `backdrop-filter`, vibrant neon glows, and a modern esports-inspired layout structure (featuring Live Matches, Team Rankings, Inventory, and Achievement panels).
- **Fully Accessible**: Implements flawless keyboard navigation and screen reader support. Native `<input type="radio">` mechanics power the tab state natively allowing standard arrow-key navigation, accessible outlining (`:focus-visible`), and perfect `<label>` associations.
- **Responsive by Design**: Advanced CSS Grid structures scale perfectly across desktop and mobile, ensuring content cards condense elegantly.
- **Performance Optimized**: Carefully orchestrates `opacity`, `transform`, and `filter` transitions dynamically via CSS Grid absolute-stacking and fully respects `@media (prefers-reduced-motion: reduce)` for users with motion sensitivities.

## Folder Structure

- `demo.html`: The semantic HTML layout featuring the dashboard UI, tab logic, and EaseMotion utility classes.
- `style.css`: The custom stylesheet governing the variables, glassmorphism UI, tab states, and the core blur-entrance logic.
- `README.md`: Component documentation.

## How to Run

1. Clone the EaseMotion CSS repository.
2. Navigate to `submissions/examples/gaming-hub-blur-entrance-tabs/`.
3. Open `demo.html` in any modern web browser.

## EaseMotion Classes Used

This layout leverages EaseMotion utilities to animate the dashboard into view smoothly upon page load:
- `ease-fade-in`
- `ease-slide-up`
- `ease-slide-down`
- `ease-delay-100`
- `ease-delay-200`
- `ease-delay-300`
- `ease-delay-400`

## Responsive Behaviour

CSS Grid is utilized to orchestrate the internal panels (`.grid-2-col`, `.grid-4-col`). On viewports below `900px`, the dashboard condenses to single-column layouts, and the tab navigation converts seamlessly into an overflow-scrollable horizontal strip (`overflow-x: auto`), maintaining functionality heavily on mobile devices.

## Accessibility Details

- **Keyboard Support**: Because the system relies on native, visually-hidden radio buttons (`.sr-only`), keyboard users can `<kbd>Tab</kbd>` into the tablist and seamlessly navigate between tabs using the `<kbd>Arrow Keys</kbd>`, mirroring standard ARIA tablist patterns natively in the browser.
- **Focus Rings**: We map the radio's `:focus-visible` state visually onto the associated `<label>`, ensuring high-contrast focus rings appear natively around the active tab label without requiring manual JS focus management.
- **Reduced Motion**: Disables the complex blur/scale panel transitions and background float animations when OS-level reduced motion preferences are detected, replacing them with instant, distraction-free visibility toggles.

## Why it fits EaseMotion CSS

The Blur-Entrance Tabs showcase perfectly demonstrates how EaseMotion's powerful page-load utilities integrate flawlessly with advanced, native HTML/CSS state architectures. It serves as a prime real-world example of how developers can build rich, interactive, premium SPA-like navigation interfaces strictly using pure CSS.
