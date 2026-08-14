# Scroll-to-Top Animated Button — Issue #14188

## What does this do?
Adds a scroll-to-top Floating Action Button (FAB) using `.ease-fab` base classes. The button is fixed to the bottom-right, hidden until the user scrolls past 300px, and smoothly scrolls to top on click.

## How is it used?
```html
<button class="ease-fab ease-fab-primary ease-hover-grow" aria-label="Scroll to top">
  <svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
</button>
```
Add a scroll listener to toggle `.visible` after 300px scroll, and call `window.scrollTo({ top: 0, behavior: 'smooth' })` on click. Supports `.ease-fab-primary`, `.ease-fab-secondary` variants and `.ease-hover-grow` / `.ease-hover-rotate` hover effects.

## Why is it useful for EaseMotion CSS?
Long pages benefit from a scroll-to-top affordance. This example demonstrates how EaseMotion's FAB and hover classes can compose into a real-world interaction pattern.
