# Mini Calendar / Event Card Component

## What does this do?

Creates a compact calendar and event card component designed for dashboards, productivity apps, booking systems, and scheduling interfaces. The component highlights the current day, displays upcoming events with date badges, and provides a clean, responsive layout optimized for both desktop and mobile devices. Smooth animations are used for date selection, event card appearance, and state transitions.

## How is it used?

Use the `.mini-calendar` container with `.calendar-header` and `.calendar-grid` for the calendar part, and `.event-card` with `.date-badge` and `.event-content` for the events.

```html
<div class="mini-calendar">
  <div class="calendar-header">
    <h3>June 2026</h3>
  </div>

  <div class="calendar-grid">
    <span>14</span>
    <span>15</span>
    <span class="today">16</span>
    <span>17</span>
    <span>18</span>
  </div>

  <div class="event-card">
    <div class="date-badge">
      <span>16</span>
      <small>JUN</small>
    </div>

    <div class="event-content">
      <h4>Team Meeting</h4>
      <p>10:00 AM - 11:00 AM</p>
    </div>
  </div>
</div>
```

## Why is it useful?

Calendar and event widgets are common UI elements across modern web applications. This component fits EaseMotion CSS's animation-first and composable philosophy by providing reusable motion patterns for date highlighting, event card interactions, and responsive layout transitions without requiring complex custom implementations.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effects.

## Contribution Notes

- Class naming handled by contributor
- Maintainer will rename to ease-\* convention before merging
