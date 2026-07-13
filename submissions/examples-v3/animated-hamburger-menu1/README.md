# Animated Hamburger Navigation Menu

A clean, modern, and fully responsive **Hamburger Navigation Menu** with smooth slide-in animations. This example demonstrates how to combine **EaseMotion CSS** for staggered menu item entrances and smooth panel sliding with a pure CSS hamburger-to-X icon transformation, creating a polished mobile navigation experience without JavaScript.

## 🚀 Features

- **Smooth Panel Slide-In**: Uses `ease-slide-in-right` to elegantly introduce the mobile menu from the right side of the screen.
- **Staggered Menu Items**: Each menu item fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a premium, cascading effect.
- **Animated Hamburger Icon**: The three hamburger lines smoothly transform into an X when the menu is opened using pure CSS transitions.
- **Fade-In Overlay**: A dark overlay fades in behind the menu to focus attention and can be clicked to close the menu.
- **Interactive Hover States**: Uses `ease-hover-grow` on desktop navigation links for tactile feedback.
- **Fully Responsive**: The desktop menu is hidden on mobile, and the hamburger icon appears instead.
- **Accessible**: Includes `aria-label` on the hamburger button for screen readers.

## 📂 File Structure

```text
submissions/examples/animated-hamburger-menu/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, hamburger transformation, and menu panel
└── README.md    # Documentation