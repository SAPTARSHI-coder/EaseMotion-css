# Fix for modal.js Focus Trap Vulnerability

Resolves Issue #8399.

## Description
This submission fixes a keyboard accessibility issue in `core/modal.js` where the focus trap would fail if a visually hidden element (`display: none` or `visibility: hidden`) was present in the modal. The original code used a naive `querySelectorAll` which included these hidden elements, causing the keyboard trap to break.

This fix filters out invisible elements using `offsetWidth` and `offsetHeight` to ensure only truly focusable elements are trapped.

## How to Apply
Maintainers should update `core/modal.js` line 58:
```javascript
        const focusableElements = Array.from(overlay.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )).filter(el => el.offsetWidth > 0 || el.offsetHeight > 0);
```
