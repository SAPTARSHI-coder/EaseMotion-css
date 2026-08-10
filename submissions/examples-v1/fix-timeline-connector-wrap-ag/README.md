# Fix ease-timeline Connector on Multi-Line Content

## What does this do?
Uses `::after` with `top: dot-center` and `bottom: 0` to draw the connector
from the dot's center to the item's bottom edge, so the line always reaches
the next dot regardless of how many lines of content the item has.

## How is it used?
```html
<div class="ease-timeline">
  <div class="ease-timeline__item is-done">
    <div class="ease-timeline__dot"></div>
    <p class="ease-timeline__title">Event title</p>
    <p class="ease-timeline__body">Long description…</p>
  </div>
</div>
```

## Why is it useful?
`height: 100%` on the connector only works when the parent has an explicit
height. Using absolute `bottom: 0` always reaches the next item. Fixes: #35844
