# Sortable List

A draggable list that supports reordering with animated position transitions, a drag handle, and a ghost image that follows the cursor.

## Features

- HTML5 native drag and drop
- FLIP animation for smooth position transitions on reorder
- Drag handle icon with grab cursor
- Active item scales up and rotates slightly
- Ghost image follows cursor (browser default)
- Fully customizable via CSS custom properties

## Usage

### HTML

```html
<ul class="sortable" id="sortableList">
  <li class="list-item" draggable="true" data-label="Item">
    <span class="list-item__handle">⠿</span>
    <span class="list-item__text">Item</span>
  </li>
</ul>
```

Each `li` must have `draggable="true"` and a `data-label` attribute. The handle element triggers the drag.

### CSS Variables

| Variable | Default | Description |
|---|---|---|
| `--sl-duration` | `0.3s` | Transition duration for reorder animation |
| `--sl-item-bg` | `#1e293b` | Item background color |
| `--sl-dragging-color` | `#334155` | Background color while dragging |
| `--sl-handle-color` | `#64748b` | Drag handle icon color |
| `--sl-radius` | `12px` | Item border radius |
| `--sl-shadow` | `0 4px 16px rgba(0,0,0,0.25)` | Item box shadow |

## Browser Support

Chrome, Firefox, Safari, Edge (latest 2 major versions).

## License

MIT
