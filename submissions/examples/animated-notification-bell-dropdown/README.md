# Animated Notification Bell & Dropdown

A clean, modern, and fully responsive **Notification Bell & Dropdown Panel** perfect for application headers and dashboards. This example demonstrates how to combine **EaseMotion CSS** for bouncy badge entrances, staggered list reveals, and smooth hover transitions to create a highly polished notification center.

## 🚀 Features

- **Bouncy Notification Badge**: The unread count badge uses `ease-bounce-in` to playfully pop into view when new notifications arrive.
- **Bell Ring Animation**: Hovering over the bell triggers a custom CSS ringing animation to draw attention.
- **Smooth Panel Transition**: The dropdown panel smoothly scales and fades in using CSS transitions.
- **Staggered List Entrances**: Each notification item fades in sequentially using `ease-fade-in-up` and `ease-delay-*` when the panel is opened.
- **Interactive Hover States**: Uses `ease-hover-grow` on notification items for satisfying tactile feedback.
- **Unread Indicators**: Clear visual distinction for unread items with a subtle background tint and an accent-colored dot.
- **Mark as Read Functionality**: Clicking an item or "Mark all as read" smoothly updates the UI and hides the badge.
- **Fully Responsive**: On mobile devices, the panel transforms into a bottom sheet that slides up from the bottom of the screen.

## 📂 File Structure

```text
submissions/examples/animated-notification-bell-dropdown/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for layout, panel transitions, and responsive behavior
└── README.md    # Documentation