# Flip Product Card

A CSS flip product card that rotates 180 degrees on hover to reveal pricing details.

## Features

- 3D flip animation on hover using `transform: rotateY(180deg)`
- Front face shows product image and name, back face shows pricing
- Keyboard accessible via `tabindex` and `:focus-visible`
- Responsive grid layout
- CSS custom properties for easy theming
- Accessible with `prefers-reduced-motion` support
- Pure CSS — no JavaScript required

## Customization

```css
:root {
  --fpc-white: #ffffff;
  --fpc-bg: #f3f4f6;
  --fpc-text: #1f2937;
  --fpc-muted: #6b7280;
  --fpc-indigo: #4f46e5;
}
```

## Usage

```html
<link rel="stylesheet" href="style.css">
```

## Files

- `demo.html` — Demo page with 3 flip product cards
- `style.css` — All styles and 3D flip animations
