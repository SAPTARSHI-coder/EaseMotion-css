# Kanban Board

### What does this do?

It lays out a three column kanban board with labeled columns, a count badge per column, and task cards that show a colored tag and a title. Cards lift on hover and the board scrolls sideways on narrow screens.

### How is it used?

```html
<div class="board">
  <section class="column">
    <header>To do <span class="count">3</span></header>
    <article class="task"><span class="tag design">Design</span><p>Draft the logo</p></article>
  </section>
</div>
```

Each column is a flex item that holds its own header and cards. Tag tones are `design`, `dev`, and `qa`.

### Why is it useful?

Task boards are the core view of project tools. This lays out kanban columns with headers, counts, and cards using only CSS, giving a clean starting point a developer can wire to real data. The hover lift is removed under reduced motion.
