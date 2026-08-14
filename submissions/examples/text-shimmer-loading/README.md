# Text Shimmer Loading Animation

A skeleton-loading-style shimmer sweep that animates across text — perfect for indicating loading or fetching states inside text placeholders.

## Usage

​```html
<span class="text-shimmer">Loading your content...</span>
​```

For dark backgrounds:

​```html
<span class="text-shimmer-dark">Fetching latest updates...</span>
​```

For a slower sweep on longer text:

​```html
<span class="text-shimmer text-shimmer-slow">
  Please wait while we prepare your dashboard
</span>
​```

## Features

- Pure CSS — no JavaScript required
- Lightweight and reusable
- Works on any text element (`span`, `h1`–`h6`, `p`, etc.)
- Includes light and dark variants
- Adjustable speed via the `text-shimmer-slow` modifier
- Respects `prefers-reduced-motion` for accessibility

## Files

- `style.css` – shimmer animation implementation
- `demo.html` – working example with light, dark, and slow variants

## Why it fits EaseMotion CSS

Loading states are one of the most common UI patterns developers reimplement from scratch. A drop-in `text-shimmer` utility keeps the framework's promise of **human-readable, animation-first** class names — a developer immediately understands what `text-shimmer` does without reading docs.