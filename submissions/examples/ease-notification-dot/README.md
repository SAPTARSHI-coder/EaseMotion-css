# ease-notification-dot

A reusable notification indicator component that displays unread counts on a bell icon, with animated ping effects and accessible controls.

## Features

- Top-right notification badge positioned over a bell icon
- Unread counts update dynamically
- Displays `99+` when count exceeds 99
- Pulse animation behind the badge while notifications are present
- Smooth scale + fade transition when clearing notifications
- Add and clear notifications using accessible buttons
- `aria-live="polite"` announces count changes for screen readers
- Keyboard-friendly focus and control interaction

## Folder structure

```text
submissions/examples/ease-notification-dot/
├── demo.html
├── style.css
├── script.js
└── README.md
```

## Installation

No installation is required. Open `demo.html` directly in a browser to preview the component.

## Usage

1. Open `submissions/examples/ease-notification-dot/demo.html` in a browser.
2. Click **Add Notification** to increase the unread count.
3. Click **Clear Notifications** to hide the badge.
4. The badge reappears automatically when a new notification is added after clearing.

## Accessibility

- Uses semantic HTML elements and visible button labels
- `aria-live="polite"` announces count changes
- Unread count text updates dynamically
- Focus-visible styling for keyboard users
- Badge label provides readable notification state

## Browser compatibility

Works in modern browsers supporting CSS transitions, CSS keyframe animations, and standard DOM APIs. Built with vanilla HTML, CSS, and JavaScript.

## Customization

- Update badge colors in `style.css` to match brand design
- Adjust icon size and badge position via the `.icon-shell` and `.badge-wrap` rules
- Change pulse speed through the `notify-ping` keyframes and animation duration
