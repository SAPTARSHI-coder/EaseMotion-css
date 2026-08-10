# Modal Dead Code Fix - core/modal.js

## Bug Description

In `core/modal.js` lines 28-31, there is dead code that checks if `overlay.classList.contains('is-active')` **after** the class has already been added.

## The Problem

```javascript
overlay.classList.add('is-active');  // Class is added here

const modal = overlay.querySelector('.ease-modal');
if (modal) {
  if (!overlay.classList.contains('is-active')) {  // This check is ALWAYS false
    previousFocusedElement = document.activeElement;
  }
  // ...
}
```

The condition `!overlay.classList.contains('is-active')` will **never** be true because the class was just added on the previous line.

## Impact

- **Code Quality**: Confuses developers about the logic
- **Dead Code**: Wastes CPU cycles on a condition that never executes
- **Maintainability**: Makes the codebase harder to understand

## The Fix

Remove the redundant `if (!overlay.classList.contains('is-active'))` check:

```javascript
overlay.classList.add('is-active');

const modal = overlay.querySelector('.ease-modal');
if (modal) {
  modal.setAttribute('tabindex', '-1');
  modal.focus();
}
```

## Verification

After the fix:
1. Modal opens correctly with focus management
2. No JavaScript errors in console
3. Focus trap works as expected
4. ESC key closes modal properly

## Files Affected

| File | Lines | Change |
|------|-------|--------|
| `core/modal.js` | 28-31 | Remove redundant class check |

## Testing Checklist

- [ ] Modal opens when trigger button is clicked
- [ ] Focus moves to modal when opened
- [ ] Focus returns to trigger when modal closes
- [ ] ESC key closes the modal
- [ ] Click outside modal closes it
- [ ] No console errors during modal operations
