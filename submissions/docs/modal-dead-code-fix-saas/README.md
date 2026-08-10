# Modal Dead Code Removal Fix

1. What does this do? Removes dead/unreachable code in `checkModal()` inside `core/modal.js`.
2. How is it used? Applied directly to `core/modal.js` by eliminating the unreachable `if (!overlay.classList.contains("is-active"))` check.
3. Why is it useful? Eliminates code clutter, prevents developer confusion, and keeps the core modal focus handling clean and performant.

## Problem Description

In `core/modal.js`, line 24 adds `is-active` class to `overlay`:

```javascript
overlay.classList.add('is-active');
```

Immediately following this check:

```javascript
const modal = overlay.querySelector('.ease-modal');
if (modal) {
  if (!overlay.classList.contains('is-active')) { // ALWAYS FALSE!
    previousFocusedElement = document.activeElement;
  }

  modal.setAttribute('tabindex', '-1');
  modal.focus();
}
```

Because `is-active` was added just above this check, `!overlay.classList.contains('is-active')` was guaranteed to evaluate to `false`, rendering lines 28-30 dead and unreachable.

## Fix Applied

Removed the unreachable `if (!overlay.classList.contains('is-active'))` block. `previousFocusedElement` is already captured on line 22 before `is-active` is added to the overlay element.

```javascript
const modal = overlay.querySelector('.ease-modal');
if (modal) {
  modal.setAttribute('tabindex', '-1');
  modal.focus();
}
```
