# Basic Reminder Schedule Row

## What it does

This submission adds a simple CSS-only reminder schedule row for task apps,
calendar panels, notification settings, and productivity dashboards.

It presents a reminder type icon, reminder name, schedule helper text, next run
time, and reminder state in one compact reusable row.

## How to use it

Add the base row class with a reminder icon, copy area, time label, and state
pill:

```html
<article class="basic-reminder-schedule-row">
  <span class="reminder-icon is-daily" aria-hidden="true">DY</span>
  <div class="reminder-copy">
    <strong>Daily standup reminder</strong>
    <p>Repeats every weekday at 9:30 AM.</p>
  </div>
  <span class="reminder-time">Today</span>
  <span class="reminder-state is-daily">Active</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
calendar and task interfaces. The row can be reused inside reminder settings,
notification panels, productivity dashboards, and schedule cards while staying
lightweight and CSS-only.

## Included features

- Daily, weekly, and overdue reminder examples
- Next-run time metadata
- Active, scheduled, and overdue state pills
- Long text truncation for schedule descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the reminder schedule row
- `README.md` - usage and contribution context
