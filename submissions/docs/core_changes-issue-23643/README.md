# Modal Focus Trap — Keyboard Accessibility for EaseMotion CSS

## 1. What does this do?

Fixes the modal component (`core/modal.js` + `components/modals.css`) to implement proper keyboard focus trapping and ARIA attributes for WCAG 2.4.3 compliance.

**Changes in `modal.js`:**
- Adds `aria-modal="true"` and `role="dialog"` to the modal element on open
- Removes ARIA attributes when the modal closes
- Implements robust focus trapping — Tab/Shift+Tab cycle only through focusable elements inside the overlay
- Catches focus escaping to elements behind the overlay and redirects it back inside
- Cleanup function removes keydown listeners when modal closes
- Sets `aria-hidden="true"` / `"false"` on the overlay based on state
- Auto-links `aria-labelledby` to the modal header heading id

**Changes in CSS:**
- Added `focus-visible` ring styles for all focusable elements inside the modal
- Added `aria-hidden="false"` state styling for the overlay

## 2. How is it used?

```html
<!-- Modal overlay with ARIA state -->
<div class="ease-modal-overlay" id="my-modal" aria-hidden="true">
  <div class="ease-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="ease-modal-header">
      <h2 id="modal-title">My Modal</h2>
      <a href="#" class="ease-modal-close" aria-label="Close">&times;</a>
    </div>
    <div class="ease-modal-body">
      <p>Tab through elements — focus never escapes the modal.</p>
      <button>Action</button>
    </div>
    <div class="ease-modal-footer">
      <a href="#" class="btn">Cancel</a>
      <a href="#" class="btn">Confirm</a>
    </div>
  </div>
</div>

<!-- Trigger -->
<a href="#my-modal" class="btn">Open Modal</a>
```

Keyboard behavior:
- **Tab**: Moves focus to the next focusable element inside the modal
- **Shift+Tab**: Moves focus to the previous focusable element inside the modal
- **Escape**: Closes the modal and returns focus to the trigger element
- **Click backdrop**: Closes the modal

## 3. Why is this useful?

- **WCAG 2.4.3 compliance** — Focus order is preserved within the modal
- **WCAG 4.1.2 compliance** — ARIA attributes convey modal state to screen readers
- **Better UX** — Users cannot accidentally interact with content behind the modal
- **Focus restoration** — Keyboard focus returns to the triggering element after close
