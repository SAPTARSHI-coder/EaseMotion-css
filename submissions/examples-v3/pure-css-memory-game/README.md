# Pure CSS Logic Engine: 3D Memory Match Game

A fully interactive 3D card flipping game engineered entirely using CSS.

## 🚀 How it works

This component pushes the technical boundaries of stylesheet capabilities by utilizing hidden HTML checkboxes as a state-management engine. 
It leverages the `:checked` pseudo-class and the modern `:has()` relational selector to calculate game logic. It implements `transform-style: preserve-3d` with cubic-bezier easing to physically flip the cards in 3D space. 

It accomplishes a complex, interactive logic loop with **0 lines of JavaScript** (excluding the reset button).

## 💻 Usage

Include the `style.css` in your project and copy the HTML structure from `demo.html`.

```html
<div class="ease-memory-game">
  <!-- Game State & Logic Engine -->
  <input type="checkbox" id="card-1" class="game-state-toggle" />
  
  <div class="game-board">
    <label for="card-1" class="ease-3d-card">
      <div class="card-face card-front"></div>
      <div class="card-face card-back">🍎</div>
    </label>
  </div>
</div>
```

## ✨ Why it fits EaseMotion CSS

Providing a pure-CSS logic engine serves as a high-level educational reference for the community. It teaches developers how to avoid heavy JavaScript overhead by deeply utilizing CSS architecture, sibling combinators (`~`), and DOM relational selectors for complex interactive UI states.
