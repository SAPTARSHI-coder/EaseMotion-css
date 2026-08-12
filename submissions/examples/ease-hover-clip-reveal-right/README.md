# Clip Reveal Right

Content reveals from right to left on hover using `clip-path` — pure CSS.

## Features
- `clip-path: inset()` animation from right edge
- Smooth cubic-bezier transition
- Pure CSS, no JavaScript

## Usage
```css
.clip-content { clip-path: inset(0 0 0 100%); transition: clip-path 0.5s; }
.clip-card:hover .clip-content { clip-path: inset(0 0 0 0); }
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
