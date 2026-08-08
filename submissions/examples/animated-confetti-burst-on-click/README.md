# Confetti Burst on Click

A lightweight click-triggered confetti explosion for celebratory UI moments — no canvas, no JS animation loop, pure CSS keyframes.

## What it does
On click, small colored squares fly outward and upward from the button center while fading and rotating, then reset.

## How to use it
1. Wrap your button content with several `confetti-piece` spans, each with a unique `--i` index (0, 1, 2…).
2. Toggle the `is-active` class on click via a tiny JS snippet (see `demo.html`) to (re)trigger the animation.

```html
<button class="btn confetti-burst" id="myBtn">
  Claim Reward
  <span class="confetti-piece" style="--i:0;"></span>
  <span class="confetti-piece" style="--i:1;"></span>
</button>