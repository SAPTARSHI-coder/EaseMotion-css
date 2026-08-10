# Native CSS Scroll-Driven Progress Bar

## Description
This submission resolves Issue #68977 by implementing a scroll-linked progress bar purely through CSS. It utilizes the modern `@scroll-timeline` (via `animation-timeline: scroll()`) to map the progress bar's horizontal expansion to the scroll progress of the document root. 

## Features
- **Zero JavaScript**: Entirely reliant on modern CSS, removing the need for scroll event listeners and improving performance.
- **Transform-Based Animation**: Uses `transform: scaleX()` rather than `width` for hardware-accelerated rendering and a smoother 60fps feel.
- **Graceful Degradation**: Contains a fallback using `@supports not (animation-timeline: scroll())` where the bar can be hidden on older browsers until JS-based fallbacks are implemented or browser support improves.

## Usage
Simply place an empty `div` with the class `.ease-scroll-progress` at the top of your HTML structure.

```html
<body>
  <!-- Place this at the root/top of the document -->
  <div class="ease-scroll-progress"></div>
  
  <!-- Content below -->
  <div>...</div>
</body>
```
