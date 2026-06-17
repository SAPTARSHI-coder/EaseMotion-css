# ease-connection-status

## What does this do?

Provides a CSS-only connection status / offline indicator component with a fixed-top banner that slides in when the connection changes. The offline state shows a pulse animation to draw attention. Minimal JavaScript handles the online/offline detection via `navigator.onLine` and `window` events.

## How is it used?

Add the fixed banner to your page and a small script that toggles `.is-online` / `.is-offline` on the element.

```html
<div id="status" class="ease-connection-status is-online">
  <span class="ease-connection-status-icon"></span>
  <span id="text">Online</span>
</div>

<script>
var el = document.getElementById('status');
var txt = document.getElementById('text');

window.addEventListener('offline', function() {
  el.className = 'ease-connection-status is-offline';
  txt.textContent = 'No internet connection';
});

window.addEventListener('online', function() {
  el.className = 'ease-connection-status is-online';
  txt.textContent = 'You are back online';
});
</script>
```

### States

| Class | Background | Behavior |
| --- | --- | --- |
| `.is-online` | Green | Slides in, auto-hides (or stays subtle) |
| `.is-offline` | Red | Slides in, pulse animation |

## Why is it useful?

Progressive web apps, dashboards, and real-time applications commonly need to show online/offline state. This component provides a consistent, animated, accessible pattern that works with minimal JavaScript integration.

## Features

- Fixed-top banner with slide-down/slide-up animation
- Online (green) and offline (red) states
- Pulse animation on the offline indicator
- Minimal JS using `navigator.onLine` + `window` events
- Respects `prefers-reduced-motion`
