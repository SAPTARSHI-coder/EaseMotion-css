# Content Visibility Optimization

## What does it do?
A pure-CSS demo showing how `content-visibility` and `contain-intrinsic-size` improve rendering performance by skipping off-screen content.

## Features
- **content-visibility: auto** — skip rendering until element is near the viewport
- **contain-intrinsic-size** — reserve space to prevent layout shift
- **Visual comparison** — normal content vs optimized content

## Usage
```css
.lazy-section {
  content-visibility: auto;
  contain-intrinsic-size: 240px;
}
```

## Classes
- `.card-plain` — always rendered (no optimization)
- `.card-optimized` — lazy rendered with content-visibility

## Browser Support
- `content-visibility` — Chrome 85+, Edge 85+
- `contain-intrinsic-size` — Chrome 95+, Edge 95+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser. Scroll to see lazy rendering in action.
