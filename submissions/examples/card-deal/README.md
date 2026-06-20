# Card Dealing Fan Animation

## What does this do?

Creates a fan-style card dealing animation where cards spring from a deck position into a fanned layout, each with staggered delay and unique rotation.

## How is it used?

Wrap `.card` elements inside a `.deck` container. Each card gets a staggered animation delay class (`.c1`-`.c5`).

```html
<div class="deck" tabindex="0" role="button" aria-label="Deal cards">
  <div class="card c1">A♠</div>
  <div class="card c2">K♥</div>
  <div class="card c3">Q♦</div>
  <div class="card c4">J♣</div>
  <div class="card c5">10♠</div>
</div>
```

## Why is it useful?

Card dealing animations enhance card game UIs, tutorial walkthroughs, and interactive decks. This pure CSS implementation demonstrates staggered keyframe animations with CSS custom properties for positioning.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effects.

## Contribution Notes

- Class naming handled by contributor
- Maintainer will rename to ease-\* convention before merging
