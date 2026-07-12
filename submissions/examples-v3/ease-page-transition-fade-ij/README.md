# Page Transition Fade

Page content that fades in with a translateY motion on page load.

## Features

- Opacity + translateY entrance animation
- Triggers via `DOMContentLoaded`
- Fully customizable timing and background

## CSS Custom Properties

| Property                    | Default   | Description             |
| --------------------------- | --------- | ----------------------- |
| `--ptf-transition-duration` | `0.8s`    | Duration of the fade-in |
| `--ptf-bg-color`            | `#fafafa` | Page background color   |

## Usage

Add class `.ptf-visible` to the content element after the page loads.
