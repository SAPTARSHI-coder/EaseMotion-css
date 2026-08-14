# ease-drag-checklist-strike-sap

A reorderable checklist: drag items via the handle to reorder (HTML5 drag-and-drop), and checking an item animates a strikethrough line across the label rather than using `text-decoration: line-through` directly.

## Usage
1. Copy `style.css` into your project.
2. Copy the `<ul class="checklist-strike-sap">` markup from `demo.html` — each item needs `draggable="true"`, a checkbox, and a label.
3. Include the drag-and-drop script from `demo.html` — reordering requires native HTML5 drag events; CSS handles the strike animation and drag-state styling.

## Customization
- Adjust the `::after` line `background`/`height` on the label for a different strike style.
- Change the `0.3s` strike transition duration.
- Restyle `.checklist-strike-sap__item` background/radius to match your design system.

## Accessibility
Uses real `<input type="checkbox">` + `<label for>` pairs, keyboard-operable. Native HTML5 drag-and-drop is mouse/touch-oriented; consider adding keyboard reorder controls (move up/down buttons) for full accessibility.

## Browser support
All modern browsers (HTML5 Drag and Drop API).