# Per-Element Scroll-Reveal Grid (`animation-timeline: view()`)

## What does this do?

A card grid where each individual card fires its own entrance animation at the moment it enters the viewport — using `animation-timeline: view()`.

## How is it used?

```html
<div class="reveal-grid">
  <div class="grid-card">
    <h3>Title</h3>
    <p>Content</p>
  </div>
</div>
```

```css
@supports (animation-timeline: view()) {
  .grid-card {
    animation: card-enter linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 35%;
  }
}
```

## Why is it useful?

Intersection Observer is the current standard for scroll-reveal. `animation-timeline: view()` replaces it entirely for visual entrance effects with no JS and no event listeners. The existing scroll-driven submissions in EaseMotion use `scroll(root)` which ties the animation to the root scroll container — not the element's own viewport entry. The `view()` approach is per-element, composable, and requires no wrapper logic. This is the missing bridge between EaseMotion's scroll-animation utilities and real-world landing page builds.
