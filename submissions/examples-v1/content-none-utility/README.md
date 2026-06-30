# Content None Utility

Introduces the pseudo-element content suppression utility token (`.ease-content-none`) under issue #15094.

## Functional Mechanics

- **The Problem:** Many design systems use global pseudo-elements (like `::before` or `::after`) for list markers, status icons, or decorative bullets. When specific instances of those components need to appear "naked" or un-decorated, developers are often forced to write verbose CSS overrides to reset the `content` property, creating cascade bloat.
- **The Solution:** Granular content silencing. The `.ease-content-none` utility applies `content: none;`. It provides a clean, single-class override to strip pseudo-element injection for specific modular variations, ensuring design consistency while keeping code lean.

## Usage Layout Structure

```html
<div class="list-item has-marker">Item 1</div>

<div class="list-item has-marker ease-content-none">Item 2 (Unmarked)</div>
```

Closes #15094
