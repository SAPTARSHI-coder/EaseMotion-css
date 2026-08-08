# CSS 3D Flip Carousel – Modern SaaS

A pure CSS animated carousel featuring a smooth 3D flip interaction designed for modern SaaS interfaces.

## ✨ Features

- Pure CSS
- 3D flip animation
- Responsive layout
- Keyboard accessible
- CSS custom properties
- No JavaScript required

## Usage

```html
<div class="carousel">
  <div class="card">
    <div class="card-inner">
      <div class="front">Front</div>
      <div class="back">Back</div>
    </div>
  </div>
</div>
```

## Custom Properties

```css
:root{
  --flip-duration:.7s;
  --flip-easing:cubic-bezier(.22,1,.36,1);
  --card-width:220px;
  --card-height:280px;
}
```

## Technologies

- HTML5
- CSS3

## Why EaseMotion CSS?

This component demonstrates a reusable animation-first 3D flip carousel using only CSS. It is lightweight, accessible, responsive, and easily customizable through CSS variables.

## Issue

Implemented for **Issue #50449 – CSS 3D Flip Carousel for Modern SaaS Layouts**.