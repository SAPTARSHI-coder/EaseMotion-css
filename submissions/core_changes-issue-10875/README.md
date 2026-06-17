# ease-announce-bar

## What does this do?

Provides a CSS-only dismissable announcement bar / top banner component with slide-down entrance animation, color variants, and dismiss via the checkbox hack — no JavaScript required.

## How is it used?

Add a hidden checkbox followed by the announcement bar. The dismiss button is a `<label>` that toggles the checkbox, hiding the bar when checked.

```html
<input type="checkbox" id="dismiss-demo" class="ease-announce-bar-dismiss" />
<div class="ease-announce-bar is-success">
  <span class="ease-announce-bar-content">
    <strong>Success!</strong> Your changes have been saved.
  </span>
  <label for="dismiss-demo" class="ease-announce-bar-close" tabindex="0">&#x2715;</label>
</div>
```

### Color variants

| Class | Color | Use case |
| --- | --- | --- |
| `is-info` (default) | Indigo | General announcements |
| `is-success` | Green | Success confirmations |
| `is-warning` | Amber | Warnings / expiring sessions |
| `is-danger` | Red | Errors / critical alerts |

### Fixed position

Add `.is-fixed` to pin the bar to the top of the viewport:

```html
<div class="ease-announce-bar is-danger is-fixed">
```

## Why is it useful?

Announcement banners are a common pattern for promotions, alerts, maintenance notices, and system messages. This component provides a polished, accessible, zero-JavaScript implementation that fits EaseMotion CSS's lightweight philosophy.

## Features

- Slide-down entrance animation (`ease-slide-down`)
- CSS-only dismiss via checkbox hack (no JS)
- Four color variants: info, success, warning, danger
- Fixed position variant (`.is-fixed`)
- Dismiss button with hover effect
- Respects `prefers-reduced-motion`
- Pure CSS, no JavaScript
