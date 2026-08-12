# Border Slide Button

A button where borders animate into view on hover using pseudo-elements or inset box-shadow transitions.

## Features

- Bottom border slides from center outward via `::after` pseudo-element
- Left border slides in from top
- Draw variant animates a full border ring using `box-shadow`
- Customizable via CSS custom properties

## CSS Custom Properties

| Property                | Default    | Description                |
| ----------------------- | ---------- | -------------------------- |
| `--btn-bs-duration`     | `0.3s`     | Border animation duration  |
| `--btn-bs-bg`           | `transparent` | Button background       |
| `--btn-bs-color`        | `#1e293b`  | Button text color          |
| `--btn-bs-border-color` | `#4f46e5`  | Border color               |
| `--btn-bs-border-width` | `2px`      | Border thickness           |

## Usage

```html
<button class="btn-bs btn-bs--bottom">Hover me</button>
<button class="btn-bs btn-bs--draw">Hover me</button>
```
