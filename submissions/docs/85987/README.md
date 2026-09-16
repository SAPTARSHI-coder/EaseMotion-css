# Cyberpunk Toast Alert Stack

Quick guide for accessible toast notifications.

## Basic Usage

```html
<div class="toast-stack" aria-live="polite">
  <div class="toast toast-success">
    <strong>Success</strong>
    <span>Deployment completed.</span>
    <button aria-label="Close notification">×</button>
  </div>
</div>