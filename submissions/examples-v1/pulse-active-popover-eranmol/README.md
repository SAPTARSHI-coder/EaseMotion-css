# Pulse-Active Popover

Pure CSS animated popover with smooth pulse-active interaction for issue **#46528**.

## What does this do?

A pure CSS popover component that activates with a smooth pulse animation on hover and focus. Styled for minimalist tech interfaces with fully responsive layout, keyboard accessibility, and CSS custom properties for customization.

## How is it used?

```html
<div class="popover-wrapper">
  <button class="popover-trigger" aria-describedby="pop-id">
    Trigger
  </button>
  <div class="popover pulse-active" id="pop-id" role="tooltip">
    <div class="popover-arrow"></div>
    <div class="popover-content">
      <h3 class="popover-title">Title</h3>
      <p class="popover-text">Content</p>
    </div>
  </div>
</div>
```

## Why is it useful?

This component provides a modern, accessible popover pattern that uses zero JavaScript. The pulse animation draws attention naturally, making it ideal for notifications, tooltips, and quick actions in minimalist tech interfaces.

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--pulse-color` | `rgba(99, 102, 241, 0.4)` | Pulse ring color |
| `--pulse-scale` | `1.04` | Scale factor during pulse |
| `--pulse-duration` | `0.3s` | Transition speed |
| `--pulse-ring-duration` | `1.5s` | Pulse ring animation speed |
| `--popover-radius` | `14px` | Border radius |
| `--popover-offset` | `12px` | Gap from trigger |

## Features

- Pure CSS — zero JavaScript
- Pulse-active animation on hover and focus
- Keyboard accessible (focus-within activation)
- Four popover variants (info, notification, settings, profile)
- Arrow pointer with CSS transforms
- Responsive layout
- Reduced motion support via `prefers-reduced-motion`

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Self-contained demo with four popover variants |
| `style.css` | Full component CSS with pulse animations |
| `README.md` | This file |
