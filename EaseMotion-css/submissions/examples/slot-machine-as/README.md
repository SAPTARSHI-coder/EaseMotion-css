# Slot Machine

### What does this do?

It shows a slot machine with a glowing JACKPOT marquee, three spinning reels of symbols (7, star, diamond), a credit and bet display, and a side lever with a red ball. The reels spin at slightly different speeds. Under reduced motion they stop on a symbol.

### How is it used?

```html
<div class="reel">
  <span class="strip r1"><i>7</i><i>&#9733;</i><i>&#9830;</i><i>7</i></span>
</div>
```

Each reel clips a vertical `strip` of symbols and scrolls it with the `reel-spin` keyframes, using a slightly different duration per reel. A gradient overlay darkens the top and bottom of each window for depth, and the lever is built from a stick and a ball.

### Why is it useful?

Games, promotions, and reward reveals use a slot machine. This builds a spinning slot machine with pure CSS reels and a lever, no images or script, with a reduced motion fallback.
