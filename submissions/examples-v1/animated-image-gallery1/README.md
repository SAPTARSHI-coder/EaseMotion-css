# Animated Image Gallery with Lightbox

A clean, modern, and fully responsive **Image Gallery Component** with an elegant lightbox modal. This example demonstrates how to combine **EaseMotion CSS** for staggered grid entrances, smooth hover zoom effects, and seamless lightbox transitions to create an engaging visual showcase.

## 🚀 Features

- **Staggered Grid Entrances**: Gallery items fade in sequentially using `ease-fade-in-up` and `ease-delay-*` for a cascading load effect.
- **Interactive Hover Effects**: Images scale up smoothly with an overlay and zoom icon using `ease-hover-grow`.
- **Smooth Lightbox Transition**: The lightbox modal uses `ease-zoom-in` for an elegant entrance animation.
- **Keyboard Navigation**: Arrow keys (← →) navigate between images, ESC closes the lightbox.
- **Image Counter**: Displays current image position (e.g., "3 / 6") for context.
- **Responsive Grid**: Adapts from 3 columns to 2 columns to a single column based on screen size.
- **Gradient Placeholders**: Uses CSS gradients to simulate images (easily replaceable with actual images).
- **Accessible**: Includes proper `aria-label` attributes for screen readers.

## 📂 File Structure

```text
submissions/examples/animated-image-gallery/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for gallery layout, lightbox, and responsive behavior
└── README.md    # Documentation