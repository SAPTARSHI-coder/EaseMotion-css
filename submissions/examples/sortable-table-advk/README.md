# Sortable Table

## What does this do?

Table column headers that sort, with the current sort state driven by `aria-sort`
and reflected in a rotating arrow.

## How is it used?

```html
<th aria-sort="ascending">
  <button type="button">Component<span class="stb-ar" aria-hidden="true"></span></button>
</th>
```

Set `aria-sort` to `ascending`, `descending` or `none`; the styling follows.

## Why is it useful?

Sortable headers are usually a `<th>` with a click handler and an arrow toggled
by a class. That has two failures. The header is not keyboard-operable, because a
`th` is not focusable; and the sort direction exists only as a glyph, so a screen
reader user has no way to know how the table is ordered.

Putting a real `<button>` inside the `th` makes the control focusable and
activatable by Enter and Space, and `aria-sort` on the `th` is the standard way to
expose the ordering — assistive technology announces "sorted ascending" alongside
the column name.

Driving every visual state from the `aria-sort` attribute rather than a parallel
class is the structural point: the arrow physically cannot show a different
direction from what is announced, because both read the same attribute. Class-based
implementations drift the moment one update path forgets the other.

The faint hover arrow on unsorted columns is a small but real affordance — without
it there is nothing to indicate a column can be sorted until it already has been.
