# Animated Skeleton Loader

A modern animated skeleton loader component built with pure HTML and CSS. It is useful for showing loading states in cards, dashboards, feeds, and content sections.

## Features

- Pure HTML and CSS implementation.
- Smooth shimmer loading animation.
- Skeleton card layout with image, title, text, avatar, and button placeholders.
- Responsive grid layout.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<article class="skeleton-card">
  <div class="skeleton skeleton-image"></div>

  <div class="skeleton-body">
    <div class="skeleton skeleton-title"></div>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton skeleton-text short"></div>
  </div>
</article>