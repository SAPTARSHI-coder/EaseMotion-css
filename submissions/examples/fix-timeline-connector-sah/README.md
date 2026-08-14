# Timeline Connector Line Alignment Fix (`#56070`)

## What does this do?
Resolves jagged and misaligned connector lines between vertical timeline nodes by isolating indicators within a dedicated flex-column axis.

## How is it used?
Structure timeline items using a dual-column flex layout (`marker-col` and `content-col`) under the `ease-timeline` class:
```html
<div class="ease-timeline">
  <div class="timeline-item">
    <div class="marker-col">
      <div class="node active">✓</div>
      <div class="connector-line"></div>
    </div>
    <div class="content-col">...</div>
  </div>
</div>
```

## Why is it useful?
Solves issue #56070 by providing mathematical layout precision across multi-item tracking interfaces and activity logs.