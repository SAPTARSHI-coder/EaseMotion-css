# Data Sync Drift

## What does this do?

Data Sync Drift is a self-contained HTML and CSS data operations dashboard pattern with animated drift meters, sync status cards, lag indicators, and readable reconciliation signals.

## How is it used?

Create a `sync-board` wrapper and add `sync-card` items with drift classes such as `drift-low`, `drift-medium`, or `drift-high`.

```html
<article class="sync-card drift-high">
  <div class="drift-ring" aria-hidden="true">
    <span>3m</span>
  </div>
  <div class="sync-content">
    <p class="sync-kicker">Inventory source</p>
    <h2>Stock counts are drifting</h2>
    <div class="drift-bar" aria-hidden="true">
      <span></span>
    </div>
  </div>
</article>
```

Available drift classes:

- `drift-low`
- `drift-medium`
- `drift-high`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make data drift easier to scan: cards enter gently, rings show lag severity, bars reveal drift pressure, and focus states keep reconciliation actions accessible. The demo works directly by opening `demo.html` in a browser.
