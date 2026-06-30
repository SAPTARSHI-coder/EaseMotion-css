# Border Expand on Hover

Border expands outward on hover — pure CSS.

## Features

- border-width + padding increase together on hover
- Smooth transition
- Pure CSS, no JavaScript

## Usage

```css
.expand-card {
  padding: 1rem 2rem;
  border: 2px solid #6366f1;
  transition:
    padding 0.3s,
    border-width 0.3s;
}
.expand-card:hover {
  padding: 1.2rem 2.4rem;
  border-width: 4px;
}
```

## Browser Support

- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack

- HTML + CSS only, no JavaScript
