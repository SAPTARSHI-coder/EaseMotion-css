# CSS Scrollable Tab Overflow

## Description

A responsive tab navigation component that automatically becomes horizontally scrollable when the number of tabs exceeds the available container width. Built entirely with CSS and designed to work smoothly across desktop and mobile devices.

## Features

- Pure CSS implementation
- Horizontal scrolling for overflow tabs
- Responsive layout
- Keyboard accessible buttons
- Smooth hover and focus effects
- Custom scrollbar styling
- Light and dark mode support
- No JavaScript required

## Usage

### HTML

```html
<nav class="tab-container">
  <button class="tab active">Home</button>
  <button class="tab">Products</button>
  <button class="tab">Services</button>
  <button class="tab">Documentation</button>
</nav>
```

## Customization

Update the CSS variables:

```css
:root {
  --primary: #2563eb;
  --bg: #f8fafc;
  --card: #ffffff;
}
```

## Why it fits EaseMotion CSS

This component provides a reusable navigation pattern commonly used in dashboards, documentation sites, and responsive web applications. It showcases smooth CSS interactions, accessibility-friendly design, and responsive overflow handling while remaining lightweight and dependency-free.