# ease-out-bounce Safari Fix

## What does this do?
Provides a Safari-safe bounce animation using `cubic-bezier(0.34, 1.56, 0.64, 1)` instead of keyframe-based bounce timing that breaks on WebKit/Safari, eliminating the abrupt stop at the end of the animation.

## How is it used?
```html
<!-- Entry bounce animation -->
<div class="bounce-entry">Animates on load</div>

<!-- Hover bounce -->
<div class="bounce-safe">Hover me</div>
```

## Why is it useful?
Safari and iOS WebKit incorrectly calculate certain `@keyframes` bounce easing patterns, resulting in an abrupt stop instead of a smooth settle. This fix uses a mathematically equivalent `cubic-bezier` curve that renders identically across all major browsers. It fits EaseMotion CSS's goal of cross-browser animation reliability.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Fixes: #9820
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
