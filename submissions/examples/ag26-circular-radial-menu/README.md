# Expanding Circular Radial Menu

A Floating Action Button (FAB) that expands into a radial menu purely using CSS.

## Preview
Open `demo.html` in your browser. Click the red hamburger icon. The icon will rotate, and four sub-menu items will spring out in a radial pattern.

## Implementation
- Utilizes the **CSS Checkbox Hack**. A hidden `<input type="checkbox">` is toggled by clicking its associated `<label>` (the FAB).
- When the checkbox is `:checked`, the sibling selector (`~`) applies different `transform: translate()` rules to fan the `.menu-item` elements outward into a circle.
- A `cubic-bezier` transition gives the menu items a pleasant, bouncy spring effect.
