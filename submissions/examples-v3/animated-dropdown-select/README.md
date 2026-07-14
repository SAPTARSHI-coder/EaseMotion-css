# Animated Dropdown Select Component

A clean, modern, and fully responsive **Dropdown Select Component** with smooth animations for opening, option highlighting, and selection. This example demonstrates how to combine **EaseMotion CSS** for staggered option entrances, smooth hover effects, and animated selection indicators to create a polished form control.

## 🚀 Features

- **Smooth Dropdown Opening**: Uses `ease-fade-in-down` to elegantly reveal the dropdown menu with a fade and slide effect.
- **Staggered Option Entrances**: Each option fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a cascading load effect.
- **Interactive Hover States**: Options smoothly change background color on hover for tactile feedback.
- **Animated Selection Indicator**: Selected options display a checkmark with a smooth opacity transition.
- **Search Functionality**: Includes a search input to filter options (with smooth focus states).
- **Multi-Select Support**: Demonstrates both single-select and multi-select variants with tag display.
- **Accessible**: Includes proper ARIA attributes (`aria-expanded`, `aria-haspopup`, `role="listbox"`, `role="option"`).
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted spacing and font sizes.

## 📂 File Structure

```text
submissions/examples/animated-dropdown-select/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for layout, hover effects, and animations
└── README.md    # Documentation