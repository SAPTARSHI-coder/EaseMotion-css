# Ease List Bullet Animate — Dancing Bullets

> **PR:** #36778  
> **Component:** `<list-bullet-animate>`

Animated list where each bullet dances on hover with a bounce effect.

## CSS Custom Properties

| Property           | Default   | Description          |
|--------------------|-----------|----------------------|
| `--bullet-color`   | `#f59e0b` | Bullet color         |
| `--text-color`     | `#e2e8f0` | List item text color |
| `--bullet-size`    | `12px`    | Bullet diameter      |
| `--bounce-duration`| `0.4s`    | Bounce timing        |

## Usage

```html
<list-bullet-animate>
  <ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ul>
</list-bullet-animate>
```

## Features

- Dance animation on hover/intersection
- Staggered bounce per bullet
- Dark theme by default
