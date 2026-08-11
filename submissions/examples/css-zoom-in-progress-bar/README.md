# CSS Zoom-In Progress Bar

## Overview

A minimalist CSS progress bar designed for modern technology layouts.

The component uses a smooth zoom-in animation to make the progress fill
appear to expand from the left edge.

The implementation uses only HTML and CSS with no JavaScript or
external UI frameworks.

## Features

- Pure HTML and CSS
- Smooth zoom-in progress animation
- Animated highlight effect
- CSS custom properties
- Responsive desktop, tablet, and mobile layout
- Accessible progressbar semantics
- `prefers-reduced-motion` support
- No external dependencies

## Files

- `demo.html` — Self-contained demonstration
- `style.css` — Progress bar styling and animations
- `README.md` — Documentation

## Usage

```html
<div
    class="progress-bar"
    role="progressbar"
    aria-label="Upload progress"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="68"
>
    <div class="progress-fill"></div>
</div>