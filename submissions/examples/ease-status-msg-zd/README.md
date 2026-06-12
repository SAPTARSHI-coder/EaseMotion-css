# Ease Status Msg Zd

## What does this do?

A set of animated inline status message components for success, error, warning, and info notifications — built with pure HTML and CSS, featuring slide-in entrance, bounce-in icons, shake animation on error, auto-dismiss progress bar, dismiss button, and stacked message support.

## How is it used?

```html
<!-- Success message -->
<div class="msg msg-success">
  <div class="msg-icon msg-icon-success">✓</div>
  <div class="msg-content">
    <div class="msg-title">Changes saved</div>
    <div class="msg-desc">Your settings have been updated successfully.</div>
  </div>
  <button class="msg-dismiss">✕</button>
  <div class="msg-progress"></div>
</div>

<!-- Error message (with shake animation) -->
<div class="msg msg-error">
  <div class="msg-icon msg-icon-error">!</div>
  <div class="msg-content">
    <div class="msg-title">Upload failed</div>
    <div class="msg-desc">File size exceeds the 10 MB limit.</div>
  </div>
  <button class="msg-dismiss">✕</button>
</div>

<!-- Warning message -->
<div class="msg msg-warning">...</div>

<!-- Info message -->
<div class="msg msg-info">...</div>

<!-- Stacked messages -->
<div class="msg-stack">
  <div class="msg msg-success">...</div>
  <div class="msg msg-error">...</div>
</div>
```

## Why is it useful?

Inline status messages are essential for form validation, API feedback, settings changes, and real-time notifications in web applications. This component provides a clean, reusable pattern for four common message types (success, error, warning, info) with distinctive color coding, appropriate entrance animations (slide-in), icon animations (bounce-in for success, shake for errors), auto-dismiss progress indicators, dismiss buttons, and stacked message layout — all in pure CSS with full `prefers-reduced-motion` support and zero JavaScript dependencies.
