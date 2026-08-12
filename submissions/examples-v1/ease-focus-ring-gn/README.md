# ease-focus-ring — Accessible Animated Focus Indicator

1. **What does this add?** An `ease-focus-ring` utility that applies a smooth, animated focus ring on `:focus-visible` (keyboard navigation only, not mouse clicks). Includes inset and outset variants plus primary, danger, and success color variants.
2. **How is it used?**
```html
<!-- Default: outset ring, primary color, with pulse animation -->
<button class="ease-btn ease-btn-primary ease-focus-ring">
  Accessible button
</button>

<!-- Inset variant -->
<button class="ease-focus-ring ease-focus-ring-inset">Inset ring</button>

<!-- Color variants -->
<button class="ease-focus-ring ease-focus-ring-danger">Danger</button>
<button class="ease-focus-ring ease-focus-ring-success">Success</button>

<!-- Works on any focusable element -->
<input class="ease-focus-ring ease-focus-ring-success" />
<a href="#" class="ease-focus-ring ease-focus-ring-inset ease-focus-ring-danger">Link</a>
```
3. **Why is it useful?** Improves keyboard accessibility with a clear, animated visual indicator that only appears for keyboard users (`:focus-visible`), not mouse clicks — avoiding the common "focus ring on click" annoyance while keeping the experience inclusive. Zero JavaScript, composable color/shape variants, aligned with EaseMotion CSS's animation-first, human-readable philosophy.