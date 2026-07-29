# Modal Accessibility for Programmatic Modals (Issue #4673)

## What does this do?
Enables keyboard focus trapping and Escape-to-close behavior for modal components opened programmatically via JavaScript (by adding the `.is-active` class) rather than just via URL hash.

## How is it used?
Open a modal programmatically by adding `.is-active` to the modal overlay element, and the keyboard accessibility features will automatically apply.

## Why is it useful?
It ensures that modals opened programmatically using JavaScript are accessible to keyboard and screen-reader users, meeting WCAG guidelines without requiring URL hash changes.

## Affected File (maintainer will copy to `core/modal.js`)
Inside `core/modal.js`, the keydown event listener should be modified to:
```javascript
  // Setup keyboard trap and escape key
  document.addEventListener('keydown', function (e) {
    const overlay = document.querySelector('.ease-modal-overlay.is-active');
    if (!overlay) return;

    try {
      // Escape key to close
      if (e.key === 'Escape') {
        const hash = window.location.hash;
        if (hash) {
          try {
            const escapedHashSelector = '#' + CSS.escape(hash.substring(1));
            if (overlay.matches(escapedHashSelector)) {
              window.location.hash = ''; // This will trigger hashchange and close the modal
              return;
            }
          } catch (e) {
            // ignore
          }
        }
        overlay.classList.remove('is-active');
        document.body.style.overflow = '';
        return;
      }

      // Tab trap
      if (e.key === 'Tab') {
        const focusableElements = overlay.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement || document.activeElement === overlay.querySelector('.ease-modal')) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    } catch (err) {
      // Ignore
    }
  });
```
