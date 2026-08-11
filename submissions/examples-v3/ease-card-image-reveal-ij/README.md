# Image Reveal Cards

Cards whose images reveal horizontally (clip-path) on scroll, triggered by the Intersection Observer API.

## Usage

Include `style.css` in your project and copy the markup from `demo.html`. The included script observes each `.ir-card` and adds an `.animate` class when it enters the viewport.

## CSS Custom Properties

| Property              | Default                   | Description            |
| --------------------- | ------------------------- | ---------------------- |
| `--card-ir-duration`  | `0.7s`                    | Reveal animation speed |
| `--card-ir-bg`        | `#1e1e2f`                 | Page background colour |
| `--card-ir-text-color`| `#ffffff`                 | Card text colour       |
| `--card-ir-radius`    | `0.75rem`                 | Card border radius     |

## Animation

The entire card fades and slides up on scroll. Inside each card the `<img>` uses `clip-path: inset(0 100% 0 0)` → `inset(0 0 0 0)` to reveal the image from left to right.

## Browser Support

Works in all modern browsers with `IntersectionObserver` and `clip-path` support. Includes a graceful fallback — cards are visible without animation when support is absent.

## Credits

Submission for EaseMotion CSS by [Your Name].
