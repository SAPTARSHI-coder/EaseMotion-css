# Skeleton Loading Utilities

## Overview

Skeleton Loading Utilities provide a lightweight, CSS-only solution for building loading placeholders and skeleton screens. These utilities display animated shimmer effects while content loads, improving perceived performance and user experience.

## Available classes

- `ease-skeleton` — base skeleton element for generic content placeholders
- `ease-skeleton-text` — stacked text skeleton with configurable line widths
- `ease-skeleton-avatar` — circular skeleton perfect for profile images
- `ease-skeleton-card` — pre-styled card container for skeleton layouts

## Installation

Copy the `style.css` file into your project and link it in your HTML:

```html
<link rel="stylesheet" href="style.css" />
```

## Usage examples

### Basic skeleton

```html
<div class="ease-skeleton" style="height: 24px;"></div>
```

### Text skeleton

```html
<div class="ease-skeleton-text"></div>
<div class="ease-skeleton-text short"></div>
<div class="ease-skeleton-text medium"></div>
```

### Avatar skeleton

```html
<div class="ease-skeleton-avatar"></div>
```

### Card skeleton

```html
<div class="ease-skeleton-card">
  <div class="card-image"></div>
  <div class="card-header">
    <div class="card-avatar"></div>
    <div class="card-text">
      <div class="card-title"></div>
      <div class="card-subtitle"></div>
    </div>
  </div>
  <div class="ease-skeleton-text"></div>
</div>
```

## Customization options

Modify these CSS variables to customize appearance:

- `--skeleton-bg` — background color for the skeleton elements
- `--skeleton-shimmer-from` — shimmer gradient start color
- `--skeleton-shimmer-to` — shimmer gradient end color
- `--skeleton-radius` — border radius for skeletons
- `--skeleton-duration` — animation duration (default: 1.4s)
- `--skeleton-surface` — surface background for card containers
- `--skeleton-shadow` — shadow effect for cards

## Accessibility notes

- Skeletons are decorative and use appropriate semantic markup for actual content
- Respects `prefers-reduced-motion: reduce` by removing animations
- Uses sufficient contrast for visibility in both light and dark modes
- Does not contain interactive elements

## Browser support

- Chrome
- Firefox
- Edge
- Safari

This implementation is CSS-only with no JavaScript dependencies. It uses standard CSS animations and gradient techniques supported across all modern browsers.
