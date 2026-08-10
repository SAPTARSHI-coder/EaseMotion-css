# CSS Fade-In Modal for Product Catalog Layouts

A modern **pure HTML & CSS Fade-In Modal** component for Product Catalog layouts. This example demonstrates elegant product cards that open a centered modal using only HTML and CSS, featuring smooth fade animations and responsive design.

## Features

- Pure HTML5 & CSS3
- No JavaScript required
- Smooth fade-in modal animation
- Responsive product grid
- CSS custom properties
- Accessible checkbox-based modal
- Mobile-friendly layout
- Supports `prefers-reduced-motion`

## Folder Structure

```
submissions/
└── examples/
    └── 62224-fade-in-modal-product-catalog/
        ├── demo.html
        ├── style.css
        └── README.md
```

## CSS Variables

```css
:root{
    --primary:#4f46e5;
    --secondary:#7c3aed;
    --accent:#06b6d4;
    --bg:#eef2ff;
    --card:#ffffff;
    --text:#1f2937;
    --radius:22px;
}
```

## Usage

1. Open `demo.html`
2. Click any product card.
3. The modal smoothly fades into view.
4. Close using the × button.

## Responsive

- Desktop
- Tablet
- Mobile

## Accessibility

Supports users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce)
```

## Technologies

- HTML5
- CSS3
- CSS Grid
- CSS Flexbox
- CSS Animations
- CSS Variables
- CSS Transforms