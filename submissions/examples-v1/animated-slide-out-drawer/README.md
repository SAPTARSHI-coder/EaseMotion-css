# Animated Slide-Out Drawer / Sidebar Panel

A sleek, modern, and fully responsive **Slide-Out Drawer Component** perfect for mobile navigation, settings panels, shopping carts, and notification centers. This example demonstrates how to combine **EaseMotion CSS** for smooth panel transitions, staggered menu item reveals, and bouncy notification badges to create a polished, app-like navigation experience.

## 🚀 Features

- **Smooth Panel Transition**: The drawer slides in from the left using a smooth cubic-bezier CSS transition, while the backdrop fades in with a subtle blur effect.
- **Staggered Menu Reveals**: Each navigation item fades in sequentially from the left using `ease-fade-in-left` and `ease-delay-*` every time the drawer is opened.
- **Bouncy Notification Badges**: Badges (like "3" or "New") pop into view using `ease-bounce-in` with staggered delays to draw attention.
- **Interactive Hover States**: Menu items smoothly change background and text color on hover using `ease-hover-grow`.
- **User Profile Footer**: A dedicated footer section displaying the logged-in user's avatar, name, and email.
- **Multiple Close Methods**: Closes via the "X" button, clicking the backdrop overlay, or pressing the `ESC` key.
- **Fully Responsive**: On very small screens (under 400px), the drawer expands to full width for a better mobile UX.

## 📂 File Structure

```text
submissions/examples/animated-slide-out-drawer/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for drawer layout, transitions, and responsive behavior
└── README.md    # Documentation