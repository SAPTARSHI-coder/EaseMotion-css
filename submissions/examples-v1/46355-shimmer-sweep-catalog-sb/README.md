# Shimmer Sweep Tooltip - Product Catalog Layouts

A CSS tooltip component with elegant shimmer sweep animation designed for product catalog pages.

## Files

- `demo.html` - Demo page showing product catalog with tooltips
- `style.css` - Tooltip styles and animations

## Usage

Open `demo.html` in a browser and hover over product action buttons to see the shimmer sweep tooltip animation.

## Features

### Shimmer Sweep Animation
- Coral/red gradient sweep effect
- Bouncy entrance animation
- Smooth infinite loop

### Product Catalog Components
- Product cards with image placeholders
- Action buttons (wishlist, quick view)
- Add to cart button with tooltip
- Filter bar with tooltips
- New product badge

### Design System
- Clean product card design
- Coral accent color for actions
- Subtle shadows and rounded corners

## Classes

| Class | Description |
|-------|-------------|
| `ease-shimmer-tooltip-cat-sb` | Product catalog shimmer tooltip |
| `ease-action-btn-sb` | Product action button |
| `ease-add-cart-sb` | Add to cart button |
| `ease-filter-btn-sb` | Filter bar button |
| `product-card` | Product card container |
| `product-badge` | New/featured badge |

## Usage

Add `data-tooltip="Your text"` attribute to any element with `ease-shimmer-tooltip-cat-sb` class:

```html
<button class="ease-shimmer-tooltip-cat-sb" data-tooltip="Add to cart">
  Add to Cart
</button>
```

Closes #46355
