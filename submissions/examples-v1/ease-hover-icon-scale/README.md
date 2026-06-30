# Icon Scale on Hover

Icon inside a button scales up on button hover — pure CSS.

## Features

- Icon scales via `transform: scale(1.3)` on hover
- Springy cubic-bezier transition
- Pure CSS, no JavaScript

## Usage

```css
.ib-icon {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.icon-btn:hover .ib-icon {
  transform: scale(1.3);
}
```

## Browser Support

- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
