# Animated Pure CSS Tabs

A clean, accessible, and fully responsive **Tabbed Interface** built entirely without JavaScript. This example demonstrates how to use the CSS radio-button hack to create smooth, animated tab switching, combined with **EaseMotion CSS** for beautiful staggered entrance animations.

## 🚀 Features

- **Zero JavaScript**: Fully interactive using only HTML and CSS (radio button hack).
- **Staggered Label Entrance**: Uses `ease-fade-in-up` and `ease-delay-*` so the tabs slide in sequentially on page load.
- **Smooth Panel Transitions**: Content panels fade and slide up smoothly when activated using CSS transitions.
- **Active State Indicator**: A sleek bottom border (or left border on mobile) highlights the active tab.
- **Fully Responsive**: On mobile devices, the tabs stack vertically, and the active indicator moves to the left side.
- **Accessible**: Uses semantic `<label>` tags linked to hidden inputs, ensuring keyboard navigation works perfectly.

## 📂 File Structure

```text
submissions/examples/animated-pure-css-tabs/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, radio hack, and transitions
└── README.md    # Documentation