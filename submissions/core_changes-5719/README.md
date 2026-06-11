# Issue #5719: Scroll progress bar uses z-index 9999 (toast layer)

## Description
`components/scroll-progress.css` sets `--ease-scroll-progress-z-index: var(--ease-z-toast, 9999)`. A decorative scroll progress bar should not render at the toast z-index (9999) — it blocks modals, toasts, and other interactive UI.

## Root Cause
The scroll progress bar reuses `--ease-z-toast` (9999) instead of having its own z-index token. Toasts and modals should render above the scroll progress indicator.

## Proposed Fix
In `components/scroll-progress.css` line 22, change:
```css
--ease-scroll-progress-z-index: var(--ease-z-toast, 9999);
```
to:
```css
--ease-scroll-progress-z-index: var(--ease-z-scroll-progress, 100);
```

Optionally add a dedicated token to `core/variables.css`:
```css
--ease-z-scroll-progress: 100;
```

## Files
- `style.css` — declares `--ease-z-scroll-progress: 100` and overrides the component variable
- `demo.html` — interactive demo with tall content to scroll
