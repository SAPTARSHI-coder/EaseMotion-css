# Fix: ease-card-outlined Does Not Override Base Background

**Issue:** [#6548](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/6548)

## Problem

`.ease-card` sets `background-color: var(--ease-color-surface)` (white).  
`.ease-card-outlined` was designed to be a transparent outlined card but
**never explicitly set `background-color: transparent`** to override it.

Result: developers using `ease-card ease-card-outlined` get a white-filled
card, not a transparent one. There was no documentation warning about this.

## Fix

Add an explicit `background-color: transparent` to `.ease-card-outlined`:

```css
/* ❌ Before — surface background bleeds through */
.ease-card-outlined {
  border: 2px solid var(--ease-color-neutral-200);
}

/* ✅ After — transparent as intended */
.ease-card-outlined {
  border: var(--ease-card-outlined-border-width) solid
    var(--ease-card-outlined-border-color);
  background-color: transparent;
}
```

## Usage

```html
<!-- Transparent outlined card — works correctly after fix -->
<div class="ease-card ease-card-outlined">Card content</div>

<!-- Custom border via CSS variables -->
<div
  class="ease-card ease-card-outlined"
  style="--ease-card-outlined-border-color: #6366f1;
            --ease-card-outlined-border-width: 3px;"
>
  Custom border
</div>
```

## How to Verify

1. Open `demo.html`
2. All three cards sit on a colorful gradient background
3. **Buggy card**: white surface blocks the gradient entirely
4. **Fixed card**: gradient shows through — transparent as expected

## Files

- `style.css` — the fix
- `demo.html` — buggy vs fixed vs custom on gradient background
