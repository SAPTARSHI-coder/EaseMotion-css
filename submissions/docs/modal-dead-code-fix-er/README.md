# Modal Dead Code Fix — Issue #44509

Documentation and demonstration of a dead code removal fix in `core/modal.js`.

## What does this do?

Documents and demonstrates the fix for issue #44509: removing unreachable dead code in the `checkModal` function within `core/modal.js`. The fix removes a redundant conditional check that can never evaluate to true.

## The Bug

In `core/modal.js`, the `checkModal` function contains the following unreachable code:

```javascript
// Line 24: class is added
overlay.classList.add('is-active');

const modal = overlay.querySelector('.ease-modal');
if (modal) {
  if (!overlay.classList.contains('is-active')) { // Line 28 — ALWAYS false
    previousFocusedElement = document.activeElement; // Line 29 — DEAD CODE
  }

  modal.setAttribute('tabindex', '-1');
  modal.focus();
}
```

Since `overlay.classList.add('is-active')` executes on line 24, the condition `!overlay.classList.contains('is-active')` on line 28 **always evaluates to `false`**. Lines 29-30 are completely unreachable.

Additionally, `previousFocusedElement` is already correctly captured on line 22, making the dead block redundant.

## The Fix

Remove the unreachable `if` block (lines 28-30):

```javascript
previousFocusedElement = document.activeElement; // Line 22

overlay.classList.add('is-active');

const modal = overlay.querySelector('.ease-modal');
if (modal) {
  // Dead code removed — clean and direct
  modal.setAttribute('tabindex', '-1');
  modal.focus();
}
```

## Why is this safe?

- `previousFocusedElement` is already captured on line 22 before the class is added
- The removed block was **unreachable** — it never executed
- No behavioral change — the code after removal works identically
- Only 4 lines deleted, 0 lines added

## How is it used?

This is a documentation submission. The actual fix needs to be applied to `core/modal.js` by the maintainer. The diff is:

```diff
          const modal = overlay.querySelector('.ease-modal');
          if (modal) {
-            if (!overlay.classList.contains('is-active')) {
-              previousFocusedElement = document.activeElement;
-            }
-
            modal.setAttribute('tabindex', '-1');
            modal.focus();
          }
```

## Why is it useful?

Dead code reduces maintainability and readability. Removing unreachable code keeps the codebase clean and prevents confusion for future contributors who may try to understand why the check exists.

## Labels

- `bug` — this is a bug fix for dead/unreachable code
- `level:intermediate` — requires understanding of control flow analysis

## Linked Issue

#44509
