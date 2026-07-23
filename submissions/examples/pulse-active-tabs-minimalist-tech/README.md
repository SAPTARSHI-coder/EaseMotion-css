# Pulse-Active Tabs – Minimalist Tech Layout

**Issue:** #50174

## Overview

A pure CSS Pulse-Active Tabs component designed for modern Minimalist Tech interfaces with smooth pulse animation and clean styling.

## Features

- Pure CSS
- Pulse-active animation
- Responsive layout
- Keyboard accessible
- CSS custom properties
- Lightweight and reusable

## Files

```
demo.html
style.css
README.md
```

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="tabs">
    <button class="tab active">Overview</button>
    <button class="tab">Features</button>
    <button class="tab">Docs</button>
</div>
```

## Customization

Modify the CSS variables:

```css
:root{
  --primary:#2563eb;
  --duration:.3s;
  --radius:12px;
}
```

## Why EaseMotion CSS?

- Animation-first
- Human-readable class names
- No JavaScript
- Easy to customize
- Responsive and accessible