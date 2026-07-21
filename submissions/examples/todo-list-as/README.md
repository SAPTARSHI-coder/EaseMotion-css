# Checkbox Todo List

### What does this do?

It shows a todo list where checking an item pops a custom check mark, strikes through the text, and fades it. It uses only checkboxes and CSS, with no JavaScript.

### How is it used?

```html
<ul class="todo">
  <li>
    <label>
      <input type="checkbox" checked />
      <span class="box"></span>
      <span class="text">Buy milk</span>
    </label>
  </li>
</ul>
```

The hidden checkbox drives the visible `.box` and the `.text` through sibling selectors, so the whole row is clickable and keyboard operable.

### Why is it useful?

Checklists appear in onboarding, forms, and task apps. This styles a native checkbox into a smooth custom control and reflects the done state on the label text, using only CSS. A focus ring shows the active item and transitions are removed under reduced motion.
