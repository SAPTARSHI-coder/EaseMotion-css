# Animated Toast Notifications

A clean, modern, and fully responsive **Toast Notification** system. This example demonstrates how to use **EaseMotion CSS** to create engaging entrance animations from multiple directions, combined with a custom CSS progress bar to indicate auto-dismissal.

## 🚀 Features

- **Directional Variety**: Showcases four different entrance animations (`ease-slide-in-right`, `ease-bounce-in`, `ease-fade-in-down`, `ease-slide-in-left`) to demonstrate the library's flexibility.
- **Staggered Load**: Uses `ease-delay-*` classes so the notifications pop in sequentially, simulating a real-world scenario.
- **Continuous Icon Animation**: Uses `ease-pulse` on the emojis to draw the user's eye to the notification.
- **Interactive Close Button**: Uses `ease-hover-grow` for a subtle, satisfying interaction when hovering over the dismiss button.
- **Auto-Dismiss Progress Bar**: A highly performant CSS `scaleX` animation shrinks the bottom border to indicate the toast will disappear.
- **Semantic & Accessible**: Includes `aria-label` on the close button for screen readers.

## 📂 File Structure

```text
submissions/examples/animated-toast-notifications/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, colors, and progress bar
└── README.md    # Documentation