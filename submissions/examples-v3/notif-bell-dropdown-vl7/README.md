# Notification Bell Dropdown

A CSS-only notification bell with a dropdown panel that opens via `:focus-within` and animates each notification item in with staggered delays.

## Features

- **Zero JavaScript** — interaction powered by `:focus-within` on the wrapper
- **Staggered slide-in** — each notification row fades and slides down sequentially using incremental `animation-delay`
- **Pulsing badge** — unread count badge pulses with a subtle scale + box-shadow keyframe
- **Mark all read** — button with a left-to-right gradient fill hover animation using `scaleX` on a `::before` pseudo-element
- **Arrow indicator** — rotated pseudo-element connects the dropdown visually to the bell
- **5 notification types** — git push, comment, star, merge, CI failure — each with a color-coded icon background
- **Unread dot** — `notif-unread` class adds an indigo dot on the right edge
- **Badge variants** — hidden at 0, normal count, overflow `99+`
- **Light mode** — full `prefers-color-scheme: light` override
- **Reduced motion** — `prefers-reduced-motion: reduce` disables all animations
- **Keyboard accessible** — `<button>` elements with `aria-label`, `aria-haspopup`, and `role="region"`

## File Structure

```
notif-bell-dropdown-vl7/
├── demo.html    ← self-contained, opens directly in browser
├── style.css    ← all CSS logic, transitions, keyframes
└── README.md    ← this file
```

## How It Works

The dropdown is hidden by default with `opacity: 0`, `pointer-events: none`, and a slight `translateY(-6px) scale(0.97)` offset. When the user clicks the bell button, focus moves inside `.notification-wrapper`, which triggers `:focus-within`. This selector flips the dropdown to `opacity: 1` and `transform: translateY(0) scale(1)` with a spring-like `cubic-bezier(0.34, 1.56, 0.64, 1)` transition.

Each `.notif-item` starts at `opacity: 0; transform: translateY(-8px)` and receives the `notifSlideIn` animation only when `:focus-within` is active, with `nth-child`-based delays (0.08s, 0.15s, 0.22s, ...) creating the stagger effect.

## Usage

```html
<div class="notification-wrapper">
  <button class="notif-bell" aria-label="Notifications">
    <span class="bell-icon"></span>
    <span class="notif-badge">3</span>
  </button>

  <div class="notif-dropdown">
    <div class="notif-header">
      <span>Notifications</span>
      <button class="notif-clear">Mark all read</button>
    </div>
    <ul class="notif-list">
      <li class="notif-item notif-unread">
        <span class="notif-icon git">&#x1F7E2;</span>
        <div class="notif-text">
          <p><strong>User</strong> pushed to <strong>main</strong></p>
          <time>2 min ago</time>
        </div>
      </li>
    </ul>
  </div>
</div>
```

## Browser Support

Works in all modern browsers that support `:focus-within` (Chrome 60+, Firefox 52+, Safari 10.1+, Edge 79+).
