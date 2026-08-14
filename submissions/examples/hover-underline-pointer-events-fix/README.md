# Fix: ease-hover-underline ::after Blocks Clicks on Elements Below

**Issue:** [#6829](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/6829)

## Problem

`.ease-hover-underline::after` creates an absolutely positioned 2px tall
element. Even when invisible (`width: 0`), it still occupies a 2px tall
hit area at the bottom of the link — intercepting pointer events on elements
positioned just below, like buttons in tight navigation layouts.

## Fix

One line added to the `::after` pseudo-element:

```css
/* ❌ Before — invisible strip intercepts clicks */
.ease-hover-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

/* ✅ After — passes all pointer events through */
.ease-hover-underline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
  pointer-events: none;   /* ✅ THE FIX */
}
```

The same fix is applied to all underline variants:
- `.ease-hover-underline` (from left)
- `.ease-hover-underline-center` (from center)
- `.ease-hover-underline-right` (from right)

## How to Verify

1. Open `demo.html`
2. Try clicking the **top edge** of the button in the **Before Fix** section
3. Clicks near the top are intercepted by the invisible `::after` strip
4. In the **After Fix** section, the button top edge is always clickable

## Files
- `style.css` — the fix (`pointer-events: none` on `::after`)
- `demo.html` — interactive click demo showing buggy vs fixed behaviour