# ease-pointer-events & touch-action utilities

Utility classes for controlling pointer hit-testing and touch gesture behavior on interactive and decorative elements.

## Class reference

| Class | CSS Property | Value | Use Case |
|-------|--------------|-------|----------|
| `.ease-pointer-events-none` | `pointer-events` | `none` | Let clicks pass through decorative overlays, watermarks, or non-interactive layers |
| `.ease-pointer-events-auto` | `pointer-events` | `auto` | Restore normal click targeting on an element that previously ignored pointer events |
| `.ease-touch-action-none` | `touch-action` | `none` | Disable browser touch gestures (pan/zoom) on custom draggable or swipe-controlled UI |
| `.ease-touch-action-manipulation` | `touch-action` | `manipulation` | Remove double-tap zoom delay on buttons and links for faster taps on touch screens |

## Usage

```html
<div class="card">
  <button type="button">Save changes</button>

  <!-- Decorative gradient layer — clicks pass through to the button -->
  <div class="ease-pointer-events-none decorative-overlay" aria-hidden="true"></div>
</div>

<button type="button" class="ease-touch-action-manipulation">
  Fast-tap button
</button>
```

## Browser support

`pointer-events` is widely supported in modern browsers. `touch-action` is supported in current evergreen browsers; on older touch browsers, unknown values are ignored and default touch behavior applies. Test swipe and tap interactions on real mobile devices when using `touch-action` utilities in production layouts.
