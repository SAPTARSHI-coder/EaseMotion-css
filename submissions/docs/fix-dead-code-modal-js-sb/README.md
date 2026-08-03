# Fix: Dead Code Removal in core/modal.js

## What does this do?
Removes unreachable code in `core/modal.js` where a conditional check was impossible to satisfy.

## How is it used?
The fix removes the dead code from the `checkModal()` function:

```javascript
// Before (lines 28-30):
if (!overlay.classList.contains("is-active")) {  // ALWAYS FALSE!
  previousFocusedElement = document.activeElement;
}

// After: Removed entirely
```

## Why is it useful?
- Cleaner, more maintainable code
- Removes confusion for developers reading the code
- No functional change - code never executed anyway
- Follows best practices for code quality
