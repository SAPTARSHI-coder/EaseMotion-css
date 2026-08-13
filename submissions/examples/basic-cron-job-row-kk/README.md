# Basic Cron Job Row

## What it does

This submission adds a CSS-only cron job row for scheduler dashboards,
automation panels, infrastructure tools, and admin monitoring pages.

It shows a job marker, job name, helper text, cron schedule, last run timing,
and current lifecycle state in one compact reusable row.

## How to use it

Add the base row class with a job marker, copy area, metadata pills, and a state
pill:

```html
<article class="basic-cron-job-row">
  <span class="cron-mark is-complete" aria-hidden="true">OK</span>
  <div class="cron-copy">
    <strong>nightly-report-sync</strong>
    <p>Runs every night to refresh analytics exports.</p>
  </div>
  <span class="cron-schedule">0 2 * * *</span>
  <span class="cron-last-run">12 min ago</span>
  <span class="cron-state is-complete">Complete</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
developer and infrastructure dashboards. Developers can reuse the same row
pattern in scheduler logs, automation tools, admin panels, and job monitoring
screens while keeping the implementation lightweight and CSS-only.

## Included features

- Complete, active, and paused cron job examples
- Job marker badges
- Cron expression metadata
- Last run timing metadata
- Lifecycle state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the cron job row
- `README.md` - usage and contribution context
