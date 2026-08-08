# Notification Center Dropdown

A modern, responsive, and accessible notification center dropdown component with unread/read states, category badges, and interactive functionality.

## Features

- **Bell Trigger**: Displays an animated unread count badge.
- **Dropdown Panel**: Smoothly animates in/out with backdrop blur effect support.
- **Unread/Read States**: Visually distinct styling for unread notifications, including an indicator dot and action buttons.
- **Category Badges**: Distinctly colored badges for different types of notifications (System, Alert, Message, Billing).
- **Mark as Read**: Mark individual notifications or all notifications as read.
- **Empty State**: Friendly graphic and message when there are no notifications.
- **Responsive**: Adapts to mobile devices (turns into a bottom-sheet like panel on smaller screens).
- **Accessible**: Keyboard navigation support (Esc to close), ARIA attributes for expanded states.

## Usage

Include `style.css` in your project and copy the HTML structure from `demo.html`.

### JavaScript Interaction
The `demo.html` file includes a lightweight Vanilla JS script to handle toggling the dropdown, marking items as read, and updating the unread count badge dynamically. You can adapt this logic into your favorite framework (React, Vue, Svelte, etc.).

## Visual Elements

- **Animations**: Uses CSS transitions for opening the dropdown and a bounce keyframe animation when the unread count changes.
- **Icons**: Inline SVGs are used for optimal performance and no external dependencies.
- **Scrollable List**: Custom styled scrollbar for a polished look when the list overflows.
