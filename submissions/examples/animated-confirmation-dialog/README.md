# Animated Confirmation Dialog

A clean, modern, and fully responsive **Confirmation Dialog Component** with smooth entrance animations and backdrop effects. This example demonstrates how to combine **EaseMotion CSS** for smooth modal entrances, bouncy icon animations, and staggered content reveals to create a polished, non-intrusive confirmation experience.

## 🚀 Features

- **Smooth Modal Entrance**: The dialog box uses `ease-zoom-in` to elegantly scale into view.
- **Backdrop Fade**: The overlay backdrop uses `ease-fade-in` with blur effect for a modern look.
- **Bouncy Icon Animation**: The dialog icon uses `ease-bounce-in` to playfully pop into view.
- **Staggered Content Reveal**: Title, message, and buttons fade in sequentially using `ease-fade-in-up` and `ease-delay-*`.
- **Four Dialog Variations**: Delete (danger), Warning, Success, and Info dialogs with distinct colors and icons.
- **Interactive Hover States**: Uses `ease-hover-grow` on buttons for satisfying tactile feedback.
- **Multiple Close Methods**: Close on backdrop click, cancel button, confirm button, or ESC key.
- **Fully Responsive**: Adapts gracefully to mobile screens with stacked buttons on small devices.

## 📂 File Structure

```text
submissions/examples/animated-confirmation-dialog/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for dialog layout, backdrop, and responsive behavior
└── README.md    # Documentation