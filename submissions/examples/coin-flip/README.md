# 3D Coin Flip Animation

## What does this do?

Creates a 3D coin with heads/tails faces that flips in 3D space on hover or focus using pure CSS `transform-style: preserve-3d` and `backface-visibility`.

## How is it used?

Add the `.coin` container with `.heads` and `.tails` face elements. Hover or focus the coin to trigger the flip.

```html
<div class="coin" tabindex="0" role="button" aria-label="Flip the coin">
  <div class="coin-face heads">🪙</div>
  <div class="coin-face tails">🌙</div>
</div>
```

## Why is it useful?

Coin flips are a classic interaction for decision-making widgets, game UIs, and casual apps. This pure CSS implementation showcases 3D transforms and keyframe animations while remaining dependency-free and accessible.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effects.

## Contribution Notes

- Class naming handled by contributor
- Maintainer will rename to ease-\* convention before merging
