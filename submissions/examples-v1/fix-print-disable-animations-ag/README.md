# Fix Print Media — Disable Animations

## What does this do?
Adds an `@media print` block that disables all CSS animations and transitions,
hides UI-only overlays (modals, toasts, tooltips), and freezes animated
components (skeleton, spinner) in a visible printed state.

## How is it used?
Include this CSS file — all EaseMotion animation classes are automatically
suppressed in print context.

## Why is it useful?
CSS animations frozen mid-frame can print as invisible elements, producing
blank pages. `animation-duration: 0.01ms` effectively stops all animations
without removing their final state. Fixes: #35835
