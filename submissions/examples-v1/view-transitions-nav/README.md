# View Transitions — Same-Document Navigation

## What

This demo showcases the CSS View Transitions API (`@view-transition` rule and `::view-transition-old/new` pseudo-elements) for animated same-document navigation between three tabs: Home, Gallery, and Contact. Each section has its own `view-transition-name`, and the browser handles the crossfade between outgoing and incoming content.

## How

The demo uses `document.startViewTransition()` on tab clicks to snapshot the old view and animate to the new one. The `@view-transition { navigation: auto; }` rule enables transitions at the document level. Custom `::view-transition-old(root)` and `::view-transition-new(root)` keyframe animations provide a subtle scale crossfade. Each section gets a distinct `view-transition-name` so the browser can target them individually. A `prefers-reduced-motion` media query disables all transition animations for accessibility.

## Why

View Transitions offer a browser-native, high-performance way to animate between UI states without JavaScript animation libraries. They improve perceived performance and user orientation during navigation. This demo shows how to adopt the API for tab-based SPA-style navigation with minimal JS, making it a pattern suitable for dashboards, wizards, and single-page interfaces.
