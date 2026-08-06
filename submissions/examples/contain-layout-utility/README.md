# Contain Layout Utility

Introduces the advanced DOM layout containment engine token (`.ease-contain-layout`) under issue #15159.

## Functional Mechanics

- **The Problem:** When JavaScript updates sizes, hides elements, or injects DOM nodes deep within complex component groups, the browser engine forces a recursive geometric layout recalculation loop from the target all the way back up to the document root element. This can cause visible layout thrashing.
- **The Solution:** Offloads painting trees. The `.ease-contain-layout` class isolates the target element completely from the global layout tree. This guarantees that internal adjustments stay contained within the element's boundaries, cutting out costly global reflow loops.

## Usage Layout Structure
```html
<div class="ease-contain-layout">
  </div>
```

Closes #15159
