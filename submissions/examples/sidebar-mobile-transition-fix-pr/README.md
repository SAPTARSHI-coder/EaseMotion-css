# Sidebar Mobile Slide-in Transition Fix

## What does this do?

Fixes the mobile sidebar slide-in animation that never fires because `display: none` → `display: block` is not an animatable CSS transition. Replaces it with `visibility: hidden` + `pointer-events: none`, which allows the `transform: translateX()` transition to animate smoothly.

## How is it used?

No new classes. This is a **bug fix** — the mobile `@media` block inside `components/sidebar.css` (lines 71–96) should be updated:

```css
@media (max-width: 768px) {
  .ease-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 100;
    width: var(--ease-sidebar-width, 260px);

    /* CHANGE: display:none → visibility:hidden + pointer-events:none */
    visibility: hidden;
    pointer-events: none;

    transform: translateX(-100%);
    transition:
      transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
      visibility 0.6s,
      box-shadow 0.3s ease;
  }

  .ease-sidebar-layout.ease-sidebar-open .ease-sidebar {
    /* CHANGE: display:block → visibility:visible + pointer-events:auto */
    visibility: visible;
    pointer-events: auto;

    transform: translateX(0);
    box-shadow: 12px 0 36px rgba(0, 0, 0, 0.15);
  }
}
```

## Why is it useful?

The `sidebar.css` file already defines a `cubic-bezier(0.34, 1.56, 0.64, 1)` bounce transition on `transform` (line 82), but it **never fires** because:

1. `display: none` removes the element from the layout entirely
2. When `display: block` is applied, the browser paints the element in its final state in a single frame
3. There are no intermediate frames for the `transform` transition to interpolate

The `visibility` + `pointer-events` pattern is the standard CSS solution:
- `visibility: hidden` keeps the element in the layout but invisible (allowing transitions)
- `pointer-events: none` prevents click/touch interaction while hidden
- `transform: translateX(-100%)` keeps it visually off-screen

This is the same pattern used by the modal overlay component (`modals.css` lines 23–25: `opacity: 0; visibility: hidden; pointer-events: none`), so it's consistent with the framework's existing approach.
