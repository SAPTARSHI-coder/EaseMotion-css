# Form Field Error Shake

A form validation UI that shakes fields on error with visual feedback.

## Features
- Horizontal shake animation on invalid fields
- Red border on error, green border on success
- Error messages below each field
- Customizable via CSS custom properties

## Usage
Include `style.css` and `demo.js` in your project. Required fields are validated on submit.

## Custom Properties
| Property | Default | Description |
|---|---|---|
| `--shake-duration` | `0.5s` | Animation duration |
| `--shake-error-color` | `#e74c3c` | Error border/message color |
| `--shake-success-color` | `#2ecc71` | Success border color |
| `--shake-border-width` | `2px` | Input border width |
| `--shake-bg` | `#fafafa` | Page background |
| `--shake-text-color` | `#222` | Text color |

## Demo
Open `demo.html` in a browser and submit the form with empty fields.
