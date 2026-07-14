# Rating Input

### What does this do?

It shows an interactive star rating you can set with a click. Hovering previews the rating by filling stars up to the pointer, the chosen value stays filled, and a live caption reads out the selected number. It is fully interactive with no JavaScript.

### How is it used?

```html
<div class="rating">
  <input id="s5" type="radio" name="rate" />
  <label for="s5"><svg viewBox="0 0 24 24"><path d="..." /></svg></label>
  <input id="s4" type="radio" name="rate" /> ...
</div>
```

The stars are radios laid out with `flex-direction: row-reverse`, so `input:checked ~ label` and `label:hover ~ label` fill the chosen star and every lower one. A `:has()` rule writes the selected number into the caption.

### Why is it useful?

Reviews, feedback, and survey forms need a star rating input. This gives an accessible one with hover preview and a live value readout, styled entirely with CSS and no script.
