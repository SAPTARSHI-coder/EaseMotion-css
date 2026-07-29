# CSS Micro Shake Tabs – Glassmorphism UI Layout

## Issue

Closes #50158

## Description

A pure HTML and CSS tab component with a Glassmorphism design and subtle Micro Shake animation for interactive tab transitions.

## Features

- Pure HTML & CSS
- Glassmorphism design
- Responsive layout
- Keyboard accessible
- CSS custom properties
- No JavaScript

## Files

- demo.html
- style.css

## Usage

```html
<link rel="stylesheet" href="style.css">
```

```html
<div class="tabs">
  <button class="tab active">Home</button>
  <button class="tab">Services</button>
  <button class="tab">Portfolio</button>
</div>
```

## Customization

```css
:root{
  --primary:#00bcd4;
  --duration:.35s;
  --radius:16px;
}
```