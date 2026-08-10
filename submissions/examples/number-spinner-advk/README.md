# Number Spinner

## What does this do?

A quantity stepper with large increment and decrement targets wrapped around a
native `<input type="number">`.

## How is it used?

```html
<div class="nsp">
  <button class="nsp-b" type="button" aria-label="Decrease quantity">−</button>
  <input class="nsp-i" type="number" value="1" min="1" max="99" aria-label="Quantity" />
  <button class="nsp-b" type="button" aria-label="Increase quantity">+</button>
</div>
```

## Why is it useful?

Browsers' built-in number spinners are roughly 15px tall — far below the 44px
target size WCAG 2.5.5 recommends, and effectively unusable on touch. That is why
almost every commerce site replaces them.

The common replacement throws away the input as well and stores the quantity in
JavaScript, which loses form submission, validation, the numeric keypad on mobile,
and arrow-key stepping. Keeping the native input and only hiding its spin buttons
with `appearance: textfield` preserves all of that while allowing 44px controls.

The buttons call `stepUp()` and `stepDown()` rather than doing their own
arithmetic, so `min`, `max` and `step` are enforced by the browser and cannot
drift out of sync with the attributes. Clamping logic written by hand is where
these components usually develop bugs.

`:focus-within` styles the whole group when the inner input has focus, matching
how the user perceives the control, and each button carries an explicit
`aria-label` because "+" and "−" alone are not meaningful names.
