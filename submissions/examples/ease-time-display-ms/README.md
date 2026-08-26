# Ease Time Display

## What does this do?

Adds a compact time display component with a time value, timezone badge, size variations, and subtle motion.

## How is it used?

Place the component in schedules, dashboards, monitoring views, or activity feeds and choose a size class such as `time-display-large`, `time-display-medium`, or `time-display-small`.

```html
<article class="time-display time-display-large">
  <span class="time-zone">IST</span>
  <strong class="time-value">08:45</strong>
  <span class="time-meta">Team standup starts soon</span>
</article>
```

## Why is it useful?

It gives EaseMotion CSS a readable, dependency-free time pattern for interfaces that need schedule context without a bulky calendar or clock widget.
