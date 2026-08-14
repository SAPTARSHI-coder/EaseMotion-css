# Engine Bug Fix: `ease-in-out` Easing Alias Correction

## 1. What does this showcase do?

This documentation showcase documents and demonstrates a bug fix for the EaseMotion Motion Engine parser (`easemotion/engine/parser.js`).

In the parser's `EASING_MAP`, the token `'ease-in-out'` was incorrectly assigned `cubic-bezier(0.4, 0, 0.2, 1)`, which is identical to the default `'ease'` curve. As a result, writing `em="fade-in ease-in-out"` produced the exact same acceleration profile as `em="fade-in ease"`.

This fix updates `'ease-in-out'` to use the standard W3C symmetric curve `cubic-bezier(0.42, 0, 0.58, 1)`.

## 2. How is it used?

```html
<!-- em="" attribute — ease-in-out now uses a distinct symmetric acceleration/deceleration curve -->
<div em="slide-up 600ms ease-in-out">Symmetric entrance</div>
<div em="fade-in 400ms ease">Default ease curve</div>
```

## 3. Why does it fit EaseMotion CSS?

EaseMotion's core philosophy is human-readable, predictable animation tokens. When developers specify `ease-in-out`, they expect a symmetric curve rather than a duplicate of `ease`. Correcting this mapping ensures that motion engine tokens accurately match their CSS spec definitions.

## 4. Demo Instructions

Open `demo.html` directly in any web browser and click **▶ Play Motion** to view the comparison between the original duplicate curve and the corrected symmetric `ease-in-out` curve.
