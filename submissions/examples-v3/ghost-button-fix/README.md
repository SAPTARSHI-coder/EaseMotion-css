# Fix : Ghost Button Text Invisible on Hover

## Problem Description
On the documentation/demo page, hovering over the **Ghost BUTTON** variant makes the text completely invisible. The background turn white, but due to theme conflicts, the text color fails to invert properly and remains white.

## Bug Location
* **File:** 'components/button.css'
* **Lines:** 124-129
**Current Selector:**
```css
@media (hover: hover) and (pointer: fine) {
  .ease-btn-ghost:hover {
    background-color: var(--ease-color-neutral-100, #f1f5f9);
    color: var(--ease-color-neutral-900, #0f172a);
  }
}