# Shape Morphing Utility

A CSS clip-path shape morphing and transition utility — pure CSS.

## Features
- Shape morphing via clip-path transitions
- Four predefined shapes: circle, diamond, hexagon, hexagram
- Hover to morph back to circle
- Uses --morph-shape custom property

## Usage
```css
.element { clip-path: var(--morph-shape); transition: clip-path 0.5s ease; }
.element:hover { clip-path: circle(50%); }
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript
