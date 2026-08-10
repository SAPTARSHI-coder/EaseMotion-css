# Keyboard Layout

### What does this do?

It shows a full QWERTY keyboard: a number row, three letter rows with the correct staggered modifier keys, and a bottom row with a wide space bar. Every key is a keycap that presses down when clicked, and modifier keys are wider and dimmed.

### How is it used?

```html
<div class="keyboard">
  <div class="krow"><kbd>Q</kbd><kbd>W</kbd><kbd class="w15 dim">\</kbd></div>
  <div class="krow"><kbd class="dim">Alt</kbd><kbd class="space">Space</kbd></div>
</div>
```

Keys are `kbd` elements sized from a single `--u` unit, so the whole board scales together. Width classes like `w15` and `w22` set the wider modifier and Enter keys, and the space bar flexes to fill its row. The `:active` state presses each cap.

### Why is it useful?

Typing tutors, shortcut guides, and settings screens show a keyboard. This builds a full, scalable QWERTY layout with press feedback using only CSS, no images.
