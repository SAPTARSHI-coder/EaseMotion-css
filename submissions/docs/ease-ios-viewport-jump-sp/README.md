# iOS Safari 100vh + Fixed Navbar Jump

A documentation showcase explaining why layouts using `100vh` can jump on iOS Safari when the browser UI expands or collapses.

## Features

- Demonstrates the 100vh viewport jump problem
- Shows a corrected implementation using `100dvh`
- Includes fixed navbar example
- Uses a simple fade-in entrance animation
- Provides copy-ready CSS snippets
- Responsive HTML and CSS only

## Folder Structure

```
submissions/docs/ease-ios-viewport-jump-sp/
├── demo.html
├── style.css
└── README.md
```

## Recommended Solution

```css
.hero{
    height:100dvh;
}
```

Fallback:

```css
.hero{
    height:100svh;
    min-height:-webkit-fill-available;
}
```

Safe Area:

```css
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
```

## Browser Support

- Chrome ✅
- Edge ✅
- Firefox ✅
- Safari ✅ (recommended for testing the viewport behavior)

This showcase demonstrates modern viewport units and best practices for avoiding layout jumps on iOS Safari.