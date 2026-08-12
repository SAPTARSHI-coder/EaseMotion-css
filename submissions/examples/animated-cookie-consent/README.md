# Animated Cookie Consent Banner

A clean, modern, and fully responsive **Cookie Consent Banner** that smoothly slides up from the bottom of the viewport. This example demonstrates how to use **EaseMotion CSS** to create a non-intrusive, polished entrance animation combined with interactive button states, turning a legal requirement into a smooth user experience.

## 🚀 Features

- **Smooth Slide-Up Entrance**: Uses `ease-slide-up` to elegantly introduce the banner without jarring the user.
- **Staggered Content Load**: The text and buttons fade in sequentially using `ease-fade-in`, `ease-fade-in-up`, and `ease-delay-*` for a premium feel.
- **Continuous Icon Animation**: Uses `ease-pulse` on the cookie emoji to draw the eye subtly.
- **Interactive Buttons**: Uses `ease-hover-grow` on the action buttons and close icon for satisfying tactile feedback.
- **Fully Responsive**: On mobile devices, the layout gracefully stacks vertically, and the buttons expand to full width for easy tapping.
- **Accessible**: Includes `aria-label` on the close button for screen readers.

## 📂 File Structure

```text
submissions/examples/animated-cookie-consent/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, fixed positioning, and responsive behavior
└── README.md    # Documentation