# Reorder List

## What does this do?

A reorderable priority list driven by up/down buttons, where rows animate to
their new positions using the FLIP technique.

## How is it used?

```html
<ul class="rlf" role="list">
  <li class="rlf-i">
    <span class="rlf-n">Item</span>
    <span class="rlf-a">
      <button type="button" aria-label="Move up">↑</button>
      <button type="button" aria-label="Move down">↓</button>
    </span>
  </li>
</ul>
<p role="status" aria-live="polite"></p>
```

## Why is it useful?

Reorderable lists are almost always drag-only, which excludes keyboard users
entirely — there is no drag gesture available to them, so the feature simply does
not exist. Buttons make reordering a first-class keyboard operation; drag can be
layered on later as an enhancement rather than being the sole mechanism.

The animation uses FLIP (First, Last, Invert, Play): record each row's position,
move it in the DOM, then transform it back to where it was and transition to zero.
This matters because the DOM change is instantaneous and unanimatable — FLIP is
what turns a jump into a movement, and it animates only `transform`, so no layout
is recalculated per frame.

Two details make it correct. Focus is explicitly restored to the button after the
move, otherwise reordering blurs the control and the user loses their place mid
sequence. And the `role="status"` region announces the item's new position, since
a purely visual reorder tells a screen reader user nothing about what changed.

The FLIP step is skipped entirely when reduced motion is requested — the reorder
still happens, just without the travel.
