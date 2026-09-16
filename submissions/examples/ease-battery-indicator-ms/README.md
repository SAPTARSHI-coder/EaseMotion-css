# Ease Battery Indicator

## What does this do?

Adds a visual battery level indicator with low, medium, and full states in multiple sizes.

## How is it used?

Place the component in system dashboards, device setup screens, or monitoring UIs and switch the wrapper state class such as `battery-card-low`, `battery-card-medium`, or `battery-card-full`.

```html
<article class="battery-card battery-card-medium">
  <span class="battery-state">Medium</span>
  <span class="battery-shell battery-medium" aria-hidden="true">
    <span class="battery-fill"></span>
    <span class="battery-cap"></span>
  </span>
</article>
```

## Why is it useful?

It gives EaseMotion CSS a compact, dependency-free way to communicate power status in hardware, dashboard, and monitoring interfaces.
