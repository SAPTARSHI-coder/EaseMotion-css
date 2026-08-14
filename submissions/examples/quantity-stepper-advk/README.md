# Quantity Stepper

## What does this do?

A number input with increment/decrement buttons on either side, clamped to
`min`/`max` and announced via `aria-live` so screen reader users hear the
new value without moving focus.

## How is it used?

```html
<div class="qty-stepper">
  <button type="button" onclick="qtyStep(input, -1)">−</button>
  <input id="qty-input" type="number" min="0" max="10" value="1" aria-live="polite" />
  <button type="button" onclick="qtyStep(input, 1)">+</button>
</div>
```

`qtyStep(input, delta)` reads the input's own `min`/`max`, clamps the next
value, and dispatches a `change` event so anything listening for form
changes (a cart total, a form library) picks up the update the same way it
would for direct typing.

## Why is it useful?

The native spin buttons (`<input type="number">`'s built-in arrows) are
tiny, inconsistent across browsers, and unstyleable in any meaningful way,
which is why most quantity pickers replace them with custom buttons — but
that replacement often forgets to also hide the native spinner
(`-webkit-inner/outer-spin-button`, `-moz-appearance: textfield`), leaving
both controls visible and out of sync. This example removes the native
spinner explicitly so the custom buttons are the only way to step the value
outside of typing directly.

Dispatching a real `change` event from the buttons (rather than only
mutating `.value`) matters because many frameworks and native form
submission only observe input state through events, not direct property
writes — skipping this step is a common bug where clicking the buttons
silently fails to update anything listening for changes.
