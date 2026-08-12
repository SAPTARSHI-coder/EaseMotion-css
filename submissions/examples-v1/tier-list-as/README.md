# Tier List

### What does this do?

It shows a tier list, the S to D ranking board popular for ranking anything. Each row has a colored tier label on the left and a set of item chips on the right. Chips use a per item gradient and lift on hover, ready to be dragged between rows.

### How is it used?

```html
<div class="tier-row">
  <span class="tier-label s">S</span>
  <div class="tier-items">
    <span class="chip" style="--c1: #6366f1; --c2: #4338ca;">React</span>
  </div>
</div>
```

Each row pairs a `tier-label` (colored by its `s` to `d` class) with a flexible `tier-items` area. Chips take a two stop gradient from `--c1` and `--c2`, so each item keeps its own color, and a hover lift hints at drag and drop.

### Why is it useful?

Tier lists are a familiar way to rank and compare options, from tools to teams. This provides the classic ranked board layout with pure CSS, ready to wire up sorting or drag and drop.
