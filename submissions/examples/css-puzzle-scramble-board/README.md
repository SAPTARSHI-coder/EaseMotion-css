# CSS Puzzle Scramble Board

**What does this do?**
This is a pure CSS 15-puzzle component that features a dramatic "scramble" entrance animation on load and interactive jiggle hover effects.

**How is it used?**
Use the `puzzle-scramble-board` container with a grid layout and place `puzzle-tile` elements inside it, using the `puzzle-empty` class for the blank spot.

```html
<div class="puzzle-scramble-board" role="grid" aria-label="15 Puzzle Board">
  <div class="puzzle-tile" role="gridcell" tabindex="0">1</div>
  <div class="puzzle-tile" role="gridcell" tabindex="0">2</div>
  <!-- ... tiles up to 15 ... -->
  <div class="puzzle-tile puzzle-empty" role="gridcell" aria-hidden="true"></div>
</div>
```

**Why is it useful?**
This component fits seamlessly into the EaseMotion library by providing a complex, physics-like animation purely through CSS. It expands the collection of ready-to-use dynamic UI patterns, giving developers an eye-catching interactive element without relying on any JavaScript for the animations.
