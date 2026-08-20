# Jigsaw Puzzle Piece — EaseMotion CSS Component

**Issue:** [#36764](https://github.com/anomalyco/EaseMotion-css/issues/36764)

A dark-themed jigsaw puzzle with draggable pieces that snap into place. Drag puzzle pieces between slots and watch them snap together with a spring animation. Includes a win-detection status and shuffle button.

## CSS Custom Properties

| Variable          | Default   | Description                      |
|-------------------|-----------|----------------------------------|
| `--piece-color`   | `#7c5cfc` | Colour of puzzle pieces          |
| `--bg-color`      | `#1e1e2e` | Card/slot background colour      |
| `--snap-duration` | `0.35s`   | Duration of the snap animation   |
| `--border-color`  | `#3a3a52` | Colour of dashed slot borders    |

## Usage

```html
<div class="puzzle-card">
  <div class="puzzle-board" id="puzzleBoard">
    <div class="puzzle-slot" data-index="0">
      <div class="puzzle-piece" draggable="true" data-index="0">
        <div class="puzzle-piece__shape"></div>
        <span class="puzzle-piece__label">A</span>
      </div>
    </div>
    <!-- more slots -->
  </div>
</div>
```

Include `style.css` and the JavaScript from `demo.html` for drag-and-drop and shuffle logic.
