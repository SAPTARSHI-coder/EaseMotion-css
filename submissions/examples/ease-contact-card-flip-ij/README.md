# Contact Card Flip

A 3D contact card that flips on hover or focus to reveal contact details on the back face. Uses CSS `perspective`, `preserve-3d`, `backface-visibility`, and controlled via CSS custom properties.

## Features

- 3D card flip on hover/focus
- Front: avatar initials, name, role
- Back: email, phone, social handle
- Focusable for keyboard accessibility
- Smooth bounce easing transition

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--card-width` | `280px` | Card width |
| `--card-height` | `340px` | Card height |
| `--front-bg` | `#1e293b` | Front face background |
| `--back-bg` | `#0f172a` | Back face background |
| `--flip-duration` | `0.6s` | Flip animation duration |

## Usage

Add `.ccf-card` with inner `.ccf-front` and `.ccf-back` children. Set CSS vars on the card element to customize dimensions, colors, and animation speed.
