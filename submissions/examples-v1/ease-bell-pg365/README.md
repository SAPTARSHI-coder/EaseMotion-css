# Animated Notification Bell (ease-bell-pg365)

## What does this do?

A pure CSS notification bell icon that plays a smooth ring/shake animation on hover or focus, with an optional badge that pulses to draw attention to unread notifications.

## How is it used?

```html
<div class="ease-bell-pg365-wrapper" tabindex="0" role="button" aria-label="3 unread notifications">
  <span class="ease-bell-pg365" aria-hidden="true">🔔</span>
  <span class="ease-bell-pg365-badge">3</span>
</div>
```

- `.ease-bell-pg365-wrapper` — positions the badge relative to the bell and provides the hover/focus target.
- `.ease-bell-pg365` — the bell glyph; rings on `:hover` / `:focus-visible` of the wrapper.
- `.ease-bell-pg365-badge` — optional unread-count badge; omit it entirely when there are no unread notifications.
- Add `.is-ringing` to the wrapper to make the bell ring continuously without needing hover (useful for driving the animation from JS when a new notification arrives).

`prefers-reduced-motion: reduce` is respected — all animations are disabled for users who request reduced motion.

## Why is this useful?

Notification bells are a near-universal UI pattern (Gmail, YouTube, LinkedIn, etc.), and a lightweight, dependency-free, CSS-only implementation fits EaseMotion CSS's animation-first, zero-JS philosophy exactly. The component is self-contained (no external assets, no build step) and can be dropped into any project as-is.
