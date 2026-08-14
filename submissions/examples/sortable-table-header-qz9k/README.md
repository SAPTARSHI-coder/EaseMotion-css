# Sortable Table Header

## What does this do?

A table whose column headers sort the rows on click, using `aria-sort` on
each header's button as the single source of truth for both the
accessible sort state and the visible direction arrow.

## How is it used?

```html
<th><button type="button" onclick="sthSort(this, 0)">Name<span class="sth-arrow" aria-hidden="true"></span></button></th>
```

`sthSort` reads the clicked button's current `aria-sort`, clears
`aria-sort` from every header (so exactly one is ever marked), sets the new
direction on the clicked one, then re-sorts the row array with a
numeric-aware comparator (falls back to `localeCompare` for non-numeric
columns) and re-appends rows to `tbody` in the new order.

## Why is it useful?

`aria-sort` is the standards-defined way to expose a sortable column's
current direction to assistive technology, but a common implementation
tracks sort state in a separate JS variable or CSS class and only writes
`aria-sort` as an afterthought — which risks the two falling out of sync,
particularly once multiple columns and re-sort logic are involved. Making
`aria-sort` itself the thing both the visual arrow (via
`[aria-sort] .sth-arrow` attribute selectors) and the sorting logic read
from means there's exactly one flag per header, and it's the same one a
screen reader inspects.

The comparator checks whether both cell values parse as numbers before
falling back to string comparison, so a "Points" column sorts `9` before
`18` before `24` — a pure string sort would order those the same way
`"18" < "24" < "9"` sorts lexicographically, which is wrong for any numeric
column with more than one digit-count among its values.
