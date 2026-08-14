# Wallet Card Balance

A wallet/card UI with animated balance that counts up/down on change.

## Features

- Card flip animation with front (balance) and back (details) sides
- Balance number counts up/down with eased animation
- Transaction list items slide in with staggered animation
- Add/deduct money buttons
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--wcb-duration` | `0.4s` | Animation duration |
| `--wcb-card-bg` | `linear-gradient(135deg, #667eea, #764ba2)` | Card background |
| `--wcb-accent-color` | `#667eea` | Accent color for buttons |
| `--wcb-text-color` | `#e2e8f0` | Text color |
| `--wcb-radius` | `16px` | Border radius |
| `--wcb-shadow` | `0 20px 60px rgba(0,0,0,0.3)` | Card box shadow |

## Usage

Open `demo.html` in any modern browser. Click Add/Deduct to change balance. Flip Card to see details.

## Browser Support

Chrome, Firefox, Safari, Edge — any modern browser supporting CSS custom properties and animations.

## Author

IJ
