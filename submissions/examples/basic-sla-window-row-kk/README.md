# Basic SLA Window Row

## What it does

This submission adds a simple CSS-only SLA window row for support cards, service dashboards, response-time summaries, operations panels, and ticket queues.

It aligns a response window, service title, helper copy, and small status label in one compact layout.

## How to use it

Add the utility class to a row containing a response window, copy, and status:

```html
<div class="basic-sla-window-row">
  <span class="sla-window">15m</span>
  <div class="sla-copy">
    <strong>Priority support</strong>
    <p>First response target for urgent tickets.</p>
  </div>
  <span class="sla-state is-fast">On track</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across support dashboards, operations cards, ticket queues, and service panels. It keeps response targets easy to scan with pure HTML and CSS.

## Included features

- Response window, title, helper copy, and status layout
- On track, normal, and queued examples
- Divider support between rows
- Text truncation for long helper copy
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the SLA window row
- `README.md` - usage and contribution context
