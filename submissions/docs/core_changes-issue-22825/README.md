# ease-toast — Toast / Notification Component

## What does this do?

Adds a toast notification system with slide-in animation, auto-dismiss, stack layout, and 4 semantic variants. Each toast shows an icon, title, description, and close button — with auto-positioning via a fixed stack container.

## How is it used?

```html
<!-- Stack container (auto-positioned top-right) -->
<div class="ease-toast-stack ease-toast-stack-top-right">
  <div class="ease-toast ease-toast-success">
    <span class="ease-toast-icon"><!-- SVG icon --></span>
    <div class="ease-toast-body">
      <strong>Success</strong>
      <p>Your changes have been saved.</p>
    </div>
    <button class="ease-toast-close">&times;</button>
  </div>
</div>
```

Add `.ease-toast-auto-dismiss` for auto-removal after 4 seconds:

```html
<div class="ease-toast ease-toast-success ease-toast-auto-dismiss">...</div>
```

Variants: `ease-toast-success`, `ease-toast-danger`, `ease-toast-warning`, `ease-toast-info`.

Stack positions: `ease-toast-stack-top-right` (default), `-bottom-right`, `-top-left`, `-bottom-left`.

## Why is it useful?

Toasts provide non-intrusive feedback for success confirmations, error alerts, warnings, and informational messages. This component fills a gap in EaseMotion CSS's component set with a fully styled, accessible, dark-mode-compatible solution that uses CSS animations for both entry and auto-dismiss — no JS required for the visual behaviour.

Fixes #22825
