# Fix: ease-card-footer Missing flex-wrap Causes Mobile Overflow

**Issue:** [#5504](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5504)

## Problem

`.ease-card-footer` uses `display: flex` but has no `flex-wrap` property.
When more than 2-3 buttons are placed in the footer, they overflow outside
the card boundary — especially on mobile viewports (375px wide).

## Fix

Two lines added to `.ease-card-footer`:

```css
/* ❌ Before */
.ease-card-footer {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid #2a2a4a;
}

/* ✅ After */
.ease-card-footer {
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* buttons wrap on narrow screens */
  gap: var(--ease-card-footer-gap, 0.5rem); /* consistent spacing */
  padding: 0.75rem 1.25rem;
  border-top: 1px solid #2a2a4a;
}
```

## Bonus: Customizable Gap

The gap between wrapped items is exposed as a CSS variable:

```css
.my-card {
  --ease-card-footer-gap: 0.75rem;
}
```

## How to Verify

1. Open `demo.html` — both cards are inside a 375px mobile viewport sim
2. **Before Fix** card: buttons are clipped/overflowing
3. **After Fix** card: 4 buttons wrap to two rows cleanly

## Files

- `style.css` — the fix
- `demo.html` — side-by-side buggy vs fixed cards in mobile viewport
