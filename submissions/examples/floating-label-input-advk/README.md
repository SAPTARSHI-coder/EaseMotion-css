# Floating Label Input

## What does this do?

A form field whose label sits inside the input at rest and floats above it
once the field has focus or a value — driven entirely by
`:placeholder-shown`, with no JavaScript class toggling.

## How is it used?

```html
<div class="fli-field">
  <input class="fli-input" id="name" type="text" placeholder=" " />
  <label class="fli-label" for="name">Full name</label>
</div>
```

`placeholder=" "` (a literal single space, not empty) is required: an empty
placeholder still counts as "no placeholder" in some engines, and
`:placeholder-shown` only matches when a placeholder is present and the
value is empty.

## Why is it useful?

Floating labels are commonly implemented by listening for `focus`/`blur`/
`input` events and toggling a `has-value` class, which has to be
re-synchronised whenever the field is filled programmatically (autofill,
form reset, framework state binding) rather than by direct typing. Because
`:placeholder-shown` reflects the DOM value directly, autofill and
programmatic value changes float the label correctly without any extra
event wiring.

The label keeps `pointer-events: none` so clicks pass through to the input
even while it overlaps the text, and the floated state is shared between
`:not(:placeholder-shown)` and `:focus` so the label commits to its position
the instant focus lands, rather than waiting for a keystroke.
