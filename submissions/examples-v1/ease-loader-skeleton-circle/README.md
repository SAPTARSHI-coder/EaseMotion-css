# ease-loader-skeleton-circle

## What does it do?
Circular skeleton shimmer for avatar/icon loading states — pure CSS, no JavaScript.

## Features
- Circular shape with shimmer sweep animation
- Size variants: `sm` (40px), `md` (70px), `lg` (100px), `avatar` (50px)
- Builds on the skeleton shimmer pattern

## Usage
```css
.skeleton-circle {
  border-radius: 50%;
  background: #e0e0e0;
  overflow: hidden;
  position: relative;
}

.skeleton-circle::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: skeleton-shimmer 1.5s infinite;
}

@keyframes skeleton-shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
