# File Drop Zone

## What does this do?

A drag-and-drop upload target that stays a real `<input type="file">`, so
clicking and keyboard activation open the picker normally.

## How is it used?

```html
<label class="fdz">
  <input class="fdz-in" type="file" multiple />
  <span class="fdz-ico" aria-hidden="true"></span>
  <span class="fdz-t">Drop files here</span>
</label>
```

Toggle `is-over` on dragover/dragleave and `is-got` on drop.

## Why is it useful?

Drop zones are frequently built as a styled `<div>` with drag handlers, which
makes uploading impossible without a pointer — there is no way to reach a `div`
by keyboard and no way to trigger a file picker from it. Users who cannot drag
are locked out of the feature entirely.

Wrapping a genuine file input in a `<label>` fixes that completely: the label
forwards activation to the input, so click, Enter and Space all open the picker,
and the control appears in the tab order with the correct role. Drag-and-drop
becomes an enhancement layered on top rather than the only route.

Because the input is visually hidden rather than `display: none`, it can still
receive focus — and `:has(.fdz-in:focus-visible)` moves the visible focus ring
onto the zone, so keyboard users see where they are. An input hidden with
`display: none` is removed from the tab order, which is the usual bug in this
pattern.

The icon lifts on drag-over to signal the drop target is live; under reduced
motion the colour change alone carries that, with no travel or scaling.
