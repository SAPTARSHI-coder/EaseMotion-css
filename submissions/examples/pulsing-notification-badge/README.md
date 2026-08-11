# Pulsing Notification Badge

## Overview
A lightweight, animation-first **Pulsing Notification Badge** that adds a "live" visual cue to your UI. It uses a secondary ring element to create a pinging effect, perfect for unread alerts or "active" user status indicators.

## Usage
Add the `.pulse-badge` container where you need an alert.

```html
<span class="pulse-badge">
  <span class="pulse-ring"></span>
  <span class="pulse-dot"></span>
</span>
```
## Why it fits EaseMotion CSS
Attention-Grabbing: Uses non-intrusive animation to draw the user's eye to important status changes.
Composable: The badge is sized relative to its parent, making it easy to attach to buttons, avatars, or icon menus.
Performance: Relies on CSS keyframes and transform for smooth GPU-accelerated motion.