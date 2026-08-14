# EaseMotion Shimmer-Sweep Tooltip

A production-quality, pure CSS Shimmer-Sweep Tooltip component tailored for gaming hubs, SaaS platforms, and premium reward interfaces. This implementation showcases a cyber-inspired glassmorphism aesthetic strictly utilizing EaseMotion utilities alongside custom keyframe transitions, without relying on JavaScript.

## Features

- **CSS Shimmer-Sweep Effect**: An elegant, synchronized sweep of light that animates across the tooltip purely via CSS `@keyframes`, triggering gracefully upon hover or focus.
- **Glassmorphism & Gaming Aesthetics**: Deep translucent backgrounds utilizing `backdrop-filter`, vibrant rarity-based glow effects, and modern gradients that emulate high-end AAA game UI.
- **Fully Accessible**: Implements keyboard navigation natively using `tabindex="0"`, `:focus-visible`, and ARIA attributes (`aria-describedby`, `role="tooltip"`, `aria-hidden`) for flawless screen reader support.
- **Responsive by Design**: Flex-based fluid grid layout scales perfectly to mobile displays and condenses gracefully.
- **Performance Optimized**: Uses compositing-friendly properties (`transform`, `opacity`) and fully respects `@media (prefers-reduced-motion: reduce)` for users with motion sensitivities.

## Folder Structure

- `demo.html`: The semantic HTML layout featuring the reward badges and tooltip integrations using EaseMotion utility classes.
- `style.css`: The custom stylesheet governing the variables, glassmorphism UI, hover interactions, and the shimmer animation logic.
- `README.md`: Component documentation.

## How to Run

1. Clone the EaseMotion CSS repository.
2. Navigate to `submissions/examples/gaming-hub-shimmer-sweep-tooltip/`.
3. Open `demo.html` in any modern web browser.

## EaseMotion Classes Used

This project heavily leverages EaseMotion utilities for seamless mount animations without duplicating standard animation `@keyframes`:
- `ease-fade-in`
- `ease-slide-up`
- `ease-scale-up`
- `ease-delay-100`
- `ease-delay-200`
- `ease-delay-300`
- `ease-delay-400`

## Responsive Behaviour

The dashboard scales dynamically. On viewports below `768px`, spacing and margins condense gracefully. Below `480px`, the reward icons and tooltips adapt their dimensions to ensure perfect usability on smaller touch devices while retaining all visual fidelity and legibility.

## Accessibility Details

- **Keyboard Support**: Elements can be navigated via the <kbd>Tab</kbd> key natively. Focus states are made explicitly visible via a high-contrast outline managed through `:focus-visible`, ensuring keyboard users are never lost in the dark aesthetic.
- **Screen Reader Context**: Badges use explicit `aria-label`s, and tooltips are correctly linked via `aria-describedby` and `role="tooltip"`. Presentational SVGs are hidden using `aria-hidden="true"`.
- **Reduced Motion**: Disables the shimmer sweep and ambient background drift animations when OS-level reduced motion preferences are detected, replacing them with instant opacity transitions for immediate, distraction-free reading.

## Why it fits EaseMotion CSS

The Shimmer-Sweep Tooltip effectively combines EaseMotion's powerful page-load utilities (`ease-fade-in`, `ease-slide-up`, `ease-scale-up`) with advanced, custom-built CSS interaction patterns. It serves as a prime real-world example of how developers can build rich, interactive, premium components—standard in modern web applications—using pure CSS.
