# Animated Notification Center Panel Component

A modern, motion-first notification panel featuring:

- Notification cards with icons, timestamps, and unread indicators
- Hover animations (subtle lift + icon drift)
- Smooth entrance transitions (staggered)
- Notification grouping (Today / Yesterday)

## Files

- `demo.html` – example markup
- `style.css` – component styling (scoped to this example)

## Usage

```html
<link rel="stylesheet" href="../../../easemotion.css" />
<link rel="stylesheet" href="./style.css" />

<section class="ease-notification-panel">...</section>
```

## Key Classes

- `.ease-notification-panel` – panel container
- `.ease-notification-panel__group-title` – group header
- `.ease-notification-card` – notification card
- `.ease-notification-card--unread` – unread state styling
- `.ease-entrance-pop` – entrance animation helper (stagger via `--ease-nc-delay`)

## Accessibility

- Cards are keyboard-focusable (`tabindex="0"`) and show a visible focus ring.
- Respects `prefers-reduced-motion` (disables entrance/pulse animations).
