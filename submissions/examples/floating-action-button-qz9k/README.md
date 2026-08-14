# Floating Action Button

## What does this do?

A speed-dial floating action button: pressing the main button reveals a
stack of secondary actions with a staggered cascade animation, each item
delayed slightly more than the one before it.

## How is it used?

```html
<div class="fab-container">
  <ul class="fab-menu" id="fab-menu">
    <li class="fab-item" style="--fab-i: 1"><a class="fab-action" href="#">Upload file</a></li>
    <li class="fab-item" style="--fab-i: 0"><a class="fab-action" href="#">New document</a></li>
  </ul>
  <button class="fab-main" onclick="fabToggle(this)" aria-expanded="false" aria-controls="fab-menu">+</button>
</div>
```

Each `.fab-item` carries a `--fab-i` custom property setting its position in
the stagger sequence; `transition-delay: calc(var(--fab-i, 0) * 40ms)`
reads that value to offset each item's animation start time.

## Why is it useful?

A closed-state action list built with `display: none` (or conditionally
rendered in JS) is unreachable by keyboard until the FAB is activated,
which is usually the intended behavior for the *visual* closed state — but
some accessibility strategies specifically want secondary actions to
remain in the DOM and tab-reachable at all times, only visually hidden.
This example uses `opacity: 0` plus `transform: translateY(...)` plus
`pointer-events: none` for the closed state instead of removing the
elements from layout, so the actions are always structurally present.
`pointer-events: none` is what prevents clicking on an invisible,
displaced action while closed, without removing it from the accessibility
tree.

The staggered reveal comes entirely from CSS custom properties, not
per-item inline `animation-delay` values computed and written by a script:
each `.fab-item`'s `--fab-i` is a small integer set once in markup, and
`calc(var(--fab-i) * 40ms)` derives the actual delay — adding a fourth
action only requires giving it the next `--fab-i` value, with no JS
re-computation needed to keep the cascade timing correct.
