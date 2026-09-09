# Floating Notification Toast Component

A lightweight notification toast component built entirely with HTML and CSS. Displays success, error, warning, or info messages with a status icon, title, message text, and optional dismiss button. Features a smooth slide-in entrance animation.

## Classes

| Class | Description |
|---|---|
| `ease-toast` | Base toast container with slide-in animation |
| `ease-toast-success` | Green success variant |
| `ease-toast-error` | Red error variant |
| `ease-toast-warning` | Amber warning variant |
| `ease-toast-info` | Blue info variant |
| `ease-toast-icon` | Circular status icon slot |
| `ease-toast-content` | Title and message wrapper |
| `ease-toast-title` | Toast title text |
| `ease-toast-msg` | Toast message text |
| `ease-toast-close` | Dismiss button |

## Usage

```html
<div class="ease-toast ease-toast-success" role="alert">
  <span class="ease-toast-icon">&#10003;</span>
  <div class="ease-toast-content">
    <h4 class="ease-toast-title">Success</h4>
    <p class="ease-toast-msg">Your changes have been saved.</p>
  </div>
  <button class="ease-toast-close" aria-label="Dismiss">&times;</button>
</div>
```

## Why it fits EaseMotion CSS

Pure CSS toast with staggered slide-in entrance animation, color-coded variants, and a hover-visible dismiss button. Uses design tokens for colors and spacing. Respects `prefers-reduced-motion`.
