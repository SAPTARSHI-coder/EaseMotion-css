# Mix Blend Mode

## What does it do?
A pure-CSS demo showing the `mix-blend-mode` property for blending elements with their background — no JavaScript required.

## Features
- **multiply** — darkens overlapping areas
- **screen** — lightens overlapping areas
- **overlay** — combined multiply/screen effect
- **difference** — inverts based on color difference
- **exclusion** — similar to difference with softer contrast

## Blend Modes
| Mode | Behavior |
|------|----------|
| `multiply` | Darkens — black stays black, white is transparent |
| `screen` | Lightens — white stays white, black is transparent |
| `overlay` | Combines multiply and screen based on base color |
| `difference` | Inverts based on color difference |
| `exclusion` | Similar to difference, lower contrast |

## Usage
```css
.overlay-text {
  mix-blend-mode: difference;
  color: white;
}
```

## Browser Support
- `mix-blend-mode` — Chrome 41+, Firefox 32+, Safari 8+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
