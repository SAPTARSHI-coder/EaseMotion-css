# Scroll-Progress GPU Memory Leak Fix

## What does this do?

Fixes a performance bug in `components/scroll-progress.css` where `will-change: transform` is applied unconditionally to a fixed, always-visible element, causing a permanent GPU memory leak on low-end devices.

## How is it used?

No new classes. This is a **performance bug fix** — the `will-change` rule in `components/scroll-progress.css` (line 46) should be removed from the base class and conditionally applied via `@supports`:

```css
/* 1. Remove will-change from base .ease-scroll-progress */
.ease-scroll-progress {
  /* ... */
  /* REMOVED: will-change: transform; */
}

/* 2. Apply it only when the animation is actually supported and running */
@supports (animation-timeline: scroll()) {
  .ease-scroll-progress {
    will-change: transform;
  }
}

/* 3. Strip it when reduced motion disables the animation */
@media (prefers-reduced-motion: reduce) {
  .ease-scroll-progress {
    animation: none;
    transform: scaleX(1);
    will-change: auto; /* Ensure browser releases GPU layer */
  }
}
```

## Why is it useful?

According to the [MDN Web Docs for `will-change`](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change):

> "`will-change` is intended to be used as a last resort... **Don't apply will-change to too many elements.** Some stronger optimizations linked to `will-change` **use a lot of machine resources** (GPU memory), and overuse can cause the page to slow down or consume a lot of resources."

Because `.ease-scroll-progress` is a `position: fixed` element that is permanently visible across the entire page's lifetime, unconditionally applying `will-change: transform` forces the browser to dedicate VRAM to an independent compositing layer permanently. 

By applying the hint only when `animation-timeline: scroll()` is supported, and explicitly removing it when `prefers-reduced-motion` is active, we ensure we don't waste precious mobile GPU memory when the animation isn't even running.
