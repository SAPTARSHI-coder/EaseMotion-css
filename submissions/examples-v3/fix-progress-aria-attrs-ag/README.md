# Fix ease-progress ARIA Attributes

## What does this do?
Adds `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`,
and `aria-label` to `.ease-progress` so screen readers announce progress correctly.

## How is it used?
```html
<div class="ease-progress"
     role="progressbar"
     aria-valuenow="72"
     aria-valuemin="0"
     aria-valuemax="100"
     aria-label="Upload: 72%">
  <div class="ease-progress__fill" style="width:72%"></div>
</div>
```

## Why is it useful?
Without the ARIA progressbar role and value attributes, screen readers
cannot communicate loading state to blind users. Fixes: #35795
