# CSS Work Log Entry

A responsive CSS-only daily work log component for displaying time, task, duration, progress, and completion status.

## Features

- Pure CSS implementation
- Daily work log layout
- Start and end time display
- Duration information
- Task description
- Daily progress indicator
- Completed status badge
- Recent work log entries
- Responsive across screen sizes
- Hover interactions
- Reduced-motion support
- Forced-colors support
- No JavaScript required

## Files

- `demo.html` — Component demonstration
- `style.css` — Component styles
- `README.md` — Documentation

## Usage

The main work log can be structured with semantic HTML:

```html
<article class="work-log">
  <div class="log-top">
    <div>
      <span class="log-label">Today's entry</span>
      <h2>Frontend Development</h2>
    </div>

    <span class="status">
      <span class="status-dot" aria-hidden="true"></span>
      Completed
    </span>
  </div>

  <div class="entry-grid">
    <div class="entry-item">
      <span class="icon" aria-hidden="true">◷</span>
      <div>
        <span class="item-label">Time</span>
        <strong>09:30 AM</strong>
      </div>
    </div>
  </div>
</article>