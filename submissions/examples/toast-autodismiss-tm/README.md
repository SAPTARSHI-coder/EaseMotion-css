# Toast Auto-Dismiss Progress Bar

## What does this do?
Proposes adding `.ease-toast-autodismiss`, `--ease-toast-duration`, and `.ease-toast-progress` to `components/toast.css`. A thin color-matched progress bar drains at the bottom of the toast over its lifetime, giving users a visual countdown.

## How is it used?
```html
<div class="ease-toast ease-toast-success ease-toast-autodismiss"
     style="--ease-toast-duration: 5s;">
  <div class="ease-toast-icon">...</div>
  <div class="ease-toast-body">
    <strong>Deployment successful</strong>
    <p>Your site is live.</p>
  </div>
  <div class="ease-toast-progress" aria-hidden="true"></div>
</div>
```

The `--ease-toast-duration` CSS custom property controls the drain speed and defaults to `5s`. Override it inline per-toast.

## Why is this useful?
Users often miss auto-dismissing toasts because they disappear without warning. A visual countdown bar lets users decide whether to act on the message or let it go. Commonly expected in modern notification systems (Slack, GitHub, VS Code all use this pattern).

## Tech Stack
- Pure CSS: `@keyframes ease-toast-drain` with `transform: scaleX()`
- No JavaScript required for the animation
- JavaScript only handles adding/removing the toast from the DOM

## Browser Support
All modern browsers supporting `animation` and CSS custom properties.
