# Stacked Cards Hover Spread

## What does this do?
A layered card animation where multiple cards are stacked on top of each other and smoothly spread apart on hover — fanning out with rotation and translation to reveal each card fully. Pure CSS, zero JS.

## Variants
- `.card-stack` — 3-card stack (default)
- `.card-stack--4` — 4-card stack with wider spread
- `.card-stack--lg` — larger size for content cards
- `.stack-content` — variant for cards with icon/heading/text content
- `--stack-color` — customize each card's color via CSS variable

## How to use it
```html
<!-- Basic 3-card stack -->
<div class="card-stack">
  <div class="stack-card stack-card--1">Card 1</div>
  <div class="stack-card stack-card--2">Card 2</div>
  <div class="stack-card stack-card--3">Card 3</div>
</div>

<!-- 4-card stack -->
<div class="card-stack card-stack--4">
  <div class="stack-card stack-card--1">01</div>
  <div class="stack-card stack-card--2">02</div>
  <div class="stack-card stack-card--3">03</div>
  <div class="stack-card stack-card--4">04</div>
</div>

<!-- Custom color -->
<div class="stack-card stack-card--1" style="--stack-color: #22c55e">...</div>
```

## Why it fits EaseMotion CSS
This effect fits EaseMotion CSS's animation-first philosophy by transforming static cards into an interactive depth experience. It demonstrates depth, motion, and composability using lightweight CSS transitions — no JS, no dependencies. `prefers-reduced-motion` disables the spread transform while preserving the brightness/shadow feedback.
