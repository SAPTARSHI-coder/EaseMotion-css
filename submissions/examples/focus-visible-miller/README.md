# :focus-visible Accessibility Fix

Fixes a bug where `*:focus` in `core/base.css` shows the focus outline ring
on **mouse clicks**, not just keyboard navigation. This visual noise is the
exact pattern that leads developers to disable `outline` entirely — which
destroys keyboard accessibility site-wide.

## Files
- `demo.html` - Side-by-side before/after demo
- `style.css` - Corrected focus styles + optional utility classes
- `README.md` - This file

## The Bug

```css
/* BEFORE — fires on BOTH mouse click AND keyboard Tab */
*:focus {
  outline: 2px solid var(--ease-color-primary);
  outline-offset: 2px;
}
```

Clicking a button or link with the mouse triggers the same outline ring as
pressing Tab — a visual defect that's widely "fixed" by developers writing
`*:focus { outline: none; }`, which removes keyboard focus indicators
entirely.

## The Fix

```css
/* AFTER */
*:focus {
  outline: none;
}

*:focus-visible {
  outline: 2px solid var(--ease-color-primary);
  outline-offset: 2px;
  border-radius: 2px;
}
```

`:focus-visible` is a modern pseudo-class that the browser applies only when
it determines the focus should be visibly indicated — typically keyboard
navigation, not mouse clicks.

## Optional Utility Classes

Also includes the suggested composable utilities for custom components:

```css
.ease-focus-ring:focus-visible {
  outline: 2px solid var(--ease-color-primary);
  outline-offset: 2px;
}

.ease-focus-ring-white:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}
```

## How to Test
1. Open `demo.html`
2. Click the "Before" button/link with your mouse — outline appears (bug)
3. Click the "After" button/link with your mouse — no outline (fixed)
4. Press **Tab** to navigate through both columns — outline appears
   correctly on both, since keyboard focus should always be visible
