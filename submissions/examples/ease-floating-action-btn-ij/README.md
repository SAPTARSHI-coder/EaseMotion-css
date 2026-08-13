# Floating Action Button

A floating action button (FAB) component with a gentle pulse animation to draw attention.

## Features

- Pulse keyframe animation that scales the button up and down
- Box-shadow pulse on hover
- Multiple preset positions (bottom-right, bottom-left, top-right)
- Click triggers a toast notification
- Toggle pulse on/off via control button

## Usage

```html
<button class="fab fab--bottom-right">
  <span class="fab__icon">+</span>
</button>
```

## Custom Properties

| Property              | Default     | Description                   |
|-----------------------|-------------|-------------------------------|
| `--fab-duration`      | `2s`        | Pulse animation duration      |
| `--fab-bg`            | `#6366f1`   | Background color              |
| `--fab-color`         | `#ffffff`   | Icon/text color               |
| `--fab-shadow`        | `…`         | Button box-shadow             |
| `--fab-pulse-color`   | `rgba(…)`   | Hover ring color              |
| `--fab-size`          | `56px`      | Button width & height         |

## Positions

- `fab--bottom-right`
- `fab--bottom-left`
- `fab--top-right`
