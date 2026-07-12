# CSS Shimmer Sweep Modal

A responsive, pure CSS modal featuring a modern shimmer sweep animation inspired by SaaS landing pages.

## Features

- Pure HTML + CSS
- Responsive Design
- SaaS-style Modal
- Animated Shimmer Sweep
- Smooth Scale Entrance
- CSS Custom Properties
- Keyboard Support (ESC closes modal)
- No external libraries

## Files

```
demo.html
style.css
README.md
```

## CSS Variables

```css
:root{

--duration:.7s;
--easing:cubic-bezier(.22,.61,.36,1);
--modal-width:500px;
--radius:20px;
--scale:.9;

}
```

These variables allow developers to customize:

- Animation duration
- Animation easing
- Modal width
- Border radius
- Initial scale

## Accessibility

- Responsive layout
- Keyboard ESC support
- Uses `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`

## Preview

- Animated shimmer sweep
- Glassmorphism overlay
- Modern SaaS appearance
- Zero CSS frameworks

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Author

Created for **EaseMotion CSS** GSSoC 2026 Contribution.