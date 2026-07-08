# Fix for Forms High Contrast Focus Failure

Resolves Issue #8427.

## Description
This submission fixes a critical accessibility issue where `.ease-input`, `.ease-textarea`, and `.ease-select` lose all focus indication in Windows High Contrast mode (or when `forced-colors: active` is true). 

The original code sets `outline: none` and relies on `box-shadow` for focus. However, `box-shadow` is completely removed in forced-colors mode, leaving keyboard users with no visual feedback.

This fix adds `outline: 2px solid transparent` and `outline-offset: 2px` to the focus states. A transparent outline does not affect the default appearance (which still uses `box-shadow`), but in high contrast mode, the browser forces the outline to become visible using the system's text color, restoring accessibility.

## How to Apply
Maintainers should update `components/forms.css` around line 79:

```css
  /* Focus Animation */
  .ease-input:focus,
  .ease-textarea:focus,
  .ease-select:focus {
    border-color: var(--ease-color-primary, #6c63ff);
    box-shadow: 0 0 0 3px var(--ease-color-primary-alpha, rgba(108, 99, 255, 0.18));
    outline: 2px solid transparent; /* Added */
    outline-offset: 2px; /* Added */
  }
```
