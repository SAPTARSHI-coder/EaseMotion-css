# Dice

### What does this do?

It shows a set of five dice with faces from one to six. Each die lays its pips out on a three by three grid using named grid areas, so the classic dice patterns fall into place, on rounded cubes that tilt on hover.

### How is it used?

```html
<div class="die" aria-label="Die showing 5">
  <span class="pip a"></span><span class="pip c"></span>
  <span class="pip e"></span>
  <span class="pip g"></span><span class="pip i"></span>
</div>
```

The die is a three by three grid with named areas from `a` to `i`. Each pip carries the class of the cell it belongs in, so adding the right pips builds any face from one to six without extra CSS per face.

### Why is it useful?

Board games, randomizers, and probability demos need dice. This renders true dice faces from CSS grid areas and radial gradient pips, with no images, ready to swap faces on a roll.
