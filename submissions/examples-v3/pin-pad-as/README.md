# PIN Pad

### What does this do?

It shows a numeric PIN entry pad with a row of dots for the filled and empty positions, a three by four keypad of number buttons, and a backspace key.

### How is it used?

```html
<div class="pinpad">
  <p class="pin-title">Enter your PIN</p>
  <div class="pin-dots"><span class="is-filled"></span><span></span></div>
  <div class="pin-keys">
    <button>1</button>
    <span class="pin-blank"></span>
    <button>0</button>
    <button class="pin-back" aria-label="Backspace"><svg>...</svg></button>
  </div>
</div>
```

Mark entered positions with `is-filled` on the dots. The keypad is a three column grid; use `pin-blank` for the empty cell and `pin-back` for the backspace key. A host app wires the digits.

### Why is it useful?

Lock screens and payment flows use a PIN pad for quick numeric entry. This lays out a keypad with a dots indicator and a backspace key, using only CSS and inline SVG. Keys have hover, active, and focus states, all reduced under reduced motion.
