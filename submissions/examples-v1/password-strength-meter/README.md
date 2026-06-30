# Password Strength Meter

A real-time password strength meter that evaluates input against five criteria (length, uppercase, digits, symbols). Displays a segmented progress bar that transitions from red (weak) to amber (medium) to green (strong) with corresponding hint text.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser. Type a password to see the strength evaluation update in real time.

## Accessibility notes

The input is a standard password field. Strength feedback is provided via text and color, not solely by color. Reduced motion disables the bar and color transitions.
