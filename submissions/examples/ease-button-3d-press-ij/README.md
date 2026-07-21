# 3D Press Button

A button component with a realistic 3D press effect. On click, the button translates downward and its shadow shrinks to simulate being pressed into the surface.

## Features

- Box-shadow creates a raised 3D appearance
- `translateY` on `:active` pushes the button down
- Customizable via CSS custom properties
- Multiple color and size variants

## CSS Custom Properties

| Property                | Default   | Description               |
| ----------------------- | --------- | ------------------------- |
| `--btn-3d-duration`     | `0.1s`    | Press animation duration  |
| `--btn-3d-bg`           | `#4f46e5` | Button background color   |
| `--btn-3d-text-color`   | `#fff`    | Button text color         |
| `--btn-3d-shadow`       | `0 6px 0` | Bottom shadow for 3D look |
| `--btn-3d-press-depth`  | `4px`     | Distance pressed on click |
| `--btn-3d-border-radius`| `8px`     | Button border radius      |

## Usage

```html
<button class="btn-3d btn-3d--primary">Click me</button>
```

Modify any property at the element level:

```html
<button class="btn-3d" style="--btn-3d-bg: #a855f7; --btn-3d-shadow: 0 6px 0 #7e22ce;">Click me</button>
```
