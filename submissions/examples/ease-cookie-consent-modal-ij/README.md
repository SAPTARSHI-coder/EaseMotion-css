# Cookie Consent Modal

A slide-in cookie consent banner that animates from the bottom with accept/reject controls.

## Features

- Banner slides up with `translateY` + `opacity` on show
- Dismiss animation slides the banner back down
- "Show Cookie Banner" button re-triggers the banner
- All durations, colors, and border radius driven by CSS custom properties

## CSS Custom Properties

| Property               | Default   | Description                |
| ---------------------- | --------- | -------------------------- |
| `--cookie-duration`    | `0.4s`    | Slide in/out duration      |
| `--cookie-bg`          | `#1f2937` | Banner background color    |
| `--cookie-text-color`  | `#f9fafb` | Banner text color          |
| `--cookie-btn-bg`      | `#6366f1` | Accept button background   |
| `--cookie-btn-color`   | `#ffffff` | Accept button text color   |
| `--cookie-radius`      | `10px`    | Banner border radius       |
