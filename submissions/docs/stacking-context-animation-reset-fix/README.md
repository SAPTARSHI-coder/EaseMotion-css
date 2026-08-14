# Fix: Animation State Resets When Ancestor Receives New Stacking Context

Relates to bug report **#40957**.

## 1. What does this do?

This demo documents and fixes the bug where EaseMotion animations unexpectedly
restart or flicker when an **ancestor element** dynamically receives a new CSS
stacking context via properties like `transform`, `filter`, `perspective`,
`contain`, or `will-change`.

## 2. How is it used?

Two proven fixes are demonstrated side-by-side:

### Fix 1 — Pre-promote the animated element (recommended)
Add `will-change: transform` to the **child animated element itself** before any
animation starts. This tells the browser to promote it to its own GPU compositor
layer from the beginning, so parent stacking context changes don't affect it.

```css
/* On the EaseMotion animated element */
.my-animated-card {
  will-change: transform;  /* pre-promote to own layer */
  animation: ease-float 2s ease-in-out infinite;
}
```

### Fix 2 — Pre-establish stacking context on the wrapper
If you know the parent container will eventually receive a stacking-context
property (e.g. when opening a modal or enabling a blur), apply it from the
**very start** using `transform: translateZ(0)` or `isolation: isolate`.

```css
.wrapper {
  /* Apply immediately so no mid-animation layer change occurs */
  transform: translateZ(0);
  /* or: isolation: isolate; */
}
```

## 3. Why is it useful?

This is a subtle but highly impactful browser rendering behavior that affects
real-world EaseMotion usage, especially in:
- **Modals** — opening a modal often applies backdrop-filter or transform to a parent
- **Scroll effects** — `will-change: transform` added to scroll containers
- **Blur overlays** — adding `filter: blur()` to a parent for a frosted-glass effect
- **Dynamic scaling** — parent containers that scale on hover or focus

Without understanding this root cause, developers experience mysterious animation
restarts that are very difficult to debug. Both fixes are zero-dependency pure CSS
solutions, fully aligned with EaseMotion's design philosophy.
