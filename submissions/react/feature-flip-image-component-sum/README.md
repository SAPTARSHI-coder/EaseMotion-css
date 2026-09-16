# Flip Image Component

## What does this do?

A React image card that periodically flips to seek attention.

## How is it used?

```jsx
import FlipImage from './FlipImage';

<FlipImage alt="Product preview">Hello</FlipImage>
```

## Why is it useful?

Flip attention seekers highlight featured media in galleries and cards without external animation libraries.

## Accessibility

- `role="img"` with `aria-label` / `alt`
- Keyboard focusable with visible focus ring
- Under `prefers-reduced-motion: reduce`, flip stops and a static inset highlight remains

## Files

```
submissions/react/feature-flip-image-component-sum/
├── FlipImage.jsx
├── style.css
└── README.md
```

Related issue: #50755
