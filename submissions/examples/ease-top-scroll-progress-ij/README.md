# Top Scroll Progress

A fixed top-of-page progress bar that fills as the user scrolls, with color thresholds and a percentage label.

**Directory:** `ease-top-scroll-progress-ij`

## Features
- Fixed position progress bar at top of page
- Width transitions smoothly based on scroll percentage
- Color changes at thresholds (blue < 33%, amber < 66%, green >= 66%)
- Percentage label in top-right
- Bar hides on page top, appears on scroll down

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--tsp-duration` | `0.3s` | Fade/color transition duration |
| `--tsp-bar-color` | `#3b82f6` | Default progress bar color |
| `--tsp-track-bg` | `#1e293b` | Track background |
| `--tsp-height` | `4px` | Bar height |
| `--tsp-label-color` | `#3b82f6` | Label text color |

## Usage
Open `demo.html` in a browser. Scroll down to see the progress bar fill from left to right.
