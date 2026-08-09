# Thumbs Feedback

### What does this do?

It shows a was this helpful widget with a thumbs up and a thumbs down button. Choosing one fills its icon with color and dims the other. It uses radio inputs and CSS only, so it is keyboard operable with no JavaScript.

### How is it used?

```html
<fieldset class="thumbs">
  <legend>Was this helpful?</legend>
  <div class="thumbs-row">
    <label class="up"><input type="radio" name="fb" /><svg>...</svg></label>
    <label class="down"><input type="radio" name="fb" /><svg>...</svg></label>
  </div>
</fieldset>
```

Both inputs share the same `name`, so only one can be chosen. The `:has(:checked)` selector fills the selected icon and tints its button with `color-mix`.

### Why is it useful?

Thumbs up and down feedback appears at the end of help articles and answers. This builds a compact two option feedback control with a filled selected state using only radio inputs and CSS. The active button shows a focus ring and the scale animation is removed under reduced motion.
