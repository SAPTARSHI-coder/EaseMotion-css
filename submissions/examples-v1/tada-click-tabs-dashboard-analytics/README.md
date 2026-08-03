# Tada-Click Tabs for Dashboard Analytics

Issue: #50199

## Overview

A responsive pure CSS Tada-Click animated tabs component designed for Dashboard Analytics interfaces.

## Features

- Pure HTML & CSS
- Responsive layout
- Keyboard accessible
- No JavaScript
- Customizable CSS variables
- Smooth Tada-Click animation

## Files

- demo.html
- style.css

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="tabs">
    <button class="tab active">Overview</button>
    <button class="tab">Reports</button>
    <button class="tab">Revenue</button>
    <button class="tab">Settings</button>
</div>
```

## Customization

Modify CSS variables:

```css
:root{
    --duration:.55s;
    --ease:ease;
    --scale:1.08;
    --primary:#2563eb;
}
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari