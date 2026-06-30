# Animated Price Tag

## What does it do?

A price tag component that swings gently from a string on hover — pure CSS, no JavaScript.

## Features

- Swings from `transform-origin: top center` on hover
- Thin string line via `::before` pseudo-element
- Smooth ease-in-out transition
- Perfect micro-interaction for e-commerce

## Usage

```html
<div class="price-tag">
  <div class="tag-body">
    <span class="tag-label">Only</span>
    <span class="tag-price">$19.99</span>
  </div>
</div>
```

```css
.tag-body {
  transform-origin: top center;
  transition: transform 0.4s ease-in-out;
}
.price-tag:hover .tag-body {
  transform: rotate(-6deg);
}
```

## Browser Support

- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
