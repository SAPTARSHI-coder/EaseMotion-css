# Animated Breadcrumb Navigation

A clean, modern, and fully responsive **Breadcrumb Navigation Component** that shows users their location within a website's hierarchy. This example demonstrates how to combine **EaseMotion CSS** for smooth entrance animations, interactive hover effects, and subtle separator transitions to create an elegant, user-friendly navigation component.

## 🚀 Features

- **Staggered Item Entrances**: Each breadcrumb item and separator fades in sequentially using `ease-fade-in-right` and `ease-delay-*` for a cascading load effect.
- **Interactive Hover States**: Breadcrumb links smoothly change background color and text color on hover using `ease-hover-grow`.
- **Animated Separators**: Separator arrows subtly shift right when the preceding item is hovered.
- **Icon Support**: Optional emoji icons for each breadcrumb level for visual clarity.
- **Current Page Indicator**: The current page is visually distinguished with bold text and no link styling.
- **Multiple Style Variations**: Includes three different breadcrumb styles (default, with background, minimal).
- **Accessible Markup**: Uses semantic `<nav>` and `<ol>` elements with proper `aria-label`.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted sizing and spacing.

## 📂 File Structure

```text
submissions/examples/animated-breadcrumb-navigation/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for breadcrumb styling, hover effects, and responsive behavior
└── README.md    # Documentation