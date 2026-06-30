# Immersive 3D Flipbook Showcase

Issue: [#10720](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/10720)

Built for EaseMotion CSS — a lightweight CSS framework focused on reusable animations, interactive effects, and human-readable class naming.

## Overview

A CSS-only 3D Flipbook component that simulates page-turning interactions using perspective, rotateY transforms, and dual-sided card layouts.

Inspired by digital catalogs, portfolios, interactive brochures, and product showcases.

## Features

- Pure HTML and CSS
- 3D perspective container
- RotateY page turning effect
- Dual-sided page design
- Backface visibility handling
- Responsive layout
- Hover-triggered interactions
- Book-style presentation
- Modern shadows and depth effects

## Usage

```html
<div class="flipbook">
  <div class="page">
    <div class="page-front">Front</div>

    <div class="page-back">Back</div>
  </div>
</div>
```

## Main Classes

```css
.flipbook
.page
.page-front
.page-back
```

## Key CSS Features

```css
perspective: 1200px;
transform-style: preserve-3d;
rotateY(-180deg);
backface-visibility: hidden;
```

## Why It Fits EaseMotion CSS

- Animation-first interaction
- Human-readable class names
- Reusable UI component
- Modern visual design
- Portfolio and catalog use cases
- Demonstrates advanced CSS transforms

## Files

- demo.html
- style.css
- README.md
