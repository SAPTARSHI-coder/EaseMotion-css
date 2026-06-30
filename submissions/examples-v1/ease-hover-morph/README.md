# ease-hover-morph

## What does it do?

Element border-radius morphs to an organic shape on hover — pure CSS, no JavaScript.

## Features

- Smooth `border-radius` transition on `:hover`
- 8-value border-radius organic shapes
- Returns to original shape on mouse leave
- Multiple morph variants

## Usage

```css
.element {
  border-radius: 24px;
  transition: border-radius 0.4s ease;
}

.element:hover {
  border-radius: 62% 38% 54% 46% / 44% 48% 52% 56%;
}
```

## Browser Support

- `border-radius` + `transition` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
