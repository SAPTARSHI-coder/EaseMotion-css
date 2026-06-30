# Animated API Request Flow Visualization

## What does it do?

A visual component that animates how data travels between
Client → API Server → Database → External Service using
animated packets, pulsing nodes, and status indicators.

## How is it used?

```html
<div class="api-flow">
  <div class="node node-client">
    <span class="node-icon">💻</span>
    Client
    <span class="node-status status-active"></span>
  </div>
  <div
    class="connection active"
    style="--packet-color: #3b82f6; --packet-speed: 1s;"
  ></div>
  <div class="node node-api">
    <span class="node-icon">⚡</span>
    API Server
    <span class="node-status status-idle"></span>
  </div>
</div>
```

## CSS Variables

- `--packet-color` — color of the animated data packet
- `--packet-speed` — speed of packet animation

## Classes

- `.api-flow` — wrapper
- `.node` — base node style
- `.node-client/api/database/external` — node variants
- `.connection` — line between nodes
- `.connection.active` — animated packet on line
- `.node-status` — status dot
- `.status-active/idle/loading` — status states

## Features

- Animated data packets on connection lines
- Pulsing nodes with glow effects
- Status indicators (active/idle/loading)
- JS-controlled flow simulation
- Respects prefers-reduced-motion
- Pure HTML + CSS + vanilla JS

## Preview

Open `demo.html` directly in browser.
