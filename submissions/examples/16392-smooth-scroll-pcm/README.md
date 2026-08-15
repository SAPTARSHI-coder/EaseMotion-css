# Momentum / Smooth Scroll Container Classes

1. **What does this do?** Provides utility classes for smooth scrolling containers with momentum and inertia effects — includes smooth scroll, scroll containers with touch momentum, scroll snap (horizontal/vertical with snap align), momentum containment (`overscroll-behavior`), and hidden scrollbar utilities.

2. **How is it used?** Add the classes directly to any scrollable container element. Combine classes as needed — for example, `.scroll-container.scroll-x.snap-x` creates a horizontal snap-scrolling container with touch momentum.

```html
<!-- Smooth scrolling -->
<div class="smooth-scroll">...</div>

<!-- Horizontal snap carousel -->
<div class="scroll-container scroll-x snap-x">
  <div class="snap-start">Slide 1</div>
  <div class="snap-start">Slide 2</div>
</div>

<!-- Vertical scroll with momentum containment -->
<div class="scroll-container scroll-y scroll-momentum">
  <!-- Long content -->
</div>

<!-- Scrollable with hidden scrollbar -->
<div class="scroll-container scroll-x scroll-hide-bar">
  <!-- Content scrolls but no visible scrollbar -->
</div>
```

3. **Why is it useful?** Native scrolling behavior is inconsistent across browsers and platforms — these utility classes provide a consistent, declarative API for smooth scrolling, scroll snap, momentum control, and scrollbar visibility, eliminating the need for custom JavaScript scroll libraries for common patterns.

### Classes Reference

| Class | CSS | Purpose |
|---|---|---|
| `.smooth-scroll` | `scroll-behavior: smooth` | Smooth animated scrolling |
| `.scroll-container` | `overflow: auto; -webkit-overflow-scrolling: touch` | Scrollable container with touch momentum |
| `.scroll-momentum` | `overscroll-behavior: contain` | Prevent scroll chaining |
| `.scroll-x` | `overflow-x: auto; overflow-y: hidden` | Horizontal-only scroll |
| `.scroll-y` | `overflow-y: auto; overflow-x: hidden` | Vertical-only scroll |
| `.scroll-hide-bar` | `scrollbar-width: none` + webkit scrollbar hide | Hide scrollbar, keep scrolling |
| `.snap-x` | `scroll-snap-type: x mandatory` | Horizontal snap container |
| `.snap-y` | `scroll-snap-type: y mandatory` | Vertical snap container |
| `.snap-mandatory` | `scroll-snap-stop: always` | Always stop at snap points |
| `.snap-proximity` | `scroll-snap-stop: normal` | Snap only when near |
| `.snap-start` | `scroll-snap-align: start` | Snap to start edge |
| `.snap-center` | `scroll-snap-align: center` | Snap to center |
| `.snap-end` | `scroll-snap-align: end` | Snap to end edge |

Fixes #16392
