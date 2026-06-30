# 3D Dice Roll Animation

## What does this do?

Creates a 3D dice cube with face dots (⚀-⚅) that rolls in 3D space on hover or focus using pure CSS `transform-style: preserve-3d` and `backface-visibility`.

## How is it used?

Add the `.dice` container with six `.face` elements inside. Hover or focus the cube to trigger the roll animation.

```html
<div class="dice" tabindex="0" role="button" aria-label="Roll the dice">
  <div class="face front">⚀</div>
  <div class="face back">⚁</div>
  <div class="face right">⚂</div>
  <div class="face left">⚃</div>
  <div class="face top">⚄</div>
  <div class="face bottom">⚅</div>
</div>
```

## Why is it useful?

Dice-rolling interactions are common in board games, D&D tools, and casual gaming UIs. This pure CSS implementation avoids JavaScript dependency and showcases EaseMotion's animation capabilities through 3D transforms, keyframes, and accessibility support.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effects.

## Contribution Notes

- Class naming handled by contributor
- Maintainer will rename to ease-\* convention before merging
