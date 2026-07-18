# CSS-Only Form Validation Feedback

## What does this do?

Shows real-time success and error states on form inputs using only CSS pseudo-classes (`:valid`, `:invalid`, `:not(:placeholder-shown)`, `:focus`) — no JavaScript event listeners required.

---

## How is it used?

Wrap each input in an `.em-field` container, add hint spans after the input, then let the CSS drive visibility:

```html
<div class="em-field">
  <label for="email" class="em-label">Email Address</label>
  <input
    id="email"
    class="em-input"
    type="email"
    required
    placeholder="jane@example.com"
  />
  <span class="em-hint em-hint--error">Please enter a valid email address</span>
  <span class="em-hint em-hint--success">Valid email!</span>
</div>
```

Supported input types with built-in browser validation: `text` (with `minlength`), `email`, `password` (with `minlength`), `url`, `checkbox` (with `required`).

The `:not(:placeholder-shown)` guard ensures states only show after the user has started typing — not on initial page load.

---

## Why is it useful?

Form validation feedback traditionally requires JavaScript (`input` event listeners, manual DOM updates). This submission demonstrates that CSS pseudo-classes can drive the full feedback loop — border color, box shadow, icon, and hint text — without a single line of script. It fits EaseMotion CSS's zero-dependency, animation-first philosophy and is practical for any login, signup, or contact form.
