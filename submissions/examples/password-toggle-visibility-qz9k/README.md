# Password Visibility Toggle

## What does this do?

A password field with a show/hide button that swaps the input's `type`
between `password` and `text`, keeping focus and caret position through the
swap, and driving its own eye/eye-off icon from `aria-pressed` rather than a
separate class.

## How is it used?

```html
<input id="ptv-input" class="ptv-input" type="password" />
<button type="button" class="ptv-toggle" onclick="ptvToggle(this)" aria-pressed="false" aria-label="Show password">
  <svg class="ptv-icon ptv-icon-eye">...</svg>
  <svg class="ptv-icon ptv-icon-eye-off">...</svg>
</button>
```

`ptvToggle` flips `input.type`, updates `aria-pressed` and `aria-label` on
the button to match, and re-focuses the input with the caret restored to
where it was — changing an input's `type` attribute can silently drop focus
in some browsers, which this explicitly guards against.

## Why is it useful?

Toggling `input.type` between `password` and `text` is simple, but two
details are easy to miss: focus can be lost the moment the type changes
(the field visually stays in place, but keyboard focus silently moves to
`<body>`), and the caret resets to position 0 instead of staying where the
user was typing — both are jarring if the user is mid-edit when they toggle
visibility. Re-calling `.focus()` and `.setSelectionRange()` after the type
swap fixes both.

Driving the icon swap from `aria-pressed` (an attribute the button already
needs for accessibility, since a toggle button should expose its pressed
state) rather than a separate visual-only class means the accessible state
and the visual state are structurally the same value — there's no second
place for them to fall out of sync. `aria-label` also updates each time, so
a screen reader announces "Show password" or "Hide password" correctly
rather than a static label that stops matching the button's actual effect.
