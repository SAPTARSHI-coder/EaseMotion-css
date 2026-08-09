# CSS Infinite Hexagonal Grid

## Overview

A pure CSS infinite hexagonal grid background created using layered
`linear-gradient()` functions.

The pattern creates a mathematical tessellated appearance without
requiring images, SVGs, JavaScript, canvas, or external dependencies.

## Features

- Pure CSS implementation
- Tessellated hexagonal grid pattern
- Layered linear gradients
- No JavaScript
- No external assets
- Responsive layout
- `prefers-reduced-motion` support

## Files

- `demo.html` — Self-contained demonstration page
- `style.css` — Hexagonal grid and page styling
- `README.md` — Documentation

## How It Works

The grid is generated using multiple angled CSS gradients layered
together.

The main pattern is created with:

```css
background:
    linear-gradient(...),
    linear-gradient(...),
    linear-gradient(...);