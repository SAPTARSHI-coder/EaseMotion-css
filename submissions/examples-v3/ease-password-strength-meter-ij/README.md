# ease-password-strength-meter

A password input with a live strength indicator bar. The bar width and color transition smoothly based on the calculated strength level.

## Features
- Password input with strength bar below
- Bar width and color change dynamically (green = strong)
- Smooth width and color transitions
- Dark theme with focused input state

## Usage
Set `--strength` (0-100) on the `.psm-container` element via `style.setProperty()` to update the strength bar. The bar color transitions from red to green as strength increases.
