# Animated Floating Label Input

### What does this do?

It provides form fields whose label sits inside the input and floats up above the field when the input is focused or filled, with an accent border on focus, using only CSS.

### How is it used?

```html
<div class="field">
  <input type="text" id="name" class="field-input" placeholder=" " />
  <label for="name" class="field-label">Full name</label>
</div>
```

The input needs `placeholder=" "` (a single space) so the `:placeholder-shown` state can tell whether it is empty. The label follows the input in the markup so it can react to `:focus` and `:not(:placeholder-shown)`.

### Why is it useful?

Forms are on almost every page, and floating labels save space while keeping the label visible after typing. This animates the label with a transform and color transition driven purely by input state, so it needs no JavaScript. The label keeps its association through `for`/`id`, the input shows a clear focus ring, and transitions are disabled under `prefers-reduced-motion: reduce`.
