# Piano

### What does this do?

It shows a piano keyboard with ten white keys and seven black keys. The black keys sit in the correct gaps above the white keys, and both press down with a shadow and color change when clicked. White keys are labeled with their note names.

### How is it used?

```html
<div class="piano">
  <div class="keys">
    <button type="button" class="white"><span>C</span></button>
    <button type="button" class="black" style="--i: 1;"></button>
  </div>
</div>
```

White keys sit in a flexbox row. Each black key is absolutely positioned with `left: calc(var(--w) * var(--i) - var(--bw) / 2)`, where `--i` is the white key index it follows, so black keys land only in the real gaps. The `:active` state presses each key.

### Why is it useful?

Music apps, learning tools, and sound board demos need a keyboard. This builds a correct piano layout with pure CSS positioning and press feedback, ready to attach audio.
