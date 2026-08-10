# Tooltip Responsive Animation Fix (Issue #17313)

## What does this do?
Demonstrates a corrected `.ease-tooltip[data-position="top"]` responsive fallback at `max-width: 640px` that uses `translateY(4px)` instead of `translateY(-4px)` for its hidden state.

## How is it used?
```html
<div class="tooltip-wrapper">
  <button>Hover</button>
  <div class="demo-tooltip" data-position="top">Text</div>
</div>
```

## Why is it useful?
When the top tooltip falls back to being displayed below the element on small screens, it needs to animate upwards when hovered. Using `translateY(-4px)` caused it to start above its resting position and animate downwards. Changing it to `translateY(4px)` ensures a smooth, upward entrance animation that feels natural and consistent.
