# Empty State Card

A card component for empty-state scenarios with a staggered entrance animation and a bounce/pulse SVG icon. Includes a toggle to switch between empty state and populated content view.

## Features

- Animated SVG icon (bounce + scale on appear)
- Staggered fade-in of title, description, and CTA button
- Interactive toggle between empty state and content state
- Smooth hover/active feedback on the CTA
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property             | Default  | Description                  |
|----------------------|----------|------------------------------|
| `--empty-duration`   | `0.6s`   | Animation duration           |
| `--empty-stagger`    | `0.15s`  | Delay between each element   |
| `--empty-card-bg`    | `#ffffff`| Card background color        |
| `--empty-text-color` | `#374151`| Primary text color           |
| `--empty-icon-color` | `#6366f1`| SVG icon color               |
| `--empty-btn-bg`     | `#6366f1`| CTA button background        |
| `--empty-radius`     | `16px`   | Card border-radius           |

## Usage

```html
<link rel="stylesheet" href="style.css">
<!-- include demo.html markup -->
```

Adjust any variable at the root level to match your brand:

```css
:root {
  --empty-btn-bg: #0ea5e9;
  --empty-icon-color: #0ea5e9;
}
```
