# Animated Context Menu (Right-Click Menu)

A sleek, modern, and fully responsive **Context Menu Component** perfect for desktop-like web applications, file managers, and advanced dashboards. This example demonstrates how to combine **EaseMotion CSS** for a smooth zoom-in entrance, staggered menu item reveals, and interactive hover states to create a polished, native-feeling menu experience.

## 🚀 Features

- **Smooth Zoom-In Entrance**: The menu container uses `ease-zoom-in` to elegantly scale into view at the cursor's location.
- **Staggered Item Reveals**: Each menu item and divider fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a cascading load effect every time the menu opens.
- **Dynamic Positioning**: JavaScript calculates the cursor position and ensures the menu never renders off-screen.
- **Interactive Hover States**: Menu items smoothly change background color on hover.
- **Keyboard Shortcuts & Icons**: Clean layout displaying icons, text, and keyboard shortcut hints.
- **Disabled States**: Support for disabled menu items with muted styling.
- **Multiple Close Methods**: Closes on click outside, pressing the `ESC` key, or selecting an item.
- **Mobile Fallback**: Includes a trigger button for touch/mobile devices where right-click doesn't exist.
- **Glassmorphism Design**: Frosted glass effect using `backdrop-filter` for a premium look.

## 📂 File Structure

```text
submissions/examples/animated-context-menu/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for menu styling, positioning, and responsive behavior
└── README.md    # Documentation