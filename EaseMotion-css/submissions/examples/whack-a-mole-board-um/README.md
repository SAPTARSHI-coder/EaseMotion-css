# CSS Whack-a-Mole Board

## 1. What does this do?
This component is a fully interactive, pure CSS Whack-a-Mole game featuring staggered popping animations, CSS counter-based real-time score calculation, and accessible keyboard navigation without any JavaScript.

## 2. How is it used?
Integrate it by utilizing the CSS grid structure alongside the interactive input mapping:
```html
<form class="game-cabinet" role="application" aria-label="Whack-a-Mole Game">
  <div class="score-display">SCORE: </div>
  
  <div class="mole-board">
    <div class="hole-wrapper">
      <input type="checkbox" id="mole-1" class="mole-input" aria-label="Mole 1">
      <label for="mole-1" class="mole-label">
        <div class="mole-character">
          <div class="mole-snout"></div>
          <div class="mole-whiskers"></div>
        </div>
      </label>
      <span class="hit-spark" aria-hidden="true">HIT!</span>
    </div>
  </div>
  
  <button type="reset" class="reset-btn">PLAY AGAIN</button>
</form>
```

## 3. Why is it useful?
It demonstrates how advanced animations and state tracking (clicks/hits, scorekeeping, and board resets) can be handled natively using CSS selectors, layout models, and variables, promoting performant, JS-free, and highly responsive user interactions.
