# Drag-and-Drop Visual Feedback Collection

## What does this do?
A set of five CSS-only visual states for drag interactions — a grip-handle affordance, a drop-zone highlight, a drag-ghost placeholder, and invalid/success drop flashes — that pair with native HTML5 Drag and Drop or any JS sortable library without this submission owning the drag logic itself.

## How is it used?

```html
<!-- Drop zone + items with a drag handle -->
<div class="drop-zone" id="zone">
  <ul class="drag-list" id="list">
    <li class="drag-item" draggable="true">
      <span class="drag-handle">⠿</span> Item one
    </li>
    <li class="drag-item" draggable="true">
      <span class="drag-handle">⠿</span> Item two
    </li>
  </ul>
</div>
```

State classes your drag logic toggles at the right moments:

```js
// While the user drags an item over the zone
zone.classList.add('is-dragover');     // drop-zone highlight
zone.classList.remove('is-dragover');  // on dragleave / drop

// On the item currently being dragged
item.classList.add('is-dragging');     // drag-ghost placeholder
item.classList.remove('is-dragging');  // on dragend

// On drop — pick one, then remove it after ~450ms so it can replay
item.classList.add('is-invalid');      // shake + red flash, rejected drop
item.classList.add('is-success');      // pulse + green flash, accepted drop
```

`demo.html` includes a small native HTML5 Drag and Drop wiring (`dragstart`,
`dragover`, `drop`, etc.) so the demo is interactive out of the box, plus two
buttons that manually trigger the invalid/success states for preview. None
of that wiring is required to use the CSS — any drag implementation that
toggles the same class names gets the same visual feedback.

## Why is it useful?
Drag-and-drop is everywhere (reorderable lists, kanban boards, file
uploaders, sortable galleries), but every implementation reinvents the same
five visual cues from scratch: "this is draggable," "you can drop here,"
"this is what's moving," "that didn't work," "that worked." Centralizing
just the *look* of those states — and deliberately not the drag mechanics —
keeps this submission framework-agnostic and dependency-free, fitting
EaseMotion CSS's animation-first philosophy: contributors bring their own
drag logic (native DnD, SortableJS, dnd-kit, whatever), and these classes
make the interaction feel polished without adding a single dependency.

## Tech Stack
- HTML
- CSS only for every visual state (`transition`, `:hover`/`:active`,
  `@keyframes` shake/pulse)
- JS in `demo.html` is demo wiring only (native HTML5 DnD events + two
  preview buttons) — not part of the CSS API surface

## Preview
Open `demo.html` directly in your browser — no build step, no server,
no external dependencies. Try actually dragging an item in the first
section, and use the buttons in the third section to preview the
invalid/success flashes.

## Note on naming
Submitted as `drag-feedback-collection-tk` (suffixed per the repo's
naming-collision policy in `CONTRIBUTING.md`) in case of overlap with
existing drag-related submissions (`drag-and-drop-list`, `drag-handle`,
`elastic-drag-sgr`, etc.). This collection is scoped specifically to
*feedback states* (zone highlight, ghost, invalid/success) rather than
full sortable-list mechanics, so it complements rather than duplicates
that prior art.