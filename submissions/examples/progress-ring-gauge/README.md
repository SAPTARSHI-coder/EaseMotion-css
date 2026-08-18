# Progress Ring Gauge

A circular progress indicator that displays a 72% completion state with a rounded SVG stroke cap and centered percentage label.

## How to use

Add the ring structure below and include the accompanying `style.css`:

```html
<div
  class="ring"
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="72"
  aria-label="Progress"
>
  <svg class="ring__svg" viewBox="0 0 200 200" aria-hidden="true">
    <circle class="ring__track" cx="100" cy="100" r="78"></circle>
    <circle class="ring__progress" cx="100" cy="100" r="78"></circle>
  </svg>

  <div class="ring__center">
    <strong>72</strong>
    <span>%</span>
    <small>COMPLETE</small>
  </div>
</div>