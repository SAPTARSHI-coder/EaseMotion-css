# Basic Deadline Reminder Row

## What it does

This submission adds a simple CSS-only deadline reminder row for tasks, upcoming dates, project deadlines, reminders, and planning cards.

It aligns a reminder marker, task title, helper text, due date, and urgency label in one compact layout.

## How to use it

Add the utility class to a row containing a marker, task copy, date, and status:

```html
<div class="basic-deadline-reminder-row">
  <span class="deadline-marker" aria-hidden="true">01</span>
  <div class="deadline-copy">
    <strong>Submit project brief</strong>
    <p>Finalize the summary and attach reference notes.</p>
  </div>
  <time datetime="2026-08-14">Aug 14</time>
  <span class="deadline-state is-soon">Due soon</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across dashboards, task cards, planning panels, reminders, and project management sections. It uses semantic HTML and CSS only.

## Included features

- Reminder marker, task copy, date, and status layout
- Due soon, planned, and ready examples
- Semantic `time` element usage
- Text truncation for long helper copy
- Responsive stacked layout on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the deadline reminder row
- `README.md` - usage and contribution context
