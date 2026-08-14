# Animated E-commerce Product Showcase

A polished **Product Showcase page** built with **EaseMotion CSS**. Features a product gallery with hover zoom, interactive color/size selectors, rating stars, animated add-to-cart button, and related products grid.

## ✨ Features

- **🖼️ Product Gallery**: Main image with hover zoom effect and thumbnail selector
- **⭐ Rating Display**: Star ratings with half-star support and review count
- **🎨 Color Selector**: Interactive swatches with active state ring
- **📏 Size/Edition Selector**: Toggle buttons with smooth transitions
- **🛒 Add to Cart**: Animated button with icon and quantity selector
- **💝 Wishlist Toggle**: Heart button with hover color change
- **🏷️ Product Badges**: Best Seller, New, and Sale badges
- **📦 Related Products**: 4-card grid with hover image zoom
- **🎬 Staggered Entrance**: All sections slide up sequentially
- **📱 Fully Responsive**: 2-column → 1-column layout adaptation

## 🧩 EaseMotion Classes Used

| Class | Purpose |
|-------|---------|
| `ease-fade-in` | Fades in the main page and footer |
| `ease-slide-up` | Slides sections up on entrance |
| `ease-delay-100` to `ease-delay-900` | Creates cascading staggered sequence |
| `ease-card` | Base card structure for related products |
| `ease-hover-lift` | Lift effect on cards and image container |
| `ease-hover-grow` | Scale effect on buttons and thumbnails |
| `ease-grid` + `ease-grid-cols-*` | Responsive grid layouts |
| `ease-gap-4`, `ease-gap-6` | Spacing between grid items |
| `ease-btn` + `ease-btn-primary` | Styled add to cart button |

## 🚀 How to Use

1. Open `demo.html` in any modern browser
2. Watch all product sections slide in with staggered animations
3. Hover over the main image to see the zoom effect
4. Click color swatches and size buttons to see active states
5. Hover over related product cards to see image zoom and lift
6. Resize to mobile to see the responsive layout

## 🎨 Design Highlights

- **Light Theme**: Clean, modern e-commerce aesthetic
- **Image Hover Zoom**: Main and related product images scale on hover
- **Interactive Selectors**: Color swatches with ring effect, size buttons with fill
- **Gradient Background Accents**: Soft blurred color orbs
- **Badge System**: Multiple badge types (Best Seller, New, Sale)

## 🛠️ Technologies Used

- HTML5
- Custom CSS (Gradients, Transitions, CSS Grid)
- EaseMotion CSS (via CDN)