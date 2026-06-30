# Notification Bell Widget — EaseMotion CSS

A floating notification bell widget with unread badge, ring animation, and dropdown panel — built with pure HTML and CSS (checkbox hack for toggle).

## Features

- **Bell icon** with ring animation on toggle
- **Unread count badge** with pulse glow effect
- **Dropdown panel** with smooth scale + fade entrance
- **Notification items** with unread dot indicator, message, description, and timestamp
- **Hover states** on bell button, items, and footer
- **Responsive** — adapts to small viewports
- **Zero JavaScript** — toggle via hidden checkbox
- **Dark theme** — matches EaseMotion CSS aesthetic

## Usage

Open `demo.html` in a browser and click the bell icon to open/close the notification panel.

## File Structure

```
ease-notification-bell/
├── demo.html       — Main demo page
├── style.css       — Widget styles (reset, layout, bell, badge, panel, items)
└── README.md       — This file
```

## Classes

| Class                | Purpose                          |
| -------------------- | -------------------------------- |
| `.ease-notif`        | Root widget container            |
| `.ease-notif-input`  | Hidden checkbox for toggle state |
| `.ease-notif-btn`    | Bell button label                |
| `.ease-notif-bell`   | Bell SVG icon                    |
| `.ease-notif-badge`  | Unread count badge               |
| `.ease-notif-panel`  | Dropdown panel                   |
| `.ease-notif-header` | Panel header with title + count  |
| `.ease-notif-list`   | Scrollable notification list     |
| `.ease-notif-item`   | Single notification row          |
| `.ease-notif-dot`    | Unread indicator dot             |
| `.ease-notif-body`   | Message, description, timestamp  |
| `.ease-notif-footer` | "Mark all as read" action        |
