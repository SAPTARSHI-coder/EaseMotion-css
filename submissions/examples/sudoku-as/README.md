# Sudoku

### What does this do?

It shows a Sudoku puzzle grid: nine by nine cells with thicker lines dividing the nine three by three boxes, given clues in bold and empty cells left blank, plus one highlighted selected cell. The header names the puzzle and its difficulty.

### How is it used?

```html
<div class="sk-grid">
  <span class="sk given">5</span>
  <span class="sk br"></span>
  <span class="sk bb sel"></span>
</div>
```

The grid is a `repeat(9, ...)` CSS grid with thin cell borders. Cells that end a box column or row add a `br` or `bb` class for a thicker divider, `given` bolds the starting clues, and `sel` highlights the active cell.

### Why is it useful?

Puzzle apps, brain games, and grid demos need a Sudoku board. This renders a full nine by nine grid with box dividers and clue styling using pure CSS, no script or images.
