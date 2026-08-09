# Zoom-In Card Grid

A responsive card grid featuring a smooth zoom-in hover animation using only HTML and CSS.

## Features

- Pure HTML & CSS
- Responsive CSS Grid
- Smooth zoom hover effect
- Hardware accelerated transforms
- Accessible with `prefers-reduced-motion`
- Easy customization using CSS variables

## Folder Structure

```
submissions/examples/zoom-in-card-grid/
```

## Files

- demo.html
- style.css
- README.md

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="zi-grid">
    <div class="zi-card">
        <h3>Card Title</h3>
        <p>Description</p>
    </div>
</div>
```

## CSS Variables

```css
--bg
--card
--primary
--text
--radius
--duration
```

## Accessibility

- Responsive layout
- Keyboard friendly structure
- Supports `prefers-reduced-motion`
- No JavaScript required

## Why EaseMotion CSS?

This component follows EaseMotion CSS principles by providing a lightweight, reusable, animation-first card grid built entirely with HTML and CSS.