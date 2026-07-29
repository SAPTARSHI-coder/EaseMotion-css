# Notification Badge Pulse

A CSS animation component for notification bell icons with a pulsing badge count. Click the bell to trigger a new notification — the badge scales up with a pulse effect and the bell icon shakes.

## Features

- Scale-pulse animation on the badge count
- Gentle shake animation on the bell icon
- Customizable via CSS custom properties
- Multiple example states (default, large count, empty)

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="bell-icon" role="button" tabindex="0">
  <svg>…</svg>
  <span class="badge">3</span>
</div>
```

Trigger a notification by adding the `badge-pulse` and `bell-shake` classes:

```js
badge.classList.add('badge-pulse');
bell.classList.add('bell-shake');
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--nbp-duration` | `0.4s` | Animation duration |
| `--nbp-badge-color` | `#ff4757` | Badge background |
| `--nbp-bell-color` | `#2f3542` | Bell icon color |
| `--nbp-pulse-color` | `rgba(255,71,87,0.35)` | Pulse glow color |
| `--nbp-count-color` | `#ffffff` | Badge text color |
