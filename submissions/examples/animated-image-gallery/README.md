# Animated Image Gallery with Lightbox

A clean, modern, and fully responsive **Image Gallery** with an interactive lightbox modal. This example demonstrates how to combine **EaseMotion CSS** for staggered grid entrances, smooth hover effects, and a pure CSS lightbox with zoom animations, creating a polished portfolio showcase without JavaScript.

## 🚀 Features

- **Staggered Grid Entrance**: Uses `ease-fade-in-up` combined with `ease-delay-*` classes so each image card cascades in sequentially on page load.
- **Interactive Hover Effects**: Images scale up and display an overlay with a zoom icon and title using `ease-hover-grow` and custom CSS transitions.
- **Pure CSS Lightbox**: Clicking an image opens a full-screen modal using the checkbox hack (zero JavaScript required).
- **Smooth Modal Animation**: The lightbox uses `ease-zoom-in` for a polished entrance effect.
- **Accessible Close Button**: Uses `ease-hover-grow` on the close button with `aria-label` for screen readers.
- **Responsive Grid**: Uses CSS Grid with `auto-fit` to automatically adjust columns based on screen size.
- **Placeholder Gradients**: Uses CSS gradients to simulate images (easily replaceable with real images).

## 📂 File Structure

```text
submissions/examples/animated-image-gallery/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for grid layout, hover overlays, and lightbox
└── README.md    # Documentation