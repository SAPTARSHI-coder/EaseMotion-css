# CSS Micro Shake Tabs – Responsive Dashboard

## Issue

Closes #50162

## Description

A pure CSS responsive tab component with a subtle Micro Shake animation designed for responsive dashboard interfaces.

## Features

- Pure HTML & CSS
- Responsive layout
- Keyboard accessible
- CSS custom properties
- Lightweight
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
  <button class="tab active">Dashboard</button>
  <button class="tab">Analytics</button>
  <button class="tab">Reports</button>
</div>
```

## Customization

```css
:root{
  --primary:#2563eb;
  --duration:.35s;
  --radius:12px;
}
```