# Live Activity Feed

### What does this do?

It shows a real-time style activity feed where each entry slides in from the right with a staggered delay, and the newest entry gets a brief highlight pulse.

### How is it used?

```html
<div class="activity-feed" role="log" aria-label="Recent activity">
  <div class="activity-item is-new">
    <div class="activity-avatar avatar-a" aria-hidden="true">JD</div>
    <div class="activity-content">
      <strong>John</strong> liked your post
      <span class="activity-time">just now</span>
    </div>
  </div>
  <div class="activity-item">
    <div class="activity-avatar avatar-b" aria-hidden="true">SM</div>
    <div class="activity-content">
      <strong>Sarah</strong> commented on your photo
      <span class="activity-time">5m ago</span>
    </div>
  </div>
</div>
```

Add `is-new` to the top entry to give it the highlight pulse. Each `activity-item` slides in with a per-item delay for a natural, cascading feel.

### Why is it useful?

Activity feeds are a core pattern in social apps, dashboards, and project tools. This implementation combines a staggered slide-in entrance with a highlight pulse for new items, using only CSS and readable class names. Avatars use initials so the demo is fully self contained, the feed uses a `log` role for assistive tech, and motion is disabled under `prefers-reduced-motion: reduce`.
