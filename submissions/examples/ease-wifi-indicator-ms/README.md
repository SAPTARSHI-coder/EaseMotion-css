# Ease WiFi Indicator

## What does this do?

Adds a visual WiFi connectivity indicator with connected, weak, and disconnected states.

## How is it used?

Place the component in dashboards, setup flows, or connectivity screens and switch the wrapper state class such as `wifi-card-strong`, `wifi-card-weak`, or `wifi-card-offline`.

```html
<article class="wifi-card wifi-card-strong">
  <span class="wifi-status">Connected</span>
  <span class="wifi-icon wifi-large" aria-hidden="true">
    <span class="wifi-dot"></span>
    <span class="wifi-arc wifi-arc-1"></span>
    <span class="wifi-arc wifi-arc-2"></span>
    <span class="wifi-arc wifi-arc-3"></span>
  </span>
</article>
```

## Why is it useful?

It gives EaseMotion CSS a lightweight, reusable pattern for showing connection health in network-aware interfaces without external assets or JavaScript.
