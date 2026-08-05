# Accordion CSS Scroll-Driven Animations

## Description
This PR introduces cutting-edge CSS Scroll-Driven Animations to the `accordion` component. By linking animations to the scroll progression of a container or the visibility of an element within the viewport, we completely eliminate the need for complex JavaScript `IntersectionObserver` setups and scroll event listeners.

## Key Features
1. **Scroll Progress Bar**: Uses `animation-timeline: scroll()` to animate a progress bar based on the scroll position of the container.
2. **View-Driven Reveals**: Uses `animation-timeline: view()` and `animation-range` to gracefully animate elements (fade in, scale up, slide up) as they enter the viewport. If the user scrolls back up, the animation naturally reverses!

## Changes
- `style.css`: Modern CSS utilizing `@keyframes` linked to `scroll()` and `view()` timelines.
- `demo.html`: Interactive scrollable container demonstrating the progress bar and scroll-reveal cards.
- `README.md`: Describes the scroll-driven animation architecture.
\nFixes #56580\n