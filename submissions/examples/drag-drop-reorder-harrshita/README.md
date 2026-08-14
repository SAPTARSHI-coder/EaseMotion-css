# Drag and Drop Reorder

A smooth, accessible drag-and-drop list reorder component for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

Reorder list items using the native HTML5 Drag and Drop API with animated CSS transitions for every drag, hover, and drop state.

## Files

| File | Description |
|------|-------------|
| `demo.html` | Interactive live demo with 6 reorderable task items |
| `style.css` | Component styles with animations and dark mode |
| `README.md` | This documentation |

## Usage

Add the stylesheet and markup to your project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <ul class="ease-dnd-list" id="myList">
    <li class="ease-dnd-item" draggable="true">
      <span class="ease-dnd-handle">&#9776;</span>
      <span class="ease-dnd-label">Item One</span>
    </li>
    <li class="ease-dnd-item" draggable="true">
      <span class="ease-dnd-handle">&#9776;</span>
      <span class="ease-dnd-label">Item Two</span>
    </li>
  </ul>

  <script>
    const list = document.getElementById('myList');
    let dragSrc = null;

    list.querySelectorAll('.ease-dnd-item').forEach(item => {
      item.addEventListener('dragstart', function(e) {
        dragSrc = this;
        this.classList.add('ease-dnd-item--dragging');
        e.dataTransfer.effectAllowed = 'move';
      });
      item.addEventListener('dragover', e => { e.preventDefault(); });
      item.addEventListener('dragenter', function() {
        this.classList.add('ease-dnd-item--over');
      });
      item.addEventListener('dragleave', function() {
        this.classList.remove('ease-dnd-item--over');
      });
      item.addEventListener('drop', function(e) {
        e.stopPropagation();
        if (dragSrc !== this) {
          const tmp = dragSrc.innerHTML;
          dragSrc.innerHTML = this.innerHTML;
          this.innerHTML = tmp;
        }
        this.classList.remove('ease-dnd-item--over');
      });
      item.addEventListener('dragend', function() {
        list.querySelectorAll('.ease-dnd-item').forEach(i => {
          i.classList.remove('ease-dnd-item--dragging', 'ease-dnd-item--over');
        });
      });
    });
  </script>

</body>
</html>
```

## CSS Classes

| Class | Element | Description |
|-------|---------|-------------|
| `.ease-dnd-list` | `<ul>` | Wrapper list container |
| `.ease-dnd-item` | `<li>` | Draggable list row |
| `.ease-dnd-handle` | `<span>` | Drag handle icon (hamburger) |
| `.ease-dnd-label` | `<span>` | Main text content of the item |
| `.ease-dnd-badge` | `<span>` | Optional category badge |
| `.ease-dnd-item--dragging` | `<li>` | Applied while item is dragged (JS toggled) |
| `.ease-dnd-item--over` | `<li>` | Applied to the current drop target (JS toggled) |

## CSS Variables

Override these in your own stylesheet to customize the appearance:

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-dnd-accent` | `#6c63ff` | Primary accent color |
| `--ease-dnd-accent-light` | `#ede9ff` | Light tint of accent |
| `--ease-dnd-bg` | `#ffffff` | Section background |
| `--ease-dnd-item-bg` | `#f8f8ff` | Item background |
| `--ease-dnd-border` | `rgba(108,99,255,0.18)` | Item border color |
| `--ease-dnd-radius` | `10px` | Border radius |
| `--ease-dnd-shadow` | box-shadow value | Default item shadow |
| `--ease-dnd-shadow-drag` | box-shadow value | Shadow while dragging |
| `--ease-dnd-transition` | `0.22s cubic-bezier(...)` | Animation easing |

## Features

- Native HTML5 Drag and Drop API (no dependencies)
- Animated hover, drag, and drop states via CSS transitions
- Accessible drag handle with visible focus style
- Optional badge element for item categorization
- Dark mode support via `prefers-color-scheme`
- Responsive layout, badge hidden on small screens

## Accessibility

- Items have `draggable="true"` attribute
- Drag handle has `aria-hidden="true"` since it is decorative
- List has `aria-label` for screen reader context
- `:focus-visible` ring on interactive elements

## Related

Closes #66439
