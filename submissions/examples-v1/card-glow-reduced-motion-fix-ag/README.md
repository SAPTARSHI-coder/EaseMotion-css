# Card Glow Reduced Motion Fix (Issue #14081)

## What does this do?

Under `prefers-reduced-motion: reduce`, this removes not just the `transition` but also the `box-shadow` on hover to prevent the jarring instant glow snap.

## How is it used?

```html
<div class="ease-card ease-card-glow">Content</div>
```

## Why is it useful?

Removing only the transition still causes a 0ms snap from no-glow to full-glow on hover. For users who prefer reduced motion, flashing a bright glow instantly can be visually jarring. Removing the hover glow entirely is the correct, least-disruptive behavior.
