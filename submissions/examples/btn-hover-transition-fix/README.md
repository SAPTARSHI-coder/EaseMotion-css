# Fix: ease-btn-hover Transition Override Drops Color

**Issue:** [#5203](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5203)

## Problem

`.ease-btn` (base class) defines a full `transition` shorthand including `color`.  
`.ease-btn-hover` also defines a `transition` shorthand — but without `color`.

When both classes are on the same element, CSS cascade means `.ease-btn-hover`'s
shorthand **completely replaces** the base transition, silently dropping `color`.
Result: text color snaps instantly on hover instead of smoothly transitioning.

## Root Cause

CSS `transition` shorthand always resets ALL transition sub-properties.
Using a second shorthand on the same element is a full override, not an addition.

## Fix

Replace the shorthand in `.ease-btn-hover` with individual sub-properties:

```css
/* ❌ Before — shorthand overrides base, drops color */
.ease-btn-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease,
              background-color 0.3s ease, border-color 0.3s ease;
}

/* ✅ After — individual props extend base without overriding */
.ease-btn-hover {
  transition-property: transform, box-shadow, background-color, border-color, color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
```

## How to Verify

1. Open `demo.html` in any browser
2. Hover the **Before Fix** button slowly → text color snaps (flash)
3. Hover the **After Fix** button slowly → all properties transition smoothly

## Files
- `style.css` — the fix  
- `demo.html` — side-by-side buggy vs fixed button comparison