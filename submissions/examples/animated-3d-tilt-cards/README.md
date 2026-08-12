# Animated 3D Tilt Cards

A visually impressive, fully responsive **3D Tilt Card Component** that responds to mouse movement with perspective transforms. This example demonstrates how to combine **EaseMotion CSS** for smooth entrance animations with advanced CSS techniques and minimal JavaScript for interactive 3D hover effects and dynamic shine/glare effects.

## 🚀 Features

- **Staggered Card Entrances**: Uses `ease-fade-in-up` combined with `ease-delay-*` classes so each card cascades in sequentially on page load.
- **Interactive 3D Tilt Effect**: Cards respond to mouse movement with smooth 3D perspective transforms, creating a parallax/tilt effect.
- **Dynamic Shine/Glare**: A radial gradient follows the mouse cursor across the card, simulating a light reflection effect.
- **Layered Depth**: Different card elements (icon, title, description) are positioned at different Z-depths using `translateZ()` for a true 3D parallax effect.
- **Smooth Transitions**: CSS transitions ensure smooth movement when the mouse enters and leaves the card.
- **Dark Theme Aesthetic**: Professional dark mode design with gradient accents and subtle shadows.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted sizing and spacing.

## 📂 File Structure

```text
submissions/examples/animated-3d-tilt-cards/
├── demo.html    # HTML structure, EaseMotion utility classes, and tilt JavaScript
├── style.css    # Custom CSS for 3D transforms, shine effect, and layout
└── README.md    # Documentation