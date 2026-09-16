# Expand Section Animate

Accordion-style expandable sections with smooth height animation using CSS `grid-template-rows` transition. Content fades in after the container expands.

## Features

- Smooth height transition via `grid-template-rows` (no JavaScript height calculations)
- Content opacity fades in after expand completes
- +/- icon rotates on toggle
- Multiple independent sections
- `prefers-reduced-motion` support
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property             | Default  | Description                 |
|----------------------|----------|-----------------------------|
| `--exp-duration`     | `0.35s`  | Expand/collapse duration    |
| `--exp-bg`           | `#ffffff`| Section background          |
| `--exp-header-bg`    | `#f9fafb`| Header background           |
| `--exp-text-color`   | `#111827`| Header text color           |
| `--exp-border`       | `#e5e7eb`| Section border color        |
| `--exp-radius`       | `12px`   | Section border-radius       |

## Usage

```html
<link rel="stylesheet" href="style.css">
<!-- include demo.html markup -->
```

Customise:

```css
:root {
  --exp-duration: 0.5s;
  --exp-bg: #fefefe;
}
```
