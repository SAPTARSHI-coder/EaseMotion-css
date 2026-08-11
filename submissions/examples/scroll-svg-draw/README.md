# CSS-Only Scroll-Driven SVG Path Drawing

## Overview

A CSS-only effect where an inline SVG illustration's path is progressively drawn onto the screen as the user scrolls the element into the viewport. The animation is powered entirely by the native CSS Scroll-Driven Animations API — no JavaScript, no Intersection Observer, no class toggling.

## Features

- Scroll-driven SVG stroke draw animation
- `animation-timeline: view()` — ties animation progress directly to scroll position
- `animation-range: entry 0% entry 80%` — drawing starts on viewport entry and completes before exit
- `pathLength="1"` normalisation — eliminates the need to measure the exact SVG path length
- Sticky SVG illustration stays visible across the full scroll range
- Subtle drop-shadow glow on the stroke for a premium feel
- Ghost / guide path underneath shows the full shape before it draws
- `@media (prefers-reduced-motion: no-preference)` wrapper — motion-sensitive users see only the static shape
- Responsive layout — adapts cleanly to narrow screens
- Semantic HTML, visible focus styles, and `aria-hidden` on the decorative SVG

## Animation Details

Setting `pathLength="1"` on the SVG `<path>` element normalises the stroke's internal coordinate space so that `stroke-dasharray: 1` always equals the full path length, regardless of the actual geometry. A `@keyframes` rule then animates `stroke-dashoffset` from `1` (fully hidden) to `0` (fully visible). This animation is linked to a view-based scroll timeline via `animation-timeline: view()`, making the draw progress track the element's position inside the viewport with no JavaScript needed.

## Files

- `demo.html` — semantic page structure with inline SVG illustration and explanation callout
- `style.css` — design system tokens, layout, scroll-driven draw animation, glows, fallback behaviour, responsive rules, and accessibility styling
- `README.md` — implementation and usage documentation

## Usage

Open `demo.html` in a modern browser that supports CSS Scroll-Driven Animations (Chromium 115+). No JavaScript, package installation, or build step is required.

Browsers that do not support `animation-timeline: view()` will display the final drawn state of the path, keeping the illustration fully visible and the page usable.

## Accessibility

The SVG is marked `aria-hidden="true"` as it is decorative. The animation runs only when the user has not indicated a preference for reduced motion via `@media (prefers-reduced-motion: no-preference)`. All interactive navigation elements include visible focus styling.

## Responsive Behaviour

The SVG scales fluidly with its container and the sticky positioning ensures it remains visible across the full scroll range on any screen size.

## Issue

EaseMotion CSS issue #74707.
