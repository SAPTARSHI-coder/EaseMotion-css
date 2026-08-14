# CSS 3D-Flip Modal for Product Catalog Layouts

A modern **pure HTML & CSS** 3D Flip Modal component for product catalog layouts. The modal opens smoothly using only CSS and flips in 3D to reveal additional product details, making it ideal for e-commerce showcases and product previews.

## Features

- Pure HTML5 & CSS3
- No JavaScript required
- Smooth 3D flip modal animation
- Responsive design
- Modern product card layout
- CSS custom properties for easy customization
- Accessible structure
- Supports `prefers-reduced-motion`

## Folder Structure

```
submissions/
└── examples/
    └── 62228-3d-flip-modal-product-catalog/
        ├── demo.html
        ├── style.css
        └── README.md
```

## CSS Custom Properties

```css
:root{
  --primary:#4f46e5;
  --secondary:#8b5cf6;
  --accent:#06b6d4;

  --bg:#eef2ff;
  --card:#ffffff;

  --text:#1f2937;
  --muted:#6b7280;

  --radius:24px;
}
```

## Usage

1. Open `demo.html`
2. Click any product card.
3. The modal opens with a smooth 3D flip animation.
4. Close the modal using the Close button.

## Responsive

- Desktop
- Tablet
- Mobile

## Accessibility

- Semantic HTML
- Keyboard-friendly checkbox modal
- Reduced motion support using:

```css
@media (prefers-reduced-motion: reduce)
```

## Technologies

- HTML5
- CSS3
- Flexbox
- CSS Grid
- CSS Transforms
- CSS Perspective
- CSS Animations