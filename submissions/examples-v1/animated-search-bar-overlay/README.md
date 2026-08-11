# Animated Search Bar Overlay

A sleek, modern, and fully responsive **Search Bar Overlay** inspired by modern SaaS platforms and documentation sites. This example demonstrates how to combine **EaseMotion CSS** for smooth overlay transitions, bouncy tag entrances, and staggered list animations to create a polished, keyboard-friendly search interface.

## 🚀 Features

- **Smooth Overlay Transition**: Uses a blurred backdrop (`backdrop-filter: blur()`) with a smooth fade-in effect when opened.
- **Slide-Down Container**: The search modal uses `ease-slide-in-down` to elegantly drop into view.
- **Bouncy Recent Search Tags**: Tags use `ease-bounce-in` with staggered delays to playfully pop into view.
- **Staggered Quick Links**: The quick links list fades in sequentially using `ease-fade-in-left` and `ease-delay-*`.
- **Keyboard Shortcuts**: Fully functional with `⌘K` / `Ctrl+K` to open and `ESC` to close.
- **Interactive Hover States**: Uses `ease-hover-grow` on tags and list items for satisfying tactile feedback.
- **Keyboard Navigation Hints**: Footer displays navigation shortcuts (↑↓, ↵, ESC) for discoverability.
- **Fully Responsive**: Adapts gracefully to mobile screens by hiding unnecessary text and adjusting padding.

## 📂 File Structure

```text
submissions/examples/animated-search-bar-overlay/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for overlay, search layout, and responsive behavior
└── README.md    # Documentation