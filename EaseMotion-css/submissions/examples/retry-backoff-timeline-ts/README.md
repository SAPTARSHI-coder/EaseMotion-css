# Animated Retry Backoff Timeline

## What does this do?

This example visualizes retry attempts, wait windows, and final delivery in a compact timeline.

## How is it used?

Add retry steps with state classes:

```html
<ol class="retry-timeline">
  <li class="retry-step is-failed">Attempt 1 failed</li>
  <li class="retry-step is-success">Attempt 3 delivered</li>
</ol>
```

## Why is it useful?

Retry and backoff behavior appears in webhook systems, API clients, queues, and reliability tools. A visual timeline makes the flow easier to understand than text alone.

## Features

- Failed, waiting, and success states
- Sequential entrance animation
- Timeline connector
- Mobile-friendly stacked layout
- `prefers-reduced-motion` support

## Tech Stack

- HTML
- CSS

## Preview

Open `demo.html` directly in a browser to view the example.

## Contribution Notes

- Proposed for issue #11125
- All files are scoped to this submission folder
- No framework source files are modified
