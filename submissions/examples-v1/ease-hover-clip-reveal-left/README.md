# Clip Reveal Left

Content reveals from left to right on hover using `clip-path` — pure CSS.

## Features

- `clip-path: inset()` animation from left edge
- Smooth cubic-bezier transition
- Pure CSS, no JavaScript

## Usage

```css
.clip-content {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 0.5s;
}
.clip-card:hover .clip-content {
  clip-path: inset(0 0 0 0);
}
```

## Browser Support

- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
