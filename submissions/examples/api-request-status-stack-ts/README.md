# API Request Status Stack

## What does this do?

Shows queued, running, successful, warning, and failed API request rows.

## How is it used?

```html
<li class="request-item is-running">
  <span class="method">POST</span>
  <span class="path">/v1/checkout</span>
  <span class="status">Running</span>
</li>
```

## Why is it useful?

Developer dashboards need clear request lifecycle feedback. This example provides compact status styling with CSS-only motion.
