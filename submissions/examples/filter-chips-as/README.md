# Animated Filter Chips

### What does this do?

It shows selectable filter chips where clicking a chip fills it with an accent color, reveals a check mark, and gives it a small pop. Multiple chips can be active at once.

### How is it used?

```html
<label class="chip">
  <input type="checkbox" class="chip-input" />
  <span class="chip-label">Design</span>
</label>
```

Each chip is a `label` wrapping a checkbox and a `.chip-label`. Selecting it toggles the filled state. Because the inputs are checkboxes, several chips can be active together.

### Why is it useful?

Filter chips let users narrow lists by tags or categories. This animates the selected state with a transform pop and a revealed check using only the `:checked` state, so it needs no JavaScript. The chips stay keyboard operable with a focus ring, and the pop is disabled under `prefers-reduced-motion: reduce`.
