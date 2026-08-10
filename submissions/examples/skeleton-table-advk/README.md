# Table Skeleton

## What does this do?

A loading placeholder for a data table that reserves the real column widths and
row heights.

## How is it used?

```html
<table class="skt" aria-busy="true" aria-label="Loading invoices">
  <thead><tr><th style="width:32%">Invoice</th><th style="width:14%">Amount</th></tr></thead>
  <tbody>
    <tr style="--i:0"><td><span class="skt-b"></span></td><td><span class="skt-b skt-b--num"></span></td></tr>
  </tbody>
</table>
```

## Why is it useful?

Generic skeletons are usually a stack of grey bars that bear no relation to the
layout replacing them, so the moment data arrives every column resizes and the
page jumps. For tables that is especially bad, because column widths are derived
from content and can shift dramatically.

Using a real `<table>` with `table-layout: fixed` and declared column widths means
the placeholder has the same geometry as the loaded state. The transition to real
data is then a content swap with no reflow — which is what a skeleton is supposed
to buy you in the first place.

The variants matter for the same reason: numeric cells are right-aligned and
narrower, status cells are pill-shaped. Matching the *shape* of each column's
content makes the placeholder legible as a table rather than as a grid of bars.

Row-level `--i` staggers the pulse so the table reads as a sequence of rows rather
than one flashing block, and `aria-busy` on the table tells assistive technology
what is happening instead of presenting an empty grid.
