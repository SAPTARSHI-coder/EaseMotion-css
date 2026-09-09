# table-zebra-qz9k

A Sass mixin for zebra-striped tables, scoping the stripe selector to
`tbody tr` so a `<thead>` row is never accidentally counted into the
odd/even sequence.

## Usage

```scss
@use 'table-zebra' as *;

.data-table {
  @include table-zebra($stripe: rgba(76, 110, 245, 0.04));
}
```

```html
<table class="data-table">
  <thead>
    <tr><th>Name</th><th>Status</th></tr>
  </thead>
  <tbody>
    <tr><td>Alpha</td><td>Active</td></tr>
    <tr><td>Beta</td><td>Paused</td></tr>
  </tbody>
</table>
```

| Param | Default | Description |
|---|---|---|
| `$stripe` | `rgba(0, 0, 0, 0.035)` | Background for even body rows. |
| `$hover` | `rgba(76, 110, 245, 0.06)` | Background on row hover. |

## Why is it useful?

A zebra-stripe rule written as `tr:nth-child(even)` scoped to the whole
`<table>` (rather than specifically `tbody tr`) silently miscounts the
moment a `<thead>` is present: the header row counts as row 1 in the
`nth-child` sequence, which shifts every subsequent body row's odd/even
parity by one compared to what the author likely intended when picking
which rows to stripe. Scoping to `tbody tr:nth-of-type(even)` counts only
among sibling `<tr>` elements inside `<tbody>`, so the stripe pattern is
unaffected by whether a `<thead>` (or a `<tfoot>`) is present at all.

`:nth-of-type` specifically (not `:nth-child`) is used so the stripe
sequence is also unaffected by any non-`<tr>` sibling that might
legitimately sit inside `<tbody>` in some table-generation setups (a
`<template>` or comment node some frameworks leave behind) — `nth-of-type`
counts only among same-tag siblings, which is a closer match to "the Nth
data row" than "the Nth child of any kind."

## Multiple tbody sections

`:nth-of-type(even)` restarts its count independently within *each*
`<tbody>` element, which matters for tables that use several `<tbody>`
sections to group rows (a common pattern for grouped/categorized data):

```html
<table class="data-table">
  <thead><tr><th>Name</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td>Alpha</td><td>Active</td></tr>
    <tr><td>Beta</td><td>Paused</td></tr>
  </tbody>
  <tbody>
    <tr><td>Gamma</td><td>Active</td></tr>
    <tr><td>Delta</td><td>Paused</td></tr>
  </tbody>
</table>
```

Here, both the first row of the first `<tbody>` and the first row of the
second `<tbody>` count as "row 1" for striping purposes, each restarting
its own odd/even sequence — which is usually the desired behaviour for
visually grouped sections, since it keeps each group's own striping
internally consistent rather than continuing an arbitrary global count
across a group boundary that has no visual separator of its own.

## Combining with sortable columns

If a table's rows get reordered by a sort interaction (client-side sort on
column click), the striping recalculates automatically on the new DOM
order, since `:nth-of-type` is a live structural selector, not a value
baked in at render time — no re-application of a class or a JS-driven
recount is needed after a sort, unlike an approach that assigns `even`/`odd`
classes to rows explicitly at data-render time and then has to remember to
reassign them after any reorder.

## Print considerations

Zebra striping printed on paper wastes toner for a purely visual scanning
aid that has no equivalent benefit once ink can't be conserved by
alternating. Consider pairing this mixin with the `safe-print-qz9k` mixin's
approach — stripping non-essential background colours under `@media
print` — if the same table is expected to be printed as well as viewed on
screen.

