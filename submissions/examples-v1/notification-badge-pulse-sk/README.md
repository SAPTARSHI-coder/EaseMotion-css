# Animated Notification Badges

Reusable animated notification badges for alerts, unread messages, and status indicators. Perfectly designed to seamlessly supplement existing EaseMotion CSS utilities.

## Features

- 🔄 **Three Animation Variants:** Includes `.badge-pulse`, `.badge-ripple`, and `.badge-bounce` animations to subtly draw user attention to new activity without being obnoxious.
- 🔴 **Multiple Forms:** Supports both simple dots (`.badge-dot`) for abstract alerts and numeric counters (`.badge-numeric`) for specific counts.
- 🎨 **Configurable:** Uses standard CSS variables for simple color and sizing adjustments to perfectly match your brand theme.
- 📱 **Flexible Placement:** Designed with `position: absolute;` making it incredibly easy to place on buttons, avatars, or navigation icons.
- 🛑 **Prefers-Reduced-Motion:** Automatically disables all infinite loop animations if a user has reduced motion configured at the OS level.

## Usage

1. Copy the HTML structure from `demo.html` based on the badge style you need (dot vs numeric).
2. Ensure the parent element holding the badge has `position: relative;` (like the `.icon-btn` or `.avatar-wrapper` shown in the demo).
3. Include `style.css` to bring in the animations and base layouts.

## Customization

You can change the badge color (e.g., to blue instead of red) by modifying the CSS variables located at the top of `style.css`:

```css
:root {
  --badge-bg: #ef4444; /* Change to your alert color */
  --badge-text: #ffffff;
  --badge-ring-color: rgba(239, 68, 68, 0.6); /* Match your alert color with some transparency */
  --badge-size-dot: 10px;
  --badge-size-numeric: 20px;
}
```

## Contributed by
- Man1ac-1773
