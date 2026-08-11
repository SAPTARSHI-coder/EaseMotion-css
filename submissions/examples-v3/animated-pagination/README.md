# Animated Pagination Component

A clean, modern, and fully responsive **Pagination Component** with smooth transitions and animated active indicators. This example demonstrates how to combine **EaseMotion CSS** for staggered page number entrances, smooth hover effects, and a shimmering active page indicator to create a polished navigation experience.

## 🚀 Features

- **Staggered Page Number Entrances**: Each page number fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a cascading load effect.
- **Animated Active Indicator**: The active page features a shimmering gradient animation that continuously moves across the button.
- **Interactive Hover States**: Page numbers lift on hover with accent-colored borders and enhanced shadows using `ease-hover-grow`.
- **Arrow Animations**: Previous/Next button arrows smoothly translate in their respective directions on hover.
- **Responsive Design**: On mobile, button text is hidden and pagination adapts to smaller screens with adjusted sizing.
- **Accessible**: Includes proper `aria-label` attributes for screen readers.
- **Ellipsis Support**: Shows "..." for truncated page ranges with proper styling.

## 📂 File Structure

```text
submissions/examples/animated-pagination/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, hover effects, and active indicator
└── README.md    # Documentation