# Fix: Dead Code in Modal Focus Logic

## 1. What does this do?

Documents an unreachable branch inside `core/modal.js`
and explains why it can never execute.

---

## 2. Proposed Fix

```diff
const modal = overlay.querySelector('.ease-modal');

if (modal) {

- if (!overlay.classList.contains('is-active')) {
-   previousFocusedElement = document.activeElement;
- }

  modal.setAttribute('tabindex', '-1');
  modal.focus();

}
```

The focus element is already captured earlier in the function, making the second assignment unnecessary.

---

## 3. Why is it useful?

Removing unreachable code improves readability, reduces maintenance overhead, and makes the focus restoration logic easier to understand without changing runtime behavior.