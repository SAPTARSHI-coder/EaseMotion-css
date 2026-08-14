# Animation Specificity Fix

## What does this do?
Resolves the issue where high-specificity animation utility classes prevent inline `style=""` attributes from overriding animation duration, delay, or easing — by exposing all timing parameters as CSS custom properties that can be set via inline style.

## How is it used?
```html
<!-- Default timing -->
<div class="anim-fade-in">Fades in at 0.5s</div>

<!-- Custom timing via CSS var on inline style -->
<div class="anim-fade-in" style="--anim-duration: 1.5s; --anim-delay: 0.3s">
  Fades in slowly
</div>
```

## Why is it useful?
CSS specificity rules mean that `animation-duration: 2s` in an inline style should always win — but when an animation class sets the property with equal or compound specificity, the override silently fails. By making animation classes read `var(--anim-duration)` instead of hardcoding the value, the class specificity is irrelevant: the user simply sets the CSS variable, which always wins at the element level.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Fixes: #9825
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
