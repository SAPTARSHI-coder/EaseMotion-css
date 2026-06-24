# Ease Timeline — Animated Vertical Timeline Component

**Implements:** #2737

---

## Overview

Adds an animated vertical timeline component with staggered card
entrance animations and a growing connector line. Perfect for
portfolios, changelogs, and roadmaps.

## Classes

| Class | Effect |
|-------|--------|
| `.ease-timeline` | Vertical timeline wrapper |
| `.ease-timeline-item` | Single timeline entry |
| `.ease-timeline-dot` | Animated connector dot |
| `.ease-timeline-line` | Animated growing connector line |
| `.ease-timeline-card` | Content card beside the line |
| `.ease-timeline-left` | Cards on left side |
| `.ease-timeline-alternate` | Cards alternate left/right |

## How to Use

```html
<div class="ease-timeline">
  <div class="ease-timeline-item">
    <div class="ease-timeline-dot"></div>
    <div class="ease-timeline-line"></div>
    <div class="ease-timeline-card">
      <h3>v1.0 Released</h3>
      <p>Initial launch of EaseMotion CSS</p>
      <time>Jan 2025</time>
    </div>
  </div>
</div>
```

## How to Test

1. Open `demo.html` in any modern browser
2. Watch the timeline items animate in with staggered entrance
3. Observe the connector dots pop in and lines grow downward
4. Toggle OS dark mode to see dark mode support

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 80+            |
| Firefox | 80+            |
| Safari  | 14+            |
| Edge    | 80+            |