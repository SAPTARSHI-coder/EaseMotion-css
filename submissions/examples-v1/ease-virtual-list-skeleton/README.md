# Virtual List Skeleton

## What does it do?
Animated shimmer placeholders that mimic a virtual-scrolled list loading state — pure CSS, no JavaScript.

## Features
- Avatar circle + two text line skeleton per row
- Sweeping shimmer gradient across all elements
- Staggered fade-in via `animation-delay`
- Pure CSS, no JavaScript

## Usage
```html
<div class="skeleton-list">
  <div class="skeleton-row">
    <div class="sk-avatar"></div>
    <div class="sk-lines">
      <div class="sk-line w-60"></div>
      <div class="sk-line w-40"></div>
    </div>
  </div>
  <!-- more rows with staggered delay -->
</div>
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
