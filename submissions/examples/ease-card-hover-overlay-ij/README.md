# Card Hover Overlay

Image cards with a text overlay that smoothly fades and slides in on hover.

## Usage

Include `style.css` in your project and use the markup from `demo.html`. Each card consists of an image wrapper with an absolutely-positioned overlay.

## CSS Custom Properties

| Property                 | Default                   | Description                  |
| ------------------------ | ------------------------- | ---------------------------- |
| `--card-ov-duration`     | `0.35s`                   | Transition duration          |
| `--card-ov-overlay-bg`   | `rgba(0,0,0,0.75)`        | Overlay background colour    |
| `--card-ov-text-color`   | `#ffffff`                 | Overlay text colour          |
| `--card-ov-radius`       | `0.75rem`                 | Card border radius           |

## Interaction

On hover the background image scales up while the overlay fades in (opacity 0→1) and slides up (translateY 12px→0).

## Browser Support

Works in all modern browsers. Gracefully degrades — without hover the overlay remains hidden and the image is shown as-is.

## Credits

Submission for EaseMotion CSS by [Your Name].
