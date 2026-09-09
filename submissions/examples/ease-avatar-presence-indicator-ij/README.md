# Avatar Presence Indicator

A CSS-only avatar presence indicator component with animated status dots.

## Features

- Pure CSS implementation
- Pulse animation on online status dot
- Four status states: online, away, busy, offline
- Customizable via CSS custom properties
- Inter font integration

## Usage

Include `style.css` in your HTML and use the following structure:

```html
<div class="avatar">
  <div class="avatar-img" style="background-color: #6C63FF;"></div>
  <div class="status-dot online"></div>
</div>
```

## Custom Properties

| Property              | Default   | Description            |
|-----------------------|-----------|------------------------|
| `--av-pulse-duration` | `2s`      | Pulse animation speed  |
| `--av-avatar-size`    | `80px`    | Avatar diameter         |
| `--av-online-color`   | `#22c55e` | Online dot color        |
| `--av-away-color`     | `#eab308` | Away dot color          |
| `--av-busy-color`     | `#ef4444` | Busy dot color          |
| `--av-offline-color`  | `#9ca3af` | Offline dot color       |
| `--av-dot-size`       | `16px`    | Status dot diameter     |

## License

MIT
