# Reorderable List (Buttons)

## What does this do?

A reorderable playlist using Up/Down buttons on each item instead of a
drag gesture — every move is announced through a live region, and each
button disables itself when the item is already first or last.

## How is it used?

```html
<li class="lrb-item">
  <span class="lrb-text">Morning Run Mix</span>
  <button class="lrb-up" onclick="lrbMove(this, -1)" aria-label="Move up">↑</button>
  <button class="lrb-down" onclick="lrbMove(this, 1)" aria-label="Move down">↓</button>
</li>
```

`lrbMove` swaps the item with its adjacent sibling via `insertBefore`,
`lrbUpdateButtons` re-evaluates every item's up/down `disabled` state after
each move, and `lrbAnnounce` writes the item's new position into a
`role="status"` live region.

## Why is it useful?

Drag-and-drop reordering (implemented elsewhere in this repo via the
Drag and Drop API) is intuitive for mouse and touch users but structurally
excludes keyboard-only and many screen-reader users — there's no
equivalent "drag" gesture available to them, and drag operations are
rarely announced meaningfully to assistive technology even when a
keyboard fallback exists. Up/Down buttons are the accessible-by-default
alternative: every action is a real button, individually focusable,
individually labeled, and triggerable with Enter/Space exactly like any
other button — no special gesture support needed for full functionality.

Disabling (rather than hiding) the up button on the first item and the
down button on the last keeps every item's action set visually and
structurally consistent — a hidden button would mean Tab skips over it
entirely for edge items but not others, which is a more confusing
inconsistency than a button that's present but inert. `lrbAnnounce`
speaking the item's name and new position ("Morning Run Mix moved to
position 1 of 3") rather than just "moved" gives a screen reader user
enough information to confirm the reorder did what they intended, without
needing to re-read the entire list to check.
