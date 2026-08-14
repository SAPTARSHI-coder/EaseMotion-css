# input-reset-qz9k

A Sass mixin normalizing cross-browser text input quirks — iOS zoom-on-focus,
Chromium's autofill background, Firefox's extra inner border padding —
without disabling `:focus-visible`.

## Usage

```scss
@use 'input-reset' as *;

.text-field {
  @include input-reset;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  padding: 0.6em 0.8em;
}
```

## Why is it useful?

Three specific input quirks cause disproportionate debugging time relative
to how small their fixes are: iOS Safari zooms the entire viewport when
focusing any input whose computed `font-size` is under 16px, which reads as
"the page jumps" rather than an obvious font-size bug; Chromium paints
autofilled fields with a yellow background that a plain `background: white`
override doesn't reliably beat due to how autofill styling is applied;
and Firefox adds focus-ring padding inside `<button>`/`<input
type="submit">` via `::-moz-focus-inner` that shows up as a few px of
unexplained inner padding no other browser has.

The `font-size: max(1em, 16px)` line specifically prevents the iOS zoom
without hard-coding a fixed size — a caller setting a larger `font-size`
after including the mixin still gets their size, since `max()` only raises
the floor, never lowers an already-larger value. None of these fixes touch
`outline` or `:focus-visible`, so the reset doesn't have the common side
effect of also silently removing keyboard focus indication.
