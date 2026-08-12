# Inbox Notification Badge

An animated inbox icon with a badge count that bounces when new messages arrive. Includes a bell ring animation and a log of incoming messages.

## Features

- Badge count with bounce animation on change
- Bell icon with subtle ring keyframe animation
- "New Message" button to simulate incoming messages
- Reset button to clear the count and log
- Fully accessible and responsive

## CSS Custom Properties

| Property              | Default     | Description                       |
|-----------------------|-------------|-----------------------------------|
| `--badge-duration`    | `0.4s`      | Duration of the bounce animation  |
| `--badge-color`       | `#ffffff`   | Badge text color                  |
| `--badge-bg`          | `#ef4444`   | Badge background color            |
| `--badge-text-color`  | `#1e293b`   | General text color                |
| `--badge-size`        | `22px`      | Badge minimum width/height        |
| `--badge-position`    | `top right` | Position of the badge on the icon |

## Usage

```html
<div class="inbox-icon">
  <div class="bell-wrapper">
    <svg class="bell" ...>...</svg>
    <span class="badge" id="badge">0</span>
  </div>
  <span class="label">Inbox</span>
</div>
```

Add the `bounce` class to the badge and `ring` class to the bell to trigger the animations.
