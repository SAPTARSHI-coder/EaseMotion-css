# Shake X — Validation Feedback (Accessible)

**EaseMotion Submission** · Contributor: kavin553

---

## 1. What does this do?

Automatically shakes an input horizontally when it fails native HTML5 validation (via `:invalid`), and reveals a paired error message announced to screen readers via `aria-live`.

## 2. How is it used?

```html
<input
  class="shake-x-validate"
  type="email"
  required
  aria-describedby="email-error"
/>
<span class="shake-x-error-message" id="email-error" aria-live="polite">
  Please enter a valid email address.
</span>