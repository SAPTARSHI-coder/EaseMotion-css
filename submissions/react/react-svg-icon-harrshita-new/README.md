# EaseIcon

## Overview

`EaseIcon` is a lightweight React wrapper for animated SVG icons. It supports a handful of built‑in icon types (e.g., `spinner`, `check`, `cross`) and allows custom SVGs to be added to the `icons/` directory.

## Props

- **type**: `string` – name of the icon (must correspond to a file in `icons/` or a built‑in type).
- **size**: `number` – size in pixels (default `24`).
- **color**: `string` – CSS color value (default `currentColor`).
- **className**: `string` – additional class names for custom styling.

## Usage Example

```jsx
import EaseIcon from './EaseIcon';

export default function Demo() {
  return (
    <div>
      <EaseIcon type="spinner" size={48} color="#0053ba" />
      <EaseIcon type="check" size={32} color="green" />
    </div>
  );
}
```

## Adding Custom Icons

1. Place an SVG file in the `icons/` folder, e.g., `icons/star.svg`.
2. Reference it via the `type` prop: `<EaseIcon type="star" />`.

The component will automatically apply the CSS animation defined in `icon-animations.scss`.

## License

MIT © harrshita123
