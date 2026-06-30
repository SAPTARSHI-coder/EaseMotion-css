# Ease Log Viewer

## What does this do?

A terminal-style log viewer component that displays scrollable log messages with color-coded severity levels, optional auto-scroll, and animated log entries.

---

## How is it used?

Open `demo.html` in any modern browser.

Example log entry:

```html
<div class="log info ease-fade-in-up">
  <span class="level">INFO</span>
  <span>Server started successfully.</span>
</div>

<div class="log warn ease-fade-in-up">
  <span class="level">WARN</span>
  <span>Memory usage is above 80%.</span>
</div>

<div class="log error ease-fade-in-up">
  <span class="level">ERROR</span>
  <span>Failed to fetch API response.</span>
</div>
```

Use the controls to:

- Add sample log entries
- Toggle automatic scrolling
- Clear all logs

---

## Why is it useful?

Log viewers are commonly used in developer tools, dashboards, monitoring systems, CI/CD pipelines, and admin panels. This component provides a clean terminal-inspired interface with animated updates, color-coded log levels, and an optional auto-scroll feature for improved readability and user experience.
