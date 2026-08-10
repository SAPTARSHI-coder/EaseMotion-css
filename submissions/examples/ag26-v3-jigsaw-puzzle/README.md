# Jigsaw Puzzle Layout

An experimental layout where four quadrants interlock like a jigsaw puzzle using CSS `clip-path`.

## Preview
Open `demo.html` in your browser. You will see an image split into four interlocking puzzle pieces. Hovering over a piece highlights it.

## Implementation
- Uses `clip-path: polygon()` to cut out complex shapes.
- Negative margins are used to pull the grid items together so the "tabs" and "blanks" overlap perfectly and interlock.
- A single background image is applied to all pieces, with different `background-position` values to map the image correctly across the puzzle.
