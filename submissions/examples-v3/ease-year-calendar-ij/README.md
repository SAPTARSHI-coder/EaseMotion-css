# 📅 Ease Year Calendar

A CSS animation of calendar months revealing one by one with a 3D flip-and-scale effect.

## Usage

Include the stylesheet in your HTML:

```html
<link rel="stylesheet" href="style.css" />
```

The animation runs automatically on `.calendar-month` elements. Add a `--i` custom property for staggered delay (0–11).

## Custom CSS Variables

| Variable           | Default   | Description                   |
|--------------------|-----------|-------------------------------|
| `--cal-bg`         | `#2d2d44` | Background color of the grid  |
| `--month-color`    | `#4ecdc4` | Text/theme color of each month|
| `--reveal-duration`| `0.5s`    | Duration of each reveal       |

## Interactive Controls

Open `demo.html` to use the color pickers and range slider for live customization.
