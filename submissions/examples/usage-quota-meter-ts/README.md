# Usage Quota Ring and Threshold Meter

## What does this do?

This example shows product usage against plan limits with CSS-only quota rings.

## How is it used?

Set the quota with a custom property and choose a threshold state:

```html
<article class="quota-card is-watch" style="--quota: 76%">
  <div class="quota-ring" role="img" aria-label="76 percent used">
    <span>76%</span>
  </div>
</article>
```

## Why is it useful?

SaaS products often need to show API usage, storage, seats, or billing limits. This example gives those metrics a compact animated treatment while keeping the markup simple.

## Features

- Safe, watch, and danger states
- Conic-gradient quota rings
- Responsive card grid
- Pure HTML and CSS
- `prefers-reduced-motion` support

## Tech Stack

- HTML
- CSS

## Preview

Open `demo.html` directly in a browser to view the example.

## Contribution Notes

- Proposed for issue #11128
- All files are scoped to this submission folder
- No framework source files are modified
