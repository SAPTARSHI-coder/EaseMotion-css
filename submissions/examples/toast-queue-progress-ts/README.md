# Toast Queue Progress Stack

## What does this do?

This example shows queued toast notifications with progress strips and status-specific styling.

## How is it used?

Add a toast card inside the queue and choose a state class:

```html
<section class="toast-queue">
  <article class="queue-toast is-sending">
    <strong>Exporting report</strong>
    <p>Preparing CSV file for download.</p>
    <span class="queue-progress"></span>
  </article>
</section>
```

## Why is it useful?

Async workflows often need compact feedback for queued, running, completed, or failed jobs. This pattern uses motion to communicate progress while keeping the UI small and readable.

## Features

- Complete, sending, queued, and failed states
- Stacked entrance animation
- CSS-only progress strips
- Responsive two-column demo layout
- `prefers-reduced-motion` support

## Tech Stack

- HTML
- CSS

## Preview

Open `demo.html` directly in a browser to view the example.

## Contribution Notes

- Proposed for issue #11129
- All files are scoped to this submission folder
- No framework source files are modified
