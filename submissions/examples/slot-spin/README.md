# Slot Machine Reel Spin Animation

## What does this do?

Creates a slot machine with three spinning reels that animate on hover/focus using pure CSS keyframe animations with staggered delays.

## How is it used?

Wrap `.symbol` elements inside `.reel` containers inside a `.machine` wrapper. Each reel scrolls vertically through the symbol list.

```html
<div
  class="machine"
  tabindex="0"
  role="button"
  aria-label="Spin the slot machine"
>
  <div class="reel">
    <div class="symbol">🍒</div>
    <div class="symbol">🍋</div>
    <!-- more symbols... -->
  </div>
</div>
```

## Why is it useful?

Slot machine animations are common in game UIs, gambling simulators, and interactive displays. This pure CSS implementation demonstrates vertical scroll animation with staggered reel timing.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effects.

## Contribution Notes

- Class naming handled by contributor
- Maintainer will rename to ease-\* convention before merging
