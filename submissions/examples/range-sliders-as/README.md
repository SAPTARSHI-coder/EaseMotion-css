# Styled Range Sliders

### What does this do?

It shows range sliders with an accent filled track and a labelled value, built on native range inputs.

### How is it used?

```html
<label class="range-field">
  <span class="range-head"><span>Volume</span><span>70</span></span>
  <input type="range" class="range" min="0" max="100" value="70" />
</label>
```

The slider uses `accent-color` to tint the filled track and thumb, so it stays a real, draggable, keyboard operable range input.

### Why is it useful?

Sliders control values such as volume, brightness, and price. This gives a native range input a branded accent look with `accent-color` while keeping it fully functional and accessible, using only CSS with no JavaScript. The slider shows a focus ring for keyboard users.
