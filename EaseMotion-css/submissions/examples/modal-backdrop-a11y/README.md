# Accessible Modal (Backdrop Click & Escape Dismiss)

This submission demonstrates how to implement a fully accessible modal dialog that complies with WCAG 2.1 AA standards, supporting screen readers, keyboard-only navigation, and high contrast modes.

## Core Accessibility Features

### 1. Semantic HTML and ARIA

A modal must immediately announce itself to screen readers and prevent them from reading content underneath it.

```html
<!-- The modal wrapper -->
<div role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
    <h2 id="modal-title">...</h2>
    <p id="modal-desc">...</p>
</div>
```
- `role="dialog"`: Identifies the element as a dialog.
- `aria-modal="true"`: Tells screen readers that content outside this dialog is currently inaccessible.
- `aria-labelledby` / `aria-describedby`: Connects the dialog to its title and description text.

### 2. Focus Management (The "Focus Trap")

When a modal opens, keyboard focus must be trapped inside it. When it closes, focus **must return** to the element that originally opened it. 

This demo uses a hidden "focus sentinel" technique. We place a `<div tabindex="0">` at the start and end of the modal. If a keyboard user tabs into these sentinels, our JavaScript instantly bounces their focus back into the interactive elements within the modal.

```javascript
// Trap focus inside the modal
trapStart.addEventListener('focus', () => confirmBtn.focus());
trapEnd.addEventListener('focus', () => closeBtn.focus());

// Return focus on close
function closeModal() {
    // ... hide modal logic ...
    lastFocusedElement.focus(); 
}
```

### 3. Alternative Dismissal Methods

Users must not be forced to find a tiny "X" button to close a modal. We provide two alternative dismissal methods:

1. **Escape Key**: Listening for the `keydown` event and checking if `event.key === 'Escape'`.
2. **Backdrop Click**: If the user clicks the darkened background outside the modal surface, it dismisses the dialog. We check `if (event.target === modal)` to ensure they didn't just click inside the modal body.

### 4. High Contrast (Forced Colors) Support

Users relying on Windows High Contrast mode will often lose the visual distinction of a modal if it relies solely on `box-shadow` (which is often stripped out). We use the `forced-colors` media query to apply a stark border using system colors.

```css
@media (forced-colors: active) {
    .modal-surface {
        /* Ensure the modal edges are visible */
        border: 2px solid CanvasText;
    }
    .modal-backdrop {
        /* Dim the background using standard system colors */
        background-color: Canvas;
        opacity: 0.9;
    }
}
```
