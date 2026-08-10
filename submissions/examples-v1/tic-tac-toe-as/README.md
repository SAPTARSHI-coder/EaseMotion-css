# Tic Tac Toe

### What does this do?

It shows a finished tic tac toe board where X has won on the diagonal. X marks are drawn as two crossed bars, O marks as rings, and a glowing line strikes through the winning three, drawing itself across the board.

### How is it used?

```html
<div class="ttt-board">
  <span class="cell x"></span>
  <span class="cell o"></span>
  <span class="win-line"></span>
</div>
```

The board is a three by three grid. Each cell shows an X (two rotated `::before` and `::after` bars) or an O (a bordered circle). The `win-line` is a rotated bar that scales in from its start to strike the winning row.

### Why is it useful?

Games, empty states, and playful UIs use tic tac toe. This renders a board with X and O marks and an animated winning strike using pure CSS, no images or script.
