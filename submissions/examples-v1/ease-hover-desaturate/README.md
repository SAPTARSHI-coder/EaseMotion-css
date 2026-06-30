# ease-hover-desaturate

## What does it do?
Element transitions toward grayscale on hover using `filter: saturate()` — pure CSS, no JavaScript.

## Features
- `filter: saturate(0.2)` on `:hover`
- Smooth 0.3s transition
- Can combine with brightness for reduced visual weight
- Good for 'disabled' hover states or de-emphasis

## Usage
```css
.element {
  transition: filter 0.3s ease;
}

.element:hover {
  filter: saturate(0.2);
}

/* Combined with brightness */
.element:hover {
  filter: saturate(0.2) brightness(1.1);
}
```

## Browser Support
- CSS Filters — Chrome 53+, Firefox 49+, Safari 9.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
