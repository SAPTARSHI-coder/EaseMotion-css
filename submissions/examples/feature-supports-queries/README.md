# @supports Feature Queries

## What does it do?
A pure-CSS demo showing how to use `@supports` for progressive enhancement — detecting browser feature support and applying styles accordingly. No JavaScript required.

## Features Detected
- **display: grid** — CSS Grid layout support
- **animation-timeline** — scroll-driven animation support
- **selector(:has())** — `:has()` parent selector support
- **color: oklch()** — OKLCH color space support
- **selector(:focus-visible)** — `:focus-visible` selector support

## Usage
```css
@supports (display: grid) {
  .grid { display: grid; }
}

@supports not (selector(:has(*))) {
  .fallback { /* alternative styles */ }
}
```

## Data Attributes
- `data-feature="grid"` — CSS Grid detection
- `data-feature="scroll-timeline"` — scroll-driven animation detection
- `data-feature="has"` — `:has()` selector detection
- `data-feature="oklch"` — OKLCH color detection
- `data-feature="focus-visible"` — `:focus-visible` detection

## Browser Support
- `@supports` — Chrome 28+, Firefox 22+, Safari 9+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
