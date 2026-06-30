# Animated Spinning Gradient Border

## What does it do?

A card with a glowing, animated gradient border that spins continuously — pure CSS, no JavaScript.

## Features

- Rotating `conic-gradient` border using `::before` pseudo-element
- Infinite spinning animation
- Inner content masks the center, leaving only the border visible
- Smooth 3s linear rotation

## Usage

```html
<div class="glow-card">
  <div class="glow-inner">
    <h3>Premium Feature</h3>
    <p>Content here</p>
  </div>
</div>
```

```css
.glow-card::before {
  content: "";
  position: absolute;
  inset: -3px;
  background: conic-gradient(#6366f1, #a78bfa, #f472b6, #34d399, #6366f1);
  animation: spin-border 3s linear infinite;
  border-radius: 16px;
  z-index: 0;
}
.glow-inner {
  position: relative;
  z-index: 1;
  background: #1a1a1a;
  border-radius: 14px;
  margin: 3px;
}
@keyframes spin-border {
  to {
    transform: rotate(360deg);
  }
}
```

## Browser Support

- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
