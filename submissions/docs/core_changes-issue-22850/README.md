# ease-alert — Alert / Banner Component

## What does this do?

Adds an alert/banner component for displaying contextual messages with support for multiple severity levels, dismissible variant with slide-out animation, icon slot, title and description sub-elements, and bordered/filled visual styles.

## How is it used?

```html
<!-- Info alert (default) -->
<div class="ease-alert" role="alert">
  <span class="ease-alert-icon">ℹ️</span>
  <div class="ease-alert-content">
    <strong class="ease-alert-title">Information</strong>
    <p class="ease-alert-text">Your session will expire in 5 minutes.</p>
  </div>
</div>

<!-- Success alert -->
<div class="ease-alert ease-alert-success" role="alert">...</div>

<!-- Danger alert -->
<div class="ease-alert ease-alert-danger" role="alert">...</div>

<!-- Warning alert -->
<div class="ease-alert ease-alert-warning" role="alert">...</div>

<!-- Dismissible alert -->
<div class="ease-alert ease-alert-dismissible" role="alert">
  ...
  <button class="ease-alert-close" aria-label="Close">&times;</button>
</div>

<!-- Bordered variant -->
<div class="ease-alert ease-alert-bordered" role="alert">...</div>

<!-- Alert with title only (no description) -->
<div class="ease-alert" role="alert">
  <span class="ease-alert-icon">✅</span>
  <strong class="ease-alert-title">Changes saved successfully</strong>
</div>
```

## Why is it useful?

Alerts and banners are essential UI patterns for feedback, notifications, and system messages. This component integrates with EaseMotion CSS color tokens to provide consistent severity styling, includes dismiss animations that respect `prefers-reduced-motion`, and follows accessibility best practices with `role="alert"` and proper ARIA labels.

Fixes #22850
