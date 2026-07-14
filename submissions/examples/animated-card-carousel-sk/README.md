# Animated Card Carousel

## What does this do?

A horizontal scrollable card carousel with CSS scroll-snap, gradient-bordered cards, and pulsing arrow indicators on each side. Cards have a hover lift effect with shadow.

## How is it used?

Open `demo.html` and scroll horizontally through the 4 cards using trackpad, mouse wheel, or drag. The carousel snaps to each card. Arrow indicators pulse on each side to hint at scrollability. On mobile, cards expand to near full-width for easy tapping.

## Why is it useful?

Demonstrates a pure CSS scroll-snap carousel without any JavaScript. The gradient borders use `mask-composite` for a clean edge. The pulsing arrows and hover effects provide visual affordance. Responsive and respects `prefers-reduced-motion`.
