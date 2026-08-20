# Animated Notification Bell with Badge Count

A notification bell button that rings on hover, with a pulsing unread-count badge. Pure HTML and CSS — no JavaScript required.

## Features

- 🔔 Bell swings with a natural ring animation on hover
- 🔴 Unread-count badge with a continuous soft pulse
- 📱 Responsive by default — fixed compact size works at any layout width
- ♿ Includes `aria-label` describing the unread count for screen readers
- ♿ Respects `prefers-reduced-motion`
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

```html
<button class="bell-btn" aria-label="Notifications, 5 unread">
  <span class="bell-icon">🔔</span>
  <span class="bell-badge">5</span>
</button>
```

Update the badge number and `aria-label` count together; hide `.bell-badge` entirely (e.g. with `display: none` or a conditional render) when there are zero unread notifications.

## Why it fits EaseMotion CSS

The ring is a single `@keyframes` rotating the icon back and forth, and the badge pulse animates `box-shadow` only — both pure CSS, no JavaScript. Class names stay simple (`bell-btn`, `bell-icon`, `bell-badge`).

## Files

- `demo.html` — a bell with 5 unread notifications
- `style.css` — all styles and animations
- `README.md` — this file

## Notes

Opening a notifications dropdown/panel on click would be wired up with a small amount of JavaScript in the consuming app — this component provides the animated bell + badge visual.