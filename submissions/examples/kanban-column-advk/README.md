# Kanban Board

## What does this do?

A horizontally scrolling board with sticky column headers, independently
scrolling columns, and card counts derived from CSS counters.

## How is it used?

```html
<div class="kbn">
  <section class="kbn-c">
    <header><h2>Backlog</h2></header>
    <ol role="list"><li class="kbn-k">Card text</li></ol>
    <footer class="kbn-n"></footer>
  </section>
</div>
```

## Why is it useful?

The count badge is the interesting part, and it comes with a constraint worth
knowing. Boards normally render the number in the template —
`<h2>Backlog <span>4</span></h2>` — a second source of truth that drifts the
moment a card is added or filtered client-side. Incrementing a CSS counter per
card and rendering `content: counter(cards)` makes the number count what is
actually rendered.

The catch is placement. CSS counters resolve in **document order**, so a badge in
the column header would always print `0` — the cards have not been walked at that
point in the tree. The count therefore lives in a `<footer>` after the list, which
is the earliest position where the counter holds the right value. This is the part
most counter-based implementations get wrong, because the header is where a
designer naturally wants the badge.

Each column scrolls independently with a sticky header, so a long backlog does not
push the whole board taller and the column name stays visible while scrolling
through it — which is what makes a board usable with many cards.

Using `<ol>` with `role="list"` preserves list semantics that `list-style: none`
strips in Safari, and ordered lists are correct here because position in a column
is meaningful priority.

Status is carried by the left border colour *and*, for done cards, by
`line-through` and muted text — so completion does not depend on distinguishing a
green border from an amber one.
