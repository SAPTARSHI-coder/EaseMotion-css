# Multi Select Dropdown

### What does this do?

It shows a multi select dropdown where the trigger opens a panel of checkbox options. Any number of options can be checked at once, and each checked option fills its check box. It works with no JavaScript.

### How is it used?

```html
<details class="msel">
  <summary>Filter by tag</summary>
  <div class="msel-list">
    <label class="msel-opt"><input type="checkbox" checked /><span class="box"></span>Design</label>
    <label class="msel-opt"><input type="checkbox" /><span class="box"></span>Engineering</label>
  </div>
</details>
```

Each option is a label with a hidden checkbox and a styled `.box`. Because they are checkboxes, more than one can be on. The caret flips when the panel is open.

### Why is it useful?

Filters and tag pickers need a multi select where several options can be on at once. This builds a checkbox based multi select in a disclosure panel, using only CSS. Options are keyboard operable with a focus ring and the animations are removed under reduced motion.
