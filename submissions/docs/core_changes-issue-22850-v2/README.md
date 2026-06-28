# ease-alert — Alert / Banner Component

## What does this do?

Adds a contextual alert/banner component with 4 color variants, dismissible close button with slide-out animation, icon slot, title + description sub-elements, and bordered + filled visual styles. Accessible via `role="alert"`.

## How is it used?

```html
<div class="ease-alert ease-alert-success" role="alert">
  <span class="ease-alert-icon">&#10003;</span>
  <div class="ease-alert-body">
    <strong class="ease-alert-title">Success</strong>
    <span class="ease-alert-text">Operation completed successfully.</span>
  </div>
</div>
```

Color variants: `ease-alert-success`, `ease-alert-danger`, `ease-alert-warning`, `ease-alert-info`.

For a filled background style:
```html
<div class="ease-alert ease-alert-danger ease-alert-filled" role="alert">
```

Dismissible — add a close button inside the alert:
```html
<button class="ease-alert-close" aria-label="Close">&times;</button>
```

Trigger dismissal by adding `.ease-alert-dismissed` to the alert element (slides out + fades in 350ms).

## Why is it useful?

Alerts and banners are a fundamental UI pattern for feedback, errors, warnings, and informational messages. This component fills a roadmap gap, uses the project's color tokens, respects `prefers-reduced-motion`, and supports both light and dark mode out of the box.

Fixes #22850 (v2 — clean resubmission)
