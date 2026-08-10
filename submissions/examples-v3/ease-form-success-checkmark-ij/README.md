# Form Success Checkmark

A form submission success animation with an SVG checkmark that draws itself.

## Features
- Form content fades out on submit
- Success view fades in with animated SVG checkmark
- Circle scales/strokes in, then checkmark draws
- "Submit Another" button to reset

## Usage
Include `style.css` and `demo.js`. The form transitions to a success state on valid submit.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| `--check-duration` | `0.8s` | Circle draw duration |
| `--checkmark-color` | `#22c55e` | Checkmark stroke color |
| `--check-circle-color` | `#22c55e` | Circle stroke color |
| `--check-bg` | `#fafafa` | Page background |
| `--check-text-color` | `#222` | Text color |

## Demo
Open `demo.html`, fill the form, and submit to see the success animation.
