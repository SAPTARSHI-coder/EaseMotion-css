# Animated Support Ticket Status Card

An interactive, premium support ticket card widget featuring clean helpdesk grids, pulsing status indicators, SLA warning badges, agent avatar zooms, progress tracking timelines, and responsive layouts. Built entirely with pure HTML and CSS.

## Key Features

- **Row Hover Elevation**: Elevates the card (`translateY(-6px)`) and grows its drop shadow on hover.
- **Dynamic Status Glows**: Casts a soft ambient color glow around the card borders matching the ticket status (`Open`, `In Progress`, `Waiting`, `Resolved`).
- **Shimmer sweep reflections**: Sweeps a soft gloss sheen reflection across the card on hover.
- **Pulsing Status Dots**: Emits a continuous pulsing radar ring next to status tags (`open`, `in-progress`, `waiting`, `resolved`).
- **Priority Indicators**: Outlines tags according to critical levels (`Critical`, `High`, `Medium`, `Low`).
- **CSS Load-In Progress Fills**: Animates resolution progress bars from `0%` to their custom target values (`--percent`) via keyframes.
- **Offline-First Avatars**: Employs initials SVG Data URIs representing assigned support agents that rotate and zoom slightly on card hover.
- **SLA Alert States**: Automatically pulses SLA alerts when breach limits are reached.
- **Responsive Layout**: Seamlessly reflows cards into single columns on small screen formats.

## File Structure

```text
submissions/examples/animated-support-ticket-status-card/
├── demo.html
├── style.css
└── README.md
```

## HTML Structure

```html
<div class="ticket-card sla-alert">
  <!-- Ticket Header -->
  <div class="ticket-header">
    <span class="ticket-id">#SUP-1024</span>
    <span class="status open">Open</span>
  </div>

  <!-- Title -->
  <h3>Unable to Access Analytics Dashboard</h3>

  <!-- Priority -->
  <div class="priority-section">
    <span class="priority-label">Priority:</span>
    <span class="priority-badge priority-critical">Critical</span>
  </div>

  <!-- Progress Tracking -->
  <div class="progress-section">
    <div class="progress-bar">
      <div class="progress-fill" style="--percent: 10%;"></div>
    </div>
  </div>

  <!-- Assigned Agent -->
  <div class="agent-info">
    <img src="data:image/svg+xml;utf8,..." alt="Sarah Johnson" class="avatar">
    <span>Assigned to: <strong>Sarah Johnson</strong></span>
  </div>

  <!-- Footer Timestamps -->
  <div class="ticket-footer">
    <span class="timestamp">Updated 2m ago</span>
    <span class="sla-badge">SLA Breach: 15m</span>
  </div>
</div>
```

## CSS Customizations

Customize themes, colors, and shadows via variables inside `style.css`:

```css
:root {
  /* Cards */
  --t-card-bg: rgba(30, 41, 59, 0.4);
  --t-card-hover-bg: rgba(30, 41, 59, 0.7);
  
  /* Status Colors */
  --t-color-open: #10b981;
  --t-color-progress: #3b82f6;
  --t-color-waiting: #f59e0b;
  --t-color-resolved: #8b5cf6;
  
  /* Priority Accents */
  --t-color-critical: #ef4444;
}
```

To set the progress fill percentage dynamically on a row, assign the `--percent` inline variable to the `.progress-fill` node:
```html
<div class="progress-fill" style="--percent: 50%;"></div>
```

## How to View

1. Navigate to `submissions/examples/animated-support-ticket-status-card/`.
2. Open `demo.html` in any web browser to preview interactions and animations.
3. Shrink the browser window to see the dashboard widget columns reflow for mobile devices.

## Contribution Standards

- Submit code within the target folder only; do not modify parent directories.
- Selectors will be refactored by the repository maintainer to follow the GSSoC `ease-*` naming prefix conventions upon integration.
