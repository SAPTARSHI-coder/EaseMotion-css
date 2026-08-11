# ease-user-activity-card

A user activity card showing an avatar, name, and live status — with an animated "active now" pulse ring and a typing indicator, built entirely in CSS.

## Features

- 🟢 Animated pulse ring for "active now" status (pure CSS `@keyframes`)
- 💬 Animated typing indicator (three bouncing dots)
- 🖱️ Interactive hover: card lifts with elevated shadow
- 🎨 Fully customizable via CSS custom properties
- 🌗 Light/dark mode support via `[data-theme]`
- 📱 Responsive: avatar and padding scale down on small screens
- ♿ Accessible: status dots are `aria-hidden` (decorative), typing text uses `aria-live="polite"` so screen readers announce it, text truncates gracefully with ellipsis instead of breaking layout
- 🧠 Respects `prefers-reduced-motion`

## Usage

```html
<div class="ease-activity-card">
  <div class="ease-activity-avatar-wrap">
    <img class="ease-activity-avatar" src="avatar.jpg" alt="User name" />
    <span class="ease-activity-status-dot is-online" aria-hidden="true"></span>
  </div>
  <div class="ease-activity-info">
    <p class="ease-activity-name">User Name</p>
    <p class="ease-activity-status-text">Active now</p>
  </div>
</div>
```

### Status variants

| Class          | Meaning                     |
|----------------|------------------------------|
| `.is-online`   | Active now (pulsing green dot) |
| `.is-away`     | Away (solid amber dot)       |
| `.is-offline`  | Offline (solid gray dot)     |

### Typing indicator

Add `.is-typing` to `.ease-activity-status-text` and include three `<span class="ease-activity-typing-dot"></span>` elements before the label text.

## CSS Variables

| Variable                          | Default    | Description                        |
|-------------------------------------|------------|--------------------------------------|
| `--ease-activity-bg`                | `#ffffff`  | Card background                      |
| `--ease-activity-border`            | `#e2e8f0`  | Card border color                    |
| `--ease-activity-text`              | `#0f172a`  | Name text color                      |
| `--ease-activity-muted`             | `#64748b`  | Status text color                    |
| `--ease-activity-accent`            | `#22c55e`  | "Online" dot + pulse color           |
| `--ease-activity-away`              | `#f59e0b`  | "Away" dot color                     |
| `--ease-activity-offline`           | `#94a3b8`  | "Offline" dot color                  |
| `--ease-activity-radius`            | `0.9rem`   | Card corner radius                   |
| `--ease-activity-duration`          | `0.25s`    | Hover transition duration            |
| `--ease-activity-avatar-size`       | `3rem`     | Avatar diameter                      |
| `--ease-activity-pulse-duration`    | `1.8s`     | Online pulse ring animation duration |
| `--ease-activity-max-width`         | `320px`    | Max card width                       |

## Accessibility

- Status dots are purely decorative (`aria-hidden="true"`); status is always conveyed via visible text too.
- The typing indicator's container uses `aria-live="polite"` so screen reader users are notified when someone starts typing.
- All animations are disabled under `prefers-reduced-motion: reduce`, including the pulse ring, typing dots, and hover lift.

## Browser Support

Works in all modern browsers supporting CSS custom properties and `@keyframes` (Chrome, Firefox, Safari, Edge).