# Animation Compatibility Matrix

## What does this do?

This submission adds an interactive animation compatibility matrix that helps developers understand which EaseMotion animations can be safely combined and which combinations may cause visual conflicts.

The matrix categorizes animation combinations as:

- ✅ Compatible combinations
- ⚠️ Use with caution
- ❌ Avoid combining

## How is it used?

The matrix can be used as a quick reference when building UI animations.

Example:

```html
<div class="matrix-row">
  <strong>Fade + Scale</strong>
  <span class="compatible">Compatible</span>
</div>