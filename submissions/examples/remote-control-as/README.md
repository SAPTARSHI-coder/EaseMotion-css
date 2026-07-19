# Remote Control

### What does this do?

It shows a TV remote with a power button, a source key, a circular navigation D pad with an OK center, volume and channel rockers, a number pad, and the four colored function buttons. Every key presses in when clicked.

### How is it used?

```html
<div class="rc-dpad">
  <button class="dp up"></button>
  <button class="dp ok">OK</button>
</div>
<div class="rc-nums"><button>1</button>...</div>
```

The D pad arrows are CSS triangles placed around a round pad with a raised OK center. The number pad is a three column grid, the rockers stack plus and minus keys, and the color strip uses four flex buttons. A shared `:active` rule gives every button press feedback.

### Why is it useful?

Smart TV apps, device controls, and settings mockups show a remote. This builds a full remote with a D pad, keypad, and rockers using only CSS, no images, with press feedback.
