# Accessible Error Alerts (`role="alert"`)

This submission demonstrates how to implement highly accessible Error Alerts that comply with WCAG 2.1 AA standards. When a user submits a form and encounters an error, sighted users instantly see the red text appear. Screen reader users, however, will be completely unaware that an error occurred unless the error container is properly marked as an ARIA live region.

## Core Accessibility Features

### 1. The `role="alert"` Live Region

For critical messages (like form validation failures, network disconnections, or session timeouts), you must use `role="alert"`. 

This is structurally equivalent to `aria-live="assertive"`. It instructs the screen reader to **instantly interrupt** whatever it is currently announcing to read the error message.

```html
<!-- CRITICAL: The empty container must exist in the HTML on page load -->
<div id="error-container" role="alert" aria-atomic="true">
    <!-- Errors will be injected here via JS -->
</div>
```

*Note on `aria-atomic="true"`: This ensures the screen reader announces the entire contents of the alert box, rather than just the specific word that changed.*

### 2. Injecting the Error

For the live region to trigger, it must detect a DOM mutation. In your JavaScript, you inject the text into the existing container:

```javascript
function showError(message) {
    // The screen reader detects this DOM change and announces it.
    errorContainer.innerHTML = `
        <div class="alert-box">
            <svg aria-hidden="true">...</svg>
            <span>${message}</span>
        </div>
    `;
}
```

### 3. Programmatic Input Association (`aria-describedby` & `aria-invalid`)

While the live region announces the error *when it happens*, you must also ensure the error is programmatically linked to the input field so the user understands the error *when they navigate back to the field*.

1. **`aria-invalid="true"`**: Tells the screen reader that the current value of the input is incorrect.
2. **`aria-describedby`**: Links the input directly to the ID of the error container, so the screen reader reads the error message when the user focuses the input.

```html
<input type="text" id="username" aria-describedby="error-container" aria-invalid="true">
```

### 4. High Contrast (Forced Colors) Support

In Windows High Contrast Mode, background colors (like a pale red error background) are completely stripped away. To ensure the error box is visually distinguishable from the rest of the page, we use the `forced-colors` media query to apply a solid border using system colors.

```css
@media (forced-colors: active) {
    .alert-box {
        /* Replace stripped background color with a solid border */
        border: 2px solid CanvasText;
    }
}
```
