# Stagger Animation Reveal

A CSS-only stagger animation system for list and grid item reveal.

## Features
- Cascading sequential reveal via animation-delay
- Combine translateY, scale, and opacity for smooth entry
- Works with CSS Grid and Flexbox

## Usage
```css
.item { animation: stagger-in 0.5s ease both; }
.item:nth-child(1) { animation-delay: 0s; }
.item:nth-child(2) { animation-delay: 0.1s; }
/* ... */
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript
