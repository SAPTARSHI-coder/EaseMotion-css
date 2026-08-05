# CSS Zoom-In Carousel – Dashboard Analytics

A pure CSS animated carousel featuring a smooth zoom-in interaction for dashboard analytics interfaces.

## Features

- Pure CSS
- Smooth zoom-in animation
- Responsive layout
- Keyboard accessible
- CSS custom properties
- No JavaScript required

## Usage

```html
<div class="carousel">
  <div class="card active">Revenue</div>
  <div class="card">Users</div>
  <div class="card">Growth</div>
</div>
```

## Custom Properties

```css
:root{
  --zoom-scale:1.1;
  --duration:.35s;
  --easing:cubic-bezier(.22,1,.36,1);
}
```

## Technologies

- HTML5
- CSS3

## Why EaseMotion CSS?

This component provides a lightweight and reusable dashboard analytics carousel using only HTML and CSS. It is responsive, accessible, customizable through CSS variables, and requires no JavaScript.

## Issue

Implemented for **Issue #50435 – CSS Zoom-In Carousel for Dashboard Analytics Layouts**.