# Drag to Reorder List

A list where items can be dragged and dropped to reorder them, with smooth CSS transitions as items reflow.

## Usage
Give each `<li>` the `.drag-item` class and `draggable="true"`, wrapped in a `<ul class="drag-list">`. Attach the drag event listeners shown in `demo.html` to the list container.

```html
<ul class="drag-list">
  <li class="drag-item" draggable="true">Item 1</li>
  <li class="drag-item" draggable="true">Item 2</li>
</ul>
```

## Browser support
Uses the native HTML5 Drag and Drop API — supported in all modern desktop browsers. Note: native drag-and-drop has limited support on touch/mobile devices.

## Notes
No external libraries required. The `dragover` handler determines whether to insert the dragged item before or after the target based on cursor position within the target's bounding box.