# ease-progress-ring Component

This submission fixes Issue #40411 by adding a reusable circular progress ring component.  
It animates progress values in a ring format, useful for dashboards and stats.

## Usage

```html
<svg class="ease-progress-ring" width="120" height="120">
  <circle class="ring-bg" cx="60" cy="60" r="54" />
  <circle class="ring-progress" cx="60" cy="60" r="54" />
  <text x="60" y="65" text-anchor="middle" class="ring-text">75%</text>
</svg>
