# CSS Micro Shake Tabs – Neumorphic Soft Layout

## Issue

Closes #50161

## Description

A pure CSS tab component featuring a subtle Micro Shake animation with a soft neumorphic design aesthetic.

## Features

- Pure HTML & CSS
- Responsive design
- Keyboard accessible
- CSS custom properties
- Neumorphic UI style
- No JavaScript required

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
  <button class="tab">Projects</button>
  <button class="tab">Gallery</button>
</div>
```

## Customization

```css
:root{
  --primary:#4f46e5;
  --duration:.35s;
  --radius:16px;
}
```