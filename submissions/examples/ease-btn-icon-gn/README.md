# ease-btn-icon Button Layout

1. **What does this do?** Adds `ease-btn-icon` button modifiers for buttons containing an icon and text, with proper gap and alignment between them. Includes icon-left, icon-right, outline, and icon-only variants.
2. **How is it used?**
```html
<button class="ease-btn-icon">
  <svg class="icon">...</svg>
  Continue
</button>

<button class="ease-btn-icon-right">
  Next
  <svg class="icon">...</svg>
</button>

<button class="ease-btn-icon-outline">
  <svg class="icon">...</svg>
  Comment
</button>

<button class="ease-btn-icon-only" aria-label="Settings">
  <svg class="icon">...</svg>
</button>
```
3. **Why is it useful?** Uses `display: inline-flex` with `align-items: center` and `gap` for consistent icon-text alignment across browsers — zero JavaScript, composable variants, aligned with EaseMotion CSS's utility-first philosophy.