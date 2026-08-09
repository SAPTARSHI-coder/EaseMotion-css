# Swing Hover Tabs – Accessible Web Layouts

Issue: #50194

## Overview

A responsive and accessible Swing Hover Tabs component created using only HTML and CSS.

## Features

- Pure HTML & CSS
- Swing hover animation
- Responsive layout
- Keyboard accessible
- CSS Custom Properties
- No JavaScript required

## Files

- demo.html
- style.css
- README.md

## Customization

Modify the CSS variables:

```css
:root{
  --primary:#2563eb;
  --duration:.4s;
  --ease:ease;
  --scale:1.08;
}
```

## Usage

Link the stylesheet.

```html
<link rel="stylesheet" href="style.css">
```

Use the component.

```html
<div class="tabs">
  <button class="tab active">Home</button>
  <button class="tab">Features</button>
  <button class="tab">Pricing</button>
</div>
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

Built for **EaseMotion CSS** and **GSSoC 2026**.