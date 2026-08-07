# ease-test-connection

Network connection test and status indicator component for issue **#47925**.

## What does this do?

A connection status card that displays network metrics (latency, speed, jitter, packet loss), includes a live latency graph, animated status indicators, and a test button that simulates a connection diagnostic. Includes a scrolling connection log.

## How is it used?

```html
<div class="connection-card">
  <div class="connection-header">
    <div class="status-indicator">
      <span class="status-ring"></span>
      <span class="status-core"></span>
    </div>
    <h2 class="status-label">Connected</h2>
    <button class="test-btn">Test Connection</button>
  </div>
  <div class="connection-metrics">
    <div class="metric"><span class="metric-value">24ms</span><span class="metric-label">Latency</span></div>
  </div>
</div>
```

## Why is it useful?

Connection status indicators are essential for real-time applications, dashboards, and collaborative tools. This component provides a reusable pattern with animated feedback, live metrics, and a diagnostic test flow — following EaseMotion's philosophy of lightweight, accessible UI components.

## Features

- Animated status indicator (pulse ring + core dot)
- Four network metrics: latency, speed, jitter, packet loss
- Live latency bar graph with smooth transitions
- Test progress bar with step-by-step feedback
- Scrolling connection log with timestamps
- State classes: `.connected`, `.testing`, `.error`
- Responsive layout (4-col → 2-col on mobile)
- Reduced motion support via `prefers-reduced-motion`

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Self-contained demo with interactive test button |
| `style.css` | Full component CSS with animations |
| `README.md` | This file |
