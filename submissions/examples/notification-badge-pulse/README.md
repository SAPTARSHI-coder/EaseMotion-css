# Notification Badge (Pulse Dot)

### 1. What does this do?
A small corner badge — a plain dot or a number — that sits on top of an icon or avatar and can loop a radar-ping pulse animation to draw attention to unread state.

### 2. How is it used?
Wrap the icon/avatar and the badge together in `.badge-wrap`, then add `.badge` plus whichever modifiers you need:

```html
<!-- plain pulsing dot -->
<div class="badge-wrap">
  🔔
  <span class="badge badge-pulse"></span>
</div>

<!-- static count -->
<div class="badge-wrap">
  🔔
  <span class="badge badge-count">3</span>
</div>

<!-- count that also pulses -->
<div class="badge-wrap">
  💬
  <span class="badge badge-count badge-pulse">12</span>
</div>

<!-- online status dot -->
<div class="badge-wrap">
  <span class="avatar">JS</span>
  <span class="badge badge-pulse badge-online"></span>
</div>
```

- `.badge-wrap` — any positioned container (icon, avatar, nav item) the badge anchors to.
- `.badge` — the dot itself, absolutely positioned to the top-right corner.
- `.badge-pulse` — adds the looping radar-ping ring (disabled automatically under `prefers-reduced-motion`).
- `.badge-count` — resizes the badge to fit a number/text instead of a plain dot.
- `.badge-online` — color variant for presence indicators (swap `background` for other states).

Always add an `aria-label` (e.g. `"3 unread notifications"`) on the badge itself, since its content is often just a number or nothing at all.

### 3. Why is it useful?
Notification badges show up on nearly every icon, nav item, and avatar that carries unread state, and the ping-style pulse is exactly the kind of small, high-impact motion detail EaseMotion CSS is built around — a single `@keyframes` animation, applied with one class, that instantly reads as "something needs your attention." It's a natural companion to larger components (like a notification bell) but is deliberately minimal enough to drop onto anything.
