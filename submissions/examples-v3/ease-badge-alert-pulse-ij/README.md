# Badge Alert Pulse

A CSS component that adds animated pulse badges to notification icons (bell, envelope, chat). Badges scale up and back when new alerts arrive, drawing the user's attention.

## Features

- Pulse animation on new alert
- Three badge variants: default (red), warning (yellow), success (green)
- Configurable CSS custom properties
- Button-triggered demo to simulate new alerts

## Usage

```html
<div class="icon-wrapper">
  <i class="fas fa-bell"></i>
  <span class="badge">3</span>
</div>
```

Add the `alert` class to trigger the pulse animation:

```js
badge.classList.add("alert");
```

## Custom Properties

| Property                      | Default  | Description            |
|-------------------------------|----------|------------------------|
| `--badge-alert-duration`      | `0.6s`   | Pulse animation speed  |
| `--badge-alert-bg`            | `#e74c3c`| Badge background color |
| `--badge-alert-text-color`    | `#fff`   | Badge text color       |
| `--badge-alert-size`          | `20px`   | Badge minimum size     |

## Variants

- `.badge` — default (red)
- `.badge.warning` — warning (yellow)
- `.badge.success` — success (green)

## Browser Support

Chrome, Firefox, Safari, Edge — modern browsers with CSS animation support.
