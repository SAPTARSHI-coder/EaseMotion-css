# Animated Log Stream Viewer with Severity Highlights

## What does this do?

This example presents deployment logs with severity labels, row entrance motion, and a newest-entry highlight.

## How is it used?

Add rows to the log stream and choose a severity class:

```html
<section class="log-stream">
  <p class="log-row is-warning">
    <span class="severity">WARN</span>
    <time>14:02:23</time>
    <span>Cold cache detected.</span>
  </p>
</section>
```

## Why is it useful?

Developer tools, deployment consoles, and monitoring dashboards need logs that are easy to scan. This pattern uses motion to guide attention without hiding the raw event text.

## Features

- Info, success, warning, and error states
- Latest-row highlight
- Console-inspired monospace layout
- Responsive wrapping for small screens
- `prefers-reduced-motion` support

## Tech Stack

- HTML
- CSS

## Preview

Open `demo.html` directly in a browser to view the example.

## Contribution Notes

- Proposed for issue #11126
- All files are scoped to this submission folder
- No framework source files are modified
