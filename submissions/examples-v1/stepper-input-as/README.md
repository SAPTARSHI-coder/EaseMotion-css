# Quantity Stepper

### What does this do?

It shows quantity stepper inputs: a minus button, a numeric value, and a plus button grouped as one control. Buttons have hover, pressed, and focus states, the minus button shows a disabled state when the value is at its minimum, and a `pill` variant rounds the group fully.

### How is it used?

```html
<span class="stepper">
  <button type="button" class="step-btn" aria-label="Decrease">&minus;</button>
  <input class="step-val" type="text" value="3" aria-label="Quantity" readonly />
  <button type="button" class="step-btn" aria-label="Increase">+</button>
</span>
```

Wrap two `step-btn` buttons around a `step-val` field. Add `disabled` to a button for the boundary state, and add the `pill` class to the `stepper` for the rounded style.

### Why is it useful?

Carts, booking forms, and settings use quantity steppers everywhere. This gives a clean, accessible stepper with proper button states and a disabled boundary, styled entirely with CSS.
