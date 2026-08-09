# Chess Board

### What does this do?

It shows a chess board in the starting position. An eight by eight grid alternates light and dark squares, Unicode chess pieces sit in their opening ranks, and file letters and rank numbers label the edges. White and black pieces are tinted for contrast on any square.

### How is it used?

```html
<div class="board">
  <span class="sq lt bp">&#9820;</span>
  <span class="sq dk">&#9822;</span>
</div>
```

The board is a `repeat(8, 1fr)` grid. Each square gets a `lt` or `dk` class for its color and holds a Unicode piece glyph, with `wp` and `bp` classes tinting white and black pieces so both read clearly on light and dark squares.

### Why is it useful?

Chess apps, tutorials, and puzzle sites need a board. This renders a full board and starting lineup with a pure CSS grid and Unicode pieces, no images or board engine.
