# Fix: Modal Focus Trap Escape Vulnerability

Resolves an accessibility bug in `modal.js` where the keyboard focus trap fails if focus starts or is moved outside the modal overlay container.

## What does this do?
- **Restores A11y Focus Locking:** In the original implementation, the Tab key handler in `modal.js` only wraps focus if the current `document.activeElement` is exactly the first or last focusable child of the modal. If focus starts outside the modal (e.g. from mouse selection or page load quirks), pressing Tab escapes the trap completely, permitting keyboard users to interact with background page elements while the modal is open.
- **Forced Re-Entry:** This fix intercepts the Tab press: if the active element is not inside the modal container, focus is immediately forced back inside the modal (focusing the first or last focusable element).

## How is it used?
Open `demo.html` in any browser. It sets up an interactive modal with a toggle button to showcase the focus leak vs. the robust focus trap.

## Why is it useful?
- Meets standard WCAG accessibility requirements.
- Prevents screen readers or keyboard navigation users from accidentally interacting with the background page when a modal is open.
