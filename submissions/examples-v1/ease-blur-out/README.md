# ease-blur-out

## What does it do?
Element quickly blurs and fades simultaneously — from `blur(0) + opacity(1)` to `blur(8px) + opacity(0)` — pure CSS, no JavaScript.

## Features
- `filter: blur(8px) + opacity: 0` exit transition
- Fast 0.35s animation
- Clean exit effect

## Usage
```css
.element {
  transition: filter 0.35s ease, opacity 0.35s ease;
}

.element:hover {
  filter: blur(8px);
  opacity: 0;
}
```

## Browser Support
- `filter` + `transition` — Chrome 53+, Firefox 49+, Safari 9.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
