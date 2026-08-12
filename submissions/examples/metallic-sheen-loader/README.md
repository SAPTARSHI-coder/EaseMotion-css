# CSS Loader: Metallic Sheen Variation

A pure CSS loader featuring a rotating metallic ring with a reflective sheen effect. Designed for dark interfaces with smooth, hardware-accelerated animations.

## Features

- Pure HTML & CSS
- Metallic sheen visual effect
- Smooth rotating animation
- Hardware accelerated transforms
- Dark mode compatible
- Responsive design
- Accessible loader markup
- No JavaScript required

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Basic implementation:

```html
<div
  class="metallic-loader"
  role="status"
  aria-label="Loading"
>
  <span class="ring"></span>
</div>
```

## Customization

Adjust metallic colors:

```css
:root{
  --metal-light:#f2f2f2;
  --metal-mid:#a8a8a8;
  --metal-dark:#4a4a4a;
}
```

Change animation speed:

```css
.ring{
  animation: spin 1.8s linear infinite;
}
```

## Accessibility

- Uses `role="status"`
- Includes descriptive loading label
- Supports `prefers-reduced-motion`
- Works without JavaScript

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Why It Fits EaseMotion CSS

This component showcases a visually polished CSS-only loader pattern using gradients, transforms, and animations while remaining lightweight, responsive, and easy to integrate.

## Demo

Open `demo.html` directly in any modern browser.