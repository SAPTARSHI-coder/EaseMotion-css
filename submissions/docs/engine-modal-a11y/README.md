# Modal Accessibility Fix (Focus Trap & Escape Key)

This submission resolves Issue #58649 regarding the broken accessibility of modals (`ease-modal-active`). 

Due to the temporary freeze on direct modifications to `easemotion/engine/runtime.js` and `tests/`, the proposed patch is provided here in `submissions/docs/engine-modal-a11y/` for the maintainer to review and merge into the core.

## Proposed Patch for `easemotion/engine/runtime.js`

Add this logic to the modal initialization/event listener:

```javascript
// Add inside the runtime modal open logic:
const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

function trapTabKey(e, modal) {
  if (e.key === 'Escape') {
    closeActiveModal();
    return;
  }
  
  if (e.key === 'Tab') {
    let focusableElements = modal.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    
    if (focusableElements.length === 0) return;
    
    const firstTabStop = focusableElements[0];
    const lastTabStop = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstTabStop) {
        e.preventDefault();
        lastTabStop.focus();
      }
    } else {
      if (document.activeElement === lastTabStop) {
        e.preventDefault();
        firstTabStop.focus();
      }
    }
  }
}
```

Make sure the modal gets `aria-hidden="false"` and `aria-modal="true"` when opened, and `aria-hidden="true"` when closed.

## Proposed Tests for `tests/modal.test.js`

```javascript
test('pressing Escape closes the active modal', () => {
  // setup modal
  const modal = document.querySelector('.ease-modal');
  openModal(modal);
  
  // dispatch Escape
  const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
  document.dispatchEvent(escapeEvent);
  
  expect(modal.classList.contains('ease-modal-active')).toBe(false);
  expect(modal.getAttribute('aria-hidden')).toBe('true');
});
```

See `demo.html` in this directory for a working demonstration of the focus trap and escape handler.
