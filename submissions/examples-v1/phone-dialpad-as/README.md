# Phone Dialpad

### What does this do?

It shows a phone dialpad: a screen with the dialed number, a three by four grid of round keys with digits and their letter groups (2 ABC, 3 DEF, and so on), and a green call button below. Keys have hover and pressed states.

### How is it used?

```html
<div class="ph-keys">
  <button type="button" class="key"><b>2</b><i>ABC</i></button>
  <button type="button" class="key"><b>0</b><i>+</i></button>
</div>
<button type="button" class="ph-call"><svg viewBox="0 0 24 24"><path d="..." /></svg></button>
```

Each key stacks a large digit `b` over a small letters `i`. The keypad is a three column grid of circular buttons, and the call button is a green circle with a phone glyph. The `:active` state scales keys for tactile feedback.

### Why is it useful?

Dialers, contact apps, and verification screens use a phone keypad. This gives a classic dialpad with letter groups and a call action, styled entirely with CSS and ready for input logic.
