# Notification Count Badges

### What does this do?

It shows header icon buttons, each with a small count badge in the corner that pops in with a spring.

### How is it used?

```html
<button class="icon-btn" aria-label="Notifications, 3 unread">
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10 21a2 2 0 0 0 4 0" />
  </svg>
  <span class="icon-badge" aria-hidden="true">3</span>
</button>
```

Place an `.icon-badge` inside a relatively positioned `.icon-btn`. The badge is decorative, so the count is also given to screen readers through the button `aria-label`.

### Why is it useful?

Count badges signal unread messages, cart items, or alerts in app headers. This pops the badge in with a scale keyframe, using inline SVG icons so it is self contained with no images and no JavaScript. Buttons show a focus ring, and the pop is disabled under `prefers-reduced-motion: reduce`.
