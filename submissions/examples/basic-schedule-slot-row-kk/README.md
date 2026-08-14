# Basic Schedule Slot Row

## What it does

This submission adds a simple CSS-only schedule slot row for agendas, meeting lists, daily plans, event schedules, and planning cards.

It aligns a time block, event title, helper text, and a small status label in one compact layout.

## How to use it

Add the utility class to a row containing a time, event copy, and optional status:

```html
<div class="basic-schedule-slot-row">
  <time datetime="09:30">09:30</time>
  <div class="slot-copy">
    <strong>Design sync</strong>
    <p>Review layout notes and open UI tasks.</p>
  </div>
  <span class="slot-label is-live">Live</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across dashboards, agenda cards, event sections, planning panels, and calendar-inspired layouts. It uses semantic HTML and CSS only.

## Included features

- Time block, event copy, and status label layout
- Live, planned, and done examples
- Semantic `time` element usage
- Divider support between rows
- Responsive stacked layout on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the schedule slot row
- `README.md` - usage and contribution context
