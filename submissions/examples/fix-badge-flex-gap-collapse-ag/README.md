# Fix ease-badge Flex Gap Collapse

## What does this do?
Switches `.ease-badge` to `position: absolute` on a `position: relative`
`.ease-badge-host` wrapper, removing it from flex flow to prevent
negative-margin + gap compounding.

## How is it used?
```html
<div class="ease-badge-host">
  <button class="icon-btn">🔔</button>
  <span class="ease-badge">3</span>
</div>
```

## Why is it useful?
Negative margins interact unpredictably with flex/grid `gap`, causing
badges to offset further than intended. Absolute positioning solves this
completely and is the recommended pattern for overlay badges. Fixes: #35792
