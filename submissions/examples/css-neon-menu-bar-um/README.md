# CSS Neon Menu Bar

## 1. What does this do?
This component renders an interactive, responsive navigation bar featuring a sliding active neon indicator underline that moves smoothly between tab items on click.

## 2. How is it used?
Configure the navigation input triggers and item labels alongside the sliding underline container:
```html
<input type="radio" name="neon-nav" id="t-home" class="nav-trigger" checked>
<input type="radio" name="neon-nav" id="t-articles" class="nav-trigger">

<nav class="nav-container">
  <div class="nav-list">
    <label for="t-home" class="nav-item l-home" role="button">Home</label>
    <label for="t-articles" class="nav-item l-articles" role="button">Articles</label>
    <div class="neon-indicator"></div>
  </div>
</nav>
```

## 3. Why is it useful?
It provides front-end developers with an elegant active-highlight navigation pattern built natively using CSS variables and sibling selector transitions, avoiding complex layout offset calculation scripts.
