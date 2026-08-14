# ease-empty-state

Responsive empty state UI component with icon, title, description, and action buttons.

## Issue Reference

Issue: #63675

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--empty-icon-size` | `80px` | Icon container size |
| `--empty-icon-color` | `#4a4a6a` | Icon stroke color |
| `--empty-title-size` | `22px` | Title font size |
| `--empty-title-color` | `#c8c8d8` | Title text color |
| `--empty-desc-size` | `15px` | Description font size |
| `--empty-desc-color` | `#6b7280` | Description text color |
| `--empty-action-bg` | `#667eea` | Primary action background |
| `--empty-action-radius` | `8px` | Action button radius |

## Variants

- **default** — Centered column layout
- **illustration** — With bottom decorative line
- **centered** — Absolutely centered in parent

## Features

- SVG icon slot (customizable)
- Primary and secondary action buttons
- Responsive on mobile (stacked layout)
- Dark/light mode support
- Reduced motion support
