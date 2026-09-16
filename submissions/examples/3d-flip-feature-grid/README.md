# CSS 3D Flip Feature Grid

A responsive Feature Grid with smooth 3D flip animation built using pure HTML and CSS.

## Features

- Pure HTML & CSS
- Responsive Grid Layout
- 3D Flip Hover Animation
- CSS Custom Properties
- Accessible
- Supports prefers-reduced-motion
- Easy to customize

## Folder

```
submissions/examples/3d-flip-feature-grid/
```

## Files

- demo.html
- style.css
- README.md

## Usage

```html
<link rel="stylesheet" href="style.css">
```

Use the card structure:

```html
<div class="card">
    <div class="card-inner">
        <div class="front">...</div>
        <div class="back">...</div>
    </div>
</div>
```

## Custom Properties

```css
:root{
    --front:#2563eb;
    --back:#14b8a6;
    --radius:18px;
    --duration:.7s;
}
```

## Accessibility

Supports `prefers-reduced-motion` for users who prefer minimal animations.