# Skeleton Screen Loader Component

A pure CSS skeleton screen loader component for simulating content loading states across cards, text blocks, and user avatars with an animated shimmer effect.

## Overview & Features
- **Zero JavaScript**: Pure CSS implementation using `@keyframes` and pseudo-elements.
- **Variations**: Includes `.ease-skeleton--text`, `.ease-skeleton--avatar`, and `.ease-skeleton--card`.
- **Shimmer Animation**: Smooth sliding linear-gradient shine effect.
- **Accessibility**: Built-in support for `prefers-reduced-motion` accessibility standards.
- **Customization Tokens**: Controlled via `--ease-skeleton-base`, `--ease-skeleton-shine`, and `--ease-skeleton-duration`.

## Usage Example
```html
<div class="ease-skeleton ease-skeleton--card"></div>
<div class="ease-skeleton ease-skeleton--avatar"></div>
<div class="ease-skeleton ease-skeleton--text"></div>