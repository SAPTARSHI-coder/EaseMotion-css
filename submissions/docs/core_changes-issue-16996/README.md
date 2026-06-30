# ease-slide-direction — Direction-Aware Slide Animations

## What does this do?

Adds slide-in/out animations from 8 directions: top, bottom, left, right, top-left, top-right, bottom-left, bottom-right. Useful for entrance animations, panels, modals, and tooltips.

## How is it used?

```html
<div class="ease-slide-in-top">Slides in from top</div>
<div class="ease-slide-in-bottom-left">Slides in from bottom-left</div>
```

### Classes

| Class                         | Direction         | Transform                 |
| ----------------------------- | ----------------- | ------------------------- |
| `.ease-slide-in-top`          | From top          | `translateY(-100%)`       |
| `.ease-slide-in-bottom`       | From bottom       | `translateY(100%)`        |
| `.ease-slide-in-left`         | From left         | `translateX(-100%)`       |
| `.ease-slide-in-right`        | From right        | `translateX(100%)`        |
| `.ease-slide-in-top-left`     | From top-left     | `translate(-100%, -100%)` |
| `.ease-slide-in-top-right`    | From top-right    | `translate(100%, -100%)`  |
| `.ease-slide-in-bottom-left`  | From bottom-left  | `translate(-100%, 100%)`  |
| `.ease-slide-in-bottom-right` | From bottom-right | `translate(100%, 100%)`   |

## Custom Properties

| Property                | Default                         | Description        |
| ----------------------- | ------------------------------- | ------------------ |
| `--ease-slide-duration` | `0.4s`                          | Animation duration |
| `--ease-slide-timing`   | `cubic-bezier(0.16, 1, 0.3, 1)` | Easing curve       |

## Accessibility

Respected via `prefers-reduced-motion`.
