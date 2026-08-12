# Floating Label Textarea

### What does this do?

It shows a multi line textarea whose label rests inside the field and floats up to the top edge when the field is focused or has text. It works with no JavaScript by using the placeholder shown state.

### How is it used?

```html
<label class="field">
  <textarea placeholder=" " rows="4"></textarea>
  <span>Your message</span>
</label>
```

The `placeholder=" "` is required so the `:placeholder-shown` selector can tell whether the field is empty. When it is not empty, or on focus, the label shrinks and floats up.

### Why is it useful?

Floating labels keep forms compact while still labeling every field. Most examples cover single line inputs, so this adds the multi line textarea case using only CSS. The label stays clickable through the label wrapper and the transition is removed under reduced motion.
