# Scroll Progress Bar

## What does this do?
A thin, gradient-colored progress bar fixed at the top of the viewport that fills as the user scrolls down the page — using pure CSS scroll-driven animations.

## How is it used?
Add a single element at the top of your `<body>`:

```html
<div class="scroll-progress" aria-hidden="true"></div>
```

No wrapper needed. No JavaScript. It just works.

## Why is it useful?
Scroll progress indicators are widely used on blogs, documentation sites, and long-form content pages to give users a sense of reading position. This submission uses the modern `animation-timeline: scroll()` CSS feature — making it a zero-dependency, high-performance solution that aligns perfectly with EaseMotion CSS's no-JS philosophy. It includes a gradient fill, subtle glow effect, and `prefers-reduced-motion` support.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect. Scroll down to watch the bar fill.

## Browser Support
- Chrome 115+, Edge 115+, Opera 101+ (full support)
- Firefox / Safari: graceful degradation (bar is hidden)

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to `ease-*` convention before merging
