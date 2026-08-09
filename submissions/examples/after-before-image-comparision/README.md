# Before/After Image Comparison Slider

## What does this do?
Overlays two images (before/after) and reveals one over the other as the
user drags a slider, using CSS clip-path for the reveal effect.

## How is it used?
Stack a .compare-before image over .compare-after inside .compare,
then place a transparent <input type="range"> on top. The slider's
oninput updates the before image's clip-path inset percentage.

## Why is it useful?
- Common pattern for portfolios, photo tools, and redesign showcases
- Uses a native range input for accessibility instead of custom pointer-drag JS
- CSS clip-path handles the visual reveal — minimal script needed
- Fits EaseMotion's "CSS does the work" philosophy