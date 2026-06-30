# Backdrop Blur Appear

Backdrop blur overlay appears on hover using `backdrop-filter` — pure CSS.

## Features

- `backdrop-filter: blur()` overlay fades in on hover
- Semi-transparent dark overlay
- Pure CSS, no JavaScript

## Usage

```css
.backdrop-overlay {
  backdrop-filter: blur(6px);
  opacity: 0;
  transition: opacity 0.4s;
}
.backdrop-card:hover .backdrop-overlay {
  opacity: 1;
}
```

## Browser Support

- Chrome 76+, Firefox 70+, Safari 9+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
