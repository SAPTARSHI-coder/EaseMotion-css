# CSS `:user-valid` / `:user-invalid` Form Fields

**What does this do?**  
A production-ready form validation UX pattern using the modern CSS `:user-valid` and `:user-invalid` pseudo-classes — validation feedback appears only after the user interacts with a field, never on page load.

**How is it used?**  
Apply the `.user-valid-form` class to a `<form>` and use `.field-group`, `.field-input`, `.field-error`, and `.field-success` classes for each field:

```html
<form class="user-valid-form" novalidate>
  <div class="field-group">
    <label class="field-label" for="email">
      Email <span class="required-star" aria-label="required">*</span>
    </label>
    <input
      class="field-input"
      type="email"
      id="email"
      required
      placeholder="you@example.com"
    >
    <span class="field-helper">We'll never share your email</span>
    <span class="field-error" role="alert">Please enter a valid email</span>
    <span class="field-success">Looks good!</span>
  </div>
</form>
```

The CSS uses `:has(:user-invalid)` on `.field-group` to show error states and `:has(:user-valid)` for success states — all driven by native HTML5 form validation (no JavaScript).

**Why is it useful?**  
The legacy `:invalid` pseudo-class fires immediately on page load, showing red errors before the user even types anything. `:user-valid` / `:user-invalid` only trigger after user interaction (blur, input, or change events), providing a humane, progressive-disclosure validation experience. This is supported in all modern browsers (Chrome 119+, Firefox 119+, Safari 17+).

**Features:**
- Pure CSS — zero JavaScript validation logic
- Inline checkmark / error icons via `::after` pseudo-elements
- Respects `prefers-reduced-motion`, `forced-colors`, `prefers-contrast`, `prefers-color-scheme`
- Print styles included
- Responsive layout
- Works with text inputs, selects, textareas, checkboxes
- ARIA attributes for screen readers (`role="alert"` on error messages)
