# Flip Clock Digits

A flip-clock style digit display that shows the current time (HH:MM:SS) with a realistic card-flip animation for each digit.

## Features

- Real-time hours:minutes:seconds display
- Each digit flips via `rotateX` top-half / bottom-half animation
- Top half flips down first, bottom half flips up second
- Fully customizable via CSS custom properties

## Usage

Include `style.css` and the demo HTML. The clock auto-starts and updates every second.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--flip-duration` | `0.4s` | Flip animation duration per half |
| `--flip-digit-bg` | `#1e293b` | Digit background color |
| `--flip-digit-color` | `#f8fafc` | Digit text color |
| `--flip-digit-size` | `4rem` | Digit font size |
| `--flip-divider-color` | `#64748b` | Colon divider color |
| `--flip-radius` | `6px` | Digit border radius |

## Browser Support

Chrome, Firefox, Safari, Edge — requires CSS `perspective` and `@keyframes` support (all modern browsers).
