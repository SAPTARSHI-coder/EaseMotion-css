# Formatting Toolbar

### What does this do?

It shows a text formatting toolbar with grouped icon buttons and thin dividers between the groups. Toggle buttons like bold and italic show a pressed state through a checkbox, so the active state is real and keyboard operable, with no JavaScript.

### How is it used?

```html
<div class="toolbar" role="toolbar" aria-label="Text formatting">
  <label class="tb-toggle" aria-label="Bold"><input type="checkbox" /><svg>...</svg></label>
  <span class="tb-divider"></span>
  <button class="tb-btn" type="button" aria-label="Align left"><svg>...</svg></button>
</div>
```

Use `tb-toggle` labels with a hidden checkbox for on and off buttons, `tb-btn` for one shot actions, and `tb-divider` to split groups. The `:has(:checked)` selector paints the pressed state.

### Why is it useful?

Editors and comment boxes need a compact formatting toolbar. This lays out grouped icon buttons with dividers and a pressed toggle state, using only CSS and inline SVG. Buttons are labeled and show a focus ring, and transitions are removed under reduced motion.
