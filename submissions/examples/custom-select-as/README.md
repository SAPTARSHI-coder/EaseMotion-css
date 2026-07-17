# Custom Select

### What does this do?

It shows a custom styled select with a value display, a caret that flips when open, and a list of options where the selected one shows a check. It uses the native `details` and `summary` elements, so it opens on click and stays keyboard operable with no JavaScript.

### How is it used?

```html
<details class="cselect">
  <summary>
    <span>Medium</span>
    <svg class="cs-caret">...</svg>
  </summary>
  <ul class="cs-list">
    <li class="cs-option is-selected">Medium</li>
    <li class="cs-option">Large</li>
  </ul>
</details>
```

Put the current value text in the summary and mark the chosen option with `is-selected`. A host app updates both when the user picks a new option.

### Why is it useful?

Native selects are hard to style consistently, so teams build custom ones. This presents a styled select with a caret, an open panel, and a selected option check, using only CSS. The caret flips on open, options have hover styles, and the animation is removed under reduced motion.
