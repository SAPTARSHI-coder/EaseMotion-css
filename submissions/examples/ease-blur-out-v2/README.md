# ease-blur-out

## What does it do?
Element exit animation: blurs and fades out together — `blur(0) → blur(12px) + opacity(0)`.

## Features
- `filter: blur(12px)` + `opacity: 0` exit transition
- 0.4s ease-in timing
- Replays on hover

## Usage
```css
.element {
  transition: filter 0.4s ease-in, opacity 0.4s ease-in;
}

.element:hover {
  filter: blur(12px);
  opacity: 0;
}
```

## Browser Support
- Chrome 53+, Firefox 49+, Safari 9.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
