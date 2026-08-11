# CSS Maze

## 1. What does this do?
This component renders an interactive 8x8 maze using CSS grid layout rules, allowing players to hover or focus through cells, featuring a native solution path reveal toggle.

## 2. How is it used?
Incorporate the HTML layout mapping sibling toggle elements:
```html
<!-- Toggle Solution Path -->
<input type="checkbox" id="solution-toggle" class="toggle-input">

<div class="maze-cabinet">
  <!-- Interactive Grid of Cells -->
  <div class="maze-grid">
    <!-- Start cell with solution path hooks -->
    <div class="cell start sol-path sp-1 w-top w-left w-right" tabindex="0"></div>
    <div class="cell w-top w-bottom w-left" tabindex="0"></div>
  </div>
</div>
```

## 3. Why is it useful?
It demonstrates CSS grid layout control, custom border mapping patterns, and how staggered timing delays can simulate pathfinding animations using modern CSS animations without JavaScript.
