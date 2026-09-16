# Timeline

## What does this do?

A vertical event timeline where each item draws its own connector line
reaching up to the previous item's dot, using a fixed-length `::before` per
item rather than one continuous line spanning the whole list.

## How is it used?

```html
<ol class="tlb-list">
  <li class="tlb-item">
    <span class="tlb-dot" aria-hidden="true"></span>
    <div class="tlb-body">
      <p class="tlb-date">v2.4.0 — Aug 2026</p>
      <p class="tlb-desc">Added dark mode.</p>
    </div>
  </li>
  <!-- ... -->
</ol>
```

Every item except the first gets a connector (`:not(:first-child)::before`)
of a fixed height matching the gap between dots
(`padding-bottom` on `.tlb-item`), so the line always exactly bridges to the
dot above regardless of how much text each item's description contains.

## Why is it useful?

The common way to build this is one absolutely-positioned line spanning the
full height of the list (`top: 0; bottom: 0`) sitting behind all the dots —
which requires the line to start and end exactly at the first and last dot,
awkward with `padding`/`margin` at the list edges, and requires z-index
management to keep dots above the line. Drawing the connector per-item
instead ties each segment's length directly to that item's own fixed
vertical rhythm (dot spacing), so adding, removing, or reordering items
never requires recalculating a single shared line's length — each item is
fully self-contained.

The dots are `aria-hidden` since they're purely decorative; the real
event data (date, description) is ordinary text in a real `<ol>`, so a
screen reader gets the timeline as a plain ordered list of entries with no
extra markup to parse.
