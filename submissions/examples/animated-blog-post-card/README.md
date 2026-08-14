# Animated Blog Post Cards

A clean, modern, and fully responsive **Blog Post Card Grid** perfect for content websites, portfolios, and documentation. This example demonstrates how to combine **EaseMotion CSS** for staggered card entrances and bouncy badges with custom CSS for image zooming and a sliding "Read More" arrow.

## 🚀 Features

- **Staggered Grid Entrance**: Uses `ease-fade-in-up` combined with `ease-delay-*` classes so each card and its internal text elements cascade in sequentially on page load.
- **Bouncy Category Badges**: The category tags use `ease-bounce-in` to playfully pop into view over the image.
- **Smooth Image Zoom**: The card image smoothly scales up when hovering over the card using custom CSS transitions.
- **Sliding "Read More" Arrow**: The arrow next to the "Read Article" link smoothly slides to the right when hovered, encouraging clicks.
- **Dynamic Title Color**: The card title changes to the accent color when the card is hovered.
- **Fully Responsive**: The grid uses `auto-fit` to seamlessly adapt from 3 columns on desktop to a single column on mobile.

## 📂 File Structure

```text
submissions/examples/animated-blog-post-card/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, hover effects, and responsive behavior
└── README.md    # Documentation