# ease-text-highlight-sweep

## What does it do?
A highlighter marker sweep effect that glides a yellow highlight across text on hover using only CSS. The highlight stays visible after the animation completes.

## Features
- `background-size: 0%` → `100%` with `linear-gradient` creates the sweep
- `animation-fill-mode: forwards` keeps the highlight after the sweep
- `--ease-highlight-color` CSS variable controls the highlight color (default: `#fde047`)
- Text color inverts on highlight for readability
- `prefers-reduced-motion` support shows static highlight instantly

## Usage
```css
:root {
  --ease-highlight-color: #fde047;
}

.highlight-sweep {
  background: linear-gradient(to right, var(--ease-highlight-color) 0%, var(--ease-highlight-color) 100%);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-position: left center;
}

.highlight-sweep:hover {
  animation: highlightSweep 0.6s ease-out forwards;
}

@keyframes highlightSweep {
  0%   { background-size: 0% 100%;   color: #d1d5db; }
  100% { background-size: 100% 100%; color: #1a1a1a; }
}
```

## Browser Support
- `@keyframes` + `background-size` — Chrome 43+, Firefox 16+, Safari 9+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
