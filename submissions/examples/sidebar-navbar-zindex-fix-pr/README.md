# Navbar–Sidebar z-index Collision Fix

## What does this do?

Fixes the z-index collision where both the mobile sidebar (`sidebar.css`) and the sticky navbar (`navbar.css`) use `z-index: 100`, causing the sidebar to render partially behind the navbar. The fix promotes the sidebar to `--ease-z-modal` (1000) and replaces the hardcoded integer with the framework's design token.

## How is it used?

No new classes for the core fix. This is a **bug fix** — the `z-index` in the mobile breakpoint of `components/sidebar.css` (line 77) should be changed:

```css
/* Before (hardcoded, collides with navbar) */
z-index: 100;

/* After (uses token, above navbar) */
z-index: var(--ease-z-modal, 1000);
```

An **optional** `.ease-sidebar-backdrop` element is also proposed for parity with the modal component's overlay pattern:

```html
<div class="ease-sidebar-layout">
  <div class="ease-sidebar-backdrop"></div>
  <div class="ease-sidebar">...</div>
  <div class="ease-sidebar-main">...</div>
</div>
```

## Why is it useful?

Both components fight for the same stacking layer:

| Component | File | z-index |
|---|---|---|
| `.ease-navbar-glass-sticky` | navbar.css | `var(--ease-z-overlay, 100)` |
| `.ease-sidebar` (mobile) | sidebar.css | `100` (hardcoded) |

This causes two problems:

1. **Layering conflict** — depending on DOM order, either the sidebar slides under the navbar (losing its close button) or the navbar disappears behind the sidebar
2. **Token bypass** — the sidebar uses a hardcoded `100` instead of the framework's `--ease-z-*` token scale, breaking the centralized z-index system defined in `variables.css`

The mobile sidebar functions as a **full-screen overlay** (it covers the entire viewport and has a backdrop). This is semantically equivalent to a modal, so it should use `--ease-z-modal` (1000) — the same z-index tier used by `.ease-modal-overlay` in `modals.css`.
