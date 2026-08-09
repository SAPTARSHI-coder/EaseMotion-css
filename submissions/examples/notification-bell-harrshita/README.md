# Notification Bell

### 1. What does this do?
A pure-CSS animated notification bell — swing animation on new alerts, a pulsing badge counter, and a dropdown notification panel — built for navbars and action bars.

### 2. How is it used?
Markup the bell inside a positioned wrapper, then toggle a couple of classes with a small amount of JS (shown in `demo.html`):

```html
<div class="ease-bell">
  <button class="ease-bell__button" aria-label="Notifications" aria-haspopup="true" aria-expanded="false">
    <span class="ease-bell__icon">
      <!-- bell SVG here -->
    </span>
    <span class="ease-bell__badge ease-bell__badge--pulse">3</span>
  </button>

  <div class="ease-bell__dropdown">
    <ul class="ease-bell__list">
      <li class="ease-bell__item ease-bell__item--unread">…</li>
      <li class="ease-bell__item">…</li>
    </ul>
  </div>
</div>
```

- Add `.ease-bell__icon--ringing` to `.ease-bell__icon` to trigger the swing animation once (remove it on `animationend`, see `demo.html`).
- Add `.ease-bell__dropdown--open` to `.ease-bell__dropdown` to reveal the panel; toggle `aria-expanded` on the button to match.
- Remove `.ease-bell__badge--pulse` (or add `.ease-bell__badge--hidden`) once the count reaches 0 — the demo does this automatically as notifications are marked read.
- Remove `.ease-bell__item--unread` from a row once it's read to drop its highlight and side dot.

**Animation custom properties** (set on `:root`, override per-instance if needed):

| Variable | Default | Controls |
|---|---|---|
| `--ease-bell-swing-duration` | `0.6s` | Length of the `ease-bell-swing` ring animation |
| `--ease-bell-pulse-duration` | `1.6s` | Length of one `ease-badge-pulse` ring cycle |
| `--ease-bell-badge-color` | `#ff5050` | Badge background and pulse ring color |
| `--ease-bell-dropdown-width` | `300px` | Width of the notification panel |

Dark mode follows `prefers-color-scheme: dark` automatically, or can be forced with a `.theme-dark` class on `<body>` (see the "Toggle dark mode" button in the demo). All animations are disabled under `prefers-reduced-motion: reduce`.

### 3. Why is it useful?
Notification indicators are one of the most common interactive UI patterns, and this component shows EaseMotion's animation-first approach applied to a real product need: attention-drawing motion (swing + pulse) that is triggered by state changes rather than looping forever, paired with a smooth CSS-transitioned dropdown. It's accessible by default (`aria-label`, `aria-haspopup`, `aria-expanded`, keyboard `Escape` to close) and respects `prefers-reduced-motion`, which fits EaseMotion's philosophy of motion that enhances usability instead of getting in the way.
