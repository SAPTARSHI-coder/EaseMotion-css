# Table with Sticky First Column

## What does this do?

A wide data table where the first column (row labels) stays pinned in
place while the rest of the columns scroll horizontally, using
`position: sticky` rather than a JS-synchronized frozen-column
implementation.

## How is it used?

```html
<div class="tsc-scroll">
  <table class="tsc-table">
    <thead><tr><th class="tsc-sticky">Region</th><th>Q1</th>...</tr></thead>
    <tbody><tr><td class="tsc-sticky">North America</td><td>$482K</td>...</tr></tbody>
  </table>
</div>
```

`.tsc-sticky` on both header and body cells of the first column sets
`position: sticky; left: 0`; the header's sticky cell additionally needs a
higher `z-index` than the body's, since the header row itself also needs
to stay above scrolled-under body content.

## Why is it useful?

`position: sticky` handles the geometry of "stay pinned during horizontal
scroll" natively, without a JS scroll listener syncing a duplicated frozen
column's position to the real table's scroll offset — a common alternative
implementation that requires the frozen column to be an entirely separate
table (or absolutely-positioned overlay) kept in visual sync via
`scrollLeft` events, which is more code and a source of subtle
misalignment if the two tables' row heights ever drift apart (differing
font rendering, dynamic content, etc.).

The explicit `background` on `.tsc-sticky` is the detail that's easy to
miss: `position: sticky` doesn't paint over or clip content that scrolls
underneath the stuck element by default, so a sticky cell with no
background (or a transparent one) would show the scrolling columns'
content bleeding through it as the table scrolls — the sticky column needs
its own opaque background matching its row's colour specifically to
visually block what's scrolling beneath it, which is what makes it read
as a "frozen" column rather than a floating transparent overlay.
