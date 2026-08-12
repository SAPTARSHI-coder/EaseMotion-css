# Container Query Responsive Animations

Animation utilities that adapt based on the size of their **parent container**
(via CSS Container Queries) rather than the viewport - enabling truly
reusable, responsive components with zero JavaScript.

## Usage

```html
<div class="ease-container">
  <div class="card ease-container-motion">
    <h2>Responsive Card</h2>
    <p>This animation changes based on the container width.</p>
  </div>
</div>
```

1. Add `.ease-container` to the element that defines the sizing context
   (`container-type: inline-size`).
2. Add `.ease-container-motion` to the child you want animated.

## Behavior

| Container width | Animation                     |
|------------------|-------------------------------|
| `< 400px`        | Fade in                       |
| `>= 400px`       | Fade in + slide up            |
| `>= 700px`       | Fade in + slide up + scale in |

## Standalone variants

If you want to force a specific animation regardless of container size, use:

- `.ease-container-fade`
- `.ease-container-slide`
- `.ease-container-scale`

## Files

- `demo.html` - live, resizable demo
- `style.css` - all animation utilities
- `README.md` - this file

## Browser support

Requires CSS Container Queries (all evergreen browsers as of 2024+).
