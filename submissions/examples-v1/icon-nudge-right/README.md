# Icon Nudge Right on Hover

Icon shifts right on button hover — pure CSS.

## Features
- Icon nudges right via translateX(4px) on hover
- Springy cubic-bezier transition
- Pure CSS, no JavaScript

## Usage
```css
.btn-icon { transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); }
.icon-right-btn:hover .btn-icon { transform: translateX(4px); }
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript
