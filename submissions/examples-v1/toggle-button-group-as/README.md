# Toggle Button Group

### What does this do?

It shows a connected group of toggle buttons, like a text formatting toolbar, where each button can be turned on independently with an accent active state.

### How is it used?

```html
<div class="btn-group" role="group" aria-label="Text formatting">
  <label class="tbtn"><input type="checkbox" class="tbtn-input" checked aria-label="Bold" /><span class="i-bold">B</span></label>
  <label class="tbtn"><input type="checkbox" class="tbtn-input" aria-label="Italic" /><span class="i-italic">I</span></label>
</div>
```

Each button is a `label` with a checkbox and a face. Because they are checkboxes, several can be active at once, and shared borders join them into one group.

### Why is it useful?

Toggle button groups are used for toolbars, view options, and formatting controls. This styles a connected group with per button active states from the `:checked` state, using only CSS. Buttons carry accessible labels and a focus ring, and the group uses a `group` role.
