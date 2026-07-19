# Calculator Keypad

### What does this do?

It shows a calculator interface: a screen with the current expression and result, and a four column keypad of digit, function, and operator keys. Operators are highlighted, the zero key spans two columns, and every key has hover, pressed, and focus states.

### How is it used?

```html
<div class="calc-keys">
  <button type="button" class="key op">&divide;</button>
  <button type="button" class="key">7</button>
  <button type="button" class="key zero">0</button>
  <button type="button" class="key eq">=</button>
</div>
```

The keypad is a `repeat(4, 1fr)` grid. Key roles come from classes: `fn` for functions, `op` for operators, `eq` for equals, and `zero` which spans two columns with `grid-column: span 2`. The `:active` state scales the key for tactile feedback.

### Why is it useful?

Calculators appear in finance tools, forms, and utility apps. This gives a polished keypad layout with clear key roles and press feedback, styled entirely with CSS and ready for logic to be added.
