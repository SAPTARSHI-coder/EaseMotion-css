# Progress Steps

## What does this do?

A multi-step progress indicator where connectors between completed steps fill in
sequence and the current step pops once on arrival.

## How is it used?

```html
<ol class="stp" style="--at: 3">
  <li class="stp-i" style="--i:1"><span class="stp-dot"></span><span class="stp-l">Cart</span></li>
  <li class="stp-i" style="--i:2"><span class="stp-dot"></span><span class="stp-l">Address</span></li>
</ol>
```

## Why is it useful?

Steppers are usually built by writing `is-complete` / `is-current` classes onto
each step from the application, which means the template has to compute state per
item and the CSS has to trust it. Comparing a per-item `--i` against a single
`--at` on the container moves that logic into one place: advancing the flow is
one value change and every item re-derives its own appearance.

The connectors are the part worth having as a reference. Drawing each connector
as a pseudo-element on the *following* item, anchored from `-50%` to `50%`, means
the line always spans exactly between two dot centres regardless of column width
— no fixed widths, and it survives the grid reflowing at narrow viewports. Filling
with `transform: scaleX()` from a left origin keeps the animation off the layout
path, and a `transition-delay` derived from `--i` makes the fill cascade forward
rather than all connectors completing at once.

Using an ordered list with CSS counters means the step numbers come from document
structure rather than being hard-coded, and completed steps swap the counter for
a checkmark through `content` alone.
