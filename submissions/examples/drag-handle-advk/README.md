# Drag Handle List

## What does this do?

A reorderable list where only a dedicated grip icon initiates a drag, using
the native HTML Drag and Drop API. The row itself is `draggable="false"`,
so text in the row stays selectable and any interactive content inside it
(a link, a button) keeps working normally.

## How is it used?

```html
<ul class="dh-list" id="dh-list">
  <li class="dh-item" draggable="false">
    <span class="dh-grip" draggable="true" aria-hidden="true">⠿</span>
    <span>Write the outline</span>
  </li>
  <!-- ... -->
</ul>
<script>dhInit(document.getElementById('dh-list'));</script>
```

`dragstart` bails out (`e.preventDefault()`) unless the event actually
originated on an element with `.dh-grip`, which is the enforcement point —
`draggable="true"` on the grip alone isn't sufficient by itself in every
browser's event-bubbling behaviour, so the handler re-checks the target.

## Why is it useful?

Making an entire list row `draggable="true"` is the common approach, but it
means any click-and-drag gesture over the row — including selecting text or
starting a drag from inside a nested link — is captured as a reorder
attempt instead. Scoping `draggable="true"` to a small grip glyph, and
`draggable="false"` on everything else, means dragging is opt-in to a
specific, discoverable affordance rather than an accidental side effect of
normal interaction with the row's content.

The reordering logic itself (finding the item whose vertical midpoint the
pointer has crossed) needs no external library — the native `dragover`
event's `clientY` combined with `getBoundingClientRect()` on each candidate
row is enough to decide where to reinsert the dragged node.
