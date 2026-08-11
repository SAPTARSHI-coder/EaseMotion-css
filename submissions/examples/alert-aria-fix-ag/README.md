# Alert ARIA Live Region Fix (Issue #21062)

## What does this do?
Demonstrates the correct accessibility pattern for `.ease-alert` by adding `role="alert"` (for errors/warnings) or `role="status"` (for success/info) and dedicated `aria-live` regions, ensuring dynamically injected alerts are announced by screen readers.

## How is it used?
```html
<!-- For errors and warnings — assertive announcement -->
<div class="ease-alert ease-alert-error" role="alert" aria-live="assertive" aria-atomic="true">
  ❌ Something went wrong. Please try again.
</div>

<!-- For success and info — polite announcement -->
<div class="ease-alert ease-alert-success" role="status" aria-live="polite" aria-atomic="true">
  ✅ Changes saved successfully!
</div>
```

## Why is it useful?
Without `role="alert"` or an `aria-live` region, dynamically injected alerts are completely invisible to screen reader users — a critical accessibility failure for error messages and status updates. Adding the correct ARIA roles ensures all users, including those relying on assistive technology, receive the same information as sighted users.
