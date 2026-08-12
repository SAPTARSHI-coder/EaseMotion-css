# Pure CSS Skeleton Loader Component

A lightweight, purely CSS-driven skeleton loading component for data fetching states. This component utilizes CSS animations and linear gradients to create a satisfying shimmer effect without relying on JavaScript or external SVG assets.

## Features
- **Zero JavaScript**: Entirely powered by CSS `@keyframes` and `linear-gradient`.
- **Flexible Layouts**: Includes helper classes (`skeleton-avatar`, `skeleton-title`, `skeleton-line`, `skeleton-block`) that easily adapt to grid layouts and flex containers.
- **Accessible**: Fully supports `@media (prefers-reduced-motion: reduce)`. If the user has motion sensitivity enabled in their OS, the shimmer animation is gracefully halted and falls back to a static, slightly dimmed state to indicate loading without triggering motion sickness.
- **Customizable**: Uses CSS custom properties (`--skeleton-base`) so you can quickly adapt it to dark mode or branded color schemes.

## Usage
Open `demo.html` in your browser. You will see a mock dashboard displaying 3 distinct card variants, each representing a loading state for different types of content (text-heavy vs block-heavy).

## Files
- `demo.html`: The HTML structure demonstrating how to compose skeleton elements to mimic actual content layouts.
- `style.css`: The styling rules containing the `.em-skeleton` class, the `em-shimmer` keyframe animation, and width utility classes for organic text wrapping effects.
