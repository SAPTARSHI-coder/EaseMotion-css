# Basic Queue Status Row

## What it does

This submission adds a simple CSS-only queue status row for admin dashboards,
background job panels, task processors, and operational tools.

It presents a queue state icon, job name, helper text, position or progress
metadata, and processing state in one compact reusable row.

## How to use it

Add the base row class with a queue icon, copy area, metadata label, and state
pill:

```html
<article class="basic-queue-status-row">
  <span class="queue-icon is-waiting" aria-hidden="true">WT</span>
  <div class="queue-copy">
    <strong>Image optimization</strong>
    <p>Waiting for a worker to compress uploaded media.</p>
  </div>
  <span class="queue-meta">#12</span>
  <span class="queue-state is-waiting">Waiting</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
admin and operational interfaces. The row can be reused inside background job
panels, queue dashboards, task processors, and system tools while staying
lightweight and CSS-only.

## Included features

- Waiting, processing, and blocked queue examples
- Position and progress metadata
- Queue state pills
- Long text truncation for job descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the queue status row
- `README.md` - usage and contribution context
