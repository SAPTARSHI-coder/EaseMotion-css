# Fix: ease-hover-glow + ease-hover-lift Shadow Conflict

**Issue:** [#5187](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5187)

## Problem

Both `.ease-hover-glow` and `.ease-hover-lift` define `box-shadow` on `:hover`.
When combined on the same element, CSS cascade drops one — only the last
class's shadow in source order survives.

## Fix

Added a combined selector with higher specificity that merges both values
using CSS multi-value `box-shadow`:

```css
.ease-hover-glow.ease-hover-lift:hover {
  transform: translateY(-4px);
  box-shadow:
    0 0 20px var(--ease-glow-primary),
    var(--ease-shadow-xl);
}
```

## Files
- `style.css` — the fix
- `demo.html` — visual proof: three cards (glow only / lift only / both combined)