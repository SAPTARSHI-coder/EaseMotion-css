# Context Menu

### What does this do?

It shows a right click style context menu with icon rows, keyboard shortcut hints, a divider, and a destructive delete item at the end. It is styled as a floating menu panel.

### How is it used?

```html
<div class="ctx-menu" role="menu" aria-label="Actions">
  <button class="ctx-item" role="menuitem"><svg>...</svg><span>Copy</span><kbd>Ctrl C</kbd></button>
  <div class="ctx-sep" role="separator"></div>
  <button class="ctx-item is-danger" role="menuitem"><svg>...</svg><span>Delete</span><kbd>Del</kbd></button>
</div>
```

Each row is a real button with an icon, a label, and an optional `kbd` shortcut. Use `ctx-sep` for a divider and `is-danger` for a destructive action.

### Why is it useful?

Apps show a context menu on right click with actions and shortcuts. This styles a floating menu with icon rows, shortcut hints, dividers, and a danger item, using only CSS and inline SVG. Rows are keyboard operable with hover and focus states, removed of motion under reduced motion.
