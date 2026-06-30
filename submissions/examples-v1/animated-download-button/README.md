# Animated Download Button

## What does it do?

A button that, when hovered, shows a filling progress effect simulating a download — pure CSS, no JavaScript.

## Features

- Progress bar fills from left to right on hover via `::before` pseudo-element
- Smooth 2s ease-in-out transition
- Pure CSS, no JavaScript

## Usage

```html
<button class="download-btn">Download</button>
```

```css
.download-btn {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.download-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  width: 0;
  background: linear-gradient(90deg, #6366f1, #a78bfa);
  transition: width 2s ease-in-out;
  z-index: -1;
}

.download-btn:hover::before {
  width: 100%;
}
```

## Browser Support

- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
