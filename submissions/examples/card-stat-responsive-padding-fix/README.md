# Fix: ease-card-stat Hardcoded Padding Too Tall on Mobile

**Issue:** [#6768](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/6768)

## Problem

`.ease-card-stat` had `padding: var(--ease-space-8)` hardcoded — always 32px
on all sides with no responsive override. On a 375px mobile viewport, 4 stat
cards in a grid each consumed nearly the full screen height.

There was also no CSS variable to override padding without a specificity fight.

## Fix

Two changes:

### 1. Expose CSS variable

```css
:root {
  --ease-card-stat-padding: var(--ease-space-8, 32px);
}

.ease-card-stat {
  padding: var(--ease-card-stat-padding);  /* ✅ customizable */
}
```

### 2. Add responsive breakpoints

```css
/* Mobile: 32px → 16px */
@media (max-width: 640px) {
  .ease-card-stat {
    --ease-card-stat-padding: var(--ease-space-4, 16px);
  }
}

/* Tablet: 32px → 24px */
@media (min-width: 641px) and (max-width: 1024px) {
  .ease-card-stat {
    --ease-card-stat-padding: var(--ease-space-6, 24px);
  }
}
```

## Customization

Override per card with no specificity fight:

```html
<div class="ease-card ease-card-stat"
     style="--ease-card-stat-padding: 12px;">
  Compact stat card
</div>
```

## How to Verify

1. Open `demo.html`
2. Check the **375px mobile viewport** section
3. Buggy cards: 32px padding — disproportionately tall
4. Fixed cards: 16px padding — compact and usable on mobile

## Files
- `style.css` — the fix (CSS variable + responsive breakpoints)
- `demo.html` — mobile vs desktop viewport comparison + live slider