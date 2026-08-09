# CSS Fade-In Feature Grid

A modern responsive Feature Grid using pure HTML and CSS with smooth fade-in entrance animations.

## Features

- Pure HTML & CSS
- Responsive Grid
- Fade-In Entrance Animation
- CSS Custom Properties
- Accessible
- Supports prefers-reduced-motion
- Easy to customize

## Folder Structure

```
submissions/examples/fade-in-feature-grid/
```

## Files

- demo.html
- style.css
- README.md

## Usage

```html
<link rel="stylesheet" href="style.css">
```

Example:

```html
<div class="feature-grid">
    <div class="feature-card">
        <h2>Feature</h2>
        <p>Description</p>
    </div>
</div>
```

## CSS Variables

```css
:root{
    --primary:#3b82f6;
    --card:#1e293b;
    --radius:18px;
    --duration:.8s;
}
```

## Accessibility

Includes support for `prefers-reduced-motion` to minimize animations for users who prefer reduced motion.