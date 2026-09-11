# Color Swatch Picker

## What does this do?

A colour picker made of real radio-input swatches; the selected swatch
shows a checkmark whose colour (white or dark) is set per-swatch via an
inline custom property, so it stays legible against both very light and
very dark swatch colours.

## How is it used?

```html
<label class="csg-swatch" style="background: #f5a623; --csg-check: #1c2028">
  <input type="radio" name="csg-color" value="orange" />
  <span class="csg-sr">Orange</span>
</label>
```

`.csg-swatch::after` draws a checkmark using `var(--csg-check, #fff)` as
its border colour; `:has(input:checked)` scales it into view.

## Why is it useful?

A single hard-coded checkmark colour (white, in most examples) reads fine
on dark or saturated swatches but disappears against light ones — a pale
yellow swatch with a white checkmark is nearly invisible. Computing
"should this checkmark be light or dark" from the background colour
itself isn't something CSS can do generically (there's no built-in
function converting an arbitrary background colour to a suitable
foreground colour), so this decision has to be made once, by whoever
defines the palette, and passed down per-swatch via `--csg-check` — a
small amount of explicit authoring effort in exchange for a checkmark
that's always legible against its own swatch.

Each swatch is a real radio input with a visually-hidden but present
`<span>` label naming the colour ("Red", "Orange", ...), so a screen reader
announces which colour each swatch represents rather than just "radio
button" with no indication of what selecting it does — colour alone
conveys nothing to someone who can't perceive it, which is exactly the
gap the hidden text label closes.
