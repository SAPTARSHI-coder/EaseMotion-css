# CSS-Only Notification Badge Bell

Animated bell icon with notification badge counter. Pure CSS, no JavaScript.

## What does this do?

Provides a notification bell icon with an animated badge counter. The bell shakes on hover, the badge pops in with a scale animation, and a dot variant pulses continuously.

## How is it used?

```html
<button class="notification-bell" aria-label="Notifications (3 unread)">
  <svg class="notification-bell__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 01-3.46 0"/>
  </svg>
  <span class="notification-bell__badge">3</span>
</button>
```

### Dot variant (no count)

```html
<button class="notification-bell" aria-label="New notifications">
  <svg class="notification-bell__icon">...</svg>
  <span class="notification-bell__dot"></span>
</button>
```

### Variants

```html
<button class="notification-bell notification-bell--shake">...</button>
<button class="notification-bell notification-bell--sm">...</button>
<button class="notification-bell notification-bell--lg">...</button>
<button class="notification-bell notification-bell--success">...</button>
<button class="notification-bell notification-bell--ghost">...</button>
```

## Why is it useful?

- **Animated** — bell shakes on hover, badge pops in, dot pulses
- **Accessible** — `aria-label` with notification count for screen readers
- **Multiple variants** — shake, small, large, color, and ghost styles
- **Dark mode** — respects `prefers-color-scheme: dark`
- **Reduced motion** — animations disabled when `prefers-reduced-motion` is active
- **Production-ready** — suitable for notification systems, messaging apps, and dashboards
