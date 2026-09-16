# Browser Fallbacks Guide

## What does this do?
Documents CSS fallbacks for cross-browser compatibility.

## How is it used?
```css
/* Modern property */
backdrop-filter: blur(12px);

/* Fallback for older browsers */
background: rgba(200, 200, 200, 0.8);
```

## Why is it useful?
- Support older browsers (Safari < 9, IE)
- Graceful degradation
- Consistent user experience

## Common Fallbacks
| Modern Property | Fallback |
|----------------|----------|
| backdrop-filter | solid background color |
| background-clip: text | solid color |
| @keyframes | jQuery animate |
| calc() | fixed values |
