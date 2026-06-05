# job-board-filters

## What does this do?

This module provides a pure HTML5/CSS3 dynamic filtering layout system optimized for student job boards, portals, or directory structures.

## How is it used?

Configure hidden layout radio elements paired with explicit tracking label items, then assign targeted matching category strings directly to your markup cards:

```html
<input type="radio" id="tab-tech" name="job-filter" class="filter-controller" />
...
<div class="job-card" data-category="tech">...</div>
```
