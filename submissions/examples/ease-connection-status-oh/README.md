# Connection Status UI Pattern Board

This submission implements the Connection Status UI Pattern Board for GSSoC issue **#44484**.

## Description

A showcase of reusable UI patterns for online, offline, reconnecting, and slow network states with EaseMotion CSS animations.

## Features

- **4 Connection States**: Online, Offline, Reconnecting, Slow
- **Interactive Switcher**: Preview each state with one click
- **Animated Indicators**: Pulse, shake, and spin effects
- **Notification Bars**: Ready-to-use status bar patterns
- **Speed Meter**: Visual representation of connection quality
- **Retry Counter**: Shows reconnection attempts
- **Copy-Ready Snippets**: HTML code for each pattern

## States

### Online
- Green checkmark icon
- Subtle pulse animation
- "All systems operational" message

### Offline
- Red X icon with shake animation
- Alert styling
- "No internet connection" message

### Reconnecting
- Spinning loader icon
- Pulse animation
- Retry attempt counter

### Slow Connection
- Warning icon
- Speed meter visualization
- Poor signal label

## Usage

```html
<!-- Online Status -->
<div class="status-card online">
  <span class="status-icon online-icon">✓</span>
  <span class="status-title">Connected</span>
  <p>All systems operational.</p>
</div>

<!-- Offline Status -->
<div class="status-card offline">
  <span class="status-icon offline-icon">✕</span>
  <span class="status-title">Disconnected</span>
  <p>No internet connection.</p>
</div>

<!-- Notification Bar -->
<div class="notif-bar online-bar">
  <span>✓</span>
  <span>Connection restored</span>
</div>
```

## Animations

| State | Animation | Class |
|-------|-----------|-------|
| Online | Pulse | `.pulse-green` |
| Offline | Shake | `.shake` |
| Reconnecting | Spin + Pulse | `.pulse-orange` |
| Slow | Pulse | `.pulse` |

## CSS Custom Properties

```css
--color-success: #22c55e;
--color-warning: #eab308;
--color-danger: #ef4444;
--color-orange: #f97316;
```

## Acceptance Criteria

- ✅ Online state pattern with pulse indicator
- ✅ Offline state pattern with shake animation
- ✅ Reconnecting state with spin and retry count
- ✅ Slow network warning with speed meter
- ✅ Interactive state switcher
- ✅ Notification bar patterns
- ✅ Copy-ready HTML snippets
- ✅ Responsive design
- ✅ prefers-reduced-motion support
