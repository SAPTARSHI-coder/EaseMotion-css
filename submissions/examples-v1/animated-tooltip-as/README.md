# Animated Tooltip

### What does this do?

It shows tooltips that fade and slide into place when a trigger is hovered or focused, with a small arrow pointing at the trigger and support for top and bottom placement.

### How is it used?

```html
<span class="tooltip">
  <button class="tooltip-trigger" type="button">Save</button>
  <span class="tooltip-text" role="tooltip">Save your changes</span>
</span>
```

Wrap a trigger and a `.tooltip-text` in a `.tooltip`. Add `is-bottom` to place the tooltip below the trigger instead of above. The tooltip reveals on `:hover` and on `:focus-within`, so it also appears for keyboard users.

### Why is it useful?

Tooltips give quick hints on controls and icons. This reveals the tooltip with a fade and slide using only a transition, so it needs no JavaScript. It appears on keyboard focus as well as hover, uses `role="tooltip"`, and the transition is disabled under `prefers-reduced-motion: reduce`.
