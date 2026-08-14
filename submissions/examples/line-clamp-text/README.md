# -webkit-line-clamp: Multi-line Text Truncation

## Feature Overview
The `-webkit-line-clamp` property truncates text after a specified number of lines, adding an ellipsis at the break point. This demo shows:
- **2-line clamp** — card descriptions with a colored header image
- **3-line clamp** — article previews in a list layout
- **4-line clamp** — testimonial excerpts with a left border accent

Each variant uses the standard `display: -webkit-box` + `-webkit-box-orient: vertical` combination. A `@supports` fallback is included so non-supporting browsers show the full text without clipping.

## Usage
Open `demo.html` in any browser. The three clamp variants are applied to different content types (cards, articles, testimonials). Resize to see how truncation adapts to line count changes. The `.clamp-2`, `.clamp-3`, `.clamp-4` classes can be reused on any block element. The fallback demo shows a fade-out gradient as an alternative visual indicator.

## Browser Support
- `-webkit-line-clamp` — Chrome 6+, Edge 79+, Safari 5+, Firefox 68+, Opera 15+
- The `display: -webkit-box` approach is the only reliable cross-browser method
- Fallback `@supports not (-webkit-line-clamp)` removes the truncation entirely in browsers that do not support the property, ensuring content remains accessible
- For true polyfilling, consider a JavaScript solution like `Clamp.js` for legacy environments
