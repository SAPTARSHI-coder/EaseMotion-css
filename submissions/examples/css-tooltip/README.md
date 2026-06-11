# Pure CSS Tooltip

## 1. What does this do?
A pure CSS tooltip that appears on hover with an arrow pointing to the trigger element. Supports four positions: top, bottom, left, right.

## 2. How is it used?
Add the `.tooltip-btn` class and a position modifier (`.tooltip-top`, `.tooltip-bottom`, `.tooltip-left`, `.tooltip-right`). Set the tooltip text via `data-tooltip`.
```html
<button class="tooltip-btn tooltip-top" data-tooltip="Hello">Hover</button>
```

## 3. Why is it useful?
Zero JavaScript tooltip using `attr()` and `::after`/`::before` pseudo-elements. The entrance animation is smooth and the arrow always points correctly. Respects `prefers-reduced-motion`.
