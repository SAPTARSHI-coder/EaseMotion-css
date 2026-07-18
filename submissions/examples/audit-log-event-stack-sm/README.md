# Audit Log Event Stack

## What does this do?

Audit Log Event Stack is a self-contained HTML and CSS activity stream that shows system events with animated cards, a status rail, pulsing markers, risk badges, and compact metadata.

## How is it used?

Create an `audit-panel` with an `event-stack`, then add `event-card` items with event modifier classes such as `event-critical`, `event-warning`, `event-info`, or `event-success`.

```html
<article class="event-card event-critical">
  <div class="event-marker" aria-hidden="true"></div>
  <div class="event-body">
    <div class="event-topline">
      <p>Access control</p>
      <span>Critical</span>
    </div>
    <h3>Admin role changed outside approval window</h3>
    <p>A privileged account was assigned elevated permissions.</p>
  </div>
</article>
```

Available event classes:

- `event-critical`
- `event-warning`
- `event-info`
- `event-success`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to clarify activity sequence and severity: events enter gently, the rail reveals the timeline, markers pulse for attention, and hover states make each event easier to inspect. The demo works directly by opening `demo.html` in a browser.
