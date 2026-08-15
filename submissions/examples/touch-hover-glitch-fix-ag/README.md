# Touch Hover Glitch Fix

## What does this do?
Prevents hover animation glitches and stuck states on touch devices by gating all `:hover` styles behind `@media (hover: hover) and (pointer: fine)`, and providing `:active` feedback for touchscreen users instead.

## How is it used?
```html
<div class="hover-card">Hover on desktop, tap on mobile</div>
<button class="touch-btn">Touch-Safe Button</button>
```

## Why is it useful?
On touch devices, the browser fires `touchstart → touchend → mouseover` in sequence, leaving `:hover` styles stuck until the user taps elsewhere. By guarding hover rules with pointer media queries, EaseMotion CSS animations never get trapped in a glitched mid-animation state on mobile. Touch users receive a clean `:active` press effect instead.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Fixes: #9823
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
