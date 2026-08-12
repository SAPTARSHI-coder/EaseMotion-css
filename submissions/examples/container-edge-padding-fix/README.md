# Fix: ease-container Content Touches Edges at Exactly 1200px Viewport

**Issue:** [#7853](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/7853)

## Problem

`.ease-container` used `max-width: 1200px` with horizontal padding.
At exactly 1200px viewport width, the container fills 100% of the viewport —
and the padding is counted **inside** the 1200px box via `box-sizing: border-box`.
This means content can sit flush against the viewport edge with no visible breathing room.

## Root Cause

```css
/* ❌ Buggy — padding is inside the box */
.ease-container {
  width: 100%;
  max-width: 1200px;       /* at 1200px viewport, fills 100% */
  padding-left: 1.5rem;    /* only exists INSIDE the 1200px */
  padding-right: 1.5rem;
  box-sizing: border-box;
}
```

## Fix

Use CSS `min()` to subtract padding from the viewport width **before** applying max-width:

```css
/* ✅ Fixed — padding subtracted from viewport first */
.ease-container {
  width: min(
    100% - (2 * var(--ease-container-padding)),  /* always leaves edge gap */
    var(--ease-container-max)                     /* caps on large screens */
  );
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--ease-container-padding);
  padding-right: var(--ease-container-padding);
  box-sizing: border-box;
}
```

## Width Behaviour After Fix

| Viewport | Formula | Result |
|---|---|---|
| 375px (mobile) | min(375 − 48, 1200) | 327px — always padded |
| 1200px (exact) | min(1200 − 48, 1200) | 1152px — 24px edge gap |
| 1400px (wide) | min(1400 − 48, 1200) | 1200px — centred |

## Customization

```css
.my-container {
  --ease-container-max:     900px;
  --ease-container-padding: 2rem;
}
```

## How to Verify

1. Open `demo.html`
2. Resize browser to exactly 1200px — the red lines mark viewport edges
3. Buggy container: content sits flush against red edge lines
4. Fixed container: always maintains visible gap from edges

## Files
- `style.css` — the fix using CSS `min()`
- `demo.html` — live viewport width display + edge indicator demo